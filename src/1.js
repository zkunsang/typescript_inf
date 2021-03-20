"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('test');
var size = 123;
var isBig = size >= 100;
var msg = isBig ? '크다' : '작다';
var values = [1, 2, 3];
var values2 = [1, 2, 3];
// values.push('a');
// 튜플 타입
var data = [msg, size];
data[0].substr(1);
// data[1].substr(1);
console.log('typeof 123 => ', typeof 123);
console.log('typeof "abc" => ', typeof 'abc');
console.log('typeof [1, 2, 3] => ', typeof [1, 2, 3]);
