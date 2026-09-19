import { skillCategories } from '../data/skills';

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="flex flex-col space-y-12">
          <h2 className="font-heading text-3xl md:text-5xl font-medium text-white tracking-tight">
            Tech Stack
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <div 
                key={category.title} 
                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300"
              >
                <h3 className="font-heading text-xl font-medium text-white mb-6">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-4 py-2 bg-background border border-white/10 rounded-xl text-sm text-foreground/80 font-medium group-hover:-translate-y-1 group-hover:shadow-[0_4px_20px_rgba(255,255,255,0.05)] transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
