<script>
	import Projects from '$lib/components/Projects.svelte';
	import Contact from '$lib/components/Contact.svelte';
</script>

<div class="space-y-20 p-5 py-10 md:px-20 md:py-20 xl:px-40">
	<div class="min-h-screen space-y-5 text-center">
		<p class="text-xl font-semibold">Hello, I am</p>
		<h1 class="text-[60px] font-bold md:text-[120px]">
			TEJAS MORE
			<span class="font-mono text-base font-normal text-[#C69774]">[LINKS]</span>
		</h1>

		<p class="mx-auto max-w-xl text-xl font-semibold">
			Software Engineer from Mumbai, I build beautiful user interfaces
		</p>
	</div>

	<Projects />
	<Contact />
</div>
