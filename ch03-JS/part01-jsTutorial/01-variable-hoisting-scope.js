// "use strict";
// JS có 2 chế độ code normal và use strict
// 01-variable-hoisting-scope.js
// comment: ghi chú
console.log("bài 1: variable - hoisting - scope");
// hàm in

// cách khai báo biến: 3 cách
// cách 1 - var: nó xuất hiện từ phiên bản ES đầu tiên(ES là tên gốc của nó ECMAScript, biên bản 6 là phiên bản đại trùng tu)
var num ;
// var có thể chứa bất kì giá trị gì vì nó tiếp nhận dữ liệu từ người dùng nên nó có thể là bất cứ kiểu dữ liệu nào, var là tạo biến toàn cục
// js là ngôn ngữ tương tác , thủ tục, kịch bản, lập trình hàm là chính nên vì thế OOP đủ dùng
var name1 = "điệp đẹp trai";
console.log(name1); 
name1 = "điệp 10 điểm";//re-assigning
console.log(name1);

// nếu khai báo mà ko gắn giá trị thì sao?
var age;
// thì nó sẽ chứa undefined (ko biết kiểu ko biết giá trị)
console.log(age);
age = 10;
console.log(age);
console.log(typeof age);

// Quy tắc đặt tên biến
// -không bắt đầu bằng số

// -đặt tên biến theo cái kiểu dữ liệu dự định nó sẽ chứa (
//      biến bình thường: camelCase,
//      class: PascalCase(UpperCammelCase), 
//      tương tác với DB: Underscore (Snake_Case))

// -được phép dùng _(private) và $(protected) ở đầu câu
var _car;//người ngoài dùng bình thường, vì đây là quy ước

// Hoisting với var(Hoisting: móc ngược lên )

// Hoisting là tính năng ko phải bug
// var msg
console.log(msg);//lúc này msg sẽ móc var msg ở dòng 42 lên dòng 40 để khai báo này gọi là hoisting
var msg = "Hello";
console.log(msg);

// 
// message = "thông báo";
// console.log(message);
// khi để use strict mode thì coi đây là bug vì message chưa đc khai báo
// nhưng khi để normal nó sẽ tự tạo thêm 1 dòng var message khai báo

// let (ES6 2015) | const: hằng số
// 2 thằng này sinh ra để nó thay thế var để tránh hoisting
// let và const thì giống var nhưng mà ko hoisting

// console.log(msg1);
// let msg1 = "Hello";
// console.log(msg1);

// const: hằng số
const numb = 10;
numb = 20;
// const thì sẽ định nghĩa num là 10 nên kiểu dữ liệu của nó là 10 nên chỉ có thể nhét số 10 vào;

// const với object
const profile = {
    name: "Toàn",
    height: 160,
}
// đây là tạo ra 1 object có tên là profile và có 2 thuộc tính
// const profile lưu địa chỉ của object có  { name: "Toàn", height: 160,} 

profile.name = "Toàn cao";//xài đc bình thường vì chỉ đổi tên của  object 

// profile = {
//     name: "Toàn cao",
//     height: 160,
// } dòng này thì bị lỗi vì gắn 1 địa chỉ object vào profile khai báo const

//const với array
const array1 = [1, 2, 3, 4, 5];
array1.push(6);

//scope: trong js có 3 loại scope
// Global Scope: toàn cục
// Function Scope: trong hàm
// Block Scope(local scope): cục bộ

// let | const ko hoisting || var có hoisting(use strict)
//       là blockscope     ||  var là globalscope