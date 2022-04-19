// import foo from './foo.js';
// export default function () {
//   console.log(foo);
// }

import { version } from '../package.json';

export default function () {
  console.log('version ' + version);
}

// import answer from 'the-answer';
// import lodash from "lodash"

// const getAnswer = function () {
//     console.log('the answer is ' + answer);
//     console.log(lodash.VERSION)
// }
// export { getAnswer }