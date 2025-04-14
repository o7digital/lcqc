import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: "YOUR_CLIENT_ID_HERE", // lo cambiamos luego
  token: "YOUR_TOKEN_HERE",        // lo cambiamos luego
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [],
  },
});
