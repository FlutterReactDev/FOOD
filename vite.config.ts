import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    extensions: [".ts", ".tsx"],
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@router": path.resolve(__dirname, "src/router"),
      "@features": path.resolve(__dirname, "src/features"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@lib": path.resolve(__dirname, "src/lib"),
      "@di": path.resolve(__dirname, "src/di/tokens.ts"),
      "@service": path.resolve(__dirname, "src/service"),
    },
  },
  plugins: [react()],
});
