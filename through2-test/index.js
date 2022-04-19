// const fs = require("fs");
// const through2 = require("through2")
// const all = []

// fs.createReadStream('a.js')
//   .pipe(through2.obj(function (chunk, enc, callback) {
//       console.log(chunk[0], 88)
//     const data = {
//         name    : chunk[0]
//       , address : chunk[3]
//       , phone   : chunk[10]
//     }
//     this.push(data)

//     callback()
//   }))
//   .on('data', (data) => {
//     all.push(data)
//   })
//   .on('end', () => {
//     console.log(all)
//   })
let nextFile = [1,2]
nextFile.forEach((f) => this.push(f));

console.log(nextFile)