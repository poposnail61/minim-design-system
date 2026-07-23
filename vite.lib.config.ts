import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      entryRoot: "src",
      include: ["src/index.ts", "src/components/**/*.tsx"],
      exclude: ["src/app", "src/imports", "src/main.tsx"],
      tsconfigPath: "./tsconfig.json",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist-lib",
    emptyOutDir: true,
    cssCodeSplit: false,
    lib: {
      entry: {
        "minim-design-system": path.resolve(__dirname, "src/index.ts"),
        styles: path.resolve(__dirname, "src/styles.ts"),
      },
      formats: ["es", "cjs"],
      cssFileName: "styles",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "minim-icon-react"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
          "minim-icon-react": "MinimIconReact",
        },
      },
    },
  },
});
