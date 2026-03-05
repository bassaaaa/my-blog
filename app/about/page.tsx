import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | my-tech-blog',
  description: 'このブログについて',
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">About</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">自己紹介</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          42 Tokyoで学ぶプログラマーです。C言語から始まり、現在はWebフロントエンドやバックエンドを中心に学習しています。
          技術的なことだけでなく、趣味の自作キーボードや日々の学びについても記録していきます。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">スキルセット</h2>
        <div className="flex flex-wrap gap-2">
          {['C', 'TypeScript', 'React', 'Next.js', 'Python', 'Git', 'Linux'].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">このブログについて</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          42 Tokyoでの学習記録、趣味の電子工作、プログラミングの学びをまとめていきます。
          Next.js + TypeScript + Tailwind CSS で構築しています。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">リンク</h2>
        <ul className="flex flex-col gap-2">
          <li>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              X (Twitter)
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}
