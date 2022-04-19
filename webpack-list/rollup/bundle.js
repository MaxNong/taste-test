'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// 源码没有打到包中
var lodash = require('lodash');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var lodash__default = /*#__PURE__*/_interopDefaultLegacy(lodash);

// 这里使用了the-answer包，被打进了bundlejs中
var index = 42;

const getAnswer = function () {
    console.log('the answer is ' + index);
    console.log(lodash__default["default"].VERSION);
};

exports.getAnswer = getAnswer;
