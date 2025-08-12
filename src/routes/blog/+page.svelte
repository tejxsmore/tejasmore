<script lang="ts">
	const { data } = $props();
	const { blogs } = data;

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
</script>

<div class="grid gap-5 p-5 py-10 md:grid-cols-2 md:px-20 md:py-20 xl:px-40">
	{#each blogs as blog}
		<div class="space-y-5 border border-[#3E3232] bg-[#000000]/50 p-5">
			<div><a href={`/blog/${blog.slug}`} class="text-2xl font-semibold">{blog.title}</a></div>
			<p class="font-mono text-[#C69774]">{formatDate(blog.createdAt).toUpperCase()}</p>
		</div>
	{/each}
</div>
