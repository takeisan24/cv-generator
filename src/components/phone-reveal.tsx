"use client";

import { useEffect, useState } from "react";

// Số điện thoại KHÔNG nằm trong mã nguồn — nạp từ biến môi trường
// (NEXT_PUBLIC_PHONE, đặt trong Vercel) nên repo public không chứa nó.
// Vẫn CHỈ render phía client sau khi mount -> không lọt vào HTML tĩnh
// cho bot quét, nhưng hiển thị bình thường khi mở trang và khi xuất PDF.
const PHONE = process.env.NEXT_PUBLIC_PHONE ?? "";

export function PhoneReveal() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Trước khi mount, hoặc khi chưa cấu hình env: placeholder để không nhảy layout.
  return <span>{mounted && PHONE ? PHONE : "•••• ••• •••"}</span>;
}
