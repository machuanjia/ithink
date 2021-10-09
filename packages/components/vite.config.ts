/*
 * @Author: Cookie
 * @Date: 2021-03-02 13:47:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-09 19:35:25
 * @FilePath: /doc-react-test/ithink/packages/components/vite.config.ts
 * @Description:
 */
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'ithink',
      formats:['es','umd','cjs']
    }
  }
});
