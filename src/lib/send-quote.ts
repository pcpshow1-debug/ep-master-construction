import { createServerFn } from "@tanstack/react-start";
import { site } from "@/data/site";

export type QuotePayload = {
  name: string;
  email: string;
  phone?: string;
  city?: string;
  project?: string;
  notes?: string;
};

export const sendQuote = createServerFn({ method: "POST" })
  .validator((d: QuotePayload) => d)
  .handler(async ({ data }): Promise<{ ok: true }> => {
    const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(site.email)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: `Quote request — ${data.name || "website"} — ${data.project || "project"}`,
        _template: "table",
        _captcha: "false",
        name: data.name,
        email: data.email,
        phone: data.phone || "",
        city: data.city || "",
        project: data.project || "",
        notes: data.notes || "",
      }),
    });
    const json = (await res.json().catch(() => ({}))) as { success?: boolean | string; message?: string };
    const failed = !res.ok || json.success === false || json.success === "false";
    if (failed) {
      throw new Error(json.message || "Could not send quote");
    }
    return { ok: true };
  });
