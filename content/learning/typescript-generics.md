---
title: "TypeScriptのジェネリクスを理解する"
date: "2025-02-20"
category: "learning"
tags: ["TypeScript", "ジェネリクス", "型システム"]
description: "TypeScriptのジェネリクスの基礎から応用まで、実例を交えて解説します。"
published: true
---

## ジェネリクスとは

ジェネリクスは、型を引数として受け取る仕組みです。再利用可能な型安全なコードを書くために欠かせません。

## 基本的な使い方

### シンプルな例

```typescript
function identity<T>(arg: T): T {
  return arg
}

const str = identity<string>("hello") // string
const num = identity<number>(42)      // number
```

### 配列を使う場合

```typescript
function firstElement<T>(arr: T[]): T | undefined {
  return arr[0]
}

const first = firstElement([1, 2, 3]) // number
```

## 制約（Constraints）

`extends` を使ってジェネリクスに制約をつけられます。

```typescript
interface HasLength {
  length: number
}

function logLength<T extends HasLength>(arg: T): void {
  console.log(arg.length)
}

logLength("hello")   // OK: string has .length
logLength([1, 2, 3]) // OK: array has .length
// logLength(42)     // Error: number doesn't have .length
```

## 実践的な例

### APIレスポンスの型

```typescript
type ApiResponse<T> = {
  data: T
  status: number
  message: string
}

type User = { id: number; name: string }

async function fetchUser(id: number): Promise<ApiResponse<User>> {
  const res = await fetch(`/api/users/${id}`)
  return res.json()
}
```

## まとめ

ジェネリクスを使いこなすことで、型安全性を保ちながら柔軟なコードが書けます。最初は難しく感じますが、使えば使うほど強力さを実感できます。
