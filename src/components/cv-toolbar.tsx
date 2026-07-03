"use client";

import Link from "next/link";
import { ArrowLeft, Printer, FileText } from "@/components/icons";

export function CvToolbar({
  altHref,
  altLabel,
}: {
  altHref: string;
  altLabel: string;
}) {
  return (
    <div className="no-print sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" /> Về trang chính
        </Link>
        <div className="flex items-center gap-2">
          <Link
            href={altHref}
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-2 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
          >
            <FileText className="h-4 w-4" /> {altLabel}
          </Link>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            <Printer className="h-4 w-4" /> Tải PDF / In
          </button>
        </div>
      </div>
    </div>
  );
}
