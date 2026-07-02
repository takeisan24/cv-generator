import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Hiệu ứng xuất hiện nhẹ bằng CSS thuần (không phụ thuộc JS).
 * Nội dung luôn hiển thị ở trạng thái cuối -> đọc được kể cả khi tắt JS,
 * và tự tắt animation khi người dùng bật prefers-reduced-motion.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={cn("reveal-in", className)}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
