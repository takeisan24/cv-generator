# Portfolio & CV — Vũ Tuấn Anh

Website portfolio cá nhân + trang CV (in PDF) cho Vũ Tuấn Anh — Fullstack Web Developer (Frontend-leaning).

Xây bằng **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4**, dark mode (sakura accent),
animation với Framer Motion. Toàn bộ nội dung đến từ một nguồn dữ liệu duy nhất:
`src/content/profile.ts` — sửa ở đó là cập nhật cả website lẫn trang `/cv`.

## Cấu trúc

| Đường dẫn | Mô tả |
|---|---|
| `/` | Trang chính: Hero · Giới thiệu · Kỹ năng · Kinh nghiệm · Dự án · Liên hệ |
| `/projects/[slug]` | Case study chi tiết cho từng dự án nổi bật |
| `/cv` | Trang CV 1 cột, thân thiện ATS, có nút In/Tải PDF |

## Phát triển

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build production
```

## Cập nhật nội dung

Mọi thông tin (liên hệ, kỹ năng, kinh nghiệm, dự án, học vấn) nằm trong
`src/content/profile.ts`. Không cần sửa code giao diện để đổi nội dung.

## Lưu ý

- Trang công khai chỉ hiển thị email (chống bot), GitHub, LinkedIn. Số điện thoại chỉ xuất hiện ở `/cv`.
- Mục kinh nghiệm tại công ty được mô tả chung chung, không lộ chi tiết nội bộ (NDA).

## Triển khai

Khuyến nghị deploy trên [Vercel](https://vercel.com): import repo → deploy (không cần cấu hình thêm).
