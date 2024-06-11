import type { PageLoad } from './$types';
import vueicon from '$lib/assets/icons/vue.svg';
import css from '$lib/assets/icons/css.svg';
import django from '$lib/assets/icons/django.svg';
import graphql from '$lib/assets/icons/graphql.svg';
import html from '$lib/assets/icons/html.svg';
import js from '$lib/assets/icons/js.svg';
import mongodb from '$lib/assets/icons/mongodb.svg';
import nuxt from '$lib/assets/icons/nuxt.svg';
import postgresql from '$lib/assets/icons/postgresql.svg';
import python from '$lib/assets/icons/python.svg';
import r from '$lib/assets/icons/r.svg';
import react from '$lib/assets/icons/react.svg';
import svelte from '$lib/assets/icons/svelte.svg';
import tailwind from '$lib/assets/icons/tailwind.svg';
import ts from '$lib/assets/icons/ts.svg';
import kotlin from '$lib/assets/icons/kotlin.svg';
import flutter from '$lib/assets/icons/flutter.svg';
import node from '$lib/assets/icons/node.svg';

import DnodarsePoster from '$lib/assets/images/FormBuilder Poster.png';

enum FIELD {
	FRONTEND = 'front-end',
	BACKEND = 'back-end',
	WEB = 'web',
	DATA_SCIENCE = 'data_science',
	DB = 'data-base'
}

export const load: PageLoad = () => {
	return {
		skills: [
			{
				id: 1,
				name: 'vue',
				fields: [FIELD.FRONTEND, FIELD.WEB],
				experience: 9.5 / 10,
				icon: vueicon
			},
			{
				id: 2,
				name: 'Nuxt',
				fields: [FIELD.WEB, FIELD.FRONTEND],
				experience: 8 / 10,
				icon: nuxt
			},
			{
				id: 3,
				name: 'Svelte',
				fields: [FIELD.WEB, FIELD.FRONTEND],
				experience: 6 / 10,
				icon: svelte
			},
			{
				id: 4,
				name: 'React',
				fields: [FIELD.WEB, FIELD.FRONTEND],
				experience: 5 / 10,
				icon: react
			},
			{
				id: 5,
				name: 'Python',
				fields: [FIELD.DATA_SCIENCE],
				experience: 8.5 / 10,
				icon: python
			},
			{
				id: 6,
				name: 'Django',
				fields: [FIELD.WEB, FIELD.BACKEND],
				experience: 8 / 10,
				icon: django
			},
			{
				id: 7,
				name: 'R',
				fields: [FIELD.DATA_SCIENCE],
				experience: 6 / 10,
				icon: r
			},
			{
				id: 8,
				name: 'Tailwind',
				fields: [FIELD.WEB, FIELD.FRONTEND],
				experience: 9 / 10,
				icon: tailwind
			},
			{
				id: 9,
				name: 'Node',
				experience: 6.5 / 10,
				fields: [FIELD.BACKEND],
				icon: node
			},
			{
				id: 10,
				name: 'PostgreSQL',
				experience: 8.5 / 10,
				fields: [FIELD.DB],
				icon: postgresql
			},
			{
				id: 11,
				name: 'MongoDB',
				experience: 5.5 / 10,
				fields: [FIELD.DB],
				icon: mongodb
			},
			{
				id: 12,
				name: 'graphql',
				fields: [FIELD.WEB],
				experience: 6 / 10,
				icon: graphql
			},
			{
				id: 13,
				name: 'Javascript',
				fields: [FIELD.WEB],
				experience: 10 / 10,
				icon: js
			},
			{
				id: 14,
				name: 'Typescript',
				fields: [FIELD.WEB],
				experience: 9.5 / 10,
				icon: ts
			},
			{
				id: 15,
				name: 'Kotlin',
				fields: [FIELD.WEB],
				experience: 5.5 / 10,
				icon: kotlin
			},
			{
				id: 16,
				name: 'Flutter',
				fields: [FIELD.WEB],
				experience: 5.5 / 10,
				icon: flutter
			},
			{
				id: 17,
				name: 'HTML5',
				fields: [FIELD.WEB, FIELD.FRONTEND],
				experience: 10 / 10,
				icon: html
			},
			{
				id: 18,
				name: 'CSS',
				fields: [FIELD.WEB, FIELD.FRONTEND],
				experience: 7 / 10,
				icon: css
			}
		],
		projects: [
			{
				poster: { src: DnodarsePoster, alt: 'Form Builder' },
				title: 'DNodarse',
				description:
					'A services contract site with the posibility of create <b>custom forms</b> for each service',
				id: 'formBuilder',
				skills: [1, 8, 11, 12, 14]
			},
			{
				poster: { src: DnodarsePoster, alt: 'Form Builder' },
				title: 'DNodarse',
				description:
					'A services contract site with the posibility of create <b>custom forms</b> for each service',
				id: 'formBuilder',
				skills: [4, 5, 6, 10, 14]
			},
			{
				poster: { src: DnodarsePoster, alt: 'Form Builder' },
				title: 'DNodarse',
				description:
					'A services contract site with the posibility of create <b>custom forms</b> for each service',
				id: 'formBuilder',
				skills: [1, 2, 7, 8, 10, 14]
			}
		]
	};
};
