/*
 * @Author: Cookie
 * @Date: 2021-03-05 17:25:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-09 15:31:41
 * @FilePath: /doc-react-test/ithink/webpack.config.js
 * @Description: 
 */

/**
 * 不是真实的 webpack 配置，仅为兼容 webstorm 和 intellij idea 代码跳转
 * ref: https://github.com/umijs/umi/issues/1109#issuecomment-423380125
 */

module.exports = {
  resolve: {
    alias: {
      '@ithink': require('path').resolve(__dirname, 'packages'), // eslint-disable-line
    },
  },
};
