/*
 * @Author: D.Y.M
 * @Date: 2021-10-09 16:06:52
 * @LastEditTime: 2021-10-26 18:03:56
 * @FilePath: /ithink/packages/components/src/GlobalLoading/index.tsx
 * @Description: 
 */
import React from 'react';

const GlobalLoading = (props) => {
  const { description, className } = props
  return (
    <div className={`max-w-xs m-auto flex flex-col justify-center items-center ${className}`}>
      <div className="w-16 h-16 border-4 border-primary border-dashed rounded-full animate-spin" />
      {description && <><div className=" text-secondary text-lg mt-4">{description}</div></>}
    </div>
  );
};

export default GlobalLoading;
