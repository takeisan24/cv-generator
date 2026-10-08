# [Small change] Số liệu Waguri live + đã tốt nghiệp + dọn lint/lockfile

**Status:** Approved (solo) · **Scope:** small change, delta format · **Ngày:** 2026-10-09

## What's changing
ADDED: `src/lib/waguri-stats.ts` — `getWaguriStats()` đọc `https://waguri-bot.vercel.app/api/bot/stats` (ISR `revalidate: 3600`, timeout 3 s), kiểm tra số hợp lệ; lỗi → số đo tay gần nhất (34 / 3.104 / 956). `withLiveStats(data)` thay token `{servers}` `{members}` `{players}` trong mọi chuỗi.
MODIFIED: `profile.ts` — số Waguri ở dải số liệu, highlights, result dùng token thay vì số cứng
MODIFIED: các nơi render (`about.tsx`, `projects.tsx`, `projects/[slug]`, `/cv`, `/cv-design`) gọi `withLiveStats` → thành async server component
MODIFIED: "Sinh viên CNTT sắp tốt nghiệp" → đã tốt nghiệp (2026)
ADDED: `src/lib/use-mounted.ts` (`useSyncExternalStore`) thay mẫu `useEffect(() => setMounted(true))` ở `theme-toggle.tsx` và `phone-reveal.tsx` → hết 2 lỗi `react-hooks/set-state-in-effect`
MODIFIED: `package-lock.json` đồng bộ lại với `package.json` (`npm ci` đang lỗi: `@emnapi/wasi-threads` 1.2.2 vs 1.2.3)

## S1: What breaks if this delta regresses
| # | Lỗi | Người xem thấy | Xử lý |
|---|---|---|---|
| 1 | API bot chậm/sập lúc build hoặc revalidate | Trang treo hoặc build fail | timeout 3 s + fallback số đo tay; không throw |
| 2 | API trả dữ liệu lạ (0, null, chuỗi) | "0+ thành viên" | chỉ nhận số hữu hạn > 0, ngược lại fallback |
| 3 | Token không được thay (quên `withLiveStats` ở một nơi) | Chữ `{members}` lộ ra | grep HTML build: không còn `{servers}`/`{members}`/`{players}` |

Deployment: fetch < 3 s, nằm trong giới hạn serverless 10 s.

## S3: Cross-feature integration
| Feature | Đọc/Ghi | Ghi chú |
|---|---|---|
| Waguri web `/api/bot/stats` | đọc | route public, allow-list, `revalidate = 30` phía bot |

## S6: Regression scenarios
1. `/`, `/projects/waguri-bot`, `/cv`, `/cv-design` hiện số khớp API (làm tròn xuống: thành viên bước 100, người chơi bước 50, kèm "+").
2. Chặn mạng tới waguri-bot.vercel.app khi build → build vẫn pass, hiện số fallback.
3. Hero/meta description không còn "sắp tốt nghiệp".
4. `npm ci` chạy được; `npm run lint` 0 lỗi; `npm run build` pass.
5. Nút đổi theme và số điện thoại vẫn hoạt động (không hydration warning).
