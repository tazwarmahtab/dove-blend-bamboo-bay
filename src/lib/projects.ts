export type Roof = {
  slug: string;
  index: string;
  location: string;
  typology: string;
  kwp: number;
  model: string;
  year: string;
  image: string;
  note: string;
};

export const ROOFS: Roof[] = [
  {
    slug: "gazipur",
    index: "01",
    location: "Gazipur",
    typology: "Knit composite rooftop",
    kwp: 1240,
    model: "RESCO",
    year: "2025",
    image: "/images/project-industrial.jpg",
    note: "Long shed roofs, HVAC islands, daytime load that tracks the sun.",
  },
  {
    slug: "chattogram",
    index: "02",
    location: "Chattogram",
    typology: "Port warehouse",
    kwp: 680,
    model: "RESCO",
    year: "2025",
    image: "/images/cta.jpg",
    note: "Single-plane metal roof, high daytime demand, diesel currently covering cuts.",
  },
  {
    slug: "dhaka",
    index: "03",
    location: "Dhaka",
    typology: "Commercial mid-rise",
    kwp: 210,
    model: "RESCO + storage",
    year: "2026",
    image: "/images/project-commercial.jpg",
    note: "Parapet array behind plant, office load with a sharp afternoon peak.",
  },
];
