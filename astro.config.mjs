import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// import { tinaPlugin } from 'tinacms'; // 👈 ESTA LÍNEA ESTÁ COMENTADA

export default defineConfig({
  site: 'https://lcqc.vercel.app',
  integrations: [
    tailwind(),
    // tinaPlugin({  // ESTA LÍNEA ESTÁ COMENTADA
    //   clientId: '47bc5fe7-6887-4669-a245-f6c384126521',
    //   branch: 'main',
    // }),
  ],
  output: 'static',
});
