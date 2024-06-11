import demo from '$lib/assets/videos/FormBuilder.webm';
import poster from '$lib/assets/images/FormBuilder Poster.png'
import landing from '$lib/assets/images/Dnodarse Landing.png'
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return {
		demo,
        poster,
		landing
	};
};
