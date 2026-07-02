# Spec: Portfolio Website + CV PDF — Vũ Tuấn Anh

**Status:** Draft
**Scope:** New feature (Large) — greenfield build
**Owner:** Vũ Tuấn Anh (self-approve, solo)
**Slug:** `portfolio-website`

## Mục tiêu

Một website portfolio (Next.js, deploy Vercel) thể hiện năng lực Frontend (Web & Mobile)
của một sinh viên CNTT sắp tốt nghiệp, kèm một bản CV PDF thân thiện ATS sinh ra từ cùng
nguồn dữ liệu. Website là nơi thể hiện cá tính; CV PDF giữ tối giản để qua máy quét ATS.

### Nguyên tắc cốt lõi
- **Một nguồn dữ liệu** (`content/profile.ts`) → cấp cho cả website lẫn route `/cv` in PDF.
- **Website = cá tính** (dark mode + nhấn sakura, animation). **CV PDF = tối giản, 1 cột, ATS-safe.**
- **Bảo mật/NDA:** kinh nghiệm tại công ty proptech ghi **chung chung** (vai trò + công nghệ,
  không nêu tên sản phẩm nội bộ, không screenshot, không chi tiết kiến trúc nội bộ).
- **Riêng tư:** website công khai chỉ hiện email (chống bot) + LinkedIn + GitHub. **Ẩn SĐT & địa chỉ.**
  SĐT chỉ xuất hiện trong CV PDF.

## Tech stack (đã chốt)
- Next.js (App Router) + TypeScript
- Tailwind CSS + shadcn/ui
- Framer Motion (animation tinh tế)
- next-themes (dark/light)
- Deploy: Vercel
- CV PDF: route `/cv` tối ưu print CSS (single-column, semantic) → xuất PDF qua print-to-PDF.

## Sitemap / Sections (one-page + project detail)
- `/` — Hero · About · Skills · Experience (timeline) · Projects · Contact · Footer
- `/projects/[slug]` — case study chi tiết cho 3 dự án cá nhân Tier 1
- `/cv` — trang CV tối giản, print-optimized, có nút "Tải PDF"

## Nội dung (từ data file)
- **Định vị:** Frontend Developer (Web & Mobile), khả năng fullstack.
- **Experience (chung chung):**
  - Frontend/UI Web Developer (Thực tập/CTV) · Công ty công nghệ (Proptech) · 03/2026–05/2026
    — xây UI cho nền tảng bất động sản: web (Next.js/React) + mobile (React Native/Expo/NativeWind).
  - Outsourcing: ContentScheduleAI (công cụ lập lịch nội dung AI, Next.js/TS).
- **Personal projects:** Waguri Bot (flagship), CreatorHub (đồ án TN), Word Chain Game.
- **Education:** ĐH Giao thông Vận tải · CNTT · 2026 · GPA [REDACTED].
- **Skills:** TS/JS · Next.js/React · React Native/Expo · Tailwind/shadcn · Node/REST · Supabase/Postgres · Gemini/OpenAI · Git/Vercel.

---

## S1 — Error States & Validation (viết failure trước)

**Deployment constraints:** static/SSG site, không có DB của riêng mình → ít rủi ro serverless.
Nếu dùng contact form: gửi qua dịch vụ ngoài (Formspree/Resend) — token để ở server env, KHÔNG nhúng client.

| # | Tình huống lỗi | Người dùng thấy gì | Xử lý |
|---|---|---|---|
| 1 | Ảnh dự án / avatar fail load | Không vỡ layout | `next/image` + placeholder/blur + alt text |
| 2 | JS tắt / animation lỗi | Nội dung vẫn đọc được | Nội dung render server-side, animation chỉ là lớp tăng cường (progressive enhancement) |
| 3 | Route `/projects/[slug]` không tồn tại | Trang 404 thân thiện, có link về Home | `not-found.tsx` |
| 4 | Nút "Tải CV PDF" — popup print bị chặn | Có hướng dẫn / link mở `/cv` tab mới | Fallback link, không chỉ dựa `window.print()` |
| 5 | Email bị bot thu thập | Giảm spam | Obfuscate email (không để mailto thô trong HTML tĩnh) |
| 6 | Màn nhỏ (mobile) | Mọi section đọc tốt | Responsive, kiểm thử 360px+ |
| 7 | Dark/light toggle gây "flash" sai theme | Không nhấp nháy | `next-themes` + suppressHydrationWarning |
| 8 | (Nếu có form) submit lỗi mạng / field trống | Báo lỗi rõ ràng, giữ dữ liệu đã nhập | react-hook-form + Zod, hiển thị toast lỗi |

## S2 — Post-Completion Flow
- Sau khi xem Hero → CTA dẫn tới Projects và nút Tải CV.
- Sau khi đọc 1 case study → link tới repo GitHub + nút quay lại danh sách + CTA Contact.
- Sau khi tải CV → vẫn ở lại site (mở `/cv` tab mới, không rời trang chính).

## S3 — Cross-Feature Integration
| Tích hợp | Đọc/Ghi | Ghi chú |
|---|---|---|
| `content/profile.ts` (single source) | Mọi section + `/cv` đọc | Sửa data → cập nhật cả site lẫn CV |
| GitHub (link ngoài) | Link tới repo dự án | waguri-bot, graduation-project (nếu public) |
| Vercel (deploy + Analytics) | Hosting | domain đẹp |
| next-themes | Toàn site | dark/light |
| (Tùy chọn) Contact form service | Ghi qua API ngoài | token ở env server |

## S4 — UX Copy Review
- Toàn bộ tiếng Việt, giọng tự tin nhưng không khoa trương.
- Tránh thuật ngữ rỗng ("đam mê", "năng động") → thay bằng bằng chứng cụ thể (số liệu, công nghệ).
- Mỗi dự án theo công thức: Vấn đề → Giải pháp → Vai trò của tôi → Kết quả/Công nghệ.

## S5 — State & Persistence Matrix
| Dữ liệu | Lưu ở đâu |
|---|---|
| Toàn bộ nội dung profile/projects/experience | `content/profile.ts` (in repo, version control) |
| Theme (dark/light) | localStorage (next-themes) |
| Ảnh, CV assets | `public/` |
| Không có dữ liệu người dùng / DB | — (giảm rủi ro bảo mật) |

## S6 — Manual QA Scenarios
1. Mở trang → mọi section hiển thị, không lỗi console.
2. Toggle dark/light → không flash, lưu lựa chọn sau reload.
3. Resize 360px / 768px / 1280px → layout đẹp, không tràn.
4. Click từng dự án Tier 1 → mở case study đúng, link GitHub hoạt động.
5. Nút "Tải CV PDF" → mở `/cv`, print ra PDF 1 cột sạch, đọc được, không cắt chữ.
6. Kiểm tra email không để mailto thô (xem source).
7. Lighthouse: Performance/Accessibility/SEO ≥ 90.
8. Kiểm chứng mục Experience KHÔNG lộ tên sản phẩm nội bộ / chi tiết NDA.

---

## Scope Routing
- S1 error states: 8 · S3 integration points: ~4 · Category: Standard (không auth/payment/PII của người khác).
- Theo bảng routing: nghiêng "Review recommended", nhưng đây là **portfolio cá nhân, rủi ro thấp**,
  chủ sở hữu tự duyệt (solo). → **Tiến hành build, review nhẹ sau mỗi mốc.**

## Lộ trình build (mốc)
1. Khởi tạo Next.js + Tailwind + shadcn + theme + `content/profile.ts`.
2. Layout + Hero + About + Skills.
3. Experience timeline + Projects (grid + 3 case study).
4. Contact + Footer + email obfuscation + SEO/metadata.
5. Route `/cv` print-optimized + nút tải PDF.
6. Polish animation, responsive, Lighthouse, deploy Vercel.
