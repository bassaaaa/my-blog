import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectSlug = process.argv[2]?.trim();
const projectName = process.argv.slice(3).join(' ').trim() || projectSlug;

if (!projectSlug) {
	console.error('使い方: npm run new:42 -- <課題slug> [表示名]');
	console.error('例: npm run new:42 -- ft-printf ft_printf');
	process.exit(1);
}

if (!/^[a-z0-9]+(?:[-_][a-z0-9]+)*$/.test(projectSlug)) {
	console.error('課題slugには小文字の英数字、ハイフン、アンダースコアだけを使う。');
	process.exit(1);
}

const scriptDir = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = join(scriptDir, '..');
const templatePath = join(repositoryRoot, 'templates', '42-retrospective.md');
const outputDir = join(repositoryRoot, 'content', '42tokyo');
const outputPath = join(outputDir, `42-${projectSlug}.md`);

if (existsSync(outputPath)) {
	console.error(`すでに存在する: ${outputPath}`);
	process.exit(1);
}

const date = new Intl.DateTimeFormat('sv-SE', {
	timeZone: 'Asia/Tokyo',
	year: 'numeric',
	month: '2-digit',
	day: '2-digit',
}).format(new Date());

const replacements = {
	'{{title}}': JSON.stringify(`${projectName}振り返り`),
	'{{date}}': date,
	'{{project}}': JSON.stringify(projectName),
	'{{description}}': JSON.stringify(`${projectName}で残しておきたいこと`),
};

let content = readFileSync(templatePath, 'utf8');
for (const [placeholder, value] of Object.entries(replacements)) {
	content = content.replaceAll(placeholder, value);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, content, 'utf8');

console.log(`作成した: ${outputPath}`);
console.log(`ページ: /blog/42-${projectSlug}`);
