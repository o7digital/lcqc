import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "staging", // Rama donde está tu carpeta 'desarrollo/'
  clientId: "47bc5fe7-6887-4669-a245-f6c384126521", // Lo copias de Tina Cloud (Settings > Project)
  token: "5cb6c30bbf0bf643747ce33b885d45241d9579a1",    // Lo copias de Tina Cloud (Settings > Project)
  schema: {
    collections: [{
      name: "post",       // Nombre interno
      label: "Posts",     // Título en el CMS
      path: "src/content", // Ruta a tus archivos
      fields: [           // Campos editables
        { name: "title", type: "string", label: "Título" },
        { name: "body", type: "rich-text", label: "Contenido" }
      ]
    }]
  }
});


