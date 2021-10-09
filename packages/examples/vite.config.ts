/*
 * @Author: Cookie
 * @Date: 2021-03-02 13:47:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-09 17:23:19
 * @FilePath: /doc-react-test/ithink/packages/examples/vite.config.ts
 * @Description:
 */
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5222,
  },
  resolve: {},
  plugins: [reactRefresh()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
