"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, FileText } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { navItems, personal } from "@/content/profile";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="no-print sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-tight"
        >
          <span className="text-primary">{"</>"}</span> {personal.name}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/cv"
            className="hidden items-center gap-1.5 rounded-md border border-primary/40 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary/20 sm:inline-flex"
          >
            <FileText className="h-4 w-4" /> CV
          </Link>
          <ThemeToggle />
          <button
            type="button"
            aria-label="Mở menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card text-muted-foreground md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <nav
        className={cn(
          "border-t border-border bg-background md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <div className="mx-auto flex max-w-5xl flex-col px-4 py-2 sm:px-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <Link
            href="/cv"
            onClick={() => setOpen(false)}
            className="mt-1 inline-flex items-center gap-1.5 py-2 text-sm font-medium text-primary"
          >
            <FileText className="h-4 w-4" /> Xem CV
          </Link>
        </div>
      </nav>
    </header>
  );
}
