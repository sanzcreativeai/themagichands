/* ------------------------------------------------------------------
   Everything the client might want changed lives in this one file.
   Edit here, not in the components.
------------------------------------------------------------------ */

export const SITE_URL = "https://themagichands.in"; // <-- swap for the real domain

export const SALON = {
  name: "The Magic Hands Unisex Salon & Academy",
  shortName: "The Magic Hands",
  tagline: "This is where the magic happens.",
  phoneDisplay: "063851 99005",
  phoneHref: "+916385199005",
  whatsapp: "916385199005",
  instagram: "https://www.instagram.com/themagichandsunisexsalon/",
  instagramHandle: "@themagichandsunisexsalon",
  reviewCount: 342,
  award: "TNSA Tamil Nadu Startup Awards — Winner, Best Salon & Spa",
  address: {
    line1: "98/95, Dr. Radha Krishnan Salai",
    line2: "near Sree Krishna Sweets",
    line3: "Jagadambal Colony, Mylapore",
    city: "Chennai",
    postcode: "600004",
    region: "Tamil Nadu",
    country: "IN",
  },
  // TODO confirm the real opening hours with the salon before launch.
  hours: { opens: "10:00", closes: "21:00", note: "Open daily" },
  maps:
    "https://www.google.com/maps/search/?api=1&query=The+Magic+Hands+Unisex+Salon+Academy+Dr+Radha+Krishnan+Salai+Mylapore+Chennai+600004",
  googleReviews:
    "https://www.google.com/search?q=The+Magic+Hands+Unisex+Salon+and+Academy+Mylapore",
};

export function waLink(message: string) {
  return `https://wa.me/${SALON.whatsapp}?text=${encodeURIComponent(message)}`;
}

export type Service = {
  no: string;
  name: string;
  tag: string;
  blurb: string;
  image: string;
  alt: string;
};

export const SERVICES: Service[] = [
  {
    no: "01",
    name: "Cutting",
    tag: "Men & Women",
    blurb:
      "Dry cuts, wet cuts, fades, beard shaping and children's cuts. Our men's cutting is what most of our reviews are about — several customers have followed the same stylist here for a decade.",
    image: "/img/craft-cut.jpg",
    alt: "Stylist cutting long hair at The Magic Hands, Mylapore",
  },
  {
    no: "02",
    name: "Colour",
    tag: "Global & Creative",
    blurb:
      "Global colour, root touch-ups, balayage, and the creative work we are best known for: burgundy melts, teal and magenta panels, and bold colour on short hair.",
    image: "/img/colour-teal.jpg",
    alt: "Teal and magenta peekaboo colour on a short bob",
  },
  {
    no: "03",
    name: "Texture",
    tag: "Smoothening & Curls",
    blurb:
      "Smoothening, keratin treatments and curl definition. Texture work takes time and we book it with time, so the chair is yours for the session rather than for a slot.",
    image: "/img/colour-ombre.jpg",
    alt: "Ombre colour finished with a curled blow-dry",
  },
  {
    no: "04",
    name: "Braiding",
    tag: "Cornrows & Styling",
    blurb:
      "Cornrows, patterned braiding and occasion styling, for men and women both.",
    image: "/img/colour-burgundy.jpg",
    alt: "Long curls coloured in a burgundy melt",
  },
  {
    no: "05",
    name: "Grooming",
    tag: "Beard & Skin",
    blurb:
      "Beard sculpting, shaves, facials, clean-ups and de-tan. Ask at the desk for the current treatment list.",
    image: "/img/men-fade.jpg",
    alt: "Men's mid fade with a shaved design line",
  },
  {
    no: "06",
    name: "Bridal",
    tag: "By appointment",
    blurb:
      "Bridal and party hair and makeup, booked in advance with a trial. Message us with your date and we will talk through the look.",
    image: "/img/men-suit.jpg",
    alt: "Client dressed for an occasion after a grooming appointment",
  },
  {
    no: "07",
    name: "Academy",
    tag: "Training",
    blurb:
      "Professional training in cutting, colour and styling, taught on the floor of a working salon rather than in a classroom.",
    image: "/img/room-mirrors.jpg",
    alt: "Backlit oval mirrors and styling chairs at The Magic Hands",
  },
];

export const STYLISTS = [
  {
    name: "Syed Irfan",
    role: "Founder & Senior Hairstylist",
    blurb:
      "Founder of The Magic Hands and one of the two senior hairstylists on the floor. Takes cutting, colour and the salon's creative work.",
  },
  {
    name: "Prashanth",
    role: "Founder & Senior Hairstylist",
    blurb:
      "Founder and senior stylist, known above all for men's cutting. Customers have followed him for more than ten years, and say they have never had to explain much to him.",
  },
];

export const COLOUR_WORK = [
  {
    title: "Burgundy melt",
    tag: "Colour + Curls",
    image: "/img/colour-burgundy.jpg",
    alt: "Burgundy colour melt on long curly hair",
  },
  {
    title: "Teal peekaboo",
    tag: "Creative colour",
    image: "/img/colour-teal.jpg",
    alt: "Teal and magenta peekaboo colour panels on a short bob",
  },
  {
    title: "Ombre & curl",
    tag: "Colour + Styling",
    image: "/img/colour-ombre.jpg",
    alt: "Ombre colour with a curled blow-dry finish",
  },
  {
    title: "Length & layers",
    tag: "Cutting",
    image: "/img/craft-cut.jpg",
    alt: "Long layered cut in progress at the salon",
  },
];

export const GROOMING = [
  {
    title: "Fade & design line",
    image: "/img/men-fade.jpg",
    alt: "Men's mid fade with a shaved design line, cut in Mylapore",
  },
  {
    title: "Textured pomp",
    image: "/img/men-pomp.jpg",
    alt: "Textured pompadour with a tapered fade",
  },
  {
    title: "Occasion grooming",
    image: "/img/men-suit.jpg",
    alt: "Client in a tailored suit after a grooming appointment",
  },
];

export const REELS = [
  { src: "/vid/curls-style.mp4", label: "Curl styling" },
  { src: "/vid/curls-mirror.mp4", label: "The finish" },
  { src: "/vid/curls-dark.mp4", label: "Definition" },
  { src: "/vid/stylist.mp4", label: "At work" },
];

export const COURSES = [
  { no: "01", name: "Cutting", detail: "Foundation through advanced, on live heads" },
  { no: "02", name: "Colour", detail: "Theory, formulation, correction and creative colour" },
  { no: "03", name: "Styling & finishing", detail: "Blow-dry, texture, curls and occasion work" },
  { no: "04", name: "Salon floor practice", detail: "Real clients, real timings, supervised" },
];

/* Real Google reviews, kept as the customer wrote them. */
export const REVIEWS = [
  {
    name: "Sivaraman C.",
    stars: 5,
    lead: true,
    text:
      "It truly felt luxurious from the moment I walked in, and the entire team was attentive, professional, and genuinely focused on taking care of the client.",
  },
  {
    name: "Fazal Basha",
    stars: 5,
    text:
      "I've been getting my haircuts from Prashant for more than 10 years, and he has always been excellent. He knows exactly what suits a men's haircut — I've never had to explain much to him. I've stuck with him all these years because of the trust and comfort I have with him.",
  },
  {
    name: "Ananth Bhaskararaman · Local Guide",
    stars: 5,
    lead: true,
    text: "They absolutely live up to their name.",
  },
  {
    name: "Ghouse Basha K.",
    stars: 5,
    text:
      "I had a wonderful experience at The Magic Hands. The ambiance, appearance and overall atmosphere are excellent. I always book my appointment with Mr. Hussain. He is a great artist and does an amazing job every single time.",
  },
  {
    name: "Amruthavarshini H.",
    stars: 5,
    text:
      "I got my haircut here by stylist Coco — he is incredibly skilled. His service was smooth; he patiently spent a lot of time during the wash and haircut. Very happy with the haircut.",
  },
  {
    name: "Arbeena Shahin",
    stars: 5,
    text:
      "Amazing service and kind staff. Most importantly, it was very comforting and relaxing. Thank you Prashanth and team. Highly recommended!",
  },
];
