import type { PageLoad } from './$types';
import vueicon from '$lib/assets/icons/vue.png'

export const load: PageLoad = () => {
    return {
        skills: [
            {
                name: 'vue',
                experience: 9/10,
                icon: vueicon
            }
        ]
    }
}