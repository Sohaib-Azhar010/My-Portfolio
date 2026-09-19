import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative border border-white/[0.06] rounded-2xl p-8 sm:p-10 hover:border-white/[0.12] hover:bg-white/[0.015] transition-all duration-500 overflow-hidden">
      {/* Hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
          <div>
            <h3 
              className="text-white group-hover:-translate-y-0.5 transition-transform duration-300"
              style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontFamily: 'var(--font-heading)' }}
            >
              {project.title}
            </h3>
            <p className="text-white/50 text-[15px] sm:text-[17px] mt-2 leading-[1.5]">
              {project.description}
            </p>
          </div>

          {project.link && (
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 sm:mt-0 flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-white/60 hover:bg-white hover:text-black hover:border-white transition-all duration-200"
              aria-label={`View ${project.title}`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          )}
        </div>

        <div className="mb-6">
          <p className="text-white/25 text-[12px] uppercase tracking-[0.15em] mb-3">Key Features</p>
          <div className="flex flex-wrap gap-2">
            {project.features.map((feature, idx) => (
              <span 
                key={idx} 
                className="text-[12px] sm:text-[13px] text-white/50 bg-white/[0.03] border border-white/[0.06] rounded-full px-3 py-1"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-white/[0.04]">
          <div className="flex items-center gap-2 text-white/40 text-[14px]">
            {project.technologies.map((tech, idx) => (
              <span key={idx}>
                <span className="text-white/70">{tech}</span>
                {idx < project.technologies.length - 1 && <span className="mx-2 text-white/20">/</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
