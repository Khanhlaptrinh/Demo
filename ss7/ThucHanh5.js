function calculate(operation) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result;

    document.getElementById('btn add').addEventListener('click', () => calculate('btn add'));
    // document.querySelectorAll('btn sub').addEventListener('click', () => calculate('sub'));
    // document.querySelectorAll('btn mul').addEventListener('click', () => calculate('mul'));
    // document.querySelectorAll('btn div').addEventListener('click', () => calculate('div'));

    switch (operation) {
        case 'btn add':
            result = num1 + num2;
            break;
        case 'btn sub':
            result = num1 - num2;
            break;
        case 'btn mul':
            result = num1 * num2;
            break;
        case 'btn div':
            if (num2 === 0) {
                document.getElementById('resultDivison').innertHTML = "0";
            }else {
                result = num1 / num2;
            }
            break;
        default:
            break;
    }
    document.getElementById('resultDivison').innerText = `Result: ${result}`;

}