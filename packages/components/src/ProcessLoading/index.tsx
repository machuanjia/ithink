/*
 * @Author: D.Y.M
 * @Date: 2021-10-26 19:27:39
 * @LastEditTime: 2021-10-26 20:03:06
 * @FilePath: /ithink/packages/components/src/ProcessLoading/index.tsx
 * @Description: 
 */
import { useEffect } from 'react'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

const ProcessLoading = ()=>{
  useEffect(() => {
    NProgress.start()
    return () => {
      NProgress.done()
    }
  }, [])
  return null
}
export default ProcessLoading