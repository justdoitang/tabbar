import { join } from 'path' // 引入path模块

function resolve (dir) {
  return join(__dirname, dir) // path.join(__dirname)设置绝对路径
}
export function chainWebpack (config) {
  config.resolve.alias
    .set('@', resolve('./src'))
    .set('components', resolve('./src/components'))
    .set('views', resolve('src/views'))
    .set('assets', resolve('src/assets'))
  // set第一个参数：设置的别名，第二个参数：设置的路径
}
