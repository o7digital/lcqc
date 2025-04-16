import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { tinaPlugin } from 'tinacms'; // 👈 AGREGA ESTA LÍNEA

export default defineConfig({
  site: 'https://lcqc.vercel.app',
  integrations: [
    tailwind(),
    tinaPlugin({
      clientId: '47bc5fe7-6887-4669-a245-f6c384126521',
      branch: 'main',
    }),
  ],
  output: 'static',
});
