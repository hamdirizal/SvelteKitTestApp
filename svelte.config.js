import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import {default as adapterStatic} from '@sveltejs/adapter-static';
import {default as adapterNode} from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		prerender: {
			entries: ['*','/page1']
		},
		adapter: adapterNode({
			out: 'build',
			precompress: false
		}),
        ssr: true,
		router: false,
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
