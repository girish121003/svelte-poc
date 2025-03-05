import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';


export default defineConfig({
	base:"/svelte_krogers_project/",
	plugins: [sveltekit()],
	build: {
		outDir: 'dist' // Ensure this is set if you need a 'dist' folder
	  }
});
