//Bai 1:
let i = 10
let f = 20.5
let b = true
let s = 'Hà Nội'
document.writeln('i = is ' + i)
document.writeln('f = is ' + f)
document.writeln('b = is ' + b)
document.writeln('s = is ' + s)

//Bai 2:
let width = 10;
confirm('Nhap gia tri width = ' + width);
let height = 20;
confirm('Nhap gia tri width = ' + height);
area = width * height;
console.log('dien tich hcn = ' + area);

//Bai 3:
let a;
prompt('nhap gia tri a = '+a);
let b;
prompt('nhap gia tri a = '+b);
if (a % b === 0) {
    alert('a la boi cua b');
} else if (b % a === 0) {
    alert('b la boi cua a');
} else {
    alert('khong phai la gi tri boi');
}