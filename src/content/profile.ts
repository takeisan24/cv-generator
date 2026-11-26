// =============================================================
//  NGUỒN DỮ LIỆU TRUNG TÂM
//  Sửa thông tin ở đây -> cập nhật cả website lẫn trang CV (/cv).
// =============================================================

export const personal = {
  name: "Vũ Tuấn Anh",
  // Vai trò chính hiển thị ở Hero & CV
  role: "Fullstack Developer",
  roleSub: "Next.js · TypeScript · PostgreSQL",
  tagline:
    "Mới tốt nghiệp ngành CNTT (2026). Hơn 330 Pull Request đã merge trên sản phẩm production (web, mobile, backend); tự xây và vận hành website cùng cơ sở dữ liệu cho một game trên hơn 80 server Discord.",
  location: "Hà Nội, Việt Nam",
  avatar: "/avatar.jpg",
  availability: "Đang làm Developer full-time",

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
  "Lập trình viên Fullstack (Next.js, React Native, PostgreSQL), xây tính năng cho sản phẩm đang chạy production, từ giao diện tới lớp dữ liệu phía sau. Chú trọng tính đúng đắn của dữ liệu (giao dịch nguyên tử, phân quyền DB) và giữ chất lượng bằng test, i18n và review kỹ.";

// Số liệu nổi bật — đều là con số THẬT, dùng cho dải thống kê ở mục Giới thiệu.
export const stats = [
  { value: "330+", label: "Pull Request đã merge trên sản phẩm production" },
  { value: "1.400+", label: "commits code" },
  { value: "{servers}", label: "máy chủ Discord dùng Waguri" },
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
    items: ["TypeScript", "Next.js (App Router)", "React", "Angular (cơ bản)", "React Native / Expo", "Node.js"],
  },
  {
    group: "Giao diện",
    items: ["Tailwind CSS", "shadcn/ui", "Radix UI", "MUI", "NativeWind"],
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
    items: ["Zustand", "Redux Toolkit", "Playwright (E2E)", "i18n (next-intl)", "Accessibility", "ESLint", "Git / GitHub", "Code review", "CI (GitHub Actions)"],
  },
  {
    group: "DevOps",
    items: ["Vercel", "EAS Build/Update", "Sentry", "PostHog"],
  },
  {
    group: "Ngoại ngữ",
    items: ["Tiếng Anh — đọc và viết tài liệu kỹ thuật tốt"],
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
    role: "Developer (full-time)",
    org: "Đơn vị phát triển phần mềm giáo dục · Hà Nội",
    period: "11/2026 – nay",
    summary: "Phát triển hệ thống quản lý học tập (LMS) theo quy trình ticket, merge request và review.",
    bullets: [
      "Phát triển hệ thống quản lý học tập (LMS) cho khách hàng doanh nghiệp: web Next.js, API NestJS, làm theo merge request và code review.",
    ],
    tech: ["Next.js", "NestJS", "TypeScript", "MongoDB"],
  },
  {
    role: "Thực tập sinh Lập trình Frontend",
    org: "VietSoftware International (VSII)",
    period: "10/2026 – 11/2026",
    summary: "Thực tập mảng Frontend, làm theo ticket và review.",
    bullets: [
      "Dựng màn bản đồ mặt bằng tương tác bằng React 19 + TypeScript (OpenSeadragon): ảnh tile zoom sâu, xếp nhãn không chồng bằng R-tree, bộ lọc, tìm theo mã; lớp API tự làm mới token khi gặp 401; 72 test Vitest.",
      "Dựng màn hiển thị nội dung từ CMS theo Figma bằng React + MUI, nối API backend, lọc HTML bằng DOMPurify; sau đó làm lại bằng Angular 21 với 50 unit test.",
      "Bài tập React + Redux Toolkit: gọi API phân trang, giữ dữ liệu cũ khi mất mạng và tự thử lại khi có mạng.",
    ],
    tech: ["React", "TypeScript", "Angular", "Redux Toolkit", "MUI", "Tailwind CSS", "Vitest"],
  },
  {
    role: "Cộng tác viên Lập trình Frontend (Web & Mobile)",
    org: "Công ty Cổ phần Propgate — nền tảng marketing & quản lý nguồn hàng bất động sản cho môi giới (web + mobile)",
    period: "03/2026 – 06/2026",
    summary:
      "Phát triển tính năng trong hệ thống production trên cả mobile app và web app cho môi giới bất động sản.",
    bullets: [
      "265 Pull Request được merge và hơn 1.400 commit trên 2 codebase web + mobile trong 4 tháng.",
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
      "Người đóng góp nhiều nhất dự án: 71 Pull Request được merge, chiếm 71% tổng PR — phụ trách xuyên suốt frontend lẫn backend.",
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
  cv?: boolean; // false -> chỉ hiện trên website, không đưa vào CV PDF (mặc định: có)
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
    name: "Waguri",
    emoji: "🌸",
    featured: true,
    tagline:
      "Website và cơ sở dữ liệu cho một game kinh tế trên Discord: web và bot dùng chung một DB PostgreSQL.",
    role: "Tác giả & lập trình viên duy nhất",
    year: "2026",
    tech: ["Next.js 16", "React 19", "TypeScript", "Supabase / PostgreSQL", "Tailwind v4", "Node.js", "discord.js v14"],
    links: [
      { label: "Demo", href: "https://waguri-bot.vercel.app" },
      { label: "GitHub", href: "https://github.com/takeisan24/waguri-bot" },
    ],
    screenshot: "/projects/waguri.png",
    problem:
      "Website và bot Discord cùng ghi vào một cơ sở dữ liệu. Nếu mỗi bên tự tính tiền và vật phẩm thì số liệu sẽ lệch, và hai yêu cầu cùng lúc có thể bị nhân đôi.",
    solution:
      "Đưa luật tiền và vật phẩm vào hàm PostgreSQL nguyên tử, web và bot chỉ gọi hàm. Bật RLS cho mọi bảng, siết quyền gọi hàm, và viết script chặn lỗi phân quyền cùng lệch schema tái phát.",
    contribution: [
      "Thiết kế DB 51 bảng đều bật RLS, 175 migration SQL; có 5 test race bắn nhiều lời gọi song song, kiểm không bị nhân đôi hay mất dữ liệu.",
      "Rà phân quyền, phát hiện 75 hàm ghi dữ liệu gọi được bằng public key và thu hồi; hiện còn 6 trên 181 hàm mở cho public key, không hàm nào là SECURITY DEFINER.",
      "Làm website 21 trang: đăng nhập Discord OAuth, dashboard, bảng xếp hạng, chợ, hồ sơ công khai, trang quản trị đơn Premium; thêm index để trang xếp hạng không quét toàn bảng.",
      "Bảo mật web: chỉ tin Discord ID do OAuth ghi, kiểm quyền ở phía server, CSP/HSTS. Luồng mua Premium qua VietQR: giá lấy ở server, báo chuyển khoản chỉ có tác dụng một lần, duyệt tay.",
      "Bot Node.js (discord.js 14) với 73 slash command, song ngữ vi/en; 822 test tự động trong 122 file; nhật ký và watchdog báo lỗi về Discord.",
    ],
    result:
      "Đang vận hành thật trên {servers} máy chủ Discord với {players} tài khoản trong bot.",
    highlights: [
      "Đang chạy thật: {servers} máy chủ · {players} tài khoản",
      "51 bảng bật RLS · 175 migration SQL · tiền và vật phẩm ghi nguyên tử ở DB",
      "Website Next.js 21 trang · Discord OAuth · 73 slash command · 822 test",
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
  {
    slug: "cuoc-hen-nho",
    name: "Cuộc Hẹn Nhỏ",
    emoji: "💌",
    featured: false,
    tagline:
      "Studio thiệp mời hẹn hò phong cách tạp chí cổ điển — người nhận chọn giờ, chỗ, đồ uống và phản hồi.",
    role: "Tác giả & lập trình viên duy nhất",
    year: "2026",
    tech: ["Next.js 16", "React 19", "Tailwind v4", "Vercel Blob", "Vitest"],
    links: [
      { label: "Demo", href: "https://cuochennho.vercel.app" },
      { label: "GitHub", href: "https://github.com/takeisan24/invitation-studio" },
    ],
    highlights: [
      "Gia cố API ghi: chặn request khác nguồn, giới hạn số request, lọc URL ảnh/nhạc theo host cho phép",
      "Dialog có focus trap, đóng bằng Esc, khoá cuộn nền · Lighthouse accessibility trang chủ 87 → 93",
      "71 test Vitest · cron hằng tuần dọn dữ liệu cũ",
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
