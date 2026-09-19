import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  return (
    <section id="work" className="py-24 relative bg-white/[0.02]">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="flex flex-col space-y-16">
          <div className="flex flex-col space-y-6">
            <h2 className="font-heading text-3xl md:text-5xl font-medium text-white tracking-tight">
              Selected Work
            </h2>
            <p className="text-foreground/70 text-lg md:text-xl font-light max-w-2xl">
              A collection of digital products and web applications I've built, focusing on performance, robust architecture, and premium user experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
