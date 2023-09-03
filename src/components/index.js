// 把components下的组件注册成全局组件
// 通过插件方式
import ImageView from "./ImagesView.vue"
import Sku from './XtxSku/index.vue'
export const componentPlugin = {
  install(app) {
    // app.component('组件名', 组件配置对象)
    app.component('XtxImageView', ImageView)
    app.component('XtxSku', Sku)
  }
}