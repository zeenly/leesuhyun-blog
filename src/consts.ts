import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "LEE SUHYUN", // 사이트 상단 로고 텍스트
  DESCRIPTION: "부드러운 맨파워, 단단한 교육 아카이브", // 사이트 기본 설명
  EMAIL: "suhyun@ik.me", // 작가님 이메일로 변경
  NUM_POSTS_ON_HOMEPAGE: 5, // 메인에 보일 글 개수 (그대로 유지)
  NUM_PROJECTS_ON_HOMEPAGE: 3, // 나중에 안 쓰더라도 속성은 남겨둡니다
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "이수현의 교육 아카이브 메인 페이지입니다.", // 홈 설명 변경
};

export const BLOG: Metadata = {
  TITLE: "Class", // Blog 대신 작가님의 카테고리 중 하나인 Class로 이름 변경 (추후 라우팅 활용 고려)
  DESCRIPTION: "수현쌤이 전하는 진짜 영어 교육의 본질",
};

export const PROJECTS: Metadata = {
  TITLE: "Note", // Projects 대신 Note로 이름 변경
  DESCRIPTION: "교육 통찰과 일상의 기록들",
};

export const SOCIALS: Socials = [
  // 소셜 링크를 일단 비워두고 싶으시다면 빈 문자열("")이나 "#"으로 두면 안전합니다.
  // 추후 운영하시는 채널이 생기면 HREF에 링크를 넣으시면 됩니다.
  {
    NAME: "Email",
    HREF: "mailto:suhyun@ik.me",
  },
  {
    NAME: "GitHub", // 사용하지 않으셔도 에러 방지를 위해 항목은 둡니다
    HREF: "#", 
  },
  {
    NAME: "Website",
    HREF: "#",
  },
];
