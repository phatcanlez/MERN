"use strict";
// 06-stringMethod.js
console.log("06-stringMethod.js");
// chuỗi trong js đc đặt trong dấu '' hoặc "" hoặc ``(temple string)
let str = `hihi`;

// 1.length  là prop string cung cấp độ dài
console.log(str.length); // 5
// 2. indexOf(str): method nhận vào chuỗi và trả ra vị trí tìm đc chuỗi đó
console.log(str.indexOf("h")); //1
console.log(str.indexOf("ih")); //2
console.log(str.indexOf("s")); //-1

// tách chuỗi 
// 1. slice( start, end): chiết xuất chuỗi con trong chuỗi cha tính từ start đến end - 1
let x = "Xin chào piedteam, mình là điệp";
let result = x.slice(9, 17); //piedteam
console.log(result);

//cắt ngược

result = x.slice(-22, -14); //piedteam đếm từ đuôi đi về trc
console.log(result);
// cắt bằng 1 parameter
result = x.slice(9); //piedteam, mình là điệp
result = x.slice(-12); //mình là điệp

// 3.substring(start, end): chiết xuất chuỗi con trong chuỗi cha tính từ start đến end - 1
// giống slice nhưng ko có ngược

// 4.substr(start, lengh): chiết xuất chuỗi con từ start có độ dài là length
result = x.substr(9, 8); //piedteam

// II - các method phổ biến
//1. replace: thay thế chuỗi(chỉ replace thằng đầu tiên nó phát hiện)
let str1 = "PiedTeam có nhiều bạn rất nhiều tiền";
str1 = str1.replace("nhiều", "ít"); //"PiedTeam có ít bạn rất nhiều tiền"
console.log(str1);

//2. replaceAll
str1 = "PiedTeam có nhiều bạn rất nhiều tiền";
str1 = str1.replaceAll("nhiều", "ít");
console.log(str1); //"PiedTeam có ít bạn rất ít tiền"

//3. replace + regex
str1 = "PiedTeam có nhiều bạn rất nhiều tiền";
str1 = str1.replace(/nhiều/g, "ít"); //g là global
console.log(str1); //"PiedTeam có ít bạn rất ít tiền"

//4. chuyển đổi hoa thường .toUpperCase(), .toLowerCase()
//5. .concat() nối chuỗi
str1 = "xin chào";
let str2 = "Piedteam";
let str3 = str1.concat(" ", "các bạn đến với", " ", str2);
//nối =: +
str3 = str1 + " " + "các bạn đến với" + " " + str2;
str3 = `${str1} các bạn đến với ${str2}`; //templeString
console.log(str3);

//6.trim(): xóa khoảng cách thừa ở 2 đầu
str1 = "   xin   chào   các   bạn   ";
str1 = str1.trim(); //"xin   chào   các   bạn"
console.log(str1);

//cách 1
str1 = "   xin   chào   các   bạn   ";
str1 = str1.replace(/\s+/g, " ").trim(); // /\s{1,}/g
console.log(str1);

//cách 2
// .split
// .filter
// .join

str1 = "   xin   chào   các   bạn   ";
str1 = str1.split(" ").filter((item) => item != "").join("-"); //dấu - dùng để ghi địa chỉ url

//5. so sánh chuỗi == , ===

//6.  charAt(index): return char ở vị trí index trong chuỗi
x = "Lê Mười Điệp";
console.log(x.charAt(3)); //M
console.log(x[3]); //M
// x[3] = "L"; //x[3] là readonly nên ko thể gắn hay sửa giá trị
console.log(x); //"Lê Mười Điệp"
//vì string là immutable nên có làm gì thì string cũng ko thay đổi

//"lÊ mườI đIệp" => "Lê Mười Điệp"