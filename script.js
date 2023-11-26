const inputext = document.getElementById("inputext");
const len = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^()_+~|}{[]></-=";
const allchar = upperCase + lowerCase + number + symbol;
function copy() {
    inputext.select();
    // document.execCommand("copy");  ---> this execCommand() function is deprecated. Hence used below function
    navigator.clipboard.writeText(inputext.value);
}

function generate() {
    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (password.length < len) {
        console.log(password.length);
        password += allchar[Math.floor(Math.random() * allchar.length)];
    }
    inputext.value = password;
    // console.log(password);
}