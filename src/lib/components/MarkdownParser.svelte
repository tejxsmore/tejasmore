<script lang="ts">
	interface Props {
		content: string;
		className?: string;
		onHeadingsExtracted?: (headings: { id: string; text: string; level: number }[]) => void;
	}

	let { content, className = '', onHeadingsExtracted }: Props = $props();

	let parsedContent = $state('');
	let extractedHeadings = $state<{ id: string; text: string; level: number }[]>([]);

	// Helper function to create a URL-friendly slug from text
	function slugify(text: string): string {
		return text
			.toLowerCase()
			.replace(/[^\w\s-]/g, '') // Remove non-word chars (except spaces and hyphens)
			.replace(/[\s_-]+/g, '-') // Replace spaces/underscores with single hyphen
			.replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
	}

	function parseMarkdown(markdown: string): {
		html: string;
		headings: { id: string; text: string; level: number }[];
	} {
		if (!markdown) return { html: '', headings: [] };

		const tempHeadings: { id: string; text: string; level: number }[] = [];
		let html = markdown;

		// --- Process Headings First to Extract and Add IDs ---
		// This regex captures all heading levels and their text.
		const headingRegex = /^(#+)\s*(.*)$/gm;
		let match;
		let lastIndex = 0;
		let newHtmlParts: string[] = [];

		// Iterate through matches to process headings
		while ((match = headingRegex.exec(html)) !== null) {
			const hashes = match[1];
			const headingText = match[2];
			const level = hashes.length;
			const id = slugify(headingText);

			tempHeadings.push({ id, text: headingText, level });

			// Append content before this heading
			newHtmlParts.push(html.substring(lastIndex, match.index));

			// Generate the HTML for the heading with ID and user's custom classes
			const sizeMap: Record<number, string> = {
				1: 'text-2xl',
				2: 'text-xl',
				3: 'text-lg',
				4: 'text-base',
				5: 'text-sm',
				6: 'text-xs'
			};
			newHtmlParts.push(
				`<h${level} id="${id}" class="${sizeMap[level]} pt-5 pb-2.5 font-medium text-[#fcf0cc]">${headingText}</h${level}>`
			);

			lastIndex = headingRegex.lastIndex;
		}
		// Append any remaining content after the last heading
		newHtmlParts.push(html.substring(lastIndex));
		html = newHtmlParts.join('');

		// --- Apply other transformations (order matters) ---

		// Inline code
		html = html.replace(
			/`([^`]+)`/g,
			'<code class="bg-gray-300 px-1.5 py-0.5 rounded font-mono text-sm text-[#fcf0cc]">$1</code>'
		);
		// Bold and italic (limit to font-semibold, not full bold)
		html = html.replace(
			/\*\*(.*?)\*\*/g,
			'<strong class="font-semibold text-[#fcf0cc]">$1</strong>'
		);
		html = html.replace(/__(.*?)__/g, '<strong class="font-bold text-[#fcf0cc]">$1</strong>');
		html = html.replace(/\*(.*?)\*/g, '<em class="text-[#fcf0cc]">$1</em>');
		html = html.replace(/_(.*?)_/g, '<em class="text-[#fcf0cc]">$1</em>');
		// Blockquote
		html = html.replace(
			/^> (.*$)/gm,
			'<blockquote class="border-l-3 border-black pl-3 py-1.5 italic bg-[#e27549] my-3 text-[#fcf0cc]">$1</blockquote>'
		);
		// Horizontal rule
		html = html.replace(/^\-\-\-$/gm, '<hr class="border-t my-5 mb-7.5 border-[#0a3b3b]">');
		// Links
		html = html.replace(
			/\[([^\]]+)\]$$([^)]+)$$/g,
			'<a href="$2" class="text-[#fcf0cc] hover:underline">$1</a>'
		);
		// Images
		html = html.replace(
			/!\[([^\]]+)\]$$([^)]+)$$/g,
			'<img src="$2" alt="$1" class="max-w-full h-auto rounded-[10px] my-5">'
		);

		// Process lists
		html = processLists(html);

		// Paragraphs
		html = html.replace(/^(?!<[a-z\/].*>)(.+)$/gm, '<p class="my-5 text-[#fcf0cc]">$1</p>');
		html = html.replace(/<p class="my-5 text-[#fcf0cc]"><\/p>/g, ''); // Remove empty paragraphs
		html = html.replace(/<\/p>\s*<p/g, '</p>\n<p'); // Ensure paragraphs are on new lines

		return { html, headings: tempHeadings };
	}

	// This function processes lists based on the user's original implementation
	function processLists(html: string): string {
		// Detect bullet list items
		html = html.replace(/^(\s*)([\-\*]) (.*$)/gm, (match, space, bullet, content) => {
			const indent = space.length;
			return `<li data-indent="${indent}" class="mb-1 text-[#fcf0cc]">${content}</li>`;
		});
		// Detect numbered list items
		html = html.replace(/^(\s*)(\d+\.) (.*$)/gm, (match, space, number, content) => {
			const indent = space.length;
			return `<li data-indent="${indent}" data-ordered="true" class="mb-1 text-[#fcf0cc]">${content}</li>`;
		});

		const lines = html.split('\n');
		const result: string[] = [];
		const listStack: string[] = [];

		for (const line of lines) {
			if (line.includes('<li data-indent=')) {
				const indent = parseInt(line.match(/data-indent="(\d+)"/)?.[1] || '0');
				const isOrdered = line.includes('data-ordered="true"');
				const listType = isOrdered ? 'ol' : 'ul';
				const listClass = isOrdered
					? 'list-decimal pl-5 marker:font-medium marker:text-[#fcf0cc]'
					: 'list-disc pl-5 marker:font-medium marker:text-[#fcf0cc]';

				while (listStack.length > indent) {
					result.push(`</${listStack.pop()!}>`);
				}
				if (listStack.length <= indent) {
					result.push(`<${listType} class="${listClass}">`);
					listStack.push(listType);
				}
				const cleanedLine = line
					.replace(/ data-indent="\d+"/, '')
					.replace(/ data-ordered="true"/, '');
				result.push(cleanedLine);
			} else {
				while (listStack.length > 0) {
					result.push(`</${listStack.pop()!}>`);
				}
				result.push(line);
			}
		}
		while (listStack.length > 0) {
			result.push(`</${listStack.pop()!}>`);
		}
		return result.join('\n');
	}

	// Use an effect to re-parse markdown whenever the content changes
	$effect(() => {
		const result = parseMarkdown(content || '');
		parsedContent = result.html;
		extractedHeadings = result.headings;
	});

	// Separate effect to call the callback when headings change
	$effect(() => {
		if (onHeadingsExtracted && extractedHeadings.length >= 0) {
			onHeadingsExtracted(extractedHeadings);
		}
	});
</script>

<div class={`prose max-w-none ${className}`}>
	{@html parsedContent}
</div>
