# [Small change] Vá 12 cảnh báo Dependabot + thêm mục kinh nghiệm full-time (26/11/2026)

Status: Approved (người dùng yêu cầu 26/11/2026)

## What's changing
ADDED: mục kinh nghiệm đầu danh sách `experiences` (`src/content/profile.ts`): Developer full-time từ 11/2026, không nêu tên công ty và tên khách hàng (người dùng chọn giấu).
MODIFIED: `package-lock.json` — nâng các gói phụ thuộc gián tiếp bị cảnh báo (minimatch, zod, source-map-js, brace-expansion, js-yaml, baseline-browser-mapping, browserslist, postcss) bằng `npm audit fix` (không `--force`, không đổi phiên bản trực tiếp trong `package.json` nếu không cần).
REMOVED: không có.

## S1: What breaks if this delta regresses
1. `npm audit fix` kéo lên bản phụ thuộc làm hỏng build Next/Tailwind/ESLint → kiểm bằng `npm run build` + `npm run lint` + `tsc --noEmit`.
2. Route `/api/cv` (puppeteer-core + chromium-bidi bị nâng) không xuất được PDF → kiểm Vercel preview `/api/cv` trả PDF.
3. `experience.tsx` dùng `key={exp.org}` → org của mục mới phải khác các mục cũ, không thì React cảnh báo key trùng.
4. Mục mới có `bullets: []` → ba nơi render (`experience.tsx`, `/cv`, `/cv-design`) không được để lại khối trống xấu; nếu có thì thêm 1 bullet.
5. Lộ thông tin công ty (tên Edusoft, khách SULECO, repo nội bộ) trên trang công khai → chỉ ghi mô tả chung.

## S3: Integration
- Vercel build (preview + production), route PDF `/api/cv`, ba nơi render `experiences`.

## S6: Regression scenarios
1. `npm audit` → 0 lỗ hổng mức high/critical; Dependabot đóng các alert sau khi merge.
2. `npm run build`, `npm run lint`, `npx tsc --noEmit` đều sạch.
3. Preview: trang chủ phần Kinh nghiệm có mục mới đứng đầu, "11/2026 – nay"; `/cv`, `/cv-design` có mục mới; `/api/cv` tải được PDF.
