// =============================================================
//  SỐ LIỆU WAGURI LIVE
//  Đọc từ API công khai của bot để portfolio không lỗi thời mỗi khi
//  bot vào thêm máy chủ. Trong profile.ts dùng token {servers},
//  {members}, {players}; withLiveStats() thay chúng lúc render.
// =============================================================

const STATS_URL = "https://waguri-bot.vercel.app/api/bot/stats";

export type WaguriStats = { servers: number; members: number; players: number };

// Số đo tay gần nhất (09/10/2026) — dùng khi API không phản hồi.
const FALLBACK: WaguriStats = { servers: 34, members: 3104, players: 956 };

const positive = (v: unknown) =>
  typeof v === "number" && Number.isFinite(v) && v > 0 ? v : null;

export async function getWaguriStats(): Promise<WaguriStats> {
  try {
    const res = await fetch(STATS_URL, {
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(3000),
    });
    if (!res.ok) return FALLBACK;
    const data = await res.json();
    // `users` của bot = tổng thành viên các máy chủ có bot, không phải người chơi.
    const servers = positive(data?.servers);
    const members = positive(data?.users);
    const players = positive(data?.players);
    if (!servers || !members || !players) return FALLBACK;
    return { servers, members, players };
  } catch {
    return FALLBACK;
  }
}

// Làm tròn xuống kèm "+" để con số không bao giờ nói quá: 3104 -> "3.100+".
function roundDown(n: number, step: number): string {
  const r = Math.floor(n / step) * step;
  if (r === 0 || r === n) return n.toLocaleString("vi-VN");
  return `${r.toLocaleString("vi-VN")}+`;
}

// Thay token trong mọi chuỗi của `data` (object, mảng lồng nhau đều được).
export async function withLiveStats<T>(data: T): Promise<T> {
  const s = await getWaguriStats();
  const json = JSON.stringify(data)
    .replaceAll("{servers}", String(s.servers))
    .replaceAll("{members}", roundDown(s.members, 100))
    .replaceAll("{players}", roundDown(s.players, 50));
  return JSON.parse(json) as T;
}
