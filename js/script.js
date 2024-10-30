let string = "ABCDE";
let num = 0;
let endlessString = "";
let start = 13;
let end = 16;

while (num < 20) {
  endlessString += string;
  num++;
  console.log(endlessString);
}

console.log(endlessString.substring(start, end + 1));
