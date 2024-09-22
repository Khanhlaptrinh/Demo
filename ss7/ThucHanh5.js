// function calculate(operation) {
//     let num1 = parseFloat(document.getElementById("num1").value);
//     let num2 = parseFloat(document.getElementById("num2").value);
//     let result;
//
//     document.getElementById('btn-add').addEventListener('click', () => calculate('add'));
//     document.getElementById('btn sub').addEventListener('click', () => calculate('sub'));
//     document.getElementById('btn mul').addEventListener('click', () => calculate('mul'));
//     document.getElementById('btn div').addEventListener('click', () => calculate('div'));
//
//     switch (operation) {
//         case 'btn-add':
//             result = num1 + num2;
//             break;
//         case 'btn-sub':
//             result = num1 - num2;
//             break;
//         case 'btn-mul':
//             result = num1 * num2;
//             break;
//         case 'btn-div':
//             if (num2 === 0) {
//                 document.getElementById('resultDivison').innerHTML = "0";
//             }else {
//                 result = num1 / num2;
//             }
//             break;
//         default:
//             break;
//     }
//     document.getElementById('resultDivison').innerText = `Result: ${result}`;
//
// }

//Cach khac:
function add() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result;
    result = num1 + num2;
    document.getElementById('result').innerText = `Result: ${result}`;
}
function sub() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result;
    result = num1 - num2;
    document.getElementById('result').innerText = `Result: ${result}`;
}
function mul() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result;
    result = num1 * num2;
    document.getElementById('result').innerText = `Result: ${result}`;
}
function div() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result;
    if (num2 === 0) {
        document.getElementById('result').innerHTML = "0";
    } else {
        result = num1 / num2;
    }
    document.getElementById('result').innerText = `Result: ${result}`;
}

