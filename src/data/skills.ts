export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js"]
  },
  {
    title: "Backend",
    skills: ["Laravel", "NestJS"]
  },
  {
    title: "Database",
    skills: ["MySQL", "PostgreSQL"]
  },
  {
    title: "Testing",
    skills: ["Jest"]
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Postman", "Supabase", "Prisma ORM", "PgAdmin"]
  }
];
