# [Small change] Vá cảnh báo Dependabot + thêm mục kinh nghiệm full-time (26/11/2026)

Status: Approved (người dùng yêu cầu 26/11/2026)

## What's changing
ADDED: mục kinh nghiệm đầu danh sách `experiences` (`src/content/profile.ts`): "Lập trình viên Fullstack", full-time từ 11/2026. Không nêu tên đơn vị, khách hàng hay dự án nội bộ (người dùng chọn giấu).
MODIFIED: `package-lock.json` qua `npm audit fix` (không `--force`); `package.json` không đổi, mọi gói nằm trong khoảng phiên bản đã khai báo:
- Gói trực tiếp: puppeteer-core 25.3.0 → 25.19.0; tailwindcss + @tailwindcss/postcss 4.3.1 → 4.3.5; typescript-eslint 8.62 → 8.74.
- Gói gián tiếp bị cảnh báo: minimatch, zod, source-map-js, brace-expansion, js-yaml, baseline-browser-mapping, browserslist, postcss.
- Gói gián tiếp lên major: chromium-bidi 16 → 157 (đổi sang đánh số theo Chrome), magic-string 0.30 → 1.4, webdriver-bidi-protocol 0.4 → 1.0, string-width 7 → 8.
- Giữ nguyên: next, react, react-dom, eslint, @sparticuz/chromium (149).
REMOVED: không có.

## S1: What breaks if this delta regresses
1. Bản phụ thuộc mới làm hỏng build Next/Tailwind/ESLint → kiểm `npm run build`, `npm run lint`, `tsc --noEmit`.
2. Route `/api/cv`: puppeteer-core 25.19 nhắm Chrome 158 trong khi @sparticuz/chromium vẫn 149 → kiểm route khởi động được Chromium và xuất PDF. Route dùng CDP nên chromium-bidi/zod không được nạp.
3. `experience.tsx` dùng `key={exp.org}` → org của mục mới khác các mục cũ.
4. Mục mới có 1 bullet; `summary` hiện không được render ở đâu, `tech` chỉ hiện ở trang chủ.
5. Lộ tên đơn vị, khách hàng, domain hay repo nội bộ trên repo/trang công khai → chỉ dùng mô tả chung, kể cả trong spec, commit và PR.
6. `/cv-design` in PDF: mục mới (~4–5 dòng) không được làm tăng số trang so với production (thiết kế 3 trang, bản thường 2 trang).

## S3: Integration
- Vercel build (preview + production), route PDF `/api/cv` (`?type=design`), ba nơi render `experiences`.

## S6: Regression scenarios
1. `npm audit` → 0 lỗ hổng; Dependabot tự đóng alert sau khi merge.
2. `npm run build`, `npm run lint`, `npx tsc --noEmit` đều sạch.
3. Preview: phần Kinh nghiệm ở trang chủ, `/cv`, `/cv-design` có mục mới đứng đầu "11/2026 – nay".
4. PDF: `/api/cv` và `/api/cv?type=design` trả PDF; số trang không tăng so với production. (Preview bị Vercel Deployment Protection nên Chromium trong route chỉ in được trang đăng nhập; kiểm số trang bằng puppeteer-core + Chrome trên máy với `next start`, rồi kiểm lại trên production sau khi merge.)
