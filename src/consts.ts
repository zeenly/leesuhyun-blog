import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "LEE SUHYUN",
  DESCRIPTION: "김 수출 실무자 이수현의 기록입니다.",
  EMAIL: "suhyun@ik.me",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "무역 실무, 일본어·영어, 신앙과 삶에 관한 이수현의 기록입니다.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "무역, 언어, 신앙과 삶에 관한 기록을 모았습니다.",
};

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION: "김 수출·영업 실무자, 씨앗교회 예배 프로듀서 이수현 소개입니다.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "목적을 위해 만든 수단들을 모았습니다.",
};

export const CHURCH_URL = "https://seed.band";

export const SOCIALS: Socials = [
  {
    NAME: "이메일",
    HREF: "mailto:suhyun@ik.me",
  },
];

// Trade: 무역 실무 / Language: 일본어·영어 / Life, Note: 신앙과 삶, 글쓰기
export const CATEGORIES = ["Trade", "Language", "Life", "Note"] as const;
export type Category = (typeof CATEGORIES)[number];

// Language a post is written in (frontmatter `lang`). Posts default to ko;
// en/ja posts get a small label in post lists.
export const LANGS = ["ko", "en", "ja"] as const;
export type Lang = (typeof LANGS)[number];
