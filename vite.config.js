import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// base must match the GitHub repo name for project Pages (https://<user>.github.io/<repo>/)
export default defineConfig({
  plugins: [svelte()],
  base: '/recommended-routine-tracker/',
});
