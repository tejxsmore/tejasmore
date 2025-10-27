<script>
	import { onMount } from 'svelte';

	const reviews = [
		{
			name: 'Mummy',
			relationship: 'Mom',
			rating: 5,
			review:
				'My good boy. Works too much on computer and codes till late night. Very hardworking 10/10 beta material.'
		},
		{
			name: 'Guddu',
			relationship: 'Lil sister',
			rating: 4,
			review:
				"Bhaiya thinks he's coding the next Google. Reality? He's centering a div at 2 AM and calling it 'problem-solving'."
		},
		{
			name: 'Anonymous',
			relationship: 'Opps',
			rating: 2,
			review: 'Cocky af'
		},
		{
			name: 'Teammate',
			relationship: 'Freeloader',
			rating: 3,
			review:
				"Carried the whole project while I provided 'moral support'. Didn't even credit me first. Red flag 🚩"
		},
		{
			name: 'Anonymous',
			relationship: 'Linkedin Recruiter',
			rating: 4,
			review:
				"Sent him an 'exciting opportunity' for a 6-month unpaid internship with 'great exposure'. He left me on read. Probably overqualified."
		},
		{
			name: 'Prof. Kulkarni',
			relationship: 'College Professor',
			rating: 3,
			review: 'Perfect assignments, always early. Only flaw? Actually wants to learn. The audacity.'
		},
		{
			name: 'Sharma Uncle',
			relationship: 'Neighbour',
			rating: 2,
			review:
				"My son is at Microsoft, this boy is still 'building projects'. Beta, when job? When marriage? But I must say, he greets everyone properly."
		}
	];

	let scrollContainer = $state();
	let isPaused = $state(false);

	onMount(() => {
		let scrollAmount = 0;
		const scrollSpeed = 0.5;

		function autoScroll() {
			if (scrollContainer && !isPaused) {
				scrollAmount += scrollSpeed;
				scrollContainer.scrollLeft = scrollAmount;

				if (scrollAmount >= scrollContainer.scrollWidth / 2) {
					scrollAmount = 0;
				}
			}
			requestAnimationFrame(autoScroll);
		}

		autoScroll();
	});
</script>

<div class="space-y-10 p-5 text-center md:px-20 xl:px-40">
	<div class="space-y-1">
		<h2 class="text-lg font-semibold">Reviews</h2>
		<p class="font-medium text-[#e78e63]">What people say about me</p>
	</div>

	<div
		bind:this={scrollContainer}
		class="no-scrollbar flex gap-5 overflow-x-auto"
		role="region"
		aria-label="Customer reviews carousel"
		onmouseenter={() => (isPaused = true)}
		onmouseleave={() => (isPaused = false)}
		ontouchstart={() => (isPaused = true)}
		ontouchend={() => (isPaused = false)}
	>
		{#each [...reviews, ...reviews] as { name, relationship, rating, review }}
			<div
				class="max-w-[280px] min-w-[280px] flex-shrink-0 rounded-[15px] border border-[#dd5c2f] p-5 py-4 text-left"
			>
				<div class="mb-3 flex justify-between">
					<div class="flex gap-3">
						<div class="flex items-center justify-center rounded-full bg-[#dd5c2f] px-3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="#e27549"
								viewBox="0 0 24 24"
								stroke-width="1"
								stroke="#e78e63"
								class="size-5"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
								/>
							</svg>
						</div>
						<div>
							<h4 class="font-semibold">{name}</h4>
							<h5 class="text-sm font-semibold text-[#e78e63]">{relationship}</h5>
						</div>
					</div>
					<p class="flex items-start gap-1 font-semibold text-[#eca77d]">
						{rating}
						<span class="mt-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="size-4"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
								/>
							</svg>
						</span>
					</p>
				</div>

				<p class="text-sm leading-relaxed text-[#f6d9b1]">{review}</p>
			</div>
		{/each}
	</div>
</div>

<style>
	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}
	.no-scrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
</style>
