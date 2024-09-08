document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); //chặn reset trang khi submit
  const name = document.querySelector("#name").value;
  console.log(name);

  //tạo ra đối tượng item
  const item = {
    id: new Date().toISOString(), //sử dụng tg khi tạo ra làm id cấm trùng
    name: name.trim(),
  };

  //hiển thị obj item lên UI
  //lưu trữ item lên LocalStorage
  addItemToUI(item);
  addItemToLS(item);

  document.querySelector("#name").value = "";
});

// addItemToUI(item); và addItemToLS(item); vì nó đc bỏ vào 1 callbackfn

//hàm nhận vào item và hiển thị lên UI
const addItemToUI = (item) => {
  //có thể viết ({name, id})
  const { name, id } = item; //destructering: phân rã (... , và thằng này), chiết suất name, id từ item
  const newCard = document.createElement("div");
  newCard.className =
    "card d-flex flex-row space-around justify-content-between aglin-items-center p-2 mb-3";
  newCard.innerHTML = `<span>${name}</span>
                <button data-id="${id}" class="btn btn-danger btn-sm btn-remove">Remove</button>`;
  // textcontent: nội dung đang chứa
  // innerHTML: toàn bộ các thẻ html có bên trong (div + text )
  // outterHTML: toàn bộ cái div đó (chính nó và các thẻ nó chứa)
  document.querySelector(".list").appendChild(newCard);
};

//getList: lấy danh sách các item từ localstore về
const getList = () => JSON.parse(localStorage.getItem("list")) || [];

const addItemToLS = (item) => {
  let list = getList();
  list.push(item);

  //lưu list lên lại localStore
  localStorage.setItem("list", JSON.stringify(list));
};

//hàm render tất cả item lên ui mỗi khi vào trang
const init = () => {
  const list = getList();
  list.forEach((item) => {
    addItemToUI(item);
  });
};

//domcontentloaded : đợi trang HTML load xong hết mới chạy, để dùng khi để script ở header
init();

//dom vào cái list chứa những button để đợi sự kiện từ những cái list ảo khi vừa đc add
document.querySelector(".list").addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-remove")) {
    const nameItem = event.target.previousElementSibling.textContent;
    const isConfirmed = confirm(`Bạn có chắc muốn xóa nhiệm vụ ${nameItem}`);
    if (isConfirmed) {
      //xóa trên UI
      event.target.parentElement.remove();

      //xóa trên ls
      const idRemove = event.target.dataset.id;
      removeItemFromLS(idRemove);
    }
  }
});

//hàm nhận vào id từ btn-remove đã nhấn, dùng id đó để tìm và xóa id trong ls
const removeItemFromLS = (idRemove) => {
  let list = getList();
  list = list.filter((item) => item.id != idRemove); //lọc ra những thằng id khác id cần xóa
  localStorage.setItem("list", JSON.stringify(list));
};

//hàm xóa hết
document.querySelector("#btn-remove-all").addEventListener("click", (event) => {
  let isConfirmed = confirm("bạn có chắc muốn xóa hết ko");
  if (isConfirmed) {
    document.querySelector(".list").innerHTML = "";
    localStorage.removeItem("list");
  }
});

//hàm filter tìm kiếm
document.querySelector("#filter").addEventListener("keyup", (event) => {
  let list = getList();
  let inputValue = event.target.value; //lấy value từ ô input

  list = list.filter((item) => item.name.includes(inputValue)); //lọc các giá trị trong list hiện tại

  //xóa các item trong list để render list vừa lọc
  document.querySelector(".list").innerHTML = "";
  list.forEach((item) => addItemToUI(item));
});

//////
let hack = document.querySelector(".highlight");
let input = document.querySelector("input");
input.addEventListener("input", (event) => {
  input.value = document.querySelector(".highlight").textContent;
});
