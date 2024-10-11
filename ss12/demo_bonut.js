/*
   ham so: f(x) = x^2
   + f - ten ham
   + x la tham so cua ham
   + x^2 gia tri cua ham tai tham so x
   g(x,y) = x^2 + y^2 + 1
   + g - ten ham
   + x, y la tham so cua ham
   + x^2 + y^2 + 1 gia tri cua ham tai tham so x, y

- Tinh gia gia tri cua ham f tai x = 1 => f(1) = 1^2 = 1
- Tinh gia gia tri cua ham f tai x = 2 = f(2) = 2^2 = 4
 */
/*
  phong cach lap trinh:
  pc1: lap trinh tuyen tinh - cac lenh chay lien nhau
  -> han che: khong phat trien them duoc, gay kho khan, lap code, khong kiem soat chuong trinh
  pc2: lap trinh thu tuc - chia cac cau lenh vao ham, cac gia tri lap lai thanh cac tham so
 */


// anh muon 8+9, 9 + 20

function sum(a) {
    a = 10;
}

const a = 6;
sum(a);
console.log(a)


function demo(b) {
    b[0] = 1; // [1,7]
}

const x = [5, 7];
demo(x);
console.log(x)
/*
const a = 6; -> RAM cap phat 1 o nho co dia chi 1xxx -> gia tri 6;
sum(a); -> tao 1 bien a co dia chi 11x11 -> gia tri 6
-> truyen doi so theo kiem tham tri, xay ra khi cai doi so co kieu du lieu don: number, string, null, ...

const x = [5, 7]; tao 1 bien x thuoc kieu array chua nhieu phan tu nen k the tao 1 o nho chua gia tri mang duoc, tao 1 vung o nho
demo(x) -> tao 1 bien b nhan gia tri la 1 mang (theo le binh thuong thi tao 1 vung o nho bien b)
Tuy nhien nguoi thiet ke ngon ngu lap trinh thi nhan thay neu lam nhu v se ton tai nguyen
nen tao bien b nhung k tao vung chua cho bien b ma lay vung chua bien x gan cho b
Nghia la ca 2 bien x va b deu tro ve 1 vung chua
Nen neu thay doi b thi x cung thay doi theo
-> day chinh la tryen tham chieu (ngoai gia tri kem theo ca tham chieu den dia chi o nho)
Truong hop tham chieu: doi so dang array, object
 */