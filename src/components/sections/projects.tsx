import Link from "next/link";
import { ArrowUpRight, Github } from "@/components/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/content/profile";

export function Projects() {
  return (
    <section id="projects" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <Reveal>
          <SectionHeading
            index="04."
            title="Dự án"
            subtitle="Một vài sản phẩm mình tâm đắc. Bấm vào để đọc case study chi tiết."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06} className="h-full">
              <article className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl" aria-hidden>
                      {p.emoji}
                    </span>
                    <h3 className="text-lg font-bold">{p.name}</h3>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    {p.year}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {p.tagline}
                </p>

                <ul className="mt-4 space-y-1">
                  {p.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.slice(0, 4).map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-4 border-t border-border pt-4">
                  {p.featured && (
                    <Link
                      href={`/projects/${p.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors"
                    >
                      Case study
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  )}
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      <Github className="h-4 w-4" /> {l.label}
                    </a>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
