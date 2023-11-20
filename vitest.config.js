import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default () => {
  return defineConfig({
    plugins: [react()],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './setupTests.ts',
      css: true,
      reporters: ['verbose'],
      coverage: {
        reporter: ['text', 'json', 'html'],
        include: ['src/**/*'],
        exclude: ['**/.trunk/**'],
      }
    }
 })
}
