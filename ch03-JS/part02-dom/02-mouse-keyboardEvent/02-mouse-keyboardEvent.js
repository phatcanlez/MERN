let btn = document.querySelector("#btn-add");
btn.addEventListener("click", (event) => {
    let inputNode = document.querySelector("#name");
    let newItem = document.createElement("li");
    newItem.className = "card mb-3 p-2";
    newItem.innerHTML = `<p>${inputNode.value}</p>`;
    let list = document.querySelector("#list");
    list.appendChild(newItem);
    inputNode.value = "";
}); 
//btn đợi người dùng làm gì đó để chạy callbackfn
// mouseover: đưa chuột vào
// mouseout: đưa chuột ra
// dblclick: nhấn chuột 2 lần liên tiếp
// click
// keydown -> keypress -> (từ lúc này mới có chữ) -> keyup
// input
// change: khi gõ ko có gì xảy ra đưa chuột ra sẽ có

//event cung cấp thông tin của những sự kiện đang xảy ra
//target: thông tin của phần tử bị nhấn (dùng để lấy thông tin của người dùng bấm vào thông tin đó)

// keyboard event
let inputNode = document.querySelector("#name");
inputNode.addEventListener("keydown", (event)=>{console.log(inputNode.value);});

// --------------------Lưu trữ------------------------------
//để lưu ở phía client có 2 : cookie, localStorage
// cookie nhờ bên thứ 3 , có giới hạn tg lưu trữ
//cookie: cho phép lưu trữ thông tin người dùng web vào máy tính
const date = new Date(2023, 11, 28).toString();
document.cookie = `username = diep; expries=${date};path=/;`;
console.log(document.cookie);
//trên thực tế ko thao tác tay với cookies mà thao tác thông qua thư viện
//khi mà người ta thao tác vớ cookie thì người ta dùng thư viện js.cookie

//localStorage:lưu trữ ở local và có hiệu lực vĩnh viễn
localStorage.setItem("name", "Điệp Cookie");
//localStorage hay cookies chỉ lưu chuỗi hoặc json string, nếu muốn lưu object | mảng thì phải chuyển thành chuỗi dạng json

const profile = {
  fname: "Anh Điệp đẹp trai",
  age: 25,
};
console.log(profile);

let str = JSON.stringify(profile); //biến object thành chuỗi json
console.log(str);
localStorage.setItem("profile", str); //lưu lên localStorage

//lấy về
let data = localStorage.getItem("profile");
data = JSON.parse(data);
console.log(data);

//lưu này chỉ chứa attribute nên khi tạo đối tượng thì chỉ cần new (gọi contructor)