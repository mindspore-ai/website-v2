import path from 'path';
import { defineConfig } from 'vitepress';
import vueJsx from '@vitejs/plugin-vue-jsx';


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
    vueJsx({}),
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
      '/api-rank/': {
        target: 'https://api.openeuler.org/osi-task-manager/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-rank/, ''),
      },
    },
  },
});
