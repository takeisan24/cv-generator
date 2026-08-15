// =============================================================
//  NGUỒN DỮ LIỆU TRUNG TÂM
//  Sửa thông tin ở đây -> cập nhật cả website lẫn trang CV (/cv).
// =============================================================

export const personal = {
  name: "Vũ Tuấn Anh",
  // Vai trò chính hiển thị ở Hero & CV
  role: "Frontend Developer",
  roleSub: "React · Next.js · React Native — hướng Fullstack",
  tagline:
    "Sinh viên CNTT sắp tốt nghiệp. Đã đóng góp ~293 Pull Request vào một nền tảng Proptech đang chạy production (web + mobile), và tự xây sản phẩm AI có người dùng thật.",
  location: "Hà Nội, Việt Nam",
  avatar: "/avatar.jpg",
  availability: "Sẵn sàng đi làm ngay · Onsite hoặc Remote",

  // Liên hệ — phone & địa chỉ chỉ dùng cho CV PDF, KHÔNG render thô trên web công khai
  email: "vutanh507@gmail.com",
  // Số điện thoại chỉ hiển thị trên /cv, render phía client để tránh bot —
  // giá trị nằm trong src/components/phone-reveal.tsx (không đưa vào HTML tĩnh).
  links: {
    github: "https://github.com/takeisan24",
    linkedin: "https://www.linkedin.com/in/takeisan24/",
    bio: "https://guns.lol/takeisan04",
  },
} as const;

// Tóm tắt bản thân (Hero/About + CV summary)
export const summary =
  "Lập trình viên Frontend (React/Next.js, React Native) chuyên xây tính năng cho sản phẩm đang chạy production — cả web lẫn mobile. Mạnh về biến thiết kế Figma thành giao diện mượt, đồng bộ chặt với backend qua API contract, và giữ chất lượng bằng test, i18n và review kỹ. Hướng tới những sản phẩm được người dùng thật sử dụng.";

// Số liệu nổi bật — đều là con số THẬT, dùng cho dải thống kê ở mục Giới thiệu.
export const stats = [
  { value: "293", label: "Pull Request trong sản phẩm production" },
  { value: "1.400+", label: "commits code" },
  { value: "1.428", label: "thành viên dùng bot thật (Waguri Bot)" },
  { value: "8.8/10", label: "điểm đồ án tốt nghiệp" },
];

// Sở thích — chỉ hiển thị trên website để thêm chút cá tính (không đưa vào CV).
export const interests = "Ngoài giờ code: chơi guitar 🎸 và xem anime.";

// ---------------------------------------------------------------
//  KỸ NĂNG
// ---------------------------------------------------------------
export const skills: { group: string; items: string[] }[] = [
  {
    group: "Ngôn ngữ & Framework",
    items: ["TypeScript", "Next.js (App Router)", "React", "React Native / Expo", "Node.js"],
  },
  {
    group: "Giao diện",
    items: ["Tailwind CSS", "shadcn/ui", "Radix UI", "NativeWind"],
  },
  {
    group: "Backend & Dữ liệu",
    items: ["Route Handler", "REST API", "Cron job", "Webhook", "Hàng đợi job", "Supabase / PostgreSQL", "JSONB", "Migration", "Zod"],
  },
  {
    group: "Tích hợp",
    items: ["Google Gemini", "OpenAI", "OnePay", "VNPay", "PayOS / VietQR", "Google OAuth"],
  },
  {
    group: "Chất lượng & Quy trình",
    items: ["Zustand", "Playwright (E2E)", "i18n (next-intl)", "Accessibility", "ESLint", "Git / GitHub", "Code review", "CI (GitHub Actions)"],
  },
  {
    group: "DevOps",
    items: ["Vercel", "EAS Build/Update", "Sentry", "PostHog"],
  },
  {
    group: "Ngoại ngữ",
    items: ["Tiếng Anh — giao tiếp & đọc/viết tài liệu kỹ thuật tốt"],
  },
];

// ---------------------------------------------------------------
//  KINH NGHIỆM
// ---------------------------------------------------------------
export type Experience = {
  role: string;
  org: string;
  period: string;
  summary: string;
  bullets: string[];
  tech: string[];
};

export const experiences: Experience[] = [
  {
    role: "Cộng tác viên Lập trình Frontend (Web & Mobile)",
    org: "Công ty Cổ phần Propgate — nền tảng marketing & quản lý nguồn hàng bất động sản cho môi giới (web + mobile)",
    period: "03/2026 – 06/2026",
    summary:
      "Phát triển tính năng trong hệ thống production trên cả mobile app và web app cho môi giới bất động sản.",
    bullets: [
      "293 Pull Request (265 đã merge — tỉ lệ merge 90%) và hơn 1.400 commit trên 2 codebase web + mobile chỉ trong 4 tháng.",
      "Khởi tạo codebase mobile từ commit đầu tiên (Expo/React Native, phone OTP auth, hệ thiết kế theo Figma, wizard tạo tin 4 bước) — sau 2 tháng là người tạo 77% số file và 98/115 màn hình.",
      "Xây màn chiến dịch marketing (mảng lớn nhất của app): thực thi bất đồng bộ có polling, timeout co giãn theo số item, cache lạc quan ở client.",
      "Viết 44 route handler, 6 cron job và 19 migration SQL cho backend web; dựng hạ tầng xác thực OTP qua edge function gọi thẳng API Zalo (có SMS dự phòng), cờ tính năng kèm công tắc tắt khẩn cấp và luồng gộp tài khoản.",
      "Xử lý loạt lỗ hổng bảo mật theo OWASP (SSRF, path traversal, XSS, rò rỉ API key/OAuth secret) và chuyển hàng đợi job từ BullMQ + Redis sang Upstash QStash cho môi trường serverless.",
      "Dẫn hai đợt migration toàn app mobile: StyleSheet → NativeWind v4 (~15 PR) và ~700 chuỗi hardcode sang đa ngôn ngữ; cấu hình EAS Build/Update và phát hành TestFlight.",
    ],
    tech: ["React Native", "Expo", "Next.js", "TypeScript", "Supabase / Postgres", "Zustand", "NativeWind", "i18n", "QStash", "Gemini AI"],
  },
  {
    role: "Thực tập sinh Lập trình (Fullstack)",
    org: "Công ty Cổ phần Finful — dự án ContentScheduleAI (nạp tư liệu PDF/URL/YouTube/TikTok → sinh nội dung bằng AI → lập lịch đăng đa nền tảng)",
    period: "10/2025 – 04/2026",
    summary:
      "Người đóng góp nhiều nhất dự án, làm xuyên suốt từ frontend tới backend.",
    bullets: [
      "Người đóng góp nhiều nhất dự án: 72 Pull Request (71 đã merge, chiếm 71% tổng PR) và 200 commit — phụ trách xuyên suốt frontend lẫn backend.",
      "Tự xây luồng thanh toán 2 cổng (OnePay, VNPay) end-to-end: tạo đơn, nhận kết quả từ cổng, cron đối soát giao dịch treo, chống trừ tiền hai lần khi tải lại trang; kèm hệ thống credit.",
      "Chẩn đoán và sửa lỗi retry chồng nhau qua 3 tầng: gộp về một tầng và đặt timeout dưới ngưỡng 60s của nền tảng — từ 12 lần gọi API/4 phút chờ còn 3 lần/75 giây.",
      "Xây lại xử lý lỗi cho 3 nhà cung cấp AI (Google, OpenAI, Fal.ai): thêm cơ chế thử lại và luân phiên khoá khi bị giới hạn tần suất; đưa lỗi thật ra giao diện song ngữ vi/en.",
      "Viết toàn bộ 12 bộ kiểm thử tự động (Playwright) — người duy nhất phụ trách; phát hiện API key/dữ liệu tài khoản bị commit nhầm vào repo, gỡ khỏi git và siết gitignore.",
      "Giao diện & chất lượng: trang Calendar, luồng tạo bài viết, skeleton loading, responsive mobile, đa ngôn ngữ vi/en; lưu nguồn tư liệu dạng JSONB (mở lại bản nháp không cần tải lại file).",
    ],
    tech: ["Next.js", "TypeScript", "Supabase / PostgreSQL", "Zustand", "OnePay / VNPay", "Gemini + OpenAI + Fal.ai", "Playwright", "i18n"],
  },
];

// ---------------------------------------------------------------
//  DỰ ÁN
// ---------------------------------------------------------------
export type Project = {
  slug: string;
  name: string;
  emoji: string;
  featured: boolean;
  tagline: string; // 1 dòng cho card
  role: string;
  year: string;
  tech: string[];
  links: { label: string; href: string }[];
  screenshot?: string; // ảnh chụp sản phẩm cho case study
  // Nội dung case study (chỉ dùng cho dự án featured)
  problem?: string;
  solution?: string;
  contribution?: string[];
  result?: string;
  highlights: string[]; // gạch đầu dòng ngắn cho card & CV
};

export const projects: Project[] = [
  {
    slug: "waguri-bot",
    name: "Waguri Bot",
    emoji: "🌸",
    featured: true,
    tagline:
      "Discord bot kinh tế/nhập vai bản địa hóa Việt Nam — 79 lệnh, AI persona, thanh toán VietQR.",
    role: "Tác giả & lập trình viên duy nhất",
    year: "2026",
    tech: ["discord.js v14", "Supabase / PostgreSQL", "Google Gemini", "Node.js", "Next.js"],
    links: [
      { label: "Demo", href: "https://waguri-bot.vercel.app" },
      { label: "GitHub", href: "https://github.com/takeisan24/waguri-bot" },
    ],
    screenshot: "/projects/waguri.png",
    problem:
      "Các cộng đồng Discord Việt thiếu một bot kinh tế/nhập vai thực sự bản địa hóa, có chiều sâu và cân bằng — phần lớn là bot ngoại, nội dung tiếng Anh, dễ lạm phát điểm.",
    solution:
      "Một hệ sinh thái game kinh tế hoàn chỉnh với vòng lặp 'làm việc → kiếm tiền → mua sắm/chế đồ → lên đời', cân bằng hardcore (năng lượng, mệt mỏi) và chống lạm phát bằng nhiều tầng tiêu hao (sink). Tích hợp AI persona trò chuyện và Premium thanh toán qua VietQR.",
    contribution: [
      "Thiết kế toàn bộ schema kinh tế trên Supabase/PostgreSQL (107 migration SQL); mọi thao tác tiền và kho đồ chạy nguyên tử ở tầng database để chống nhân đôi khi nhiều người thao tác cùng lúc.",
      "Lập trình 79 lệnh: kiếm tiền, cửa hàng & chế tạo, minigame, game nhiều người (Ma Sói, Loto, Bingo), bang hội PvP, chợ giao dịch, vay nợ P2P.",
      "Tích hợp Google Gemini làm AI trò chuyện có persona; xây gói Premium thanh toán VietQR; tối ưu truy vấn xếp hạng bằng index cho đường truy vấn nóng.",
      "Đưa ESLint vào codebase chưa từng có linter (lộ ngay 3 lỗi thật), viết 29 file test và CI tự chạy mỗi lần đẩy code; kèm web dashboard Next.js (bảng xếp hạng, quản lý Premium).",
    ],
    result:
      "Sản phẩm đang vận hành thật trên 15 máy chủ Discord với 1.428 thành viên (376/378 commit tự phát triển) — hệ thống quy mô lớn do một người xây, thể hiện tư duy thiết kế kinh tế ảo, xử lý đồng thời và chống lạm phát.",
    highlights: [
      "Đang chạy thật: 15 máy chủ · 1.428 thành viên",
      "79 lệnh · 107 migration SQL · thao tác tiền/kho nguyên tử ở DB",
      "AI persona (Gemini) + Premium VietQR · ESLint + CI + 29 file test",
    ],
  },
  {
    slug: "creatorhub",
    name: "CreatorHub",
    emoji: "🎨",
    featured: true,
    tagline:
      "Nền tảng AI hỗ trợ lập kế hoạch & sáng tạo nội dung đa nền tảng — đồ án tốt nghiệp.",
    role: "Đồ án tốt nghiệp — lập trình viên",
    year: "2026",
    tech: ["Next.js 14", "Supabase", "Gemini + OpenAI", "Zustand", "Playwright", "next-intl", "VietQR"],
    links: [
      { label: "Demo", href: "https://graduation-project-alpha-dun.vercel.app" },
      { label: "GitHub", href: "https://github.com/takeisan24/graduation-project" },
    ],
    screenshot: "/projects/creatorhub.png",
    problem:
      "Người sáng tạo nội dung thường 'bí ý tưởng' và phải quản lý nội dung rời rạc trên nhiều nền tảng mạng xã hội cùng lúc.",
    solution:
      "Một nền tảng duy nhất tích hợp Generative AI: sinh nội dung (văn bản, kịch bản, gợi ý hình ảnh), lập lịch đăng bài trực quan và chatbot trợ lý tinh chỉnh nội dung.",
    contribution: [
      "61 API route (Next.js 14 App Router), tích hợp Gemini + OpenAI, thanh toán VietQR và hệ thống credit; form chuẩn hóa bằng react-hook-form + Zod.",
      "1.449 khoá đa ngôn ngữ khớp tuyệt đối vi/en (next-intl); 13 bộ kiểm thử E2E Playwright, có cấu hình riêng cho luồng tạo nội dung.",
      "Viết 42 tài liệu đặc tả trước khi code, phân mức ưu tiên theo rủi ro; rà soát lại toàn hệ thống trước khi bàn giao (77/77 commit, làm một mình).",
    ],
    result:
      "Đồ án tốt nghiệp đạt 8.8/10 (3.8/4), làm một mình hoàn toàn (77/77 commit) — code chuẩn production với 61 API route, validation, đa ngôn ngữ và kiểm thử tự động.",
    highlights: [
      "Điểm đồ án tốt nghiệp: 8.8/10 (3.8/4) · làm một mình 77/77 commit",
      "61 API route · Gemini + OpenAI · thanh toán VietQR + credit",
      "1.449 khoá i18n vi/en · 13 bộ E2E Playwright",
    ],
  },
];

export const education = {
  school: "Trường Đại học Giao thông Vận tải",
  major: "Công nghệ thông tin",
  period: "2022 – 2026",
  // Để trống -> không hiển thị GPA (chiến lược: dự án gánh CV).
  // Muốn hiện thì điền vào đây, vd: "GPA x.x/4".
  gpa: "",
  thesis: "Đồ án tốt nghiệp: CreatorHub — 8.8/10 (3.8/4)",
};

export const navItems = [
  { label: "Giới thiệu", href: "#about" },
  { label: "Kỹ năng", href: "#skills" },
  { label: "Kinh nghiệm", href: "#experience" },
  { label: "Dự án", href: "#projects" },
  { label: "Liên hệ", href: "#contact" },
];
