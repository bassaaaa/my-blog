# 記事執筆ワークフロー

## 42課題の振り返り

継続を最優先にする。読者向けに整えず、あとで自分が思い出すための情報だけを残す。

### 1. ページを作る

課題を始めたとき、または振り返りを書くときに次のコマンドを実行する。

```bash
npm run new:42 -- <課題slug> [表示名]
```

例:

```bash
npm run new:42 -- ft-printf ft_printf
npm run new:42 -- get-next-line get_next_line
npm run new:42 -- born2beroot
```

`content/42tokyo/42-<課題slug>.md`が作成される。ファイル名はブログ全体でslugになるため、ほかの記事と重複しにくいように`42-`が自動で付く。

既存の記事はURLを変えないため改名せず、この規則は新規記事から使う。

### 2. メモを足す

作業中は`作業メモ`へ日付と箇条書きを足す。課題が終わったら、覚えておきたい項目だけを埋める。

- 全項目を埋めなくてよい
- 空欄の見出しは残しても消してもよい
- 文章に直さなくてよい
- 課題の説明、読者向けの前置き、注意書き、まとめは不要
- 後日気づいたことは同じページへ追記する

生成時点で`published: true`なので、通常の記事と同じように一覧と`42Tokyo`カテゴリへ表示される。

### 3. 保存する

通常は`main`上でページ単位にcommitする。別ブランチで書いた場合だけPRを使う。Issueや専用ブランチは必要なときだけ作る。

```bash
git add content/42tokyo/42-<課題slug>.md
git commit -m "post: <課題名>の振り返り"
git push
```

`main`へのpush後、Vercelのデプロイが完了すれば反映される。

## 通常の記事

42課題の振り返り以外で執筆管理が必要な場合は、以下のフローを使う。

### 1. アイデアをIssueに登録する

新しい記事アイデアが浮かんだらIssueを作成する。

```bash
gh issue create --repo bassaaaa/tsito.me \
  --title "記事タイトル" \
  --label "アイデア" \
  --body "## 概要\n\n## 書くこと\n- "
```

または[GitHub Issues](https://github.com/bassaaaa/tsito.me/issues)から直接作成する。

### 2. 執筆を開始する

Issueに「執筆中」ラベルを付けてブランチを切る。

```bash
gh issue edit <issue番号> --repo bassaaaa/tsito.me --add-label "執筆中"
git checkout -b post/<スラッグ>
```

例：
```bash
gh issue edit 1 --repo bassaaaa/tsito.me --add-label "執筆中"
git checkout -b post/42tokyo-kickoff
```

### 3. 記事ファイルを作成する

カテゴリに応じてディレクトリを選択する。

```
content/
  42tokyo/   # 42 Tokyo 関連
  others/    # その他
```

ファイル名は `YYYY-MM-DD.md` とする。

```markdown
---
title: "記事タイトル"
date: "YYYY-MM-DD"
category: "42Tokyo"
tags: ["タグ1", "タグ2"]
description: "記事の概要"
published: true
---

本文...
```

### 4. PRを作成してマージする

`Closes #<issue番号>`を本文に含めると、マージ時にIssueが自動クローズされる。

```bash
git add content/
git commit -m "post: 記事タイトル"
git push origin post/<スラッグ>
gh pr create \
  --title "記事: 記事タイトル" \
  --body "Closes #<issue番号>"
```

マージ → Vercel が自動デプロイ → Issue クローズ の順で完結する。

## ラベル一覧

| ラベル | 用途 |
|--------|------|
| `アイデア` | 記事アイデア（未着手） |
| `執筆中` | 執筆中 |
| `42tokyo` | 42 Tokyo 関連 |
| `技術` | 技術・開発系 |
| `ガジェット` | ガジェット・デバイス |
| `振り返り` | 振り返り・日記 |
