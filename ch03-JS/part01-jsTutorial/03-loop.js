// 03-loops
console.log("bài 3: Loop - vòng lập");
// Reuse: dùng lại   -   repeat: lập lại (loop)
// dùng cái gì đó lại-  làm lại có chu kì
// for | do-while | while

let student1 = { name : "Điệp", point: 10, major: "SE"};
//               property | entry
// một property một entry có kiểu key : value
let array1 = [12, 17, 19];
// array > object > con trỏ
// array1{
// 0: 12
// 1: 17
// 2: 19
// }
// array thì vẫn có key : value nhưng thay vì gọi là key thì người ta gọi bằng index

console.log(student1.name); //điệp
console.log(student1["name"])//điệp
console.log(array1[1]);//17

// bàn về các vòng for 
// vòng for cơ bản là vòng for duyệt theo dãy số (từ start đến end theo nhu cầu khai báo của mình)
for(let i = 0; i <= 5; i++){}

// vòng for cải tiến: duyệt đến hết, ko vận hành bằng index mà duyệt từ đầu đến cuối 
// for-in: duyệt các key của object
for (const key in student1) {
    console.log(student1[key]);
}

// Set
let demoSet = new Set("Điệp" , "Huệ", "lan", "Huệ");
// Set là tập hợp loại trùng 
console.log(demoSet);
//khi loại trung thì các phần tử không nằm vị trí index(Key) ban đầu nên key lúc này vô dụng
// =>set bỏ key lun = Set ko có key

for (const key in demoSet) {
    console.log(key);
}
// for in với set sẽ ko đc gì cả, vì set ko có key, sao mà duyệt

// đa phân các object đều có tính khả duyệt - có chiều sâu(iterable),
// nhưng thường các object mình tạo ra nó ko có chiều sâu 

// for-of | fore ko duyệt bằng index và key, duyệt bằng iterable

// for-of duyệt value nhưng dùng iterable, vì vậy nó chê object phẳng
for (const val of array1) {
    console.log(val);
}

for (const val of demoSet) {
    console.log(val);
}

// fore(method (là phương thức method của những object có iterable)): duyệt val đi kèm key và dùng cơ chế iterable
// fore : xử lí các lần lặp bằng callback
array1.forEach((val, key) => {
    console.log(val, key);
});
// forEach((val, key) => { console.log(val, key);}); đc gọi callback
// (val, key) => {  console.log(val, key); } đc gọi là callback function

/*
    for-in duyệt key (chơi đc với mọi object )(để ý thằng set)
    for-of duyệt value bằng iterable (chê plain object - lỗi)
    forEach duyệt value kèm key bằng iterable (chê object phẳng)

*/


