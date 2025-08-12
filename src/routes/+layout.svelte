<script lang="ts">
	import '../app.css';

	let { children } = $props();
	import Navbar from '$lib/components/Navbar.svelte';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
</script>

<svelte:head>
	<title>Tejas More</title>
	<meta
		name="description"
		content="Portfolio of Tejas More, a software engineer from Mumbai specializing in full-stack web development, UI/UX, and modern JavaScript frameworks."
	/>

	<meta property="og:type" content="website" />
	<meta property="og:title" content="Tejas More — Software Engineer" />
	<meta
		property="og:description"
		content="Portfolio of Tejas More, a full-stack developer based in Mumbai. Explore projects, resume, and contact information."
	/>
	<meta property="og:url" content="https://tejasmore.in" />
	<link rel="canonical" href="https://tejasmore.in" />
	<!-- <link rel="icon" href="/favicon.ico" /> -->

	<meta name="author" content="Tejas More" />
	<meta name="robots" content="index, follow" />

	<meta property="profile:username" content="tejxsmore" />
	<meta property="profile:github" content="https://github.com/tejxsmore" />
	<meta property="profile:linkedin" content="https://linkedin.com/in/tejxsmore" />
	<meta property="profile:instagram" content="https://instagram.com/tejxsmore" />
</svelte:head>

<Navbar />
{@render children?.()}
