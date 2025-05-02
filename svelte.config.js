import { mdsvex } from 'mdsvex';
import adapter from "svelte-adapter-bun";
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
    preprocess: [vitePreprocess(), mdsvex({extensions: ['.svx']})],
	kit: { adapter: adapter() },
	extensions: ['.svelte', '.svx']
};

export default config;
