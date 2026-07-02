"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, Check, Copy } from "@/components/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/section-heading";
import { personal } from "@/content/profile";

// Email tách phần để bot khó thu thập từ HTML tĩnh; ghép lại bằng JS khi cần.
const EMAIL_USER = "vutanh507";
const EMAIL_DOMAIN = "gmail.com";
const getEmail = () => `${EMAIL_USER}@${EMAIL_DOMAIN}`;

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(getEmail());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${getEmail()}`;
    }
  };

  return (
    <section id="contact">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <Reveal>
          <SectionHeading
            index="05."
            title="Liên hệ"
            subtitle="Mình đang tìm cơ hội thực tập / fresher. Rất vui được kết nối!"
          />
        </Reveal>

        <Reveal>
          <div className="flex flex-col items-start gap-6 rounded-xl border border-border bg-card p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <button
                onClick={copyEmail}
                className="group mt-1 inline-flex items-center gap-2 text-lg font-semibold transition-colors hover:text-primary"
                aria-label="Sao chép email"
              >
                <Mail className="h-5 w-5 text-primary" />
                {getEmail()}
                {copied ? (
                  <Check className="h-4 w-4 text-primary" />
                ) : (
                  <Copy className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                )}
              </button>
              {copied && (
                <p className="mt-1 text-xs text-primary">Đã sao chép!</p>
              )}
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`mailto:${getEmail()}`}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" /> Gửi email
              </a>
              <a
                href={personal.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-primary hover:border-primary/40"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={personal.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-primary hover:border-primary/40"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
