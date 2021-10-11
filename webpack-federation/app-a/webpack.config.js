const path = require('path');
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "./"
  },
  plugins: [
    new ModuleFederationPlugin({
        name: "appA",
        // 引用 app-b 的服务
        remotes: {
          appB: "appB@http://localhost:8000/b.js",
        }
    }),
  ],
}
