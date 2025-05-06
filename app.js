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

function diferent(nums) {
  let par = [];
  let impar = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      par.push(nums[i]);
    } else {
      impar.push(nums[i]);
    }
  }
  return par.length === 1 ? par[0] : impar[0];
}
console.log(diferent([2, 4, 6, 8, 10, 3]));

function whoLikesIt(arr) {
  if (arr.length === 0) return "No one like this";
  if (arr.length === 1) return `${arr[0]} likes this`;
  if (arr.length === 2) return `${arr[0]} and ${arr[1]} likes this`;
  if (arr.length === 3) return `${arr[0]} , ${arr[1]} and ${arr[2]} likes this`;
  return `${arr[0]} , ${arr[1]} and ${[arr.length - 2]} others likes this`;
}
console.log(whoLikesIt(["Alex", "Jacob", "Mark", "Max"]));

function orderWord(words) {
  let arr = words.split(" ");
  let result = [];
  for (let i = 1; i <= arr.length; i++) {
    for (let word of arr) {
      if (word.includes(i)) {
        result.push(word);
      }
    }
  }
  return result.join(" ");
}
console.log(orderWord("is2 Thi1s T4est 3a"));

function sumMultiples(num) {
  let result = 0;
  for (let i = 0; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i;
    }
  }
  return result;
}
console.log(sumMultiples(22));
console.log(sumMultiples(10));

function inverse(str) {
  let result = "";
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 5) {
      let inverse = words[i].split("").reverse().join("");
      result += inverse + " ";
    } else {
      result += words[i] + " ";
    }
  }
  return result;
}
console.log(inverse("Hey fellow warriors"));

function countChar(str) {
  let result = {};
  for (let char of str) {
    if (result[char]) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
}
console.log(countChar("aba"));

function createPhoneNumber(arr) {
  let format = "(xxx) xxx-xxxx";
  for (let i = 0; i < arr.length; i++) {
    format = format.replace("x", arr[i]);
  }
  return format;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

function createPhoneNumber(arr) {
  return (
    "(" +
    arr.slice(0, 3).join("") +
    ")" +
    " " +
    arr.slice(3, 6).join("") +
    "-" +
    arr.slice(6, 10).join("")
  );
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

function findOdd(arr) {
  return arr.find((num) => arr.filter((n) => n === num).length % 2 !== 0);
}
console.log(findOdd([1, 1, 2]));

function encontrarimparveces(arr) {
  return arr.find((num) => arr.filter((n) => n === num).length % 2 !== 0);
}
console.log(encontrarimparveces([1, 1, 2, 2, 3, 3, 4, 4, 5]));

function camelCase(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(camelCase("hola martin"));

function digitalRoot(n) {
  while (n >= 10) {
    let sum = 0;
    for (let digit of n.toString()) {
      sum += parseInt(digit);
    }
    n = sum;
  }
  return n;
}
console.log(digitalRoot(94222));

function sumdigits(num) {
  while (num >= 10) {
    let sum = 0;
    for (let char of num.toString()) {
      sum += parseInt(char);
    }
    num = sum;
  }
  return num;
}
console.log(sumdigits(44));

function alphabet(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let words = str.toLowerCase();
  for (let char of alphabet) {
    if (!words.includes(char)) {
      return false;
    }
  }
  return true;
}
console.log(alphabet("The quick brown fox jumps over the lazy dog"));
console.log(alphabet("Hola Pepe"));

function deleteDuplicates(str) {
  let newStr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i - 1]) {
      newStr.push(str[i]);
    }
  }
  return newStr;
}
console.log(deleteDuplicates("AAAABBBCCDAABBB"));

function deleteStr(str) {
  return str.split("").filter(function (char, index, arr) {
    return char !== arr[index - 1];
  });
}
console.log(deleteStr("AAAABBBCCDAABBB"));

function sumPositives(arr) {
  let min1 = Infinity;
  let min2 = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min1) {
      min1 = min2;
      min1 = arr[i];
    } else if (arr[i] < min2) {
      min2 = arr[i];
    }
  }
  return min1 + min2;
}
console.log(sumPositives([5, 8, 12, 18, 22]));

function sumPositives2(arr) {
  let sort = arr.sort((a, b) => a - b);
  return sort[0] + sort[1];
}
console.log(sumPositives2([5, 8, 12, 18, 22]));

function aNotInB(arr1, arr2) {
  return arr1.filter((x) => !arr2.includes(x));
}
console.log(aNotInB([1, 2, 2, 2, 3], [2]));

function aNotInB2(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  return result;
}
console.log(aNotInB2([1, 2, 2, 2, 3], [2]));

function smile(arr) {
  let smile = ":)";
  let smile2 = ":-D";
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === smile || arr[i] === smile2) {
      count++;
    }
  }
  return count;
}
console.log(smile([":)", ";(", ";}", ":-D"]));

// maraton 8,7,6 kyu

function invert(str) {
  return str.split("").reverse().join("");
}
console.log(invert("hola"));

function invert2(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
console.log(invert2("hola bebe"));

function sumArr(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}
console.log(sumArr([1, 2, 3, 4]));

function sumArr2(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}
console.log(sumArr2([1, 2, 3, 4]));

function firstChar(str) {
  return str[0];
}
console.log(firstChar("hola"));
console.log(firstChar("Cola"));

function esPar(num) {
  if (num % 2 === 0) return true;
  else return false;
}
console.log(esPar(45));
console.log(esPar(44));

function lastChar(str) {
  return str[str.length - 1];
}
console.log(lastChar("Pepe"));
console.log(lastChar("robertitO"));

function lastChar2(str) {
  for (let i = str.length - 1; i < str.length; i++) {
    return str[i];
  }
}
console.log(lastChar2("Pepe"));
console.log(lastChar2("robertitO"));

function repeatStr(str, num) {
  return str.repeat(num);
}
console.log(repeatStr("Hola", 4));

function repeatStr2(str, num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += str + " ";
  }
  return result;
}
console.log(repeatStr2("Hola", 4));

function isInIt(arr1, num) {
  return arr1.includes(num);
}
console.log(isInIt([1, 2, 3, 4], 2));
console.log(isInIt([1, 2, 3, 4], 7));

function isInIt2(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (num === arr[i]) {
      return true;
    }
  }
  return false;
}
console.log(isInIt2([1, 2, 3, 4], 2));
console.log(isInIt2([1, 2, 3, 4], 7));

function evenArr(arr) {
  return arr.filter((num) => num % 2 === 0);
}
console.log(evenArr([1, 2, 3, 4]));

function evenArr2(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(evenArr2([1, 2, 3, 4, 7, 8, 8, 8, 10, 9]));

function startsVowel(str) {
  let vocals = "aeiou";
  return vocals.includes(str[0].toLowerCase());
}
console.log(startsVowel("Avestruz"));
console.log(startsVowel("Carniceria"));

function startsVowel2(str) {
  let vocals = "aeiouAEIOU";
  for (let i = 0; i < str.length; i++) {
    if (vocals.includes(str[i])) {
      return true;
    }
    return false;
  }
}
console.log(startsVowel2("Avestruz"));
console.log(startsVowel2("Carniceria"));

function multiplyArr(arr) {
  return arr.reduce((acc, val) => acc * val, 1);
}
console.log(multiplyArr([1, 2, 3, 4]));

function multiplyArr2(arr) {
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
  }
  return result;
}
console.log(multiplyArr2([1, 2, 3, 4]));

function longitudeArr(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].length);
  }
  return newArr;
}
console.log(longitudeArr(["hola", "mundillo"]));

function longitudeArr2(arr) {
  return arr.map((word) => word.length);
}
console.log(longitudeArr2(["hola", "perfectirijillo"]));

function strSpace(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      return true;
    }
  }
  return false;
}
console.log(strSpace("hola marcos"));
console.log(strSpace("hola"));

function strSpace2(str) {
  return str.includes(" ");
}
console.log(strSpace2("Hola Pepe"));
console.log(strSpace2("Pepe"));

function replace(str) {
  return str.replace(/ /g, "-");
}
console.log(replace("Hola pepe"));

function replace2(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      newStr += "-";
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}
console.log(replace2("Hola pepe"));
console.log(replace2("Hola pepe como estás tanto tiempo"));

function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("Hola Angela"));
console.log(countVowels("brbrbr"));
console.log(countVowels("abcde"));

function countVowels2(str) {
  return str.split("").filter((letter) => "aeiouAEIOU".includes(letter)).length;
}
console.log(countVowels2("Hola Angela"));
console.log(countVowels2("brbrbr"));
console.log(countVowels2("abcde"));

function countPlus5(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      count++;
    }
  }
  return count;
}
console.log(countPlus5([2, 5, 9, 3, 8, 25]));
console.log(countPlus5([2, 5, 3, 0, 2]));

function countPlus52(arr) {
  return arr.filter((num) => num > 5).length;
}
console.log(countPlus52([2, 5, 9, 3, 8, 25, 333]));
console.log(countPlus52([2, 5, 3, 0, 2, 333]));

function sumPos(arr) {
  return arr.filter((num) => num > 5).reduce((acc, val) => acc + val, 0);
}
console.log(sumPos([-5, -2, 1, 3, 9, 10]));

function sumPos2(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      sum += arr[i];
    }
  }
  return sum;
}
console.log(sumPos2([-5, -2, 1, 3, 9, 9]));

function numToStr(num) {
  return String(num);
}
console.log(numToStr(4));

function numToStr2(num) {
  return "" + num;
}
console.log(numToStr2(4));

function reverse(str) {
  return str.split("").reverse().join("");
}
console.log(reverse("Hola mundo"));

function reverse2(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}
console.log(reverse2("Hola mundo"));

function evenOrOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
console.log(evenOrOdd(4));
console.log(evenOrOdd(5));

function evenOrOdd2(num) {
  if (num % 2 === 0) return "Even";
  return "Odd";
}
console.log(evenOrOdd2(4));
console.log(evenOrOdd2(5));

function strRepeat(str, times) {
  return str.repeat(times);
}
console.log(strRepeat("Hola", 4));

function strRepeat2(str, times) {
  result = "";
  for (let i = 0; i < times; i++) {
    result += str + " ";
  }
  return result;
}
console.log(strRepeat2("Hola", 4));

function firstAndLast(str) {
  return str.slice(1, -1);
}
console.log(firstAndLast("Hola Mundo"));

function firstAndLast2(str) {
  let finalStr = "";
  for (let i = 1; i < str.length - 1; i++) {
    finalStr += str[i];
  }
  return finalStr;
}
console.log(firstAndLast2("Hola Mundo"));

function smallest(arr) {
  return Math.min(...arr);
}
console.log(smallest([3, 5, -99, 4, -100, 900]));

function smallest2(arr) {
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
console.log(smallest2([3, 5, -99, 4, -100, 900]));

function toUpper(str) {
  return str.toUpperCase();
}
console.log(toUpper("hola Pepe"));
