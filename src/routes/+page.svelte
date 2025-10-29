<script>
	import Contact from '$lib/components/Contact.svelte';
	import Music from '$lib/components/Music.svelte';
	import Reviews from '$lib/components/Reviews.svelte';
</script>

<div class="flex min-h-screen justify-center p-5 py-10 md:px-20 md:py-20 xl:px-40">
	<div class="space-y-5 text-center">
		<p class="flex justify-center gap-1 text-sm font-semibold text-[#eca77d]">
			Hello <span
				><svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-4"
				>
					<g transform="translate(12, 12) rotate(-25) translate(-12, -12)">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002"
						/>
					</g>
				</svg>
			</span> , I am
		</p>
		<h2 class="text-4xl font-semibold">Tejas More</h2>
	</div>
</div>

<Music />
<Reviews />
<Contact />
