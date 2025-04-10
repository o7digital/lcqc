import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // Integrador oficial de Tailwind

export default defineConfig({
  site: 'https://lcqc.vercel.app',  // ¡Ojo con la coma aquí!
  integrations: [tailwind()],     