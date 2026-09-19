export const site = {
  name: "EP Master Construction LLC",
  shortName: "EP Master",
  owner: "Eli",
  ownerFull: "Eli Polyakov",
  ownerShort: "Eli",
  tagline: "Custom spaces. Lasting places.",
  headline: "Built for the Northwest.",
  services: ["Decks", "Patio covers", "Framing"],
  region: "Portland, Oregon · Vancouver, Washington",
  radius: "Within 50 miles of Portland or Vancouver",
  city: "Portland, Oregon",
  phone: "5037812203",
  phoneDisplay: "(503) 781-2203",
  email: "Eli@epmasterconstruction.com",
  instagram: "https://www.instagram.com/ep_mastercollc",
  instagramHandle: "@ep_mastercollc",
  facebook: "https://www.facebook.com/share/19EHfVBVrm/?mibextid=wwXIfr",
  hours: "Mon–Fri 9:00–5:00",
  ccb: "219593",
  waLicense: "EPMASMC746K9",
  estimatorUrl: "https://deck-estimator-client.vercel.app",
  mapsUrl: "https://maps.app.goo.gl/PZkWkvmjfv4JuHZk6",
};

export const nav = [
  { href: "/#work", id: "work", label: "Work" },
  { href: "/#reviews", id: "reviews", label: "Reviews" },
  { href: "/#estimate", id: "estimate", label: "Estimator" },
  { href: "/#blog", id: "blog", label: "Blog" },
  { href: "/gallery", id: "gallery", label: "Gallery" },
  { href: "/#about", id: "about", label: "About" },
  { href: "/#contact", id: "contact", label: "Contact" },
] as const;

export const blog = {
  kicker: "From the shop",
  title: "Repair or Rebuild Your Deck?",
  lede: "A few things to consider before starting your next outdoor project",
  intro:
    "If your deck has worn boards, a loose railing, or just feels outdated, you may not need to start from scratch. Sometimes a few upgrades are enough. Other times, rebuilding makes more sense.",
  sections: [
    {
      title: "Should I repair or replace my deck?",
      body: "Start with the structure. If the framing, posts, and connections are still solid, replacing the decking or railing may be enough. If there’s rot or structural damage underneath, a rebuild is usually the better option.",
    },
    {
      title: "Is composite decking worth it?",
      body: "Composite is a great choice if you want less maintenance. You won’t need to stain or seal it regularly, although it still needs occasional cleaning. Natural cedar looks beautiful, but requires more upkeep.",
    },
    {
      title: "How much does a deck or patio cover cost?",
      body: "It depends on the size, materials, height, stairs, and overall design. A simple ground-level deck will cost much less than an elevated deck or a custom patio cover.",
    },
    {
      title: "Not sure where to start?",
      body: "Try our Deck & Patio Cover Estimator to get a quick idea of pricing and explore different options for your backyard.",
    },
  ],
  closer:
    "EP Master Construction has been building decks and patio covers throughout Portland, Vancouver, and surrounding areas since 2018.",
  cta: "Explore the estimator, then contact us when you’re ready for a detailed quote.",
};

export const about = [
  "Eli’s passion for building began as a child, when he dreamed of becoming a builder. In 2016, after leaving high school, he began working alongside his father at a local millwork and cabinet shop. With more than 35 years of experience, his father modeled the precision, craftsmanship, and attention to detail that would later help shape EP Master Construction.",
  "That same year, Eli faced a life-changing experience. During a difficult season in his youth, while spending time with the wrong crowd, he was involved in a rollover car accident that fractured his spine. Doctors told him the injury could prevent him from working in physically demanding construction.",
  "During that time, Eli was searching for God and gave his life to Jesus Christ. His faith changed the direction of his life and deepened his commitment to honesty, integrity, and serving others. Eli prayed for healing, and within a year, he experienced a full recovery. He credits God with healing his injuries and making it possible for him to pursue the trade he loves.",
  "In 2018, Eli and his father founded EP Master Construction LLC. The name “EP” represents Elijah and Pavel, reflecting the family foundation behind the company. That same year, Eli expanded his skills beyond cabinetry, beginning six years of hands-on training under an experienced local framing contractor. During that time, he gained experience building new homes, custom homes, ADUs, patio covers, and decks.",
  "In 2024, Eli began building his own client base, bringing years of experience and a personal commitment to craftsmanship to each project.",
  "Today, EP Master Construction specializes in custom decks, patio covers, and residential framing, proudly serving Portland, Oregon, Vancouver, Washington, and the surrounding communities. Our work is guided by faith, family values, and a simple commitment: take pride in every project, pay attention to the details, and treat every customer with honesty and respect.",
  "Eli gives all glory to God for his healing, the direction of his life, and the opportunity to serve others through EP Master Construction.",
];

export const why = [
  "At EP Master Construction, we take the time to understand your needs, your vision, and what matters most to you. We focus on quality over quantity, giving each project the attention and experienced craftsmanship it deserves.",
  "We believe lasting quality comes from doing things right, even in the details you may never see. We don’t cut corners, and if a mistake happens, we take responsibility and make it right.",
  "Our pricing reflects the care, skill, and time we put into our work. When you choose EP Master, you can expect clear communication, honest answers, and a team committed to your satisfaction—from the first conversation to the final walkthrough.",
];

export const who = [
  "EP Master Construction is a great fit for homeowners and builders who value quality craftsmanship, clear communication, and lasting results. Our clients look beyond the lowest bid and consider the care, experience, and attention to detail that go into their project.",
  "We also understand that budgets matter. We work with you to explore practical designs and affordable material options while maintaining our standards for workmanship.",
];

export const areas =
  "EP Master Construction proudly serves homeowners and builders in Portland, Oregon, Vancouver, Washington, and surrounding communities within a 50-mile radius of either city. Not sure if your project is within our service area? Contact us—we’d be happy to discuss it.";

export const work = [
  {
    id: "decks",
    title: "Custom decks",
    kicker: "Outdoor rooms that last",
    copy: "Outdoor spaces designed around your home and how you plan to use them. We also remodel and resurface existing decks — new decking, railings, and the structural work that has to be right first.",
    image: "/gallery/decks/IMG_5455.jpg",
    alt: "Multi-level custom deck with glass railing, finished job",
  },
  {
    id: "covers",
    title: "Patio covers",
    kicker: "Weather, made usable",
    copy: "Inviting outdoor gathering spaces featuring natural wood and distinctive timber details. Rustic gable patio covers in cedar — grain, warmth, and a room that still belongs to the trees.",
    image: "/gallery/covers/IMG_5477.jpg",
    alt: "Cedar gable patio cover over a finished deck",
  },
  {
    id: "framing",
    title: "Residential framing",
    kicker: "The bones first",
    copy: "Framing for new homes, ADUs, and custom projects. Douglas fir, pressure-treated where required, engineered lumber as specified. Straight, quiet structure — the part you never see if we did it right.",
    image: "/gallery/framing/IMG_5486.jpg",
    video: "/video/bones.mp4?v=2",
    alt: "Timber post on a steel bracket and concrete footing",
  },
];

export const gallery = [
  { src: "/gallery/decks/IMG_5455.jpg", alt: "Finished backyard deck", label: "Deck", cat: "decks" as const },
  { src: "/gallery/decks/IMG_5456.jpg", alt: "Custom deck", label: "Deck", cat: "decks" as const },
  { src: "/gallery/decks/IMG_5457.jpg", alt: "Deck boards and railing", label: "Deck", cat: "decks" as const },
  { src: "/gallery/decks/IMG_5458.jpg", alt: "Deck project", label: "Deck", cat: "decks" as const },
  { src: "/gallery/decks/IMG_5459.jpg", alt: "Deck stairs", label: "Deck", cat: "decks" as const },
  { src: "/gallery/decks/IMG_5460.jpg", alt: "Deck from the yard", label: "Deck", cat: "decks" as const },
  { src: "/gallery/decks/IMG_5461.jpg", alt: "Deck detail", label: "Deck", cat: "decks" as const },
  { src: "/gallery/decks/IMG_5462.jpg", alt: "Deck railing", label: "Deck", cat: "decks" as const },
  { src: "/gallery/decks/IMG_5463.jpg", alt: "Finished deck", label: "Deck", cat: "decks" as const },
  { src: "/gallery/decks/IMG_5464.jpg", alt: "Deck landing", label: "Deck", cat: "decks" as const },
  { src: "/gallery/decks/IMG_5465.jpg", alt: "Wide deck", label: "Deck", cat: "decks" as const },
  { src: "/gallery/decks/IMG_5469.jpg", alt: "Deck at the house", label: "Deck", cat: "decks" as const },
  { src: "/gallery/decks/IMG_5470.jpg", alt: "Deck surface", label: "Deck", cat: "decks" as const },
  { src: "/gallery/decks/IMG_5471.jpg", alt: "Deck and steps", label: "Deck", cat: "decks" as const },
  { src: "/gallery/decks/IMG_5472.jpg", alt: "Deck corner", label: "Deck", cat: "decks" as const },
  { src: "/gallery/decks/IMG_5473.jpg", alt: "Completed deck", label: "Deck", cat: "decks" as const },
  { src: "/gallery/decks/IMG_5474.jpg", alt: "Deck job", label: "Deck", cat: "decks" as const },
  { src: "/gallery/covers/IMG_5477.jpg", alt: "Timber patio cover", label: "Patio cover", cat: "covers" as const },
  { src: "/gallery/covers/IMG_5478.jpg", alt: "Patio cover structure", label: "Patio cover", cat: "covers" as const },
  { src: "/gallery/covers/IMG_5480.jpg", alt: "Patio cover beams", label: "Patio cover", cat: "covers" as const },
  { src: "/gallery/covers/IMG_5481.jpg", alt: "Covered outdoor room", label: "Patio cover", cat: "covers" as const },
  { src: "/gallery/covers/IMG_5482.jpg", alt: "Timber framed cover", label: "Patio cover", cat: "covers" as const },
  { src: "/gallery/covers/IMG_5483.jpg", alt: "Patio cover posts", label: "Patio cover", cat: "covers" as const },
  { src: "/gallery/covers/IMG_5484.jpg", alt: "Patio cover detail", label: "Patio cover", cat: "covers" as const },
  { src: "/gallery/framing/IMG_5486.jpg", alt: "Residential framing, finished home", label: "Framing", cat: "framing" as const },
  { src: "/gallery/framing/IMG_5485.jpg", alt: "Roof framing", label: "Framing", cat: "framing" as const },
  { src: "/gallery/framing/IMG_5488.jpg", alt: "Wall framing", label: "Framing", cat: "framing" as const },
  { src: "/gallery/framing/IMG_5489.jpg", alt: "Framing in progress", label: "Framing", cat: "framing" as const },
  { src: "/gallery/framing/IMG_5490.jpg", alt: "Floor framing", label: "Framing", cat: "framing" as const },
  { src: "/gallery/framing/IMG_5492.jpg", alt: "Structural framing", label: "Framing", cat: "framing" as const },
  { src: "/gallery/framing/IMG_5493.jpg", alt: "Residential framing", label: "Framing", cat: "framing" as const },
];

export const workCats = [
  { id: "decks" as const, title: "Decks", kicker: "Outdoor rooms that last", image: "/gallery/decks/IMG_5455.jpg" },
  { id: "covers" as const, title: "Patio covers", kicker: "Weather, made usable", image: "/gallery/covers/IMG_5477.jpg" },
  { id: "framing" as const, title: "Framing", kicker: "The bones first", image: "/gallery/framing/IMG_5486.jpg" },
];

export const process = [
  {
    n: "01",
    title: "Initial consultation",
    copy: "We discuss your ideas, project goals, budget, and preferred timeline.",
  },
  {
    n: "02",
    title: "Site visit",
    copy: "We schedule a visit to take measurements, evaluate site conditions, and explore options for your space.",
  },
  {
    n: "03",
    title: "Estimate",
    copy: "We provide a detailed estimate outlining the proposed scope of work and pricing. Run the deck estimator first if you want a number before we visit.",
  },
  {
    n: "04",
    title: "Design & planning",
    copy: "We finalize the design, material selections, and project details with you. Any changes affecting the price are reviewed before moving forward.",
  },
  {
    n: "05",
    title: "Permitting, if required",
    copy: "We coordinate any necessary permitting and confirm required approvals before construction begins.",
  },
  {
    n: "06",
    title: "Construction",
    copy: "Once the plans, agreement, and required approvals are in place, we schedule your project and begin work, keeping you informed along the way.",
  },
  {
    n: "07",
    title: "Final walkthrough",
    copy: "We walk through the completed project with you, answer your questions, and address any final details.",
  },
];

export const materials = [
  {
    title: "Deck framing",
    copy: "Pressure-treated lumber is our standard choice for deck framing. For projects requiring longer spans or greater load capacity, we can explore engineered lumber specifically approved for exterior use. These options generally cost more and are selected based on the project’s design and structural requirements.",
  },
  {
    title: "Composite & PVC",
    copy: "We recommend Trex composite decking for customers who want an attractive, durable deck with less maintenance than traditional wood. We also install TimberTech composite and AZEK advanced PVC decking, including premium options for customers seeking additional styles and features.",
  },
  {
    title: "Railing",
    copy: "Our railing selections extend beyond Trex. We’ll help you choose a system that complements your deck, fits your budget, and meets your project’s requirements.",
  },
  {
    title: "Cedar decking",
    copy: "For customers who love natural wood, cedar offers warmth and character. It requires more upkeep than composite decking, including regular cleaning and periodic restaining. Plan for maintenance every few years, with timing depending on the finish, weather exposure, and wear.",
  },
  {
    title: "Residential framing",
    copy: "We use Douglas fir framing lumber, pressure-treated lumber where required, and engineered products such as LVL as specified in the structural plans. Materials are selected for their intended use and exposure conditions.",
  },
  {
    title: "Cedar patio covers",
    copy: "Cedar timber is our preferred choice for rustic gable patio covers. Its natural grain, warm appearance, and distinctive aroma create an inviting outdoor space. With proper design, installation, and maintenance, cedar offers lasting beauty and durability.",
  },
];

export const warranty = {
  workmanship:
    "We stand behind our craftsmanship with a two-year workmanship warranty from the date your project is completed. If an issue arises due to our workmanship during that time, we’ll make it right.",
  manufacturer:
    "Decking and railing materials carry separate manufacturer warranties, with select products offering coverage of 25 years and up to 50 years. Coverage depends on the brand, product line, and manufacturer’s terms. We’ll help you understand the warranty included with your selected materials.",
};

export const reviews = [
  {
    name: "Heath Reinschell",
    when: "4 years ago",
    initial: "H",
    quote:
      "After receiving the request, EP Master Construction made contact and arrangements to meet to further discuss my request and provide a quote. After initial quote was provided, the contractor reached out to inquire about the status of my decision. I was very impressed with the level of professionalism displayed and decided to move forward with hiring the contractor. The contractor purchased and delivered the material, and arranged a time to start. He started timely and was open to questions and suggestions. At the onset, I provided a budget range. The contractor stayed within my budget and provided quality work that exceeded my expectations. He is talented and shows pride in his work. I have future projects that I will definitely seek the services of EP Master Construction.",
  },
  {
    name: "Lonnie Green",
    when: "4 months ago",
    initial: "L",
    quote:
      "Eli does top notch work and is a pleasure to work with, he has deep knowledge of construction and is more than fair in his dealings. He framed in my carport and I highly recommend him for your construction needs.",
  },
  {
    name: "Madeline Miller",
    when: "9 months ago",
    initial: "M",
    quote:
      "Eli did a wonderful job replacing my front porch. He was careful, thoughtful, and professional. He worked hard and tirelessly until the job was done and the price couldn't be beat. Thanks for the transformation!",
  },
  {
    name: "Roman Fomin",
    when: "A year ago",
    initial: "R",
    quote:
      "Very professional, curteous and always on-time. Quoted me the best price from all my estimates and completed my project on-time and beautifully as promised! The best part was the amazing customer service, I received constant updates throughout the process and I never had a need to text and follow up on anything! I would highly recommend EP Master Construction!!",
  },
  {
    name: "Troutdale Historical Society",
    when: "7 months ago",
    initial: "T",
    quote:
      "EP Master Construction LLC did an outstanding job on work completed for the Troutdale Historical Society. From beginning to end, the project was handled with professionalism, clear communication, and exceptional attention to detail. The quality of craftsmanship is truly second to none. We are thoroughly happy with the results and highly recommend EP Master Construction to anyone in our community. Thank you, Eli, for the care, pride, and respect you put into our museum.",
  },
  {
    name: "Rick Alton",
    when: "2 years ago",
    initial: "R",
    quote:
      "Had a great experience! Eli is very conscientious and honest. His craftsmanship is high, and I intend to use them again in the spring.",
  },
  {
    name: "John",
    when: "11 months ago",
    initial: "J",
    quote:
      "They did an excellent job. They really went to town with that deck job. Their communication is superb.",
  },
  {
    name: "Ann Rowland",
    when: "2 years ago",
    initial: "A",
    quote:
      "Elijah was terrific to work with. He had great ideas for my deck roof project and understood my budget. He started and finished the project quickly, was very dependable, and worked in rain and cold! All aspects of the finished roof are exactly what I wanted. I am planning to hire EP Master Construction for more work. I highly commend his work and work ethic. Thank you, Elijah!",
  },
  {
    name: "Jean Jackson",
    when: "A year ago",
    initial: "J",
    quote:
      "What an amazing experience. We have a new composite deck and stairs going up to our second floor entry. Eli was incredible, fair priced, communicative and absolutely professional. We're already planning another project and there's no stress because we know that we're in good hands. Thank you EP Master Construction",
  },
];
