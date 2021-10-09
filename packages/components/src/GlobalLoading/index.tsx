/*
 * @Author: D.Y.M
 * @Date: 2021-10-09 16:06:52
 * @LastEditTime: 2021-10-09 16:30:49
 * @FilePath: /doc-react-test/ithink/packages/components/src/GlobalLoading/index.tsx
 * @Description: 
 */
import React from 'react';
import classNames from 'classnames';
import { getPrefixCls } from '../config/provider';

import styles from './index.module.less';


interface BaseProps {
  /**
   * @description 自定义样式名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: React.HTMLProps<HTMLStyleElement>;
}

interface BaseGlobalLoadingProps {
  /**
   * @description 样式前缀
   */
  prefixCls?: string;
}

interface INativeGlobalLoadingProps {
  /**
   * @description 是否生效
   */
  disabled?: boolean;
}

export type IGlobalLoadingProps = BaseProps & BaseGlobalLoadingProps & INativeGlobalLoadingProps;


const GlobalLoading = (props: IGlobalLoadingProps) => {
  const {
    prefixCls,
    className,
    style: customStyle,
  } = props;


  const selfPrefixCls = getPrefixCls(prefixCls || 'GlobalLoading');

  const classes = classNames(
    selfPrefixCls,
    className
  );

  return (
    <div
      className={`${classes} ${styles['load-effect']}`}
      style={customStyle}
    >
      <div className={styles['load-wrap']}>
        <span className={styles['load-wrap-item']}></span>
      </div>
      <div className={styles['load-wrap']}>
        <span className={styles['load-wrap-item']}></span>
      </div>
      <div className={styles['load-wrap']}>
        <span className={styles['load-wrap-item']}></span>
      </div>
      <div className={styles['load-wrap']}>
        <span className={styles['load-wrap-item']}></span>
      </div>
      <div className={styles['load-wrap']}>
        <span className={styles['load-wrap-item']}></span>
      </div>
    </div>
  );
};

export default GlobalLoading;
