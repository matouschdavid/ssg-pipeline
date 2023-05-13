import { vitePreprocess } from '@sveltejs/kit/vite';
import firebase from 'svelte-adapter-firebase';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: firebase()
	}
};

export default config;
