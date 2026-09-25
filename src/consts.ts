import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "LEE SUHYUN",
  DESCRIPTION: "영어강사 이수현의 개인 블로그입니다.",
  EMAIL: "suhyun@ik.me",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "영어강사 이수현의 블로그 메인입니다.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "교육 관련 글을 모아둔 공간입니다.",
};

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION: "영어강사 이수현 소개와 수업 안내입니다.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "개인적인 기록과 생각들입니다.",
};

export const CONSULT_URL = "https://open.kakao.com/o/soG9s5Oi";
export const CHURCH_URL = "https://seed.band";

export const SOCIALS: Socials = [
  {
    NAME: "이메일",
    HREF: "mailto:suhyun@ik.me",
  },
  {
    NAME: "상담 문의",
    HREF: CONSULT_URL,
  },
];

export const CATEGORIES = ["Class", "Read", "Life", "Note"] as const;
export type Category = (typeof CATEGORIES)[number];
