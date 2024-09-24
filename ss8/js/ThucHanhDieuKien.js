//Bai 1:
// let a = parseInt(prompt("Nhap a: "));
// let b = parseInt(prompt("Nhap b: "));
// if (b === 0) {
//     alert("khong xac dinh");
//     if (a % b === 0) {
//         alert("a chia het cho b");
//     } else {
//         alert("a khong chia het cho b");
//     }
// }

//Bai 2:
// let age = parseInt(prompt("Nhap tuoi cua sinh vien: "));
// if (age >= 16) {
//     alert("Du dieu kien vao 10");
// } else {
//     alert("Khong du dieu kien vao 10");
// }

//Bai 3:
// let interget = parseInt(prompt("Nhap 1 so"));
// if (interget < 0) {
//     alert(`so ${interget} nho hon khong`);
// } else {
//     alert(`so ${interget} lon hon khong`);
// }

//Bai 4:
// let a = parseInt(prompt("Nhap so a: "));
// let b = parseInt(prompt("Nhap so b: "));
// let c = parseInt(prompt("Nhap so c: "));
// let max;
// if (a > b && a > c) {
//     max = a;
//     alert(max);
// } else if (b >= a && b >= c) {
//     max = b;
//     alert(max);
// } else if (c >= a && c >= b) {
//     max = c;
//     alert(max);
// }

//Bai 5:
// let diemKT = parseFloat(prompt("Nhap diem kiem tra: "));
// let diemGK = parseFloat(prompt("Nhap diem giua ki: "));
// let diemCK = parseFloat(prompt("Nhap diem cuoi ki: "));
// let cuoi_nam = (diemKT + (diemGK * 2) + (diemCK * 3)) / (1 + 2 + 3);
// if (cuoi_nam < 5) {
//     alert("diem D/F")
// } else if (cuoi_nam < 7) {
//     alert("diem B");
// } else if (cuoi_nam < 8) {
//     alert("diem B+");
// } else if (cuoi_nam < 9) {
//     alert("diem A");
// } else {
//     alert("diem A+");
// }

//Bai 6:
// let luong = parseInt(prompt("nhap so luong cua ban: "));
// let HoaHong;
// if (luong < 10) {
//     HoaHong = luong * 0.05;
// } else if (luong < 20) {
//     HoaHong = luong * 0.1;
// } else if (luong < 50) {
//     HoaHong = luong * 0.15;
// } else {
//     HoaHong = luong * 0.2;
// }
// alert(`Hoa hong ban nhan duoc la ${HoaHong}`);

//Bai 7:
let Sophut = parseInt(prompt("Nhap so phut goi: "));
let phithue = 25000;
let phi = 0;
let tong = 0;
if (Sophut > 200) {
    phi = (Sophut - 200) * 200 + 150 * 400 + 50 * 600;
} else if (Sophut > 50) {
    phi = (Sophut - 50) * 400 + 50 * 600;
} else {
    phi = Sophut * 600;
}
tong = 0.01 * phi + phithue;
alert(`Phi cua cuoc goi la: ${phi}`);
alert(`tong la ${tong}`);

