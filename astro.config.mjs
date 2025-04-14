import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // Integrador oficial de Tailwind
import { tinaPlugin } from "tinacms";

export default defineConfig({
  site: 'https://lcqc.vercel.app',  // ¡Ojo con la coma aquí!
  integrations: [tailwind()],       // Tailwind configurado correctamente
  output: 'static'                  // Sitio estático (sin SSR)
});
