"use strict";
//05-objectMethod-this-Function-hof-bind;
//1.object: đối tượng
// tất cả những gì sờ đc đếm đc thì là đối tượng
// các đối tượng (object) có thể đc miêu tả bằng thuộc tính (prop)
// các đối tượng còn có hành động đặc trưng method(phương thức)
// hàm ở ngoài thì gọi là function, hàm trong project thì gọi là method

let promotionBoy1 = {
    nickName: "Lê Mười Điệp",//prop

    //method: fuction
    sayHi() {
        console.log("ahihi quẹo lựa quẹo lựa");
    },

    sayHi1: function () {
        console.log("ahihi quẹo lựa quẹo lựa");
    },

    sayHi2: () => {
        console.log("ahihi quẹo lựa quẹo lựa");
    },
};

//bởi vì cả 3 method trên đều ko có this nên không có khác biệt và trên thực tế
//FD FE ko khác nhau quá nhiều về mặt lý thuyết
//và khi tạo method thì người ta thường dùng FD
//nếu phải viết function thì nên chọn FE và FA (nếu ko có this)

//ta có thể thêm prop hay method sau khi đã tạo object
promotionBoy1.money = 2000;
promotionBoy1.chuiKhach = function () {
    console.log("Under the hood ko đc thì cook" + promotionBoy1.money);
};
//dựa vào hoisting mình hoàn toàn có thể thêm prop và prop chứa function(method) vào một object đã đc tạo trc đó
promotionBoy1.chuiKhach;
//nâng cao 1 tý
//this trong method là gì?
//(object > method > this)
let promotionBoy2 = {
    nickName: "Lê Mười Điệp",
    //method
    showName() {
        console.log("Nickname nè: " + this.nickName); //this là gì underfined
    },

    showName1: function () {
        console.log("Nickname nè: " + this.nickName); //
    },

    showName2: () => {
        console.log("Nickname nè: " + this.nickName);
    },
}

//this chỉ có giá trị khi run time | khi mà hàm đc gọi thì this mới có giá trị
//this đc xác định bằng object đang gọi method chứa nó
promotionBoy2.showName(); //this là promotionBoy2 => promotionBoy2.nickName
promotionBoy2.showName1(); //giống fd
promotionBoy2.showName2(); //fa luôn sút this => this is window => window.nickName là undefined

//khi viết method thì ko nên dùng FA vì nó ko thích this( trong method thì rất hay có this)

//nâng cao 1 tý
//điều gì xảy ra nếu this nằm trong function của method trong object
// (object > method > function > this)
let promotionBoy3 = {
    nickName: "Lê Mười Điệp",
    showName() {
        let arrow = () => {
            console.log("Nickname nè: " + this.nickName);
        };
        arrow();
    },

    showName1() {
        let expression = function () {
            console.log("Nickname nè: " + this.nickName);
        };
        expression();
    },
};

// promotionBoy3.showName1(); //m:fd > fe > this
//this đc xác định là object gọi nó
//fe là 1 hàm giữ this lại
//nhưng trong trường hợp này ko có cai gọi hàm fe cả
//thì mình phải xét theo mode
//use strict                                                normal
//this là undefined                    |  this là window
//undefined.nickName                   |  window.nickName
//Lỗi: cant read prop of undefined     |  kq: undefined

promotionBoy3.showName(); //m: fd > fa > this
//fa vô cùng ghét this, dù ở mode nào thì cũng sút this đi
//nhưng may mắn là fa nằm trong m:fd (giữ this lại)
//vậy this sẽ là người gọi m:fd
//hên quá có người gọi m:fd nên ở mode nào thì cũng là người đó
//this là promotionBoy3 => promotionBoy3.nickName => Lê Mười Điệp

//nếu cần xài 1 hàm bên trong 1 method thì nên dùng function arrow

//nâng cao thêm 1 tý
//this trong function của callback nằm trong method của object thì sao?
//(object > method > callback(callbackfn > this))

let promotionBoy4 = {
    nickName: "Lê Mười Điệp",
    showName() {
        let arrow = () => {
            console.log("Nickname nè: " + this.nickName);
        };
        setTimeout(arrow, 3000);
    },

    showName1() {
        let expression = function () {
            console.log("Nickname nè: " + this.nickName);
        };
        setTimeout(expression, 3000);
    },
};
//setTimeout cài callbackFn như đang xài ở lớp chứa nó (y chang ở trên)

//nâng cao 1 tý
//tại sao phải dùng this
let promotionBoy5 = {
    nickName: "Lê Mười Điệp",
    showName() {
        console.log("Nickname nè: " + this.nickName);
    },
};
promotionBoy5.showName();
let promotionBoy6 = promotionBoy5;
promotionBoy5 = null;
promotionBoy6.showName();

//Phần khó nhất
//nâng cao: HOF
//Higher order function
//kĩ thuật xử lý hàm bậc cao
// 1. callback: hàm nhận vào 1 hàm làm đối số
// 2. closure: hàm trả về 1 hàm khác
// 3. currying: kĩ thuật chuyển đổi 1 hàm có nhiều parameter thành nhiều hàm liên tiếp có parameter
// curry là hệ quả của closure

//viết hàm nhận vào 2 số, trả ra tổng của 2 số đó
let sumDemo = function (a, b) {
    return a + b;
}; //FE
//viết tắt (vì có 1 lệnh à)
sumDemo = (a, b) => a + b;
//HOF
sumDemo = (a) => {  //hàm nhận vào a
    return (b) => { //return ra 1 hàm khác nhận vào b
        return a + b; //trả ra a + b
    };
};

// viết tắt
sumDemo = (a) => (b) => a + b; //

//chạy
sumDemo(5)(7);

//HOF có 3 khái niệm
// 1.Callback: hàm nhận vào 1 hàm làm parameter
const array1 = [1, 2, 3, 4, 5];

array1.forEach((val) => {
    console.log(val);
});

// 2.Closure: bao gồm 2 kĩ thuật nhỏ bên trong
//  2.1: lexical scoping: hàm con xài biến của hàm cha
//  2.2: closure: hàm trả ra 1 hàm
// ứng dụng: tạo ra 1 hàm mà mỗi lần gọi nó thì nó trả ra một con số mới ko trùng với con số cũ, làm key tự tăng

const initIdentity = () => {
    let newId = 0;
    return () => {
        return ++newId;
    };
};

//cách dùng sai
console.log(initIdentity()); //tạo newId = 0 và trả ra hàm () => ++newId;
console.log(initIdentity()()); //1
console.log(initIdentity()()); //1

//xài đúng
let demoClosure = initIdentity(); //tạo newId = 0 và trả ra hàm () => ++newId;
console.log(demoClosure()); //1
console.log(demoClosure()); //2
console.log(demoClosure()); //3

//3. currying: kĩ thuật chuyển đổi từ 1 function nhận vào nhiều para thành nhiều function liên tiếp có para

//Bài tập ứng dụng
//viết 1 hàm xử lý 3 bài toán sau:
// tìm các số từ 0 - 10 là số lẻ
// tìm các số từ 0 - 20 là số chẵn
// tìm các số từ 0 - 30 là số chia 3 dư 2

let handle = (end, checkNumberFn) => {
    let result = [];
    for (let i = 0; i < end; i++) {
        if (checkNumberFn(i)) result.push(i);
    }
    return result;
};

handle(10, (number) => number % 2 != 0);
handle(20, (number) => number % 2 == 0);
handle(30, (number) => number % 3 - 2 == 0);

// call apply bind
const people = {
    
    print(age, location) {
        //mfd
        console.log(this.fullname + " " + age + " " + location);
    },
};
people.print(10, "TP HCM"); //undefined 10 TP HCM
//this là people -> people.fullname -> undefined

//ta có thể bẻ đường dẫn của this = cách như sau
const diep = { fullname: "Lê Mười Điệp" };
//call(obj,...paremeter cũ);
people.print.call(diep, 10, "TP HCM"); // Lê Mười Điệp TP HCM

//apply(obj, [...parameter cũ]);
people.print.apply(diep, [10, "TP HCM"]); // Lê Mười Điệp TP HCM

//react
//bind(obj,...parameter cũ)() => closures
people.print.bind(diep, 10, "TP HCM")(); // Lê Mười Điệp TP HCM

//bind(obj)(...parameter cũ) => currying
// people.print.bind(diep)(10, "TP HCM");
people.print = people.print.bind(diep);
people.print(10, "TP HCM");

//ứng dụng
let promotionBoy7 = {
  nickname: "Lê Mười Điệp", //properties
  //method
  showName2() {
    //mfd
    let expression = function () {
      //fe
      console.log("Nicknmae nè " + this.nickname);
    }.bind(this);
    setTimeout(expression, 3000);
  },
};
promotionBoy7.showName2();

//datetime
//thời gian trong js là object | dựa vào milisecond
//đc tính từ 1/1/1970 theo chuẩn utc
//có 4 cách khởi tạo
let a = new Date();
a = new Date(1691849729913);
a = new Date("2024-8-17");
a = new Date(2023, 7, 17, 13, 45, 0, 0); //y/m-1/d/h/m/s/ms
console.log(a);

// getDate()        : lấy ngày trong tháng //16
// getDay()         : lấy ngày trong tuần (0: chủ nhật - 6:thứ 7);
// getFullYear()    : lấy năm
// getHours()       : lấy giờ 0-23
// getMilliseconds(): lấy mili giây (0-999)
// getMinutes()     : lấy về phút (0-59)
// getMonth()       : lấy về tháng (0 -11)
// getSeconds()     : lấy về giây (0-59)
// toISOString()    : lấy định dạng thời gian chuẩn
//dùng để bỏ vào DBI/ vì các ngôn ngữ trình duyệt khác
//đểu có thể chuyển từ ISO này về dạng bth được
console.log(a.toISOString());

//windowObject
// windowObject(wo) là đại diện cho cửa sổ trình duyệt
// tất cả các global object, function, biến mà tạo bằng var thì đều là method | prop của wo

// ngay cả DOM cũng là cũng window
console.log(window.innerHeight);
console.log(window.innerWidth);

//callback
setTimeout(() => {
    window.open("https://www.dimtutac.com/", "_black", "width = 500", "height = 700")
}, 3000);

//location
window.location
//href = protocol + hotname / pathname

console.log(location.href);
console.log(location.hostname); //domain
console.log(location.pathname);
console.log(location.protocol);
// console.log(window.location);


// location = "url"
// location.assign("url")

//history.forward()
//history.back()

//trình duyệt cung cấp 3 loại popup
alert("lộc ngu"); //popup thông báo
let result = confirm("Anh Điệp có đẹp trai ko?");
if (result) {
  alert("Ghét nhất bọn nói thật");
} else {
  alert("đừng dối lòng nữa");
}
result = prompt("Nhập tên đi thằng l");
result = prompt("Nhập tên đi thằng l", "Lộc");
