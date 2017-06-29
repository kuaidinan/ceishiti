/** require.ensure 异步加载组件
 *  @param dependencies: String[] 依赖的模块数组
 *  @param callback: function([require]) 回调函数，该函数调用时会传一个require参数
 *  @param chunkName: 模块名，用于构建时生成文件时命名使用
 */
const index = resolve => {
  require.ensure(['../views/index/index.vue'], () => {
    resolve(require('../views/index/index.vue'));
  });
};
const routers = [
  {
    path: '/',
    name: 'Home',
    component: index,
    redirect: { name: 'index' }
  },
  {
    path: '/index',
    name: 'index',
    component: index
  },
  {
    path: '*',
    component: index
  }
];
export default routers;
