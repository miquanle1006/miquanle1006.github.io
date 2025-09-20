import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.glb"],
  base: "/", // root domain deployment, for example: https://quanle1006.github.io/
//   base: '/YOUR_REPOSITORY_NAME/' --- IGNORE --- for example: https://quanle1006.github.io/quan-portfolio/
// cause we are using user/organization site, so the base should be '/'
// if we are using project site, the base should be '/YOUR_REPOSITORY_NAME/'
});
