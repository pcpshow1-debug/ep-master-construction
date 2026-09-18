import { createFileRoute } from "@tanstack/react-router";

type QuoteBody = {
  name?: string;
  email?: string;
  phone?: string;
  city?: string;
  project?: string;
  notes?: string;
};

function trim(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isTestQuote(name: string, notes: string) {
  return /\bTEST\b/i.test(name) || /\bTEST\b/i.test(notes);
}

function quoteText(data: {
  name: string;
  email: string;
  phone: string;
  city: string;
  project: string;
  notes: string;
}) {
  return [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "—"}`,
    `City: ${data.city || "—"}`,
    `Project: ${data.project || "—"}`,
    "",
    data.notes || "(no notes)",
  ].join("\n");
}

export const Route = createFileRoute("/api/quote")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = (await request.json()) as QuoteBody;
          const data = {
            name: trim(body.name),
            email: trim(body.email),
            phone: trim(body.phone),
            city: trim(body.city),
            project: trim(body.project) || "Deck",
            notes: trim(body.notes),
          };

          if (!data.name || !data.email) {
            return Response.json(
              { error: "Name and email are required." },
              { status: 400 },
            );
          }
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            return Response.json({ error: "Invalid email." }, { status: 400 });
          }

          const key = (process.env.RESEND_API_KEY || "").trim();
          if (!key) {
            console.error("[api/quote] RESEND_API_KEY is not set");
            return Response.json(
              {
                error:
                  "Quote email is not configured. Please call or email Eli directly.",
              },
              { status: 503 },
            );
          }

          const test = isTestQuote(data.name, data.notes);
          const toRaw =
            (process.env.NOTIFY_EMAIL || "").trim() ||
            "Eli@epmasterconstruction.com";
          const to = toRaw
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean);
          const from =
            (process.env.NOTIFY_FROM_EMAIL || "").trim() ||
            "EP Master Quotes <onboarding@resend.dev>";
          const subject = test
            ? `[TEST] Quote request — ${data.name} — ${data.project}`
            : `Quote request — ${data.name} — ${data.project}`;
          const text = test
            ? `*** TEST QUOTE — ignore for real work ***\n\n${quoteText(data)}`
            : quoteText(data);

          const res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${key}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from,
              to,
              reply_to: data.email,
              subject,
              text,
            }),
          });

          if (!res.ok) {
            const errBody = await res.text().catch(() => "");
            console.error(
              "[api/quote] Resend failed",
              res.status,
              errBody.slice(0, 500),
            );
            return Response.json(
              {
                error:
                  "Couldn’t send the quote email. Please call or email Eli, or try again.",
              },
              { status: 502 },
            );
          }

          const json = (await res.json().catch(() => ({}))) as { id?: string };
          return Response.json(
            { ok: true, id: json.id || null, test },
            { status: 200 },
          );
        } catch (error) {
          console.error("[api/quote] error", error);
          const message =
            error instanceof Error
              ? error.message
              : "Couldn’t send the quote email.";
          return Response.json({ error: message }, { status: 500 });
        }
      },
    },
  },
});
