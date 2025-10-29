<script lang="ts">
	interface Track {
		id: number;
		title: string;
		artist: string;
		album: string;
		cover: string;
		src: string;
	}

	let tracks = $state<Track[]>([]);
	let current = $state<number>(0);
	let isPlaying = $state<boolean>(false);
	let loading = $state<boolean>(true);
	let audioEl = $state<HTMLAudioElement | null>(null);
	let touchStartX = $state<number>(0);
	let swipeOffset = $state<number>(0);
	let isTransitioning = $state<boolean>(false);

	const trackNames = [
		'Madira',
		'El Matador',
		'Pickup',
		'Bas Jhutt',
		'Wajah',
		'Akela',
		'Guldasta',
		'Pancake',
		'Video Games'
	];

	$effect(() => {
		// Initialize tracks on mount
		tracks = trackNames.map((name, i) => ({
			id: i,
			title: name,
			artist: 'Seedhe Maut',
			album: 'DL91 FM',
			cover: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.genius.com%2F7a7aeaf5af52ecf14c13b1ca09242672.1000x1000x1.png&f=1&nofb=1&ipt=ef10d83bb778bdfd4bf891401c03bea53427e2c50192513473dcf0f2c866e650`,
			src: `/music/Seedhe Maut - DL91 FM - 01-${String(i + 1).padStart(2, '0')} ${name}.flac`
		}));
		loading = false;
	});

	$effect(() => {
		// Update audio source when track changes
		if (audioEl && tracks.length > 0) {
			audioEl.src = tracks[current].src;
			if (isPlaying) {
				audioEl.play().catch((err: any) => console.error('Play error:', err));
			}
		}
	});

	function togglePlay() {
		if (!audioEl) return;
		if (isPlaying) {
			audioEl.pause();
		} else {
			audioEl.play().catch((err: any) => console.error('Play error:', err));
		}
	}

	function nextTrack() {
		current = (current + 1) % tracks.length;
		isPlaying = true;
	}

	function prevTrack() {
		current = (current - 1 + tracks.length) % tracks.length;
		isPlaying = true;
	}

	function handlePlay() {
		isPlaying = true;
	}

	function handlePause() {
		isPlaying = false;
	}

	function handleEnded() {
		nextTrack();
	}

	function handleTouchStart(e: TouchEvent) {
		touchStartX = e.touches[0].clientX;
		swipeOffset = 0;
	}

	function handleTouchMove(e: TouchEvent) {
		if (isTransitioning) return;
		const touchEndX = e.touches[0].clientX;
		const diff = touchEndX - touchStartX;

		// Only update swipeOffset for horizontal swipes
		if (Math.abs(diff) > 10) {
			e.preventDefault();
			swipeOffset = diff;
		}
	}

	function handleTouchEnd(e: TouchEvent) {
		if (isTransitioning) return;

		const touchEndX = e.changedTouches[0].clientX;
		const swipeThreshold = 80;
		const diff = touchEndX - touchStartX;

		if (Math.abs(diff) > swipeThreshold) {
			isTransitioning = true;

			if (diff > 0) {
				// Swipe right -> previous track
				prevTrack();
			} else {
				// Swipe left -> next track
				nextTrack();
			}

			// Animate out then reset
			setTimeout(() => {
				swipeOffset = 0;
				isTransitioning = false;
			}, 300);
		} else {
			// Snap back if threshold not met
			swipeOffset = 0;
		}

		touchStartX = 0;
	}

	// Mouse events for desktop
	let isMouseDown = $state<boolean>(false);

	function handleMouseDown(e: MouseEvent) {
		isMouseDown = true;
		touchStartX = e.clientX;
		swipeOffset = 0;
	}

	function handleMouseMove(e: MouseEvent) {
		if (!isMouseDown || isTransitioning) return;
		const diff = e.clientX - touchStartX;

		if (Math.abs(diff) > 10) {
			e.preventDefault();
			swipeOffset = diff;
		}
	}

	function handleMouseUp(e: MouseEvent) {
		if (!isMouseDown) return;
		isMouseDown = false;

		const mouseEndX = e.clientX;
		const swipeThreshold = 80;
		const diff = mouseEndX - touchStartX;

		if (Math.abs(diff) > swipeThreshold) {
			isTransitioning = true;

			if (diff > 0) {
				prevTrack();
			} else {
				nextTrack();
			}

			setTimeout(() => {
				swipeOffset = 0;
				isTransitioning = false;
			}, 300);
		} else {
			swipeOffset = 0;
		}

		touchStartX = 0;
	}

	function handleMouseLeave() {
		if (isMouseDown) {
			isMouseDown = false;
			swipeOffset = 0;
			touchStartX = 0;
		}
	}

	function getNextTrack() {
		return tracks[(current + 1) % tracks.length];
	}

	function getPrevTrack() {
		return tracks[(current - 1 + tracks.length) % tracks.length];
	}
</script>

{#if loading}
	<div class="pointer-events-none fixed bottom-5 left-1/2 -translate-x-1/2">
		<div
			class="pointer-events-auto w-[90vw] max-w-xs rounded-[15px] border border-[#e27549] bg-[#dd5c2f] p-4 opacity-95 backdrop-blur-xl"
		>
			<p class="font-semibold text-white">Loading your tracks...</p>
		</div>
	</div>
{:else}
	<div class="pointer-events-none fixed bottom-5 left-1/2 -translate-x-1/2">
		<div
			role="button"
			tabindex="0"
			class="pointer-events-auto w-[90vw] max-w-xs focus:outline-none"
			style="touch-action: pan-y; user-select: none; -webkit-user-select: none; cursor: grab;"
			ontouchstart={handleTouchStart}
			ontouchmove={handleTouchMove}
			ontouchend={handleTouchEnd}
			onmousedown={handleMouseDown}
			onmousemove={handleMouseMove}
			onmouseup={handleMouseUp}
			onmouseleave={handleMouseLeave}
		>
			<div
				class="overflow-hidden rounded-[15px] border border-[#e27549] bg-[#dd5c2f] p-2 opacity-95 backdrop-blur-xl"
			>
				<div class="relative flex items-center gap-2">
					<!-- Album Art -->
					<div class="relative flex-shrink-0">
						<img
							src={tracks[current].cover}
							alt="Album Art"
							class="h-12 w-12 rounded-[10px] object-cover"
							draggable="false"
						/>
					</div>

					<!-- Track Info Container with sliding tracks -->
					<div class="relative flex min-w-0 flex-1 flex-col overflow-hidden">
						<div class="relative h-12">
							<!-- Previous Track (visible when swiping right) -->
							{#if swipeOffset > 0}
								<div
									class="absolute inset-0"
									style="transform: translateX(calc(-100% + {swipeOffset}px)); transition: {isTransitioning
										? 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
										: 'none'};"
								>
									<h2 class="truncate text-base font-semibold text-white">
										{getPrevTrack().title}
									</h2>
									<p class="truncate text-sm font-medium text-[#eca77d]">
										{getPrevTrack().artist} • {getPrevTrack().album}
									</p>
								</div>
							{/if}

							<!-- Current Track -->
							<div
								class="absolute inset-0"
								style="transform: translateX({swipeOffset}px); transition: {isTransitioning
									? 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
									: 'none'};"
							>
								<h2 class="truncate text-base font-semibold text-white">
									{tracks[current].title}
								</h2>
								<p class="truncate text-sm font-medium text-[#eca77d]">
									{tracks[current].artist} • {tracks[current].album}
								</p>
							</div>

							<!-- Next Track (visible when swiping left) -->
							{#if swipeOffset < 0}
								<div
									class="absolute inset-0"
									style="transform: translateX(calc(100% + {swipeOffset}px)); transition: {isTransitioning
										? 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
										: 'none'};"
								>
									<h2 class="truncate text-base font-semibold text-white">
										{getNextTrack().title}
									</h2>
									<p class="truncate text-sm font-medium text-[#eca77d]">
										{getNextTrack().artist} • {getNextTrack().album}
									</p>
								</div>
							{/if}
						</div>
					</div>

					<!-- Play/Pause Button -->
					<div class="flex-shrink-0">
						<button
							onclick={togglePlay}
							class="cursor-pointer rounded-full bg-[#e27549] p-3 text-[#fcf0cc] transition-colors hover:bg-[#f06c3f] focus:outline-none"
							aria-label={isPlaying ? 'Pause' : 'Play'}
						>
							{#if isPlaying}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="currentColor"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<rect x="14" y="4" width="4" height="16" rx="1" />
									<rect x="6" y="4" width="4" height="16" rx="1" />
								</svg>
							{:else}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="currentColor"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path d="M5 3l14 9-14 9V3z" />
								</svg>
							{/if}
						</button>
					</div>
				</div>

				<!-- Hidden Audio Element -->
				<audio bind:this={audioEl} onplay={handlePlay} onpause={handlePause} onended={handleEnded}
				></audio>
			</div>
		</div>
	</div>
{/if}
