import path from 'path';
import { defineConfig } from 'vitepress';

import Icons from 'unplugin-icons/vite';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';

export default defineConfig({
  build: {
    outDir: path.resolve(__dirname, '../dist'),
  },
  publicDir: path.resolve(__dirname, './.vitepress/public'),
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, './.vitepress/src')}/`,
    },
  },
  plugins: [
    Icons({
      compiler: 'vue3',
      customCollections: {
        app: FileSystemIconLoader(
          path.resolve(__dirname, './.vitepress/src/assets/svg-icons')
        ),
        appbak: FileSystemIconLoader(
          path.resolve(__dirname, './.vitepress/src/assets/svg-icons-bak')
        ),
      },
    }),
  ],
  server: {
    proxy: {
      '/api-calendar': {
        target: 'https://api.mindspore.cn/meetings',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-calendar/, ''),
      },
    },
  },
});
