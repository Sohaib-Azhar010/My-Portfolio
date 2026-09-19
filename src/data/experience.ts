export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "maq-dev",
    company: "Maq Dev / Maqsood Labs",
    role: "Full Stack Developer",
    period: "Aug 2025 – Present",
    description: [
      "Developing backend APIs and frontend features for scalable web applications.",
      "Implementing robust testing strategies and containerizing applications."
    ],
    technologies: ["NestJS", "Next.js", "Jest", "Docker"]
  },
  {
    id: "trektoo",
    company: "Trektoo",
    role: "Full Stack Developer",
    period: "Aug 2025 – Present",
    description: [
      "Building a comprehensive travel booking platform encompassing hotel and activity booking.",
      "Integrating third-party travel APIs to provide real-time pricing and availability.",
      "Implementing complex features such as vouchers, discounts, and performing database optimization."
    ],
    technologies: ["Laravel", "Next.js", "REST APIs"]
  },
  {
    id: "devloop",
    company: "Devloop Technologies",
    role: "Full Stack Web Developer",
    period: "Jan 2025 – June 2025",
    description: [
      "Developed end-to-end full-stack web applications meeting complex client requirements."
    ],
    technologies: ["Laravel", "React", "Bootstrap"]
  },
  {
    id: "devicon",
    company: "Devicon Software House",
    role: "Laravel Developer",
    period: "Sept 2023 – Feb 2024",
    description: [
      "Focused on backend development and building dynamic web applications."
    ],
    technologies: ["Laravel"]
  }
];
