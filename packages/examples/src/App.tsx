/*
 * @Author: Cookie
 * @Date: 2021-02-27 16:11:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-09 16:46:36
 * @Description:
 */
import React, { useState } from 'react';
import { GlobalLoading } from '@ithink/components';
import { LoadingOutlined, CheckOutlined } from '@ant-design/icons';
import { useFormItem } from '@ithink/form-generator';
import Form from '@ithink/form-generator/src/components/Form';
import Field from '@ithink/form-generator/src/components/Field';

function App() {
  const [count, setCount] = useState(0);

  console.log('render');
  return (
    <div className="App">
      <GlobalLoading/>
    </div>
  );
}

export default App;