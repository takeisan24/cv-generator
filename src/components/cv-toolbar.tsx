"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Printer, FileText } from "@/components/icons";

export function CvToolbar({
  altHref,
  altLabel,
  pdfType,
}: {
  altHref: string;
  altLabel: string;
  pdfType: "ats" | "design";
}) {
  const [loading, setLoading] = useState(false);

  async function downloadPdf() {
    setLoading(true);
    try {
      const url = `/api/cv${pdfType === "design" ? "?type=design" : ""}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("PDF failed");
      const blob = await res.blob();
      const objectUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = objectUrl;
      a.download = `CV_VuTuanAnh${pdfType === "design" ? "_Design" : ""}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(objectUrl);
    } catch {
      // Fallback: mở hộp thoại in để lưu PDF
      window.print();
    } finally {
      setLoading(false);
    }
  }

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
            className="hidden items-center gap-1.5 rounded-md border border-border bg-card px-3 py-2 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary sm:inline-flex"
          >
            <FileText className="h-4 w-4" /> {altLabel}
          </Link>
          <button
            type="button"
            onClick={() => window.print()}
            aria-label="In"
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-2 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
          >
            <Printer className="h-4 w-4" /> In
          </button>
          <button
            type="button"
            onClick={downloadPdf}
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-70"
          >
            {loading ? (
              <>
                <Spinner /> Đang tạo…
              </>
            ) : (
              <>
                <Download /> Tải PDF
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

function Download() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
    </svg>
  );
}

function Spinner() {
  return (
    <svg
      className="animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}
