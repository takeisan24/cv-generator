import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer-core";
import type { NextRequest } from "next/server";

// Chạy trong Node serverless (không phải Edge) vì cần headless Chromium.
export const runtime = "nodejs";
export const maxDuration = 60;
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const { searchParams, origin } = new URL(req.url);
  const design = searchParams.get("type") === "design";
  const target = `${origin}/${design ? "cv-design" : "cv"}`;

  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: { width: 1240, height: 1754 },
    executablePath: await chromium.executablePath(),
    headless: true,
  });

  try {
    const page = await browser.newPage();
    await page.goto(target, { waitUntil: "networkidle0", timeout: 45000 });
    await page.emulateMediaType("print");
    // Đợi client render xong (số điện thoại, v.v.)
    await new Promise((r) => setTimeout(r, 400));

    const pdf = await page.pdf({
      printBackground: true,
      preferCSSPageSize: true, // dùng @page A4 + margin trong CSS
    });

    return new Response(Buffer.from(pdf), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="CV_VuTuanAnh${design ? "_Design" : ""}.pdf"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("PDF generation failed:", err);
    return new Response("Không tạo được PDF. Vui lòng dùng nút 'In' để lưu PDF.", {
      status: 500,
    });
  } finally {
    await browser.close();
  }
}
