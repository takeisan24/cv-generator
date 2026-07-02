import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-1 flex-col items-center justify-center px-4 text-center">
      <p className="font-mono text-6xl font-bold text-primary">404</p>
      <h1 className="mt-4 text-xl font-semibold">Không tìm thấy trang</h1>
      <p className="mt-2 text-muted-foreground">
        Trang bạn tìm không tồn tại hoặc đã được di chuyển.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
      >
        Về trang chủ
      </Link>
    </main>
  );
}
