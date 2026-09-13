const PROJECTS = [
  {
    src: "/images/project-industrial.jpg",
    title: "Industrial rooftops",
    body: "Large-scale arrays on factory sheds, designed around HVAC, walkways, and production loads.",
  },
  {
    src: "/images/project-commercial.jpg",
    title: "Commercial buildings",
    body: "Office and logistics roofs that lock in a lower daytime rate without a capital programme.",
  },
  {
    src: "/images/project-detail.jpg",
    title: "Full responsibility",
    body: "Modules, mounting, inverters, interconnection, and ongoing operations sit with Netso.",
  },
];

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <p className="text-xs font-medium tracking-[0.28em] text-primary uppercase">On the roof</p>
        <h2 className="font-display mt-4 max-w-2xl text-headline leading-[1.05] font-medium tracking-tight">
          Real projects. Real roofs. Real results.
        </h2>
        <p className="mt-5 max-w-xl text-lead text-muted-foreground">
          Serving industrial and commercial clients across Bangladesh with rooftop solar as a
          service.
        </p>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {PROJECTS.map((project) => (
            <article key={project.title}>
              <div className="overflow-hidden rounded-lg">
                <img
                  src={project.src}
                  alt={project.title}
                  className="aspect-3/2 w-full object-cover"
                />
              </div>
              <h3 className="mt-5 text-lg font-medium tracking-tight">{project.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
