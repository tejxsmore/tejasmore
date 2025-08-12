import type { PageServerLoad } from './$types';
import { env } from '$env/dynamic/private';

interface Post {
	title: string;
	slug: string;
	createdAt: string;
	content: string;
}

export const load: PageServerLoad = async ({ fetch, params }) => {
	const { slug } = params;

	const query = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query: `
				query getPost($slug: String!) {
					blogs(where: { slug: $slug }) {
						title
						slug
						createdAt
						content
					}
				}
			`,
			variables: {
				slug
			}
		})
	};

	const response = await fetch(env.HYGRAPH_API, query);
	const json = await response.json();
	const blog: Post = json.data.blogs[0];

	return {
		blog
	};
};
