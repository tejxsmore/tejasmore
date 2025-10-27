<script lang="ts">
	import { onNavigate } from '$app/navigation';

	let menu = $state(false);
	let navRef: HTMLElement;

	// Close menu on route change
	onNavigate(() => {
		menu = false;
	});

	// Effect to handle body scroll lock
	$effect(() => {
		if (menu) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		// Cleanup function
		return () => {
			document.body.style.overflow = '';
		};
	});

	// Effect to handle click outside
	$effect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (menu && navRef && !navRef.contains(event.target as Node)) {
				menu = false;
			}
		}

		if (menu) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	});

	// Function to toggle menu
	function toggleMenu() {
		menu = !menu;
	}
</script>

<nav class="relative" bind:this={navRef}>
	<div class="flex items-center justify-between p-5 md:px-20 xl:px-40">
		<div>
			<a href="/" class="text-xl font-semibold">tejasmore//</a>
		</div>
		<div class="flex items-center gap-3 tracking-wide md:gap-10">
			<div class="hidden space-x-10 font-medium md:block">
				<a href="/projects" class="transition-colors duration-300 hover:text-[#f1c097]">Projects</a>
				<a href="/blog" class="transition-colors duration-300 hover:text-[#f1c097]">Blog</a>
				<a href="/gallery" class="transition-colors duration-300 hover:text-[#f1c097]">Gallery</a>
			</div>
			<a
				href="/assets/tejasmore-resume.pdf"
				download="tejasmore-resume.pdf"
				class="flex items-center gap-2 rounded-full bg-[#fcf0cc] p-2 px-5 text-sm font-medium text-[#212121] transition-colors duration-300 hover:bg-[#f1c097]"
			>
				Resume
			</a>
			<button
				onclick={toggleMenu}
				class="cursor-pointer rounded-full bg-[#fcf0cc] p-2.5 text-[#212121] transition-colors focus:outline-none md:hidden"
				aria-label="Toggle mobile menu"
				aria-expanded={menu}
			>
				<svg
					class="h-4 w-4"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<!-- Top line -->
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16"
						style="transform-origin: 12px 6px"
						class="transition-transform duration-300 ease-in-out {menu
							? 'translate-y-1.5 rotate-45'
							: ''}"
					/>
					<!-- Bottom line -->
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 18h16"
						style="transform-origin: 12px 18px"
						class="transition-transform duration-300 ease-in-out {menu
							? '-translate-y-1.5 -rotate-45'
							: ''}"
					/>
				</svg>
			</button>
		</div>
	</div>

	{#if menu}
		<div
			class="fixed inset-0 top-22 z-50 h-screen w-full overflow-y-auto bg-[#d84315] p-5 transition-opacity duration-300 md:hidden"
		>
			<div class="space-y-5 text-xl font-semibold">
				<a
					href="/projects"
					class="flex items-center justify-between transition-colors duration-300 hover:text-[#f1c097]"
				>
					<p>Projects</p>
					<div class="p-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							class="size-4"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
							/>
						</svg>
					</div>
				</a>
				<a
					href="/blog"
					class="flex items-center justify-between transition-colors duration-300 hover:text-[#f1c097]"
				>
					<p>Blog</p>
					<div class="p-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							class="size-4"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
							/>
						</svg>
					</div>
				</a>
				<a
					href="/gallery"
					class="flex items-center justify-between transition-colors duration-300 hover:text-[#f1c097]"
				>
					<p>Gallery</p>
					<div class="p-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							class="size-4"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
							/>
						</svg>
					</div>
				</a>
			</div>
		</div>
	{/if}
</nav>
