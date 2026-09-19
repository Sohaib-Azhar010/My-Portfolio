import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col justify-between p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
      
      <div className="space-y-6 z-10">
        <div className="flex justify-between items-start">
          <h3 className="font-heading text-3xl font-medium text-white group-hover:-translate-y-1 transition-transform duration-300">
            {project.title}
          </h3>
          {project.link && (
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-full hover:bg-white text-white hover:text-black transition-colors"
              aria-label={`View ${project.title}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
        
        <p className="text-foreground/70 text-lg font-light leading-relaxed">
          {project.description}
        </p>
        
        <div>
          <h4 className="text-sm font-medium tracking-widest text-white/40 uppercase mb-3">Key Features</h4>
          <ul className="flex flex-wrap gap-2">
            {project.features.map((feature, idx) => (
              <li key={idx} className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/70 font-medium">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-white/10 z-10">
        <div className="flex flex-wrap gap-3">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="text-sm font-medium text-white group-hover:text-white/80 transition-colors">
              {tech}
              {idx < project.technologies.length - 1 && <span className="mx-2 text-white/30">/</span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
