import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'http://lcqc.vercel.app'
  vite: {
    plugins: [tailwindcss()]
  },
output: 'statit',
});
