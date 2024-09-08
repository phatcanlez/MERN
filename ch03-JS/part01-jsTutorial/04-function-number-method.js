"use strict"
// 04- function-number-method.js
console.log("bài 4: hàm và các method của number");
// Hàm trong js đc chia làm 2 loại chính
// Function declaration FD | Function Expression FE
// 1.Function declaration (khai báo hàm)
handle1();
function handle1(){
    console.log("tui là hàm đc tạo từ function declaration nè");
}

// xài trên hay dưới đều đc ko quan trọng vị trí call hay build

// 2.Function expression (biểu thức hàm)
var handle2 = function () {
    console.log("tui là hàm đc tạo từ function expression nè");
};
handle2();
// var: lỗi handle2 not function, let: cant access before init

// 3.IIFE: immediately invokable funtion expression

;(function (){
    let a = 10;
    let b = 20;
    console.log(a + b);
})();
// nên dùng kèm ; ở đầu
// tạo ra hàm dùng liền và ko có tính tái sử dụng
// IIFE + async await

//async phải đi với await
;(async function () {
    let data = await getDataFromServe(); // đợi xíu lấy data 5s
    showData();
})();

// 4. Anonymous function
() => {
    console.log("hello");
}

// CallBack: gọi lại | hàm nhận 1 hàm làm đối số (argument)
// function1(a, funct2) gọi là callback | funct2 gọi là callbackFunction
let handle3 = function(){
    console.log("Ahihi đồ chó");
};

// callback
setTimeout(handle3, 3000);

//người lười
setTimeout(handle3 = function() {
    console.log("Ahihi đồ chó");
}, 3000);

setTimeout(() =>  {
    console.log("Ahihi đồ chó");
}, 3000);

//Arrow Function (là cách viết tắt của FE (function expression))
//FD|FE|FA có sự khác nhau nhất định về mặt kết quả

//FD
function handle4(){
    console.log(this);   
}

//FE
let handle5 = function (){
    console.log(this);   
}

//FA
let handle6 = () => {
    console.log(this);   
}//arrow đá this ra ngoài window

//gọi
//test 
//          useStricpt       normal   
handle4();//undefined        window        cho đi tìm cha giam lại (ví dụ huy.handle4() thì this ở đây là huy)
handle5();//undefined        window
handle6();//window           window

// trong js this là đại diện cho người object đang gọi nó
// FE và FE sẽ giam this (tốt) | nếu có cụ thể object nào thì giá trị của this sẽ là object đó, còn nếu ko ai gọi thì this là undefined
// (normalMode thì ko ai gọi nghĩa là window gọi)

// FA thì luôn sút this ra ngoài global( window)

// VD2:
let person1 = {
    fullname: "điệp đẹp trai",
    // method: function trong object  - class
    getNameByFd(){
        console.log(this.fullname);//this lúc này là undefined
    },
    getNameByFe: function(){
        console.log(this.fullname);//this lúc này là undefined
    },
    getNameByFa:() => {
        console.log(this.fullname);//this lúc này là undefined
    },
};

//use strict
person1.getNameByFd();  //this là person1 => person1.fullname
person1.getNameByFe();  //this là person1 => person1.fullname
person1.getNameByFa();  //this về windowm => window.fullname => undefined
/*
nếu thuộc tính là name 
thì khi dùng FA thì mặc dù sút this ra window nhưng lúc này
bằng chuỗi rỗng vì trong window có 1 thuộc tính là name = "": chuỗi rỗng
nên khi đó kq là chuỗi rỗng chứ k phải là window

lời khuyên :
    FD nên dùng làm method trong object
    FE dùng cho method bt và method có this
    FA cho function ko có this
*/

//phân biệt parameter(tham số) và argument(đối số)
function handle7(a, b = 10){
    console.log(a + b); 
}

handle7(5, 3);
handle7(5);
//5, 3 đc gọi là đối số argument
//a, b đc gọi là tham số parameter
//b = 10 là default parameter

// tham số còn lại | tham số nghỉ | tham số đợi | rest parameter(ko phải spread)
let handle8 = function (a, b , ...c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

//... nẳm ở chỗ khác là spread
//... nằm ở parameter là tham số đợi
handle8(2, 5, 7, 9, 10);
//a = 2; b = 5; c = [7, 9, 10] lưu c là 1 mảng

//ứng dụng
//viết hàm nhận vào 1 đống giá trị số, tính tổng của đống số đó
let handle9 = (...numList) => {
    let result = 0;
    numList.forEach((val) => {
        result += val;
    });
    return result;
}
console.log(handle9(1,2,3,4,5,6,7)); //28

// number và method của number
//ko ai dùng js để làm app ngân hàng hết
// vì số trong js chỉ có dạng number
// vì số nguyên trong js chỉ có độ chính xác là 15 số
let x = 999999999999999; //15 số
x = 99999999999999999;//16 số là sai số
//đối với số thập phân độ chính xác là 17 số
x = 0.2 + 0.1; //0.30000000000000004
x = (0.2 * 10 + 0.1 * 10) / 10; //0.3
x = Number((0.2 + 0.1).toFixed(1)); //0.3
console.log(x);

//số
console.log(2 + 2); //4
console.log(2 + "2"); //22
console.log(2 + "d"); //2d
console.log(2 - "2"); //0
console.log(2 / "2"); //1
console.log(2 / "d"); //NaN
console.log(2 / 0); //infinity
console.log(-2 / 0); //-infinity
// phép cộng luôn ưu tiên chuỗi, phép trừ lun ưu tiên số

x = 0o7;//octal: hệ 8
x = 0xff;// hexa: hệ 16: 255
x = 10;
// x = String(x);
// x = x + "";
x = x.toFixed(0);
x = x.toString();

