import { defineConfig } from "tinacms";

export default defineConfig({
  clientId: process.env.47bc5fe7-6887-4669-a245-f6c384126521 
  branch: "desarrollo", // Asegúrate de que coincida con tu rama
  token: process.env.TINA_TOKEN || "", // Lo configurarás en Vercel/Netlify
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
        ],
      },
    ],
  },
});
