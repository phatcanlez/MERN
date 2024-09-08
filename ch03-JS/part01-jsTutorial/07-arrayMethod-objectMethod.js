"use strict";
// 07-arrayMethod-objectMethod
console.log("07-arrayMethod-objectMethod");
//mảng ko nhất thiết phải cùng kiểu
let arr1 = [1, 2, "a", { lname: "Huệ", age: 10 }, [3, 5]];
console.log(arr1);

// 2.length cung cấp độ dài
console.log(arr1.length); //5

// 3.Array.isArray() | instanceof Array: hỏi xem 1 biến có phải array ko
console.log(Array.isArray(arr1)); //true
console.log(arr1 instanceof Array); //true

//4. .toString(): biến mảng thành chuỗi kèm ","
let workerList = ["Huệ", "Lan", "Trà"];
let str1 = workerList.toString();
console.log(str1); //Huệ,Lan,Trà

//5. split(token) // cắt chuỗi thành 1 mảng | join() ghép mảng thành 1 chuỗi

//6. push(item): thêm pt ở cuối mảng | return độ dài mới
workerList = ["Huệ", "Lan", "Trà"];
let result = workerList.push("Cúc"); //nhét vào cuối và trả về độ dài mới
console.log(workerList, result); //["Huệ", "Lan", "Trà" ,"Cúc"] 4

//7. pop(): xóa pt ở cuối mảng | return item bị xóa
workerList = ["Huệ", "Lan", "Trà"];
result = workerList.pop(); //xóa phần tử ở cuối và trả cho mình phần tử vừa xóa
console.log(workerList, result); //["Huệ", "Lan"] "Trà"

// 8.unshift(item): thêm pt ở đầu mảng | return độ dài mới
workerList = ["Huệ", "Lan", "Trà"];
result = workerList.unshift("Cúc");//nhét vào đầu và trả về độ dài mới
console.log(workerList, result); //["Cúc", "Huệ", "Lan", "Trà" ] 4

// 9.shift(): xóa pt ở đầu mảng | return item bị xóa
workerList = ["Huệ", "Lan", "Trà"];
result = workerList.shift();
console.log(workerList, result); //["Lan", "Trà"] "Huệ"

// 10.delete array[index]: xóa pt ở vị trí index - xóa entry trong object để lại khoảng trống ở vị trí đó nếu truy cập vào thì undefined
workerList = ["Huệ", "Lan", "Trà"];
delete workerList[1];
console.log(workerList); //["Huệ", empty, "Trà"];
console.log(workerList[1]); //undefined

//11. splice(index, số lượng cần xóa,...các phần tử muốn thêm) khá ngon
//từ start: - xóa số lượng length pt
//          - nhét vào các phần tử mún thêm
//  return: mảng các item bị xóa

//xóa ko thêm
workerList = ["Huệ", "Lan", "Trà"];
result = workerList.splice(1, 1); //từ phần tử số 1 xóa 1 phần tử
console.log(workerList, result); //["Huệ", "Trà"] ["Lan"]
//nên xài trong object để xóa thuộc tính

//thêm ko xóa
workerList = ["Huệ", "Lan", "Trà"];
result = workerList.splice(1, 0, "Điệp", "Cường");
console.log(workerList, result); //["Huệ", "Điệp", "Cường","Lan", "Trà"] [] result là mảng rỗng vì ko có phần tử nào bị xóa

//vừa thêm vừa xóa
workerList = ["Huệ", "Lan", "Trà"];
result = workerList.splice(0, 2, "Điệp", "Cường");
console.log(workerList, result); //["Điệp", "Cường", "Trà"] ["Huệ", "Lan"]

//12.slice(start, end): return mảng con từ start đến end - 1

//13.concat(...array): nối mảng, nối chuỗi
let workerBoy = ["Lan", ["Duy", "Tuấn"]];
let workerGirl = ["Điệp", "Hùng"];
workerList = workerBoy.concat(workerGirl, "Hồng", ["Tâm", "Phúc"]); //tâm và phúc vì nằm trong mảng nên khi concat thì nó sẽ tự unblock mảng 
console.log(workerList); //['Điệp', 'Hùng', 'Lan', Array(2), 'Hồng', 'Tâm', 'Phúc']
workerBoy[1][0] = "Tuấn"; //hiện tượng 2 chàng trỏ 1 nàng đổi thuộc tính của workboy ảnh hưởng worklist
console.log(workerList);

//shallow copy: copy nông, sao chép nhưng ko cắt đc hết dây mơ rễ má => 2 chàng trỏ 1 nàng

//14. spread operator: destructuring: kỹ thuật phân rã {} (object) | [] (mảng) 
workerList = [...workerBoy, ...workerGirl]; //đại diện là dấu ... (3 chấm)
console.log(workerList); //['Điệp', 'Hùng', 'Lan', Array(2)]
console.log(workerList[3] == workerGirl[1]); //true
//shallow copy
workerList[3] = [...workerList[3]]; //làm như vậy mới đạt đc deep copy, đi vào trong mảng phân rã cái mảng con rồi bọc lại thành mảng mới chứa phần tử cũ
console.log(workerList[3] == workerGirl[1]); //false

//15. forEach(callback function): lặp mảng
//  callback function:(val, index, array) => {}
arr1 = ["Huệ", "Cúc", "Hồng"];
arr1.forEach((val, index, array) => { //value <=> item , index <=> key, mảng là đưa ["Huệ", "Cúc", "Hồng"] arr thừa vì mình có thể xài lun arr1 
  console.log(val, index, array);
});

//16. filter(cf): lọc các item thỏa điều kiện của callback function, hàm duyệt qua các item, item nào bỏ vào cf đc true thì giữ lại
//callback function nhận item, nếu trả ra true thì item đó đc báo vào kết quả, giữ lại, false thì bỏ
//  cf: (val, index, array) => {}
arr1 = [1, 2, 3, 4, 5];
result = arr1.filter((item) => item % 2 == 0); //filter ko chỉnh sửa bản gốc
console.log(result); //2, 4

//17. find(cf): return item đầu tiên trong mảng thỏa điều kiện, giống filter nhưng chỉ lấy thằng đầu tiên
arr1 = [1, 2, 3, 4, 5];
result = arr1.find((item) => item % 2 == 0);
console.log(result); //2

//18. findIndex(cf): return index của item đầu tiên thỏa điều kiện, giống find nhưng trả ra index
arr1 = [1, 2, 3, 4, 5];
result = arr1.findIndex((item) => item % 2 == 0);
console.log(result); //1

//19. indexOf(value):  return index đầu tiên của các item có giá trị giống value, tìm vị trí value nằm đâu trong mảng 
arr1 = [1, 2, 3, 4, 5];
result = arr1.indexOf(3); //2
result = arr1.indexOf([3, 5]); //-1
result = arr1.indexOf([3, 4]); //-1
console.log(result);
// array.indexOf(searchElement, indexStart):
// tìm phần tử từ vị trí indexStart trở lên
// nên là indexOf không có khả năng tìm vị trí của mảng con trong mảng cha

//filter(cf) lọc các item thỏa cf => item[]
//find(cf) tìm item đầu tiên thỏa cf => item 
//findIndex(cf) tìm item đầu tiên thỏa cf => index của item đó
//indexOf(value) tìm value đầu tiên thỏa cf => index của item đó

//20. every(cf): giống như All trong DBI, duyệt qua tất cả các item đi qua cf đều true thì mới trả ra true
//tất cả các phần tử trong mảng phải thỏa điều kiện callback function thì mới true
//1 thằng ko thỏa thì false
arr1 = [1, 2, 3, 4, 5];
result = arr1.every((item) => item > 1); //false, vì số 1 ko thỏa
result = arr1.every((item) => item < 6); //true
console.log(result);

//21. some(cf): giống như In trong DBI
//duyệt qua tất cả phần tử chỉ cần 1 phần tử thỏa điều kiện callback function thì true
//  ko ai thỏa thì false
result = arr1.every((item) => item > 1); //true
result = arr1.every((item) => item > 6); //false
console.log(result);

//22. includes(value): tìm xem value có tồn tại trong mảng ko (true | false) cũng ngon
result = arr1.includes(4); //true
console.log(result);
console.log([1,3,5,7,8,10,12].includes(2)); //2 có nằm trong mảng hay ko

//23. reverse() //đảo ngược

//24. sort(): sắp xếp, ảnh hưởng lên mảng gốc
//string
arr1 = ["Điệp", "An", "Bảo"]; 
arr1 = arr1.sort(); // trả ra cái mảng
console.log(arr1); //['An', 'Bảo', 'Điệp']
//number
arr1 = [1, 3, 20, 100];
arr1 = arr1.sort(); //[1, 100, 20, 3]
arr1 = arr1.sort((a, b) => a - b); //[1, 3, 20, 100] //truyền vào comparator 
console.log(arr1);

//25.* .map(cf): biến đổi các phần tử trong mảng theo 1 công thức nào đó,sau khi biến đổi vẫn là cái mảng 
//      (val,index,array) => {}
arr1 = [2, 5, 7];
result = arr1.map((item) => (item + 2) / 3);
console.log(arr1); // map ko làm thay đổi mảng (bảo toàn dữ liệu)
console.log(result);

//đừng thiếu return, map sẽ thay thế item = kết quả return đó
//nếu thiếu phần tử sẽ thành undefined

//26.* reduce(cf, initial (giá trị mặc định, giá trị ban đầu trc khi cộng vô) ): biến đổi từng phần tử trong mảng theo 1 công thức cf và dồn giá trị về 1 biến total (vừa biến đổi vừa dồn các kết quả về 1 biến duy nhất)
//cf: (total, current( item <=> value), currentIndex (index <=> key)) => {}
arr1 = [1, 2, 5, 7, 20 , 100];
let sum = arr1.reduce((total, current, currentIndex) => {
    
    // giải thích từng bước
    // current += 2;
    // total += current / 3;
    // return total;

  return total + (current + 2) / 3;
}, 0);
console.log(sum);

let productList = [
    { proName: "xe", desc: "audi"},
    { proName: "xe", desc: "biệt thự"}, 
    { proName: "xe", desc: "ngọc trinh"},
];

let content = productList.reduce((total, product) => {
    return total + `<h1>${product.proName}</h1> <p>${product.desc}</p>`;
}, "");

document.querySelector(".demoReduce").innerHTML = content;

//coi cho biết: *biến mảng thành object = reduce
arr1 = ["Điệp", 10, 22];
arr1 = arr1.reduce((total, current, currentIndex) => {
  total[currentIndex] = current;
  return total;
}, {});
console.log(arr1);

//Object-method
//entry của object là key: value
//key thì luôn là string hoặc number
//value: object | function | number | string | undefined (bất cứ thứ gì)

let worker1 = {
  lname: "Điệp đẹp trai",
  age: 25,
  showInfor() {
    console.log(this.lname + " " + this.age);
  },
};

worker1.showInfor();
//có thể thêm thuộc tính
worker1.point = 10;
worker1["point"] = 10;
//update thuộc tính
worker1.lname = "Điệp PiedTeam";
//xóa thuộc tính: delete ko để lại lỗ giống mảng
delete worker1.age;
console.log(worker1);

//1.object assign(target , source) //giống concat thay gì nối, thì nó merge object
//merge object: có rồi thì ghi đè, chưa có thì thêm vào

let person1 = {
  lname: "Điệp",
  age: 25,
  job: ["Yangho", "Coder"],
};

let person2 = {
  lname: "Lan",
  age: 24,
  company: "PiedTeam",
};

let person3 = Object.assign(person1, person2); //hợp 2 đối tượng lại và lưu vào person 1 và return target object (person1) 
console.log(person1); 
/*
==> ['Lan', 24, Array(2), 'PiedTeam']
let person3 = {
  lname: "Lan",
  age: 24,
  job: ["Yangho", "Coder"],
  company: "PiedTeam",
};
*/
//shallow copy
person3 = { ...person1, ...person2 };
console.log(person3.job == person1.job); //true
person3.job = [...person3.job]; //{...person3.job} cách khác //cắt đc duyên âm
console.log(person3.job == person1.job); //false
//deep copy

//Object.keys(obj): mảng các key của object
console.log(Object.keys(person3)); //['lname', 'age', 'job', 'company']
//Object.values(obj): mảng các value của object
console.log(Object.values(person3)); //['Lan', 24, Array(2), 'PiedTeam']
//Object.entries(obj): mảng các entries của object
console.log(Object.entries(person3)); 
//0: (2) ['lname', 'Lan']
//1: (2) ['age', 24]
//2: (2) ['job', Array(2)]
//3: (2) ['company', 'PiedTeam']
//for-in: lặp với object đc
