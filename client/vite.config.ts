import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import glsl from 'vite-plugin-glslify';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    glsl(),
  {
    configureServer: (server) => {
      server.middlewares.use((_req, res, next) => {
        res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
        res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
        next();
      });
    },
  }],
  envDir: 'envs/',

});
