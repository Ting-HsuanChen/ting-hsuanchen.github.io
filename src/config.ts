export const SITE = {
  website: "https://ting-hsuanchen.github.io/", // replace this with your deployed domain
  author: "Ting-Hsuan Chen",
  profile: "tinghsuanchen.com",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "Ting-Hsuan Chen",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 8,
  postPerPage: 8,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "US/Michigan", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
