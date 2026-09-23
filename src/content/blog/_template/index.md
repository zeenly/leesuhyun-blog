---
title: "글 제목"
description: "목록과 검색 결과, SEO에 쓰이는 한두 문장 요약"
date: "2026-01-01"
draft: false
tags:
  - example
---

새 글을 쓸 때 이 `_template` 폴더를 통째로 복사해서 폴더 이름을 바꾸세요.
폴더 이름이 글 주소가 됩니다. (예: `src/content/blog/my-first-post/` → `/blog/my-first-post`)

- `title`, `description`, `date`는 필수입니다.
- `draft: true`로 두면 글이 게시되지 않습니다.
- `tags`는 생략해도 됩니다.
- `_`로 시작하는 폴더는 `src/content.config.ts`에서 빌드 대상에서 제외됩니다.
