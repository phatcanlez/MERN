// 02-datatype-passByValue-passByReferences.js
console.log("bài 2: kiểu dữ - truyền tham trị - truyền tham chiếu")
// I-1. primitive datatype: kiểu dữ liệu nguyên thủy
/*
    number: 1, 12, 14.6    js ko sinh ra để sử lí tính toán 
    string: '1000', "Xin chào", 'a'
    boolean: true(1) | false(0) -0 =>false, -1 => true
    null: giá trị rỗng nhưng biết kiểu dữ liệu, null ko xuất hiện 1 cách tự nhiên 
    VD: yêu cầu đưa 1 object, mình ko đưa gì hết nên là null
    undefined: giá trị rỗng - ko biết kiểu dữ liệu
    symbol(ES6) 
*/

//null và undefined khác nhau như nào 
console.log(typeof null); //null là object (null là giá trị của object), prototype chain javascipt
//trong js thì null là cha của object nhìn theo cây phả hệ,  vì vậy nó xếp ở primitive datatype
console.log(typeof undefined); //undefined

console.log(null == undefined); //true
console.log(null === undefined); //false
// ==: so sánh giá trị (ép kiểu và unboxing)
// ===: so sánh giá trị và kiểu

console.log(2 == "2");//true
console.log(2 === "2");//false

// undefined trong parameter của function
function handle1(a, b){
    return b;
}

let c = handle1(5);
console.log(c);//undefined

//function mà ko return thì có nghĩa là return undefined
//undefine trong thuộc tính của object
let tan = {
    name: "bá tân",
    height: 165
};
console.log(tan.nguoiYeu);//undefined
tan.money = 1000;
console.log(tan);//lúc này tân có thêm thuộc tính money

// *Null: là biểu kiểu dữ liệu nhưng ko biết giá trị
let str = ""; //gọi là chuỗi rỗng
// str = null; //gọi là rỗng
// thấy null thì cho chuỗi rộng, 0 hoặc false để khi cần '.' tránh việc xử lý vào null làm crash app
str.concat("ahihi"); 
//lưu database: CHUỖI RỖNG, SỐ 0, FALSE thì mới chấm .method được để xử lý

//Kết:
//null và undefined thì sẽ k có thuộc tính
//trong mặt lưu trữ ta ko nên lưu null
//tránh việc xử lý vào null làm crash app

//I-2:Object datatype: khác primitive
//Plain Object: object phẳng là object ko có kế thừa, cha con gì hết
let student = {name: "Tùng", point: 10}; 
//              property | entry
//              key: value

console.log(student.name);
console.log(student["name"]);//truy cập bằng superString

//
let flowerList = ["Huệ", "Cúc", "Lan"];
/*
    flowerList = {
        0: "Huệ",
        1: "Cúc",
        2: "Lan"
    }
*/
console.log(flowerList[1]);
//Array là object

// Regular expression: regex là Object (biểu thức chính quy)
let regex1 = /SE\d{9}/;
console.log(typeof regex1);//object

//function có type of là function, gốc gác sâu hơn là object
console.log(typeof handle1);//function
console.log(handle1.prototype);

// 
console.log(10/ "d"); //NaN: not a number
// NaN là 1 trạng thái của Number
console.log(typeof NaN); //number
console.log(NaN == Number); //false
console.log(NaN == NaN); //false

//tất cả các cách khai báo primitive đều có thể khai báo bằng constructor
//Wrapper class: class bao bọc
let str1 = "ahihi";
let str2 = "ahihi";

str1 = new String("ahihi"); //địa chỉ 
console.log(str1); //ahihi auto-unboxing
console.log(str1 == "ahihi"); //true ss giá trị địa chỉ và mở hộp ép kiểu
console.log(str1 === "ahihi"); //false 
console.log(str1.valueOf() === "ahihi"); //true

//dùng wrapper class để ép kiểu
let year = 1999;
console.log(year);
let year1 = String(1999);
console.log(year1);//xài wrapper class

//bàn riêng về boolean
console.log(Boolean(1999));//true
console.log(Boolean(0));//false
console.log(Boolean(-0));//false
console.log(Boolean(-1));//true
console.log(Boolean("0")); //true; số 0 là 48 ASCII là true
console.log(Boolean("")); //false; chuỗi rỗng là 0 
console.log(Boolean(" ")); //true space là 10 
console.log(Boolean(null)); //false
console.log(Boolean({})); //true object rỗng vẫn có 1 dãy số vẫn có địa chỉ (khác 0) 
console.log(Boolean([])); //true mảng là obj địa chỉ con trỏ
console.log(Boolean(10 / "d")); //false trạng thái k sở hữu giá trị
console.log(Boolean(false)); //false

//Falsy:đối với js những gì ko chứa giá trị đều là false
//null, undefined, 0, -0, false, NaN

//pass by value: truyền tham trị
//vd1: 
let a = 1;
let b = a;
b += 2;
console.log(a, b); //a = 1, b = 3

//vd2:
let point = 4;
//hàm sữa điểm cực căng
function updatePoint(currentPoint){
    currentPoint = 10;
}

//xài hàm
updatePoint(point);
console.log(point);

//pass by references: truyền tham chiếu
//trỏ đến vùng nhớ đến mik đến obj

let boyFriend1 = {name: "hotGirl", size: "B cub"};
let boyFriend2 = boyFriend1;
boyFriend2.size = "H cub";
console.log(boyFriend1);

// OPERATOR Toán tử
//trong js có 10 loại toán tử
/*
1  Assignment            gán = 
2  Comparison            so sánh ==  ===
3  Arithmetic            toán hạng
4  bitwase               bitwase
5  logical               logic && ||
6  String                chuỗi
7  Conditional(ternary)  ba ngôi
8  Comma                 phẩy
9  Unary                 một ngôi
10 Relational            Quan hệ
*/
//
// Arithmetic Operator toán tử toán hạng
//  + | - | * | **(dấu mũ) | / | % | variable++ | variable-- | ++variable | --variable |
//  không được n++ ++n --n n-- với n là số bất kỳ

// Assignment Operator toán tử gán
//  = | += | -= | *= | **= | /= | %= |
//

// Comparison Operator toán tử so sánh
//  == bằng giá trị là được (không quan tâm kiểu)
console.log(2 == "2"); //true
console.log(2 !== "2"); //true có khác về mặt giá trị và kiểu ko thì có
console.log(2 != "2"); //false giá trị

//toán tử 3 ngôi
let diep = "đẹp trai"
let isDepTrai = diep == "đẹp trai";
console.log(isDepTrai); //true

let diepp = "đẹp trai"
let isDepTraii = diepp === "đẹp trai";//vùng nhớ pool
console.log(isDepTrai); //true

console.log("b" + "a" + +"a" + "a");//baNaNa

console.log(1 + 2);//3
console.log(1 + "2");//12
console.log("1" + 2);//12
console.log("5" - 2);//3

// logical

//logic AND(&&) OR(||) !(phủ định kết quả của cả mệnh đề condition)
//  true && false false
//  true && true  true
//  false && false false
//  true || false true
//  true || true  true
//  false|| false false
//  AND(&&) luôn đi tìm mệnh đề false thấy false là dừng trả ra false
//                                    thấy 0 là đừng trả ra 0
//  OR(||) luôn đi tìm mệnh đề true thấy true là dừng trả ra true
//                                    thấy 1 là dừng trả ra 1

console.log(0 && 1);//0
console.log(0 || 0 || 4);//4
console.log(0 || 1 || 4);//1
console.log(0);//0
console.log(!0);//true
console.log("");//
console.log(!"");//true
console.log(!"" && 0 && 1);//0 

let res;
if (res.err != undefined) {//!res
    console.log("ko j cả");
}

!res && console.log("ko j cả");// đi qua !res.data là true thì nó sẽ đi theo qua vế còn lại của câu  