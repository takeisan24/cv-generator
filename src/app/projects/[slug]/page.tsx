import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github } from "@/components/icons";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Badge } from "@/components/ui/badge";
import { projects, personal } from "@/content/profile";

export function generateStaticParams() {
  return projects.filter((p) => p.featured).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Không tìm thấy dự án" };
  return {
    title: `${project.name} — ${personal.name}`,
    description: project.tagline,
  };
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-2 font-mono text-sm font-semibold text-primary">
        {title}
      </h2>
      <div className="leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project || !project.featured) notFound();

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Tất cả dự án
          </Link>

          <header className="mt-6 border-b border-border pb-8">
            <div className="flex items-center gap-3">
              <span className="text-4xl" aria-hidden>
                {project.emoji}
              </span>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {project.name}
              </h1>
            </div>
            <p className="mt-3 text-lg text-muted-foreground">
              {project.tagline}
            </p>
            <p className="mt-2 font-mono text-sm text-muted-foreground">
              {project.role} · {project.year}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-4">
              {project.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                >
                  {l.label === "GitHub" ? (
                    <Github className="h-4 w-4" />
                  ) : (
                    <ArrowUpRight className="h-4 w-4" />
                  )}{" "}
                  {l.label}
                </a>
              ))}
            </div>
          </header>

          {project.screenshot && (
            <div className="mt-8 overflow-hidden rounded-xl border border-border shadow-lg">
              <Image
                src={project.screenshot}
                alt={`Ảnh chụp giao diện ${project.name}`}
                width={1280}
                height={800}
                className="w-full"
              />
            </div>
          )}

          <div className="mt-8 space-y-8">
            {project.problem && (
              <Block title="VẤN ĐỀ">
                <p>{project.problem}</p>
              </Block>
            )}
            {project.solution && (
              <Block title="GIẢI PHÁP">
                <p>{project.solution}</p>
              </Block>
            )}
            {project.contribution && (
              <Block title="ĐÓNG GÓP CỦA MÌNH">
                <ul className="space-y-1.5">
                  {project.contribution.map((c) => (
                    <li key={c} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {c}
                    </li>
                  ))}
                </ul>
              </Block>
            )}
            {project.result && (
              <Block title="KẾT QUẢ">
                <p>{project.result}</p>
              </Block>
            )}
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
