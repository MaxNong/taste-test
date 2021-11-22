const aa = '这里是测试app-a'
import('appB/b').then((b) => {
  console.log(b)
  console.log(aa)
  console.log('在a中打印' + b.default)
})

// import React from "react";
// import ReactDom from "react-dom";
// import App from "./app";

// ReactDom.render(<App />, document.getElementById("root"))
