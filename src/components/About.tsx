export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="flex flex-col space-y-8">
          <h2 className="font-heading text-3xl md:text-5xl font-medium text-white tracking-tight">
            About me
          </h2>
          <div className="h-px w-full bg-white/10"></div>
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-foreground/80 leading-relaxed text-lg md:text-xl font-light">
              I am a Full Stack Web Developer with experience building scalable web applications using Laravel, NestJS, and Next.js. I specialize in developing REST APIs, responsive interfaces, optimizing databases, and building user-focused digital products. 
            </p>
            <p className="text-foreground/80 leading-relaxed text-lg md:text-xl font-light mt-6">
              I approach every project with a focus on writing clean, maintainable code, creating smooth user experiences, and solving complex problems with robust architectural patterns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
