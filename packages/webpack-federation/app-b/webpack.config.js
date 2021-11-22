const path = require('path');
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    appB: "./src/b.js"
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new ModuleFederationPlugin({
      // 提供给其他服务加载的文件
      filename: 'b.js',
      // 唯一ID，用于标记当前服务
      name: 'appB',
      // 需要暴露的模块，使用时通过 `${name}/${expose}` 引入
      exposes: {
        './b': './src/b',
      },
    }),
  ],
}
