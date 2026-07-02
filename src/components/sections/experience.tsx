import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/content/profile";

export function Experience() {
  return (
    <section id="experience" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <Reveal>
          <SectionHeading
            index="03."
            title="Kinh nghiệm"
            subtitle="Nơi mình đã làm và những gì mình đóng góp."
          />
        </Reveal>

        <div className="relative space-y-8 border-l border-border pl-6 sm:pl-8">
          {experiences.map((exp, i) => (
            <Reveal key={exp.org} delay={i * 0.08}>
              <div className="relative">
                {/* chấm timeline */}
                <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background sm:-left-[39px]" />
                <p className="font-mono text-xs text-primary">{exp.period}</p>
                <h3 className="mt-1 text-lg font-bold">{exp.role}</h3>
                <p className="text-sm text-muted-foreground">{exp.org}</p>

                <ul className="mt-3 space-y-1.5">
                  {exp.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-3 flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
