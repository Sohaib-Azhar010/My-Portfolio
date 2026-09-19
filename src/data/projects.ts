export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: "trektoo",
    title: "Trektoo",
    description: "A full-stack travel booking platform.",
    technologies: ["Laravel", "Next.js"],
    features: [
      "Hotel search",
      "Activity search",
      "Booking",
      "Pricing",
      "Vouchers",
      "Third-party APIs",
      "Responsive UI"
    ],
    link: "#"
  }
];
