# 글 올리는 방법

블로그 글은 `src/content/blog` 폴더에 마크다운(`.md`) 파일로 올립니다.
글 하나 = 파일 하나입니다. 이미지가 있는 글만 폴더를 씁니다.

## 1. 파일 이름 정하기

파일 이름이 글 주소가 됩니다.

- 영문 소문자, 숫자, 하이픈(`-`)만 씁니다. 띄어쓰기와 한글은 쓰지 않습니다.
  - 좋은 예: `reading-habits.md`, `2026-exam-review.md`
  - 나쁜 예: `Reading Habits.md`, `독서습관.md`
- `_`로 시작하는 파일과 폴더는 사이트에 올라가지 않습니다. (`_template.md`가 그래서 보이지 않습니다.)
- 이미 있는 글과 같은 이름은 쓰지 않습니다.

글 주소는 `/카테고리/파일이름`입니다.
예: `reading-habits.md`의 category가 `Read`라면 → `https://leesuhyun.com/read/reading-habits`

## 2. 맨 위 네 줄(frontmatter) 쓰기

`src/content/blog/_template.md`를 복사해서 시작하면 됩니다. 파일 맨 위는 이렇게 생겼습니다.

```md
---
title: "글 제목"
date: "2026-01-01"
category: Class
draft: false
---

여기부터 본문을 씁니다.
```

| 항목 | 필수 | 설명 |
|---|---|---|
| `title` | 예 | 글 제목. 큰따옴표로 감쌉니다. |
| `date` | 예 | 글 날짜. `"YYYY-MM-DD"` 형식. 목록은 이 날짜 순서로 정렬됩니다. |
| `category` | 예 | `Class`, `Read`, `Life`, `Note` 중 하나. 대소문자까지 그대로 씁니다. |
| `draft` | 아니오 | `true`로 두면 사이트에 올라가지 않습니다(임시 저장). 생략하면 `false`입니다. |

필요할 때만 추가하는 항목:

- `description: "한두 문장 요약"` — 목록과 검색 결과에 보이는 요약입니다. 생략하면 본문 첫 문단이 자동으로 쓰입니다.
- `tags:` — 태그 목록입니다. 쓰는 방법:
  ```md
  tags:
    - 수능
    - 독해
  ```

`title`, `date`, `category` 중 하나라도 빠지거나 category 값이 틀리면 사이트 빌드가 실패하고, 오류 메시지에 어느 파일의 어떤 항목이 문제인지 나옵니다.

## 3. GitHub에 올리기

1. https://github.com/zeenly/leesuhyun-blog 에 들어갑니다.
2. `src` → `content` → `blog` 폴더로 들어갑니다.
3. 오른쪽 위 **Add file** → **Create new file**을 누릅니다.
   - 이미 컴퓨터에 만들어 둔 파일이 있으면 **Upload files**로 끌어다 놓아도 됩니다.
4. 파일 이름 칸에 `reading-habits.md`처럼 이름을 적고, 내용을 붙여 넣습니다.
5. **Commit changes...** 를 누르고, `main` 브랜치에 바로 커밋합니다.

`main`에 커밋되면 배포가 다시 실행되어 몇 분 안에 사이트에 반영됩니다.

## 4. 이미지가 있는 글은 폴더로

이미지를 넣을 때는 파일 대신 폴더를 만들고, 글은 폴더 안의 `index.md`에 씁니다.

```
src/content/blog/
├── reading-habits.md          ← 이미지 없는 글
└── classroom-tour/            ← 이미지 있는 글
    ├── index.md
    └── board.jpg
```

- 폴더 이름이 글 주소가 됩니다. (`classroom-tour/index.md` → `/class/classroom-tour`)
- 본문에서 이미지는 `./`로 시작하는 상대 경로로 넣습니다.
  ```md
  ![칠판에 적은 끊어 읽기 기호](./board.jpg)
  ```
- GitHub에서는 `blog` 폴더에서 **Add file → Upload files**로 이미지와 `index.md`를 함께 올리면 됩니다.
  웹에서 새 폴더를 만들 때는 **Create new file**의 파일 이름 칸에 `classroom-tour/index.md`처럼 `/`를 넣으면 폴더가 같이 만들어집니다.
- 같은 이름으로 `이름.md`와 `이름/index.md`를 둘 다 만들지 마세요. 주소가 겹칩니다.
