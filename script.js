const generate = document.querySelector("#generate");

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const uppercase = alpha.map((x) => String.fromCharCode(x));
const lower = alpha.map((x) => String.fromCharCode(x).toLowerCase());
const numbers = Array.from(Array(10)).map((e, i) => i + 0);
const special = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "()",
  "_",
  "+",
  "{}",
  ";",
  "~",
  "?",
  ",",
  ".",
  "/",
];

// let charSet = lower;
// charSet = charSet.concat(uppercase);
// // console.log(lower)
// console.log(charSet);

// console.log(uppercase);
// console.log(lower);
// console.log(numbers);
// console.log(special);

generate.addEventListener("click", generatePass);

function generatePass() {
  let length = parseInt(document.querySelector("#length").value);
  // console.log(length)
  let uppercaseCheck = document.querySelector("#uppercase").checked;
  console.log(uppercaseCheck);
  let numberCheck = document.querySelector("#numbers").checked;
  let symbolCheck = document.querySelector("#symbols").checked;

  let password = "";
  let charSet = lower;
  console.log(charSet);

  if (uppercaseCheck === true) {
    charSet = charSet.concat(uppercase);
  }

  if (numberCheck === true) {
    charSet = charSet.concat(numbers);
  }

  if (symbolCheck === true) {
    charSet = charSet.concat(special);
  }

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }
  console.log(password);

  document.querySelector("#password").value = password;
}
