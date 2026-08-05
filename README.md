# tsito.me

個人技術ブログ。Next.js App Router + Markdown で構築。

## スタック

- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS v4**
- **gray-matter** — Markdown frontmatter パース
- **unified / remark / rehype / rehype-pretty-code + Shiki** — Markdown → HTML 変換・シンタックスハイライト
- **rehype-slug** — 見出しへの id 付与（目次リンク用）
- **next-themes** — ダークモード

## はじめ方

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) で確認。

## 記事の追加

`content/<カテゴリ>/<slug>.md` にファイルを作成し、frontmatter を記述する。

```yaml
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

```yaml
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

`published: false`にすると下書き扱いになり、一覧にも個別ページにも表示されない。URLで確認するときは`true`にする。

### 42課題の振り返り

課題slugを指定すると、振り返り用のページを作成できる。

```bash
npm run new:42 -- ft-printf ft_printf
```

`content/42tokyo/42-ft-printf.md`が作成され、URLは`/blog/42-ft-printf`になる。第2引数の表示名を省略した場合は、slugがそのままタイトルとタグに使われる。

テンプレートは`templates/42-retrospective.md`にある。全項目を埋める必要はなく、不要な見出しは削除してよい。42課題の記事は自分用の記録として、箇条書きのまま公開してよい。

詳しい運用は[`docs/writing-workflow.md`](docs/writing-workflow.md)を参照。

## Project Structure

```
app/           # ページ & レイアウト
components/    # Header, Footer, PostCard, TagList, ThemeToggle, CategoryChip,
               # TableOfContents, Breadcrumb
lib/           # posts.ts（記事取得）, mdx.ts（Markdown 変換・見出し抽出）
types/         # post.ts（PostMeta, Post）
content/       # .md ファイル（カテゴリごとのサブフォルダ）
scripts/       # 記事雛形の生成コマンド
templates/     # content外に置く記事テンプレート
public/        # 静的ファイル
```

## デプロイ

Vercel にホスティング。`main` ブランチへの push で自動デプロイ。カスタムドメイン `tsito.me` を設定済み。
