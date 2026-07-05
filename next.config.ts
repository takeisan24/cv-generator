import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Không bundle chromium/puppeteer vào build — để chạy trong serverless function
  serverExternalPackages: ["@sparticuz/chromium", "puppeteer-core"],
  // Ép đóng gói file nhị phân chromium (.br) vào function /api/cv
  // (Next không tự trace vì chúng được nạp qua đường dẫn lúc chạy, không qua import)
  outputFileTracingIncludes: {
    "/api/cv": ["./node_modules/@sparticuz/chromium/**"],
  },
};

export default nextConfig;
