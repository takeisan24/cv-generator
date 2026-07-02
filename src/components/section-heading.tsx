import { cn } from "@/lib/utils";

export function SectionHeading({
  index,
  title,
  subtitle,
  className,
}: {
  index?: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-10", className)}>
      <h2 className="flex items-baseline gap-2 text-2xl font-bold tracking-tight sm:text-3xl">
        {index && (
          <span className="font-mono text-base font-medium text-primary">
            {index}
          </span>
        )}
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 max-w-2xl text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}
