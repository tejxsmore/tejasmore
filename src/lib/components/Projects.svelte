<script lang="ts">
	const projects = [
		{
			name: 'Cryptoden',
			slug: 'cryptoden',
			summary: 'Crypto NFT Trading Platform',
			description:
				'A decentralized platform where users can explore all NFTs available on the marketplace, view real-time prices of various cryptocurrencies, connect their crypto wallet, and seamlessly buy or sell NFTs.',
			image: '/assets/cryptoden.png',
			stack: ['React', 'Nextjs'],
			link: {
				live: 'https://cryptoden.vercel.app',
				github: 'https://github.com/tejxsmore/cryptoden'
			}
		},
		{
			name: 'Teker',
			slug: 'teker',
			summary: 'Crypto NFT Trading Platform',
			description:
				'A decentralized platform where users can explore all NFTs available on the marketplace, view real-time prices of various cryptocurrencies, connect their crypto wallet, and seamlessly buy or sell NFTs.',
			image: '/assets/cryptoden.png',
			stack: ['SvelteKit', 'PostgreSQL'],
			link: {
				live: 'https://teker.vercel.app',
				github: 'https://github.com/tejxsmore/teker'
			}
		},
		{
			name: 'Tekstack',
			slug: 'tekstack',
			summary: 'Software review and Blogging Platform',
			description:
				'Your all-in-one platform to discover, filter, and learn about the latest and best tools in AI, productivity, automation, and more. It is also a collaborative blog platform, users can write, read, update, and delete blogs, with support for tags to organize content. Readers can save, like, comment on, and share their favorite blogs.',
			image: '/assets/tekstack.png',
			stack: ['SvelteKit', 'Hygraph CMS'],
			link: {
				live: 'https://tekstack.tejasmore.in',
				github: 'https://github.com/tejxsmore/tekstack'
			}
		},
		{
			name: 'Hirehero',
			slug: 'hirehero',
			summary: 'Full fledged Job Portal',
			description:
				'End-to-end hiring platform with real-time communication, built-in code editor for interviews, and instant updates. Built with SvelteKit, PostgreSQL, and AWS.',
			image: '/assets/hirehero.png',
			stack: ['SvelteKit', 'Socket.io'],
			link: {
				live: 'https://hirehero.tejasmore.in',
				github: 'https://github.com/tejxsmore/hirehero'
			}
		}
	];
</script>

<div class="min-h-screen space-y-10">
	<h2 class="text-center text-2xl font-semibold">Projects</h2>
	<div class="grid gap-5 md:grid-cols-2">
		{#each projects as project, i}
			<div class="space-y-5 border border-[#3E3232] bg-[#000000]/50 p-5">
				<div class="flex items-center justify-between">
					<h3 class="text-xl font-semibold">{project.name}</h3>
					<div class="flex gap-5 font-mono text-[#C69774]">
						<a href={project.link.github} class="" target="_blank">[GITHUB]</a>
						<a href={project.link.live} class="" target="_blank">[LIVE]</a>
					</div>
				</div>
				<img src={project.image} alt={`Image of ${project.name}`} class="" />
			</div>
		{/each}
	</div>
</div>
