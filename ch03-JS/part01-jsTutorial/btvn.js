"use strict"
// ------------------------------BTVN-------------------------------------

function handle1 (n) {
    let re = [];
    for (let i = 0; i <= n; i++) {
        n % i == 0 ? re.push(i): "" ;
    };
    return re;
};
console.log("câu 1");

console.log(handle1(100));
 
let handle2 = (n) => {
    let re = 0;
    for (let i = 0; i <= n; i++) {
        n % i == 0 ? re += i: "" ;
    };
    return re;
}

console.log("câu 2");

console.log(handle2(100));

let handle3 = (n) => {
    if (n < 2) return false; 
    for (let index = 2; index <= n - 1; index++)if (n % index == 0)return false;
        return true;
    };

    console.log("câu 3");

    console.log(handle3(2));
    console.log(handle3(1));
    console.log(handle3(4));
    console.log(handle3(5));

let handle4 = (n) => {
    let re = 0;
    while(n > 0){
        re += n % 10;
        n = Math.floor(n / 10);
    }
    return re;
}

console.log("câu 4");
console.log(handle4(12345678));

function handle5(month, year){
        return new Date(year, month, 0).getDate();
}

console.log("câu 5");
console.log(handle5(8, 2024));

let handle6 = function() {
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            console.log(i + " x " + j + " = " + i * j);
        }
        console.log("");
        
    }
}
console.log("câu 6");
handle6();

function fibo(){
    let n1 = 0;
    let n2 = 1;
    return () =>{
        let re = n1;
        n1 = n2;
        n2 = re + n1;
        return  re;
    }
}

let handle7 = (n) => {
    let cal = fibo();
    let re;
    for (let index = 0; index < n; index++) {
        console.log(cal());
    };
         
    return re;
}

console.log("câu 7");

console.log(handle7(8));

let handle8 = (n) => {
    let cal = fibo();
    let re = 0;
    for (let index = 0; index < n; index++) {
        re += cal();
    };
         
    return re;
}

console.log("câu 8");

console.log(handle8(8));