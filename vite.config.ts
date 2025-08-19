import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      components: "/src/components",
      icons: "/src/icons",
      assets: "/src/assets",
    },
  },
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
    },
  },
});
