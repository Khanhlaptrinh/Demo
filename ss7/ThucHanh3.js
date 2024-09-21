//Bai 1:
// let vatly = parseFloat(prompt("Nhap diem mon vat ly: "));
// let HoaHoc = parseFloat(prompt("Nhap diem mon hoa hoc: "));
// let SinhHoc = parseFloat(prompt("Nhap diem mon sinh hoc: "));
//
// let tong = vatly + HoaHoc + SinhHoc;
// console.log(tong);
// let trungbinhh = tong / 3;
// console.log(trungbinhh);

//Bai 2:
// function QuyDoi() {
//     let Celsius = parseFloat(document.getElementById("doC").value);
//     let Resulst = (9 * Celsius + 160) / 5
//     document.getElementById("result").innerText = Resulst;
// }

//Bai 3: Dien tich hinh tron, chu vi hinh tron
const PI = 3.14;
let r = parseFloat(prompt("Nhap ban kinh: "));
let dientich = 2 * PI * r * r;
document.write("die tich hinh tron la: " + dientich + "\n");
let chuvi = 2 * r * PI;
document.write("Chu vi hinh tron la: " + chuvi + "\n");

