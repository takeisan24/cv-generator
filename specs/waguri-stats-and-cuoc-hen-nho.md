# [Small change] Cập nhật số liệu Waguri + thêm Cuộc Hẹn Nhỏ (chỉ website)

**Status:** Approved (solo) · **Scope:** small change, delta format · **Ngày:** 2026-10-09

## What's changing
MODIFIED: Waguri — 79 → **72 lệnh** (v2.6.0 chuẩn hoá lệnh, cất kho 9 lệnh ít dùng); 107 → **165 migration SQL**; 29 → **93 file test (572 test)**; 376/378 → **559/561 commit**; "15 máy chủ · 1.428 thành viên" → **34 máy chủ · 3.100+ thành viên · 950+ người chơi** (đo từ `waguri-bot.vercel.app/api/bot/stats` ngày 2026-10-09: servers 34, users 3104, players 956)
MODIFIED: Waguri — bỏ "Bingo", "bang hội PvP", "vay nợ P2P" (đã vào `archive/`; vay thay bằng Quỹ tín dụng Kikyo kỳ hạn 7 ngày)
MODIFIED: dải số liệu — nhãn "thành viên dùng bot thật" sai nghĩa: `users` là tổng thành viên của các server có bot, không phải người dùng bot → đổi nhãn cho đúng
ADDED: dự án **Cuộc Hẹn Nhỏ** (`invitation-studio`, cuochennho.vercel.app), `featured: false` (không có case study)
ADDED: trường `cv?: boolean` trên `Project`; `cv: false` → không render ở `/cv` và `/cv-design` để giữ nguyên hai bản CV đã chốt

## What it touches
- `src/content/profile.ts` (nguồn dữ liệu duy nhất)
- `src/components/sections/projects.tsx` (website, render tất cả, không đổi)
- `src/app/cv/page.tsx`, `src/app/cv-design/page.tsx` (lọc `p.cv !== false`)
- `src/app/projects/[slug]/page.tsx` (chỉ featured → không bị ảnh hưởng)

## S1: What breaks if this delta regresses
| # | Lỗi | Người xem thấy | Xử lý |
|---|---|---|---|
| 1 | Cuộc Hẹn Nhỏ lọt vào CV PDF | CV dài thêm, có thể tràn sang trang 2 | Lọc `p.cv !== false` ở cả hai trang CV; dự án cũ không có trường → mặc định vẫn hiện |
| 2 | Dự án không featured mà có link case study | Link `/projects/cuoc-hen-nho` → 404 | Card chỉ hiện "Case study" khi `featured` (đã có sẵn) |
| 3 | Build/type lỗi do trường mới | Deploy Vercel hỏng | Trường optional; chạy `npm run build` + `npm run lint` trước khi push |

## S3: Cross-feature integration
| Feature | Đọc/Ghi | Ghi chú |
|---|---|---|
| Trang CV `/cv` + `/cv-design` | đọc `projects` | thêm điều kiện lọc |

## S6: Regression scenarios
1. Trang chủ mục Dự án: 3 card (Waguri, CreatorHub, Cuộc Hẹn Nhỏ); card Cuộc Hẹn Nhỏ không có link "Case study".
2. `/cv` và `/cv-design`: vẫn đúng 2 dự án như trước.
3. Card Waguri: "72 lệnh", "34 máy chủ · 3.100+ thành viên · 950+ người chơi", không còn "79", "1.428", "Bingo".
4. `/projects/waguri-bot` case study hiển thị số mới; `/projects/creatorhub` không đổi.
