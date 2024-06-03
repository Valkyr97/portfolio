import formBuilderDemo from '$lib/assets/videos/FormBuilder.webm';
import formBuilderPoster from '$lib/assets/images/FormBuilder Poster.png';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	return {
		id: params.id,
		projects: [
			{
				prId: 'formBuilder',
				demo: formBuilderDemo,
				poster: formBuilderPoster
			}
		]
	};
};
