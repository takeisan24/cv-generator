import { ImageResponse } from "next/og";

// Favicon sinh động: chữ "VA" hồng sakura trên nền tối.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0c",
          color: "#f472b6",
          fontSize: 20,
          fontWeight: 700,
          borderRadius: 7,
        }}
      >
        VA
      </div>
    ),
    { ...size },
  );
}
