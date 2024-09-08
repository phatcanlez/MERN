//runtimeError: lỗi khi vận hành | do người dùng
//syntaxError : lỗi sai cú pháp | do người code
//logicError : lỗi sai tư duy | do người code

//tryCatch: dùng để xử lý lỗi phát sinh trong runtimeError
//nhớ rằng tryCatch không vận hành trong syntaxError
//** TryCatch chỉ hoạt động trong môi trường đồng bộ mà thôi

// đồng bộ (đợi)    -    bất đồng bộ (ko đợi nhau)
// đồng bộ (22s)         bất đồng bộ (10s)
// a  5s
// b  10s
// c  7s
// JS đc xem là đơn luồng khi chạy 1 mình nhưng khi chạy web thì là đa luồng

// nếu 2 thằng có quan hệ nguyên nhân kết quả thì nên sử dụng luồng đồng bộ còn nếu ko thì bất đồng bộ

// đồng bộ
try {
  piedteam;
} catch (error) {
  console.log(error);
}

// bất đồng bộ
// try {
//   await setTimeout(piedteam, 3000);
//   console.log("hello");
// } catch (set) {
//   console.log(error);
// }

// nên code như thế này nhé
// setTimeout(() => {
//   try {
//     piedteam;
//     console.log("hello");
//   } catch (error) {
//     console.log(error);
//   }
// }, 1000);

//promise(GetA).then(getB).catch("xin lỗi")

// cấu trúc của 1 error trông như nào
// vì mình làm backend nên mình phải xử lý lỗi rất nhiều
// xử lý lỗi: "làm cho lỗi tường minh, dễ nhìn"
//              giấu đi những thông tin nhạy cảm

// gõ thử "new Error" và ctrl + click xem trong đó có gì
// new Error();

try {
  piedTeam; //referenceError : lỗi do ko tìm thấy địa chỉ vùng nhớ
  console.log("hello");
} catch (error) {
  console.log(error);
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}

// flow:
// stack là prop mà mình ko muốn người dùng nhìn thấy nhất

// flow1: omit stack
// Error:               newError
//  name                  name
//  message   ---->       message
//  stack

// flow2: custom Error
// Error:               ErrorWithStatus extends Error
//  name                  status
//  message   ----->      message
//  stack

//mình có thể tự điều hướng về catch thông qua lệnh throw
let money = 999_999_999_999_9999; //15 số 9
try {
  if (money > 999_999_999_999_999) throw new Error("số quá lớn với sức chứa");
  console.log(money);
} catch (error) {
  console.error(error);
}

// EvalError():     tạo 1 instance đại diện cho một lỗi xảy ra liên quan đến hàm toàn cục Eval()
// InternalError(): tạo 1 instance đại diện cho một lỗi xảy ra khi 1 lỗi bên trong jsEngine
//                  được ném. vd: quá nhiều đệ quy
// RangeError()   : tạo 1 instance đại diện cho một lỗi xảy ra khi một biến số hoặc tham chiếu
//                  nằm ngoài phạm vi hợp lệ của nó
// ReferenceError : tạo 1 instance đại diện cho một lỗi xảy ra khi hủy tham chiếu của 1 tham chiếu
//                  không hợp lệ
// SyntaxError    : tạo 1 instance đại diện cho một lỗi xảy ra trong khi phân tích cú pháp
//                                                                          mã trong Eval()
// TypeError      : tạo 1 instance đại diện cho một lỗi xảy ra khi một biến hoặc 1 tham số
//                  có kiểu không hợp lệ
// URIError       : tạo 1 instance đại diện cho một lỗi xảy ra khi encodeURI() hoặc decodeURI()
//                  truyền các tham số không hợp lệ

// finally
loading = true;
try {
  loading = true;
  get(); //lỗi
  loading = false;
} catch (err) {
} finally {
  loading = false;
}
console.log(loading);

//chế ra 1 kiểu lỗi mới dựa trên Error
class PiedError extends Error {
  constructor({ message, status }) {
    //sử dụng {} trong parameter thì có lun phân ra destructering nên là có thể lấy thẳng message hay status .
    super(message);
    this.status = status; //tạo 1 prop cho class PiedError
  }
}

try {
  throw new Error("ahihi");
} catch (err) {
  let newError = new PiedError({ status: 401, message: "m gà" });
  console.log(newError);
}
