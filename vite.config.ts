import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { writeFileSync } from "fs"

// Plugin para crear .nojekyll en dist después del build
const nojekyllPlugin = () => {
  return {
    name: 'nojekyll',
    closeBundle() {
      writeFileSync(path.resolve(__dirname, 'dist/.nojekyll'), '')
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), nojekyllPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
