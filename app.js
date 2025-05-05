function reverseWords(str) {
  return str.split("").reverse().join("");
}
console.log(reverseWords("Hola Mundo"));

function findDuplicates(arr) {
  const seen = [];
  const duplicates = [];
  for (let number of arr) {
    if (seen[number]) {
      if (!duplicates.includes(number)) {
        duplicates.push(number);
      }
    } else {
      seen[number] = true;
    }
  }
  return duplicates;
}
console.log(findDuplicates([1, 2, 3, 2, 4, 1]));

function flattenArray(arr) {
  return arr.flat(Infinity);
}
console.log(flattenArray([1, [2, 3], [4, [5]]]));

function flattenArray2(arr) {
  return arr.flatMap((x) => x);
}
console.log(flattenArray2([1, [2, 3], [4, [5]]]));

function sum(a, b) {
  return a + b;
}
console.log(sum(10, 20));

function repeatWord(word, times) {
  return word.repeat(times);
}
console.log(repeatWord("Hola", 4));

function repeatWords(word, times) {
  let result = "";
  for (let i = 0; i < times; i++) {
    result += word;
  }
  return result;
}
console.log(repeatWord("Hola", 4));

function countToN(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    result.push(i);
  }
  return result;
}
console.log(countToN(5));

function sumOfPositives(arr) {
  return arr.filter((x) => x > 0).reduce((a, b) => a + b, 0);
}
console.log(sumOfPositives([-1, 2, -3, 4]));

function sumOfPositives2(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      result += arr[i];
    }
  }
  return result;
}
console.log(sumOfPositives2([-1, 2, -3, 4]));

function reverseStr(str) {
  return str.split("").reverse().join("");
}
console.log(reverseStr("Hola"));

function reverseStr2(str) {
  let finalStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    finalStr += str[i];
  }
  return finalStr;
}
console.log(reverseStr2("Hola"));

function evenOrOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(evenOrOdd(4));
console.log(evenOrOdd(3));

function evenOrOdd2(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
console.log(evenOrOdd2(4));
console.log(evenOrOdd2(3));

function strRepeat(str, n) {
  return str.repeat(n);
}
console.log(strRepeat("Hola ", 5));

function firstAndLast(str) {
  return str.slice(1, -1);
}
console.log(firstAndLast("Soy Martín"));

function firstLast(str) {
  let result = "";
  for (let i = 1; i < str.length - 1; i++) {
    result += str[i];
  }
  return result;
}
console.log(firstLast("Soy Martín"));

function smallest(arr) {
  return Math.min(...arr);
}
console.log(smallest([1, 2, 3, 4, -525, -1157, 4, -54, 999]));

function min(arr) {
  let min = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
console.log(min([1, 2, 3, 4, -525, -1157, 4, -54, 999]));

function toUpper(str) {
  return str.toUpperCase();
}
console.log(toUpper("hola pePe"));

function toUpper2(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    newStr += str[i].toUpperCase();
  }
  return newStr;
}
console.log(toUpper2("hola pePe"));

function mathsBasic(operator, val1, val2) {
  if (operator === "/") return val1 / val2;
  if (operator === "*") return val1 * val2;
  if (operator === "+") return val1 + val2;
  if (operator === "-") return val1 - val2;
  if (operator === "%") return val1 % val2;
}
console.log(mathsBasic("/", 100, 5));

function oposite(num) {
  return -num;
}
console.log(oposite(4));
console.log(oposite(-7));

function negative(num) {
  if (num > 0) {
    return num * -1;
  } else {
    return num;
  }
}
console.log(negative(4));
console.log(negative(-7));

function negative2(num) {
  return num > 0 ? -num : num;
}
console.log(negative2(4));
console.log(negative2(-7));

function initials(name) {
  let parts = name.split(" ");
  return parts[0][0].toUpperCase() + " " + parts[1][0].toUpperCase();
}
console.log(initials("martin pravia"));

function initials2(name) {
  return name
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join(" ");
}
console.log(initials2("martin pravia"));

function removeSpace(str) {
  let newstr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      newstr.push(str[i]);
    }
  }
  return newstr.join("");
}
console.log(removeSpace("Martin Pravia"));

function doubleInt(num) {
  return num * 2;
}
console.log(doubleInt(4));

function getMiddle(str) {
  return str.length % 2
    ? str[Math.floor(str.length / 2)]
    : str[str.length / 2 - 1] + str[str.length / 2];
}
console.log(getMiddle("Martin"));
console.log(getMiddle("Mar"));

function getMiddle2(str) {
  let len = str.length;
  if (len % 2 === 0) {
    return str[len / 2 - 1] + str[len / 2];
  } else {
    return str[Math.floor(len / 2)];
  }
}
console.log(getMiddle2("Martin"));
console.log(getMiddle2("Mar"));

function getHighandLow(str) {
  let strSeparate = str.split(" ").map(Number);
  return Math.min(...strSeparate) + " " + Math.max(...strSeparate);
}
console.log(getHighandLow("4 -2 3 78 0"));

function getHighAndLow(str) {
  let numbers = str.split(" ").map(Number);
  let max = 0;
  let min = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    } else if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  return `${max} ${min}`;
}
console.log(getHighAndLow("4 -2 3 78 0"));

function mumbling(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    newStr += str[i].toUpperCase() + str[i].toLowerCase().repeat(i);
    if (i !== str.length - 1) {
      newStr += "-";
    }
  }
  return newStr;
}

console.log(mumbling("abcd"));

function mumbling2(str) {
  return str
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}
console.log(mumbling2("abcd"));

function orderMax(num) {
  return Number(
    num
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}
console.log(orderMax(16));
console.log(orderMax(5877691));

function shortest(str) {
  return Math.min(...str.split(" ").map((word) => word.length));
}
console.log(shortest("Maria eras unicamente mia"));

function shortest2(str) {
  let words = str.split(" ");
  let min = words[0].length;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length < min) {
      min = words[i].length;
    }
  }
  return min;
}
console.log(shortest("Maria eras unicamente mia"));

function isogram(str) {
  strLow = str.toLowerCase();
  for (let i = 0; i < strLow.length; i++) {
    if (strLow.indexOf(strLow[i]) !== strLow.lastIndexOf(strLow[i])) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(isogram("alo"));
console.log(isogram("olo"));

function isogram2(str) {
  return str.toLowerCase().size === str.length;
}
console.log(isogram("alo"));
console.log(isogram("olo"));

function xo(str) {
  let x = 0;
  let o = 0;
  for (let i = 0; i < str.toLowerCase().length; i++) {
    if (str[i] === "x") {
      x++;
    } else if (str[i] === "o") {
      o++;
    }
  }
  return x === o;
}

console.log(xo("omoxoxoxxtgdf"));
console.log(xo("pepeooox"));

function deleteVowel(str) {
  let result = "";
  let strLow = str.toLowerCase();
  for (let i = 0; i < strLow.length; i++) {
    if (!"aeiou".includes(strLow[i])) {
      result += strLow[i];
    }
  }
  return result;
}
console.log(deleteVowel("abracadabra"));
console.log(deleteVowel("abecedario"));

function capitalizeFirst(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalizeFirst("Martin es un chico que vive en punta negra"));

function capitalize2(str) {
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
console.log(capitalize2("Martin es un chico que vive en punta negra"));

function squareEvery(num) {
  return num
    .toString()
    .split("")
    .map((n) => n ** 2)
    .join("");
}
console.log(squareEvery(8118));

function square(num) {
  let numSq = num.toString();
  let result = "";
  for (let i = 0; i < numSq.length; i++) {
    result += numSq[i] ** 2;
  }
  return result;
}
console.log(square(8118));

function toBinary(num1, num2) {
  return (num1 + num2).toString(2);
}
console.log(toBinary(5444, 9));

function divisors(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++;
    }
  }
  return count;
}
console.log(divisors(545454));

function countVowels(str) {
  let strLow = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < strLow.length; i++) {
    if ("aeiou".includes(strLow[i])) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("Hola"));

function printErrors(strMax) {
  let str = strMax.toLowerCase();
  let errors = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] > "m") {
      errors++;
    }
  }
  return `${errors}/${str.length}`;
}
console.log(printErrors("Tambo"));
console.log(printErrors("Soy el señor que tiene calma"));
