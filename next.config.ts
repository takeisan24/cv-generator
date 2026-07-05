import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Không bundle chromium/puppeteer vào build — để chạy trong serverless function
  serverExternalPackages: ["@sparticuz/chromium", "puppeteer-core"],
};

export default nextConfig;
