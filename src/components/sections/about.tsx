import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/section-heading";
import { summary, education, stats, interests } from "@/content/profile";
import { GraduationCap, Sparkles, Code2 } from "@/components/icons";

const facts = [
  {
    icon: Code2,
    title: "Tự xây sản phẩm hoàn chỉnh",
    desc: "Từ ý tưởng đến vận hành: bot 82 lệnh, nền tảng AI, tích hợp thanh toán.",
  },
  {
    icon: Sparkles,
    title: "Hướng AI & trải nghiệm",
    desc: "Tích hợp Gemini/OpenAI, chú trọng UI mượt và chất lượng code.",
  },
  {
    icon: GraduationCap,
    title: education.school,
    desc: [education.major, education.period, education.gpa]
      .filter(Boolean)
      .join(" · "),
  },
];

export function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <Reveal>
          <SectionHeading
            index="01."
            title="Giới thiệu"
            subtitle="Đôi nét về mình và cách mình làm việc."
          />
        </Reveal>

        <div className="grid gap-10 md:grid-cols-5">
          <Reveal className="md:col-span-3">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {summary}
            </p>
          </Reveal>

          <div className="flex flex-col gap-4 md:col-span-2">
            {facts.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="flex gap-3 rounded-lg border border-border bg-card p-4">
                  <f.icon className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-semibold">{f.title}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Dải số liệu thật */}
        <Reveal delay={0.1}>
          <div className="mt-10 grid grid-cols-2 gap-4 rounded-xl border border-border bg-card p-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-bold text-primary sm:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Sở thích — chút cá tính */}
        <Reveal delay={0.15}>
          <p className="mt-6 text-sm text-muted-foreground">{interests}</p>
        </Reveal>
      </div>
    </section>
  );
}
