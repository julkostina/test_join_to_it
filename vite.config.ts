import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base:
    process.env.VITE_BASE ??
    (mode === "production" ? "./" : "/"),
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
}));
