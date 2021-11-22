// rollup.config.js
// export default {
//     input: 'src/main.js',
//     output: {
//       file: 'bundle.js',
//       format: 'cjs'
//     }
//   };

import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from "rollup-plugin-commonjs"

export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  },
//   plugins: [ commonjs(), json(), resolve() ],
   // 指出应将哪些模块视为外部模块
   external: ['lodash']
};