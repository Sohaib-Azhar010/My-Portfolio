import { experiences } from '../data/experience';

export function Experience() {
  return (
    <section id="work" className="py-24 relative bg-white/[0.02]">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="flex flex-col space-y-12">
          <h2 className="font-heading text-3xl md:text-5xl font-medium text-white tracking-tight">
            Experience
          </h2>
          
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative group">
                {/* Timeline connector */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-[11px] top-10 bottom-[-4rem] w-px bg-white/10 group-hover:bg-white/30 transition-colors hidden md:block"></div>
                )}
                
                <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                  <div className="md:w-1/4 flex-shrink-0 flex items-center md:items-start gap-4">
                    <div className="w-6 h-6 rounded-full border-2 border-white/20 bg-background flex-shrink-0 hidden md:block mt-1 group-hover:border-white/60 group-hover:scale-110 transition-all"></div>
                    <span className="text-sm font-medium text-white/50 tracking-wider uppercase">{exp.period}</span>
                  </div>
                  
                  <div className="md:w-3/4 flex flex-col space-y-4">
                    <div>
                      <h3 className="font-heading text-2xl font-medium text-white group-hover:text-white/90 transition-colors">
                        {exp.role}
                      </h3>
                      <h4 className="text-lg text-white/70 mt-1">{exp.company}</h4>
                    </div>
                    
                    <ul className="space-y-2 list-none p-0">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="text-foreground/70 font-light text-base md:text-lg flex items-start gap-3">
                          <span className="text-white/30 mt-1.5">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/80 font-medium tracking-wide">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
