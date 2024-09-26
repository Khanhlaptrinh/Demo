//Bai 1:
// let C = parseFloat(prompt("Nhap do C: "));
// let F = C * 9/5 + 32;
// alert(`${C} do C bang ${F} F`);

//Bai 2:
// let m = parseFloat(prompt("Nhap chieu cao cua ban: "));
// let ft = m * 3.2808;
// alert(`chieu cao ${m} doi sang ft la: ${ft}`);

//Bai 3:
// let a = parseFloat(prompt("Nhap canh cua hinh vuong: "));
// let dientich = a * a;
// alert(`Hinh vuong co dien tich la ${dientich}`);

//Bai 4:
// let a = parseFloat(prompt("nhap canh a: "));
// let b = parseFloat(prompt("nhap b: "));
// let dientich = a * b;
// console.log(dientich);

//Bai 5:
// let a = parseFloat(prompt("nhap canh a: "));
// let b = parseFloat(prompt("nhap canh b: "));
// let dientich = 1/2 * a * b;
// console.log(dientich);

//Bai 6:
// let a = parseFloat(prompt("nhap canh a: "));
// let b = parseFloat(prompt("nhap canh b: "));
// if (a === 0) {
//     if (b === 0) {
//         alert("Vo so nghiem");
//     } else {
//         alert("Vo nghiem");
//     }
// } else {
//     let x;
//     x = -b / a;
//     alert(x);
// }

//Bai 7:
// let a = parseFloat(prompt("Nhap a: "));
// let b = parseFloat(prompt("Nhap b: "));
// let c = parseFloat(prompt("Nhap c: "));
// let denta = 0, x1 = 0, x2 = 0;
// if (a === 0) {
//     if (b === 0) {
//         if (c === 0) {
//             alert("Vo so nghiem");
//         } else {
//             alert("Vo nghiem");
//         }
//     } else {
//         alert(`Phuong trinh co nghiem duy nhat la : ${-c/b}`);
//     }
// } else {
//     denta = ((b * b) - (4  * a * c));
//     if (denta === 0) {
//         x1 = -b/2*a;
//         x2 = -b/2*b;
//         alert(`phuong trnh co nghiem kep la ${x1}, ${x2}`);
//     } else if (denta < 0) {
//         alert("Phuong trnh vo nghiem");
//     } else {
//         x1 = (((-b) + Math.sqrt(denta)) / 2*a);
//         x2 = (((-b) - Math.sqrt(denta)) / 2*a);
//         alert(`phuong trinh co 2 nghiem phan biet la:`);
//         alert(`x1 la: ${x1}`);
//         alert(`x2 la: ${x2}`);
//     }
// }

//Bai 8:
// let old = parseInt(prompt("nhap vao so tuoi cua ban: "));
// if (old > 0 && old < 120) {
//     alert(`${old} la tuoi hop le`);
// } else {
//     alert(`${old} khong phai la tuoi hop le`);
// }

//Bai 9:
// let a = parseFloat(prompt("Nhap canh a: "));
// let b = parseFloat(prompt("Nhap canh b: "));
// let c = parseFloat(prompt("Nhap canh c: "));
// if (!(a > 0 && b > 0 && c > 0)) {
//     alert("Cac canh cua tam gia khong hop le");
// } else {
//     alert("Cac canh cua tam gia hop le");
//     if ((a + b) > c && (b + c) > a && (a + c) > b)
//     {
//         alert("la canh cua 1 tam giac");
//     }
// else
//     {
//         alert("khong phai la canh cua 1 tam giac");
//     }
// }

//Bai 10:
// let a = parseFloat(prompt("Nhap so  luong dien tieu thu: "));
// let giadien = 0;
// if (a <= 100) {
//     giadien = a * 1000;
//     alert(`so tien dien la: ${giadien}`);
// } else if (a <= 150) {
//     giadien = 100 * 1000 + 2000 * (a - 100);
//     alert(`so tien dien la: ${giadien}`);
// } else if (a <= 200) {
//     giadien = 100 * 1000 + 2000 * 50 + 2500 * (a - 150);
//     alert(`so tien dien la: ${giadien}`);
// } else {
//     giadien = 100 * 1000 + 2000 * 50 + 2500 * 50 + 3000 * (a  - 200);
//     alert("so tien dien la: ${giadien}`);")
// }

//Bai 11:
// let so_thue = 0, thue_suat = 0;
// let luong = parseFloat(prompt("Nhap so luong cua ban: "));
// let luongrong = 0;
// if (luong >= 15) {
//     so_thue = luong * 30 / 100;
//     thue_suat = 30;
// } else if (luong >= 7) {
//     so_thue = luong * 20 / 100;
//     thue_suat = 20;
// } else {
//     so_thue = luong * 10 / 100;
//     thue_suat = 10;
// }
// luongrong = luongrong - so_thue;
// alert(`luong la: ${luong}`);
// alert(`Thue thu nha[ voi muc thue suat: ${thue_suat}`);
// alert(`So tien luong ban nhan la: ${luongrong}`);

//Bai 12:
let So_tien_gui = parseInt(prompt("so_tien_gui"));
let so_thang = parseInt(prompt("so_thang"));
let So_tien_thang = 0;
switch (so_thang) {
    case 1:
        So_tien_thang = (So_tien_gui * 0.38) / 365;
        alert(`${So_tien_thang}`);
        break;
    case 3:
        So_tien_thang = (So_tien_gui * 0.04) / 365;
        alert(`${So_tien_thang}`);
        break;
    case 6:
        So_tien_thang = (So_tien_gui * 0.52) / 365;
        alert(`${So_tien_thang}`);
        break;
    case 12:
        So_tien_thang = (So_tien_gui * 0.58) / 365;
        alert(`${So_tien_thang}`);
        break;
    case 18:
        So_tien_thang = (So_tien_gui * 0.06) / 365;
        alert(`${So_tien_thang}`);
        break;
    case 24:
        So_tien_thang = (So_tien_gui * 0.06) / 365;
        alert(`${So_tien_thang}`);
        break;
    default:
        break;
}