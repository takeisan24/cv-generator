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
    linkedin: "https://www.linkedin.com/in/tu%E1%BA%A5n-anh-v%C5%A9-2a1536415/",
    bio: "https://bio.link/takeisan204",
  },
} as const;

// Tóm tắt bản thân (Hero/About + CV summary)
export const summary =
  "Lập trình viên Frontend (Web & Mobile) thành thạo TypeScript, Next.js/React và React Native/Expo. Đã đóng góp gần 300 Pull Request và hơn 1.400 commits vào một nền tảng Proptech đang chạy production (cả web lẫn mobile), đồng thời tự xây nhiều sản phẩm hoàn chỉnh có người dùng thật. Chú trọng chất lượng code, kiểm thử và trải nghiệm người dùng.";

// Số liệu nổi bật — đều là con số THẬT, dùng cho dải thống kê ở mục Giới thiệu.
export const stats = [
  { value: "293", label: "Pull Request trong sản phẩm production" },
  { value: "1.400+", label: "commits code" },
  { value: "743", label: "người dùng thật (Waguri Bot)" },
  { value: "8.8/10", label: "điểm đồ án tốt nghiệp" },
];

// Sở thích — chỉ hiển thị trên website để thêm chút cá tính (không đưa vào CV).
export const interests = "Ngoài giờ code: chơi guitar 🎸 và xem anime.";

// ---------------------------------------------------------------
//  KỸ NĂNG
// ---------------------------------------------------------------
export const skills: { group: string; items: string[] }[] = [
  { group: "Ngôn ngữ", items: ["TypeScript", "JavaScript", "Java", "C#", "SQL"] },
  {
    group: "Frontend",
    items: ["Next.js", "React", "React Native / Expo", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
  },
  {
    group: "Backend & Dữ liệu",
    items: ["Node.js", "REST API", "Supabase / PostgreSQL", "MongoDB", "BullMQ / Redis"],
  },
  {
    group: "AI & Dịch vụ",
    items: ["Google Gemini", "OpenAI", "PayOS / VietQR", "Resend", "Google Maps API"],
  },
  {
    group: "Công cụ & Quy trình",
    items: ["Git / GitHub", "Vercel", "Playwright (E2E)", "Zustand", "Zod", "Sentry"],
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
    role: "Thực tập sinh / CTV Lập trình Frontend (Web & Mobile)",
    org: "Công ty công nghệ — nền tảng Proptech (marketing & quản lý nguồn hàng BĐS cho môi giới, web + mobile)",
    period: "03/2026 – 06/2026",
    summary:
      "Phát triển tính năng trong hệ thống production trên cả mobile app và web app cho môi giới bất động sản.",
    bullets: [
      "Đóng góp ~293 Pull Request (265 đã merge), hơn 1.400 commits và 3.500+ file thay đổi trên 2 repo web + mobile chỉ trong 4 tháng.",
      "Xây dựng các luồng sản phẩm chính: onboarding, tạo nội dung bằng AI (Gemini), quản lý chiến dịch, quản lý chính sách.",
      "Triển khai UI mobile theo Figma bằng React Native/Expo: màn tạo/chỉnh sửa bất động sản nhiều bước, upload ảnh, địa chỉ, thông tin pháp lý, microsite, lịch sử giao dịch.",
      "Đồng bộ contract giữa mobile – web – backend: API payload, migration, field mapping, trạng thái loading/error, validation và backward compatibility.",
      "Bổ sung test, kiểm tra i18n, typecheck, lint/diff-check và review PR trước khi merge để giảm regression trên các flow quan trọng.",
    ],
    tech: ["React Native", "Expo", "Next.js", "TypeScript", "Supabase / Postgres", "Zustand", "Tailwind / shadcn", "i18n", "Gemini AI"],
  },
  {
    role: "Lập trình viên Fullstack (Outsourcing)",
    org: "Dự án ContentScheduleAI — nền tảng tạo & lập lịch nội dung bằng AI",
    period: "2026",
    summary:
      "Đóng góp chính của dự án (200 commits), làm xuyên suốt từ frontend tới backend.",
    bullets: [
      "Là người đóng góp nhiều nhất dự án với ~200 commits, phụ trách cả giao diện lẫn logic phía server.",
      "Xây API quản lý bản nháp và lưu trữ dữ liệu nguồn vào Supabase (JSONB), cache để mở lại không cần tải lại file.",
      "Quản lý state ứng dụng bằng Zustand; tích hợp tính năng AI: trích xuất nội dung từ nguồn và sinh ảnh.",
      "Viết và ổn định bộ kiểm thử E2E Playwright, cải thiện accessibility (aria-label, data-testid).",
    ],
    tech: ["Next.js", "TypeScript", "Supabase", "Zustand", "Playwright", "Gemini"],
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
      "Discord bot kinh tế/nhập vai bản địa hóa Việt Nam — 82 lệnh, AI persona, thanh toán VietQR.",
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
      "Thiết kế toàn bộ schema cơ sở dữ liệu kinh tế trên Supabase/PostgreSQL.",
      "Lập trình 82 lệnh: kiếm tiền, cửa hàng & chế tạo, minigame, game nhiều người (Ma Sói, Loto, Bingo), bang hội PvP, chợ giao dịch, vay nợ P2P.",
      "Tích hợp Google Gemini làm AI trò chuyện có persona; xây gói Premium thanh toán VietQR.",
      "Kèm web dashboard Next.js: bảng xếp hạng, quản lý Premium.",
    ],
    result:
      "Sản phẩm đang vận hành thật với 7 máy chủ Discord và 743 thành viên sử dụng — một hệ thống quy mô lớn do một người xây dựng, thể hiện tư duy thiết kế kinh tế ảo, xử lý đồng thời và chống lạm phát.",
    highlights: [
      "Đang chạy thật: 7 máy chủ · 743 thành viên",
      "82 lệnh, hệ kinh tế chống lạm phát nhiều tầng",
      "AI persona (Gemini) + Premium thanh toán VietQR",
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
    tech: ["Next.js 14", "Supabase", "Gemini + OpenAI", "Zustand", "Playwright", "next-intl"],
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
      "Xây giao diện và luồng nghiệp vụ với Next.js 14 App Router, form chuẩn hóa bằng react-hook-form + Zod.",
      "Tích hợp Google Gemini và OpenAI cho việc sinh nội dung.",
      "Quản lý state bằng Zustand, hỗ trợ đa ngôn ngữ (next-intl), viết kiểm thử E2E với Playwright.",
    ],
    result:
      "Đồ án tốt nghiệp đạt 8.8/10 (3.8/4), code chuẩn production với validation, đa ngôn ngữ và kiểm thử tự động.",
    highlights: [
      "Điểm đồ án tốt nghiệp: 8.8/10 (3.8/4)",
      "Sinh nội dung đa nền tảng bằng Gemini + OpenAI",
      "Có kiểm thử E2E (Playwright) & đa ngôn ngữ",
    ],
  },
  {
    slug: "word-chain-game",
    name: "Word Chain Game",
    emoji: "🎮",
    featured: true,
    tagline:
      "Game nối từ PvE full-stack — RESTful API chuẩn mực + thuật toán 'chiếu tướng'.",
    role: "Bài tập lớn môn Lập trình API",
    year: "2025",
    tech: ["Node.js", "REST API", "MongoDB", "MERN"],
    links: [{ label: "GitHub", href: "https://github.com/takeisan24/word-chain-game" }],
    problem:
      "Cần một bài toán minh họa việc thiết kế RESTful API chuẩn mực kết hợp xử lý logic game theo thời gian thực.",
    solution:
      "Ứng dụng web full-stack cho phép đấu nối từ với Bot, hỗ trợ cả tiếng Việt (nối theo từ) và tiếng Anh (nối theo ký tự), kèm hệ quản trị từ điển CRUD.",
    contribution: [
      "Thiết kế RESTful API đầy đủ GET/POST/PUT/DELETE cho quản trị từ điển.",
      "Xây thuật toán 'chiếu tướng': rà toàn bộ nước đi khả thi để tuyên thắng/thua khi đối thủ bị dồn vào thế bí.",
      "Cơ chế chống lặp từ trong ván và Bot phản xạ tự động tìm từ trong kho dữ liệu.",
    ],
    result:
      "Minh họa rõ kỹ năng thiết kế API và tư duy thuật toán — không chỉ là CRUD thông thường.",
    highlights: [
      "RESTful API chuẩn + CRUD từ điển",
      "Thuật toán 'chiếu tướng' tuyên thắng/thua",
      "Hỗ trợ nối từ song ngữ Việt – Anh",
    ],
  },
];

export const education = {
  school: "Trường Đại học Giao thông Vận tải",
  major: "Công nghệ thông tin",
  period: "Tốt nghiệp 2026",
  // Để trống -> không hiển thị GPA (chiến lược: dự án gánh CV).
  // Nếu sau này GPA >= [REDACTED] thì điền lại, vd: "GPA [REDACTED].0".
  gpa: "[REDACTED]",
};

export const navItems = [
  { label: "Giới thiệu", href: "#about" },
  { label: "Kỹ năng", href: "#skills" },
  { label: "Kinh nghiệm", href: "#experience" },
  { label: "Dự án", href: "#projects" },
  { label: "Liên hệ", href: "#contact" },
];
