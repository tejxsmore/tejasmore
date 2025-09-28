<script lang="ts">
	const projects = [
		{
			name: 'Cryptoden',
			slug: 'cryptoden',
			image: '/assets/cryptoden.png',
			summary: 'Crypto NFT Trading Platform',
			description:
				'A decentralized platform where users can explore all NFTs available on the marketplace, view real-time prices of various cryptocurrencies, connect their crypto wallet, and seamlessly buy or sell NFTs.',
			stack: ['React', 'Nextjs'],
			link: {
				live: 'https://cryptoden.vercel.app',
				github: 'https://github.com/tejxsmore/cryptoden',
				youtube: 'https://youtube.com'
			}
		},
		{
			name: 'Hirehero',
			slug: 'hirehero',
			image: '/assets/hirehero.png',
			summary: 'Full fledged Job Portal',
			description:
				'End-to-end hiring platform with real-time communication, built-in code editor for interviews, and instant updates. Built with SvelteKit, PostgreSQL, and AWS.',
			stack: ['SvelteKit', 'Socket.io'],
			link: {
				live: 'https://hirehero.tejasmore.in',
				github: 'https://github.com/tejxsmore/hirehero',
				youtube: 'https://youtube.com'
			}
		},
		{
			name: 'Tekstack',
			slug: 'tekstack',
			image: '/assets/tekstack.png',
			summary: 'Software review and Blogging Platform',
			description:
				'Your all-in-one platform to discover, and learn about the latest and best tools in AI, productivity, automation. It is a platform where users can write, read, update, and delete blogs, with support for tags.',
			stack: ['SvelteKit', 'Hygraph CMS'],
			link: {
				live: 'https://tekstack.tejasmore.in',
				github: 'https://github.com/tejxsmore/tekstack',
				youtube: 'https://youtube.com'
			}
		},
		{
			name: 'Teker',
			slug: 'teker',
			image: '/assets/tekstack.png',
			summary: 'Crypto NFT Trading Platform',
			description:
				'A decentralized platform where users can explore all NFTs available on the marketplace, view real-time prices of various cryptocurrencies, connect their crypto wallet, and seamlessly buy or sell NFTs.',
			stack: ['SvelteKit', 'PostgreSQL'],
			link: {
				live: 'https://teker.vercel.app',
				github: 'https://github.com/tejxsmore/teker',
				youtube: 'https://youtube.com'
			}
		},
		{
			name: 'Nanolink',
			slug: 'nanolink',
			image: '/assets/nanolink.png',
			summary: 'URL shortener with custom links',
			description:
				'It is a Rust based URL shortener. User can create custom and random url links which is stored in a secured database, user can see the analytics on these links in the dashboard',
			stack: ['Rust', 'PostgreSQL'],
			link: {
				live: 'https://nanolink.tejasmore.in',
				github: 'https://github.com/tejxsmore/nanolink',
				youtube: 'https://youtube.com'
			}
		}
	];
</script>

<div class="min-h-screen space-y-10">
	<h2 class="text-center text-2xl font-semibold">Projects</h2>
	<div class="grid gap-5 md:grid-cols-3">
		{#each projects as project, i}
			<div class="border border-[#255344] bg-[#1c332c]">
				<img src={project.image} alt={project.name} class="border-b border-[#255344]" />

				<div class="space-y-5 p-5">
					<div class="flex items-center justify-between">
						<h2 class="text-xl font-semibold">{project.name}</h2>
						<div class="flex items-center gap-5 font-mono text-[#b7c6b3]">
							<a
								href={project.link.github}
								aria-label={`GitHub repository for ${project.name}`}
								class="transition-all duration-200 hover:text-[#858b59]"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 32 32"
									fill="#fff7d4"
								>
									<path
										d="M16,2.345c7.735,0,14,6.265,14,14-.002,6.015-3.839,11.359-9.537,13.282-.7,.14-.963-.298-.963-.665,0-.473,.018-1.978,.018-3.85,0-1.312-.437-2.152-.945-2.59,3.115-.35,6.388-1.54,6.388-6.912,0-1.54-.543-2.783-1.435-3.762,.14-.35,.63-1.785-.14-3.71,0,0-1.173-.385-3.85,1.435-1.12-.315-2.31-.472-3.5-.472s-2.38,.157-3.5,.472c-2.677-1.802-3.85-1.435-3.85-1.435-.77,1.925-.28,3.36-.14,3.71-.892,.98-1.435,2.24-1.435,3.762,0,5.355,3.255,6.563,6.37,6.913-.403,.35-.77,.963-.893,1.872-.805,.368-2.818,.963-4.077-1.155-.263-.42-1.05-1.452-2.152-1.435-1.173,.018-.472,.665,.017,.927,.595,.332,1.277,1.575,1.435,1.978,.28,.787,1.19,2.293,4.707,1.645,0,1.173,.018,2.275,.018,2.607,0,.368-.263,.787-.963,.665-5.719-1.904-9.576-7.255-9.573-13.283,0-7.735,6.265-14,14-14Z"
									/>
								</svg>
							</a>
							<a
								href={project.link.live}
								aria-label={`Live demo for ${project.name}`}
								class="transition-all duration-200 hover:text-[#858b59]"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 32 32"
									fill="#fff7d4"
								>
									<path
										d="M31.331,8.248c-.368-1.386-1.452-2.477-2.829-2.848-2.496-.673-12.502-.673-12.502-.673,0,0-10.007,0-12.502,.673-1.377,.37-2.461,1.462-2.829,2.848-.669,2.512-.669,7.752-.669,7.752,0,0,0,5.241,.669,7.752,.368,1.386,1.452,2.477,2.829,2.847,2.496,.673,12.502,.673,12.502,.673,0,0,10.007,0,12.502-.673,1.377-.37,2.461-1.462,2.829-2.847,.669-2.512,.669-7.752,.669-7.752,0,0,0-5.24-.669-7.752ZM12.727,20.758V11.242l8.364,4.758-8.364,4.758Z"
									/>
								</svg>
							</a>
							<a
								href={project.link.youtube}
								aria-label={`YouTube video for ${project.name}`}
								class=" transition-all duration-200 hover:text-[#858b59]"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									width="24"
									height="24"
									fill="none"
								>
									<circle
										cx="12"
										cy="12"
										r="2"
										stroke="#fff7d4"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M7.5 8C6.5 9 6 10.5 6 12C6 13.5 6.5 15 7.5 16"
										stroke="#fff7d4"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M4.5 6C3 7.5 2 9.5 2 12C2 14.5 3 16.5 4.5 18"
										stroke="#fff7d4"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M16.5 16C17.5 15 18 13.5 18 12C18 10.5 17.5 9 16.5 8"
										stroke="#fff7d4"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M19.5 18C21 16.5 22 14.5 22 12C22 9.5 21 7.5 19.5 6"
										stroke="#fff7d4"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</a>
						</div>
					</div>
					<div class="space-y-2">
						<p class="font-medium text-[#d8d4c1]">{project.summary}</p>
						<p class="text-sm text-[#d8d4c1]">{project.description}</p>
					</div>
					<div class="flex gap-5">
						{#each project.stack as stack}
							<p class="rounded-full bg-[#1e4035] px-3 py-1 text-sm font-normal">{stack}</p>
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
