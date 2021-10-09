/*
 * @Author: Cookie
 * @Date: 2021-03-03 13:15:14
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-09 19:34:06
 * @Description:
 */
import { join } from 'path';

export default {
  base: '/ithink',
  publicPath: '/ithink/',
  chainWebpack(memo) {
    memo.module
      .rule('js')
      .test(/\.(js|mjs|jsx|ts|tsx)$/)
      .include.add(join(__dirname, '..', '..', 'packages/components/src'))
      .end()
      .exclude.add(/node_modules/)
      .end()
      .use('babel-loader');
  },
  alias: {
    '@ithink/components': join(
      __dirname,
      '..',
      '..',
      'packages/components/src'
    ),
  },
  exportStatic: {},
  logo: 'https://arbeit.oss-cn-beijing.aliyuncs.com/logo.png'
};
