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
