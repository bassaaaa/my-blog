# tsito.me

個人技術ブログ。Next.js App Router + Markdown で構築。

## スタック

- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS v4**
- **gray-matter** — Markdown frontmatter パース
- **unified / remark / rehype / rehype-pretty-code** — Markdown → HTML 変換・シンタックスハイライト
- **next-themes** — ダークモード

## はじめ方

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) で確認。

## 記事の追加

`content/<カテゴリ>/<slug>.md` にファイルを作成し、frontmatter を記述する。

```md
---
title: '記事タイトル'
date: '2026-01-01'
category: 'カテゴリ'
tags: ['tag1', 'tag2']
description: '記事の説明'
published: true
---

本文
```

外部サイト（note など）の記事を載せる場合は `externalUrl` と `externalLabel` を追加する。

```md
---
title: '記事タイトル'
date: '2026-01-01'
category: 'カテゴリ'
tags: ['tag1', 'tag2']
description: '記事の説明'
published: true
externalUrl: 'https://note.com/xxxxx'
externalLabel: 'noteで読む'
---
```

## Project Structure

```bash
app/           # ページ & レイアウト
components/    # Header, Footer, PostCard, TagList, ThemeToggle, CategoryChip
lib/           # posts.ts, mdx.ts
types/         # post.ts
content/       # .md ファイル（カテゴリごとのサブフォルダ）
public/        # 静的ファイル
```
