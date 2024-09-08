// DOM: document object module
// dom là con của window object
// liên kết DOM, móc 1 biến vào đối tượng trong dom (thường xài bằng id)
// nếu muốn DOM 1 đối tượng thì có 2 cách
let inputNode = document.getElementById("name");//inputNode này trỏ tới thẻ có id là name
inputNode = document.querySelector("#name");//truyền vào Selector css (#name, .home... ) giống truyền bên css
// h1 p.home  //thẻ p nằm trong h
console.log(inputNode);

// QuerySelector: cho phép ta query tìm kiếm phần tử dựa trên selector css chỉ cung cấp 1 phần tử đầu tiên thỏa điều kiện dù có là class hay id

// vậy thì nếu mà mình cần lấy về 1 mảng các thẻ card thì sao ?
let cardList = document.getElementsByClassName("card"); // HTMLCollection nhìn thì giống mảng nhưng ko phải mảng vì ko nhưng method của array, ko có fore
cardList = [...document.getElementsByClassName("card")] // phân rã mảng htmlcollection thành 1 cái mảng thương
cardList = document.querySelectorAll(".card"); //giống queryselector nhưng lấy hết tất cả, trả ra NodeList
console.log(cardList); //

// HtmlCollection giống mảng nhưng thiếu các method cần thiết để xử lý pt
// NodeList giống mảng nhưng đầy đủ phần tử hơn 1 tý

let firstCard = document.querySelector(".card");
console.log(firstCard);
console.log(firstCard.childNodes); //[text, h2, text, p, text], text là nhưng khoảng trống giữa các thẻ
console.log(firstCard.children); //HTMLCollection [h2, p]
console.log(firstCard.classList); //['card', 'p-2', 'mb-3', value: 'card p-2 mb-3']
console.log(firstCard.className); //card p-2 mb-3
console.log(firstCard.parentElement); //nhìn ngược lên cha
console.log(firstCard.nextElementSibling) //nhìn thằng cùng loại kế bên, previousElementSibling: đi lên thằng cùng loại ở trước
console.log(firstCard.firstChild); //Returns phần tử đầu tiên của childNodes - text
console.log(firstCard.firstElementChild); //Returns phần tử đầu tiên của children - h2

let newCard = document.createElement("div");
newCard.classList.add("card" , "mb-3", "p-2");
newCard.className = "card mb-3 p-2";
let fname = "Tui đc tạo ra từ js";
newCard.innerHTML = `
  <h2>${fname}</h2>
  <p>Tui là 1 node fake</p>
`;

let cardGroup = document.querySelector(".card-group");
cardGroup.appendChild(newCard);

cardGroup.replaceChild(newCard, cardGroup.children[1]);

// thêm attribute vào node
firstCard.setAttribute("data-id", "1"); //thuộc tính có tên data-id có giá trị là 1
// vì thẻ mà DOM tạo ra là ảo nên phải có thuộc tính khi mà có eventlistener để lấy đc thông tin để DOM
console.log(firstCard.getAttribute("data-id")); //lấy 1
firstCard.removeAttribute("data-id"); //xóa attribute



// 
let hack = document.querySelector("#inputfield");
hack.addEventListener("input",(event) => {
  let test = document.querySelector(".highlight");
  hack.value = test.textContent;
})



