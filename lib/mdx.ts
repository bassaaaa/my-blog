import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';

export type Heading = { id: string; text: string; level: number };

export async function markdownToHtml(
	content: string,
): Promise<{ html: string; headings: Heading[] }> {
	const headings: Heading[] = [];

	const file = await unified()
		.use(remarkParse)
		.use(remarkRehype, { allowDangerousHtml: true })
		.use(rehypeSlug)
		.use(rehypePrettyCode, {
			theme: 'github-dark',
			keepBackground: true,
		})
		.use(() => (tree) => {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const visit = (node: any) => {
				if (node.type === 'element' && /^h[2-3]$/.test(node.tagName)) {
					const level = parseInt(node.tagName[1], 10);
					const id = node.properties?.id as string | undefined;
					const text = extractText(node);
					if (id && text) headings.push({ id, text, level });
				}
				node.children?.forEach(visit);
			};
			visit(tree);
		})
		.use(rehypeStringify, { allowDangerousHtml: true })
		.process(content);

	return { html: file.toString(), headings };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractText(node: any): string {
	if (node.type === 'text') return node.value;
	return (node.children ?? []).map(extractText).join('');
}
