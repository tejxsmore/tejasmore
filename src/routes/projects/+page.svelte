<script>
	const projects = [
		{
			name: 'Cryptoden',
			slug: 'cryptoden',
			image: '/assets/cryptoden.png',
			summary:
				'A decentralized platform where users can explore, buy and sell multiple NFTs and view real-time prices of various cryptocurrencies',
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
			summary:
				'End-to-end hiring platform with real-time communication, built-in code editor and full fledged employer dashboard',
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
			description: 'Discover all and upcoming AI, automation and productivity tools',
			stack: ['SvelteKit', 'Hygraph CMS'],
			link: {
				live: 'https://tekstack.tejasmore.in',
				github: 'https://github.com/tejxsmore/tekstack',
				youtube: 'https://youtube.com'
			}
		},
		{
			name: 'Nanolink',
			slug: 'nanolink',
			image: '/assets/nanolink.png',
			summary: 'Rust based URL shortener with random and custom links and click analysis',
			stack: ['Rust', 'PostgreSQL'],
			link: {
				live: 'https://nanolink.tejasmore.in',
				github: 'https://github.com/tejxsmore/nanolink',
				youtube: 'https://youtube.com'
			}
		}
	];
</script>

<div class="flex justify-center p-5 py-10 md:px-20 md:py-20 xl:px-40">
	<div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
		{#each projects as { name, slug, image, summary, stack, link }}
			<div class="rounded-[15px] border border-[#094a4a] bg-[#0a3b3b]">
				<img src={image} alt={`Image of ${name}`} class="rounded-[15px] p-1 pb-0" />
				<div class="space-y-5 p-5">
					<div class="flex items-center justify-between">
						<h2 class="text-lg font-semibold">{name}</h2>
						<div class="flex items-center gap-3">
							<a
								href={link.github}
								target="_blank"
								aria-label={`GitHub repository for ${name}`}
								class="rounded-full bg-[#094a4a] p-2 text-[#fcf0cc] transition-colors duration-300 hover:bg-[#fcf0cc] hover:text-[#212121]"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 32 32"
									fill="currentColor"
								>
									<path
										d="M16,2.345c7.735,0,14,6.265,14,14-.002,6.015-3.839,11.359-9.537,13.282-.7,.14-.963-.298-.963-.665,0-.473,.018-1.978,.018-3.85,0-1.312-.437-2.152-.945-2.59,3.115-.35,6.388-1.54,6.388-6.912,0-1.54-.543-2.783-1.435-3.762,.14-.35,.63-1.785-.14-3.71,0,0-1.173-.385-3.85,1.435-1.12-.315-2.31-.472-3.5-.472s-2.38,.157-3.5,.472c-2.677-1.802-3.85-1.435-3.85-1.435-.77,1.925-.28,3.36-.14,3.71-.892,.98-1.435,2.24-1.435,3.762,0,5.355,3.255,6.563,6.37,6.913-.403,.35-.77,.963-.893,1.872-.805,.368-2.818,.963-4.077-1.155-.263-.42-1.05-1.452-2.152-1.435-1.173,.018-.472,.665,.017,.927,.595,.332,1.277,1.575,1.435,1.978,.28,.787,1.19,2.293,4.707,1.645,0,1.173,.018,2.275,.018,2.607,0,.368-.263,.787-.963,.665-5.719-1.904-9.576-7.255-9.573-13.283,0-7.735,6.265-14,14-14Z"
									/>
								</svg>
							</a>
							<a
								href={link.youtube}
								target="_blank"
								aria-label={`Project demo of ${name}`}
								class="rounded-full bg-[#094a4a] p-2 text-[#fcf0cc] transition-colors duration-300 hover:bg-[#fcf0cc] hover:text-[#f70a0a]"
								><svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 32 32"
									fill="currentColor"
									><path
										d="M31.331,8.248c-.368-1.386-1.452-2.477-2.829-2.848-2.496-.673-12.502-.673-12.502-.673,0,0-10.007,0-12.502,.673-1.377,.37-2.461,1.462-2.829,2.848-.669,2.512-.669,7.752-.669,7.752,0,0,0,5.241,.669,7.752,.368,1.386,1.452,2.477,2.829,2.847,2.496,.673,12.502,.673,12.502,.673,0,0,10.007,0,12.502-.673,1.377-.37,2.461-1.462,2.829-2.847,.669-2.512,.669-7.752,.669-7.752,0,0,0-5.24-.669-7.752ZM12.727,20.758V11.242l8.364,4.758-8.364,4.758Z"
									></path></svg
								></a
							>
							<a
								href={link.live}
								target="_blank"
								class="flex items-center gap-2 rounded-full bg-[#fcf0cc] p-2 px-5 text-sm font-medium text-[#062121] transition-colors duration-300 hover:bg-[#dcd7b9]"
							>
								Visit
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="2.5"
									stroke="currentColor"
									class="size-3"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
									/>
								</svg>
							</a>
						</div>
					</div>
					<p class="font-medium text-[#96a38f]">{summary}</p>
					<div class="flex gap-3">
						{#each stack as stack}
							<p class="rounded-full bg-[#094a4a] px-3 py-0.5 text-sm font-medium text-[#fcf0cc]">
								{stack}
							</p>
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
