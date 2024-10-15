/*
Tóm tắt nội dung:
- cách lập trình hàm -> khó có thể mô tả được dữ liệu của 1 phần tủ
Vd: giả sử các cần phải xây dựng app quản lý sinh viên
- sử dụng hàm: không thể mô tả được
- triết lý lập trình OOP: thiết kế cương trình theo đối tượng
bằng cách mô tả lại đối tượng thực thể vào đối tượng lập trình.


1 dối tượng sẽ có thuộc tính (đặc điểm) - property.
1 đối tượng sẽ có phương thức (hàm) - method
Đóng gói trong 1 class.
Khi lập trình theo OOP thì cần xác định được property, method của class.
syntax:

-khai báo 1 class:

class NameClass {
    // thuộc tính của class
    property1:

    // Phương thức của class.
}

- Tạo 1 đối tượng:

let objectName = new NameClass();
lưu ý:
* */

let rec1 = new Rectangle2(5, 10);
let rec2 = new Rectangle2(5, 10);

document.write(`Chu vi hinh chu nhat 1:` + rec1.getPerimeter());
document.write("<br>");
document.write("Chu vi hinh chu nhat 2: ");
