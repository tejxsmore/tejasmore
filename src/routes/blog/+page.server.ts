import type { PageServerLoad } from './$types';
import { env } from '$env/dynamic/private';

interface Post {
	title: string;
	slug: string;
	createdAt: string;
	content: string;
	readingTime?: number; // Add this field
}

// Function to calculate reading time
function calculateReadingTime(content: string): number {
	const wordsPerMinute = 200; // Average reading speed
	const words = content.trim().split(/\s+/).length;
	const readingTime = Math.ceil(words / wordsPerMinute);
	return readingTime;
}

export const load: PageServerLoad = async ({ fetch }) => {
	const query = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			query: ` {
                blogs {
                    title
                    slug
                    createdAt
                    content
                }
            }
        `
		})
	};

	const response = await fetch(env.HYGRAPH_API, query);
	const json = await response.json();
	const blogs: Post[] = json.data.blogs.map((blog: Post) => ({
		...blog,
		readingTime: calculateReadingTime(blog.content)
	}));

	return {
		blogs
	};
};
