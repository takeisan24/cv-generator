import { ImageResponse } from "next/og";
import { personal } from "@/content/profile";

export const alt = `${personal.name} — ${personal.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Tải font hỗ trợ tiếng Việt cho ảnh OG; nếu lỗi mạng thì fallback font mặc định.
async function loadFont(file: string): Promise<ArrayBuffer | null> {
  try {
    const res = await fetch(
      `https://raw.githubusercontent.com/google/fonts/main/ofl/bevietnampro/${file}`,
    );
    if (res.ok) return await res.arrayBuffer();
  } catch {
    // bỏ qua — dùng font mặc định
  }
  return null;
}

export default async function OpengraphImage() {
  const [bold, regular] = await Promise.all([
    loadFont("BeVietnamPro-Bold.ttf"),
    loadFont("BeVietnamPro-Regular.ttf"),
  ]);

  const fonts = [
    bold && { name: "BeVietnamPro", data: bold, weight: 700 as const, style: "normal" as const },
    regular && { name: "BeVietnamPro", data: regular, weight: 400 as const, style: "normal" as const },
  ].filter(Boolean) as { name: string; data: ArrayBuffer; weight: 400 | 700; style: "normal" }[];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#0a0a0c",
          backgroundImage:
            "radial-gradient(900px circle at 12% 0%, rgba(244,114,182,0.18), transparent 45%), radial-gradient(700px circle at 95% 100%, rgba(244,114,182,0.12), transparent 45%)",
          padding: "80px",
          fontFamily: fonts.length ? "BeVietnamPro" : "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#f472b6",
            fontFamily: "monospace",
            marginBottom: 24,
          }}
        >
          {"</> takeisan24"}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 92,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.05,
          }}
        >
          {personal.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 44,
            fontWeight: 700,
            color: "#f472b6",
            marginTop: 12,
          }}
        >
          {personal.role}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#a1a1aa",
            marginTop: 20,
          }}
        >
          {personal.roleSub}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#71717a",
            marginTop: 48,
          }}
        >
          Next.js · React · React Native · TypeScript · AI
        </div>
      </div>
    ),
    { ...size, ...(fonts.length ? { fonts } : {}) },
  );
}
