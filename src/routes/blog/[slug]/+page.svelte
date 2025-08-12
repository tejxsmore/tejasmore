<script lang="ts">
	import MarkdownParser from '$lib/components/MarkdownParser.svelte';

	const { data } = $props();
	const { blog } = data;

	let tableOfContentsHeadings = $state<{ id: string; text: string; level: number }[]>([]);

	function formatDate(isoDate: string): string {
		try {
			const date = new Date(isoDate);
			if (isNaN(date.getTime())) return 'Invalid date';
			const months = [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December'
			];
			const day = String(date.getDate()).padStart(2, '0');
			const month = months[date.getMonth()];
			const year = date.getFullYear();
			return `${day} ${month}, ${year}`;
		} catch {
			return 'Invalid date';
		}
	}

	// Callback function to receive headings from MarkdownParser
	function handleHeadingsExtracted(extracted: { id: string; text: string; level: number }[]) {
		tableOfContentsHeadings = extracted;
	}

	// Function to scroll to a specific heading ID
	function scrollToHeading(id: string) {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}
</script>

<div class="p-5 py-10 md:px-20 md:py-20 xl:px-40">
	<main class="order-2 flex-1 space-y-10 md:order-1 md:space-y-20">
		<h1 class="mx-auto max-w-4xl text-center text-2xl font-semibold md:text-4xl">{blog.title}</h1>
		<p class="text-center font-mono text-[#C69774]">{formatDate(blog.createdAt).toUpperCase()}</p>
		<hr class="hidden border-[#3E3232] md:block" />
		<div class="space-y-10 sm:space-y-20 lg:flex lg:flex-row-reverse lg:gap-20 lg:space-y-0">
			<div class="h-full w-full space-y-5 border border-[#3E3232] bg-[#000000]/50 p-5 lg:max-w-1/3">
				<h2 class="text-2xl font-semibold">Table of Contents</h2>
				<nav>
					<ul class="">
						{#each tableOfContentsHeadings as heading (heading.id)}
							<li class="py-2.5 transition-all duration-200 hover:text-[#C69774]">
								<a
									onclick={() => scrollToHeading(heading.id)}
									href={`#${heading.id}`}
									class="="
									class:ml-4={heading.level === 3}
									class:ml-8={heading.level === 4}
									class:font-medium={heading.level === 2}
								>
									{heading.text}
								</a>
							</li>
						{/each}
					</ul>
				</nav>
			</div>
			<!-- <hr class="block border-[#3E3232] lg:hidden" /> -->
			<div class="w-full lg:max-w-2/3">
				<MarkdownParser content={blog.content} onHeadingsExtracted={handleHeadingsExtracted} />
			</div>
		</div>
	</main>
</div>
