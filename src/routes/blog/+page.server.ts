import type { PageServerLoad } from './$types';
import { env } from '$env/dynamic/private';

interface Post {
	title: string;
	slug: string;
	createdAt: string;
	content: string;
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
	const blogs: Post[] = json.data.blogs;

	return {
		blogs
	};
};
