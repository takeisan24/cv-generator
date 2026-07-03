"use client";

import { useEffect, useState } from "react";

// Số điện thoại tách phần và CHỈ render phía client sau khi mount.
// -> Không xuất hiện trong HTML tĩnh (bot/crawler không quét được),
//    nhưng vẫn hiển thị khi người dùng mở trang và khi xuất PDF (JS đã chạy).
const PARTS = ["[REDACTED]"];

export function PhoneReveal() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Trước khi mount: hiện placeholder để không nhảy layout.
  return <span>{mounted ? PARTS.join("") : "•••• ••• •••"}</span>;
}
