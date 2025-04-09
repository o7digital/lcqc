import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // Importa el integrador oficial

// https://astro.build/config
export default defineConfig({
  site: 'https://lcqc.vercel.app', // Opcional pero recomendado
  integrations: [tailwind()], // Configuración correcta de Tailwind
  output: 'static' // Elimina la sección "vite" si no es estrictamente necesaria
});
