var request=new XMLHttpRequest()
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload=function(){
    var res=JSON.parse(request.response)
    console.log(res);
}
//TASK3
//Anonymous Function and    IIFE function 
//Anonymous 
//Print odd number in an array 
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = arr.filter(function(num) {
    return num % 2 !== 0;
});
console.log(oddNumbers);
//IIFE:
(function(arr) {
    const oddNumbers = arr.filter(num => num % 2 !== 0);
    console.log("Odd Numbers:", oddNumbers);
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//Convert all the strings to title caps in a string array
//Anonymous 

let A= ["hello world", "javascript is fun", "coding is great"];

let B = A .map(function(str) {
    return str.toLowerCase().split(' ').map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
});

console.log(B);

//IIFE
const titleCapsArray = (function(arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
})(["apple", "banana", "cherry"]);

console.log(titleCapsArray);

//Sum of all numbers in an array
//anonymous 
const array = [1, 2, 3, 4, 5];
const sum = array.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum);
//IIFE
let array = [1, 2, 3, 4, 5, 6];

let sum = (function(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
})(array);

console.log(sum);
//Return all the prime numbers in an array
//Anonymous 

const getPrimes = function(arr) {
    return arr.filter(function(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = getPrimes(numbers);

console.log(primeNumbers);

//IIFE
(function(arr) {
    const isPrime = num => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    const primeNumbers = arr.filter(isPrime);
    console.log(primeNumbers);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

//Return all the palindromes in an array
//Anonymous
const findPalindromes = (arr) => arr.filter(word => word === word.split('').reverse().join(''));
const words = ['racecar', 'hello', 'level', 'world', 'madam'];
const palindromes = findPalindromes(words);
console.log(palindromes);

//IIFE:
const palindromes = (function(arr) {
    return arr.filter(word => word === word.split('').reverse().join(''));
})(['racecar', 'hello', 'level', 'world', 'madam']);

console.log(palindromes); 

//Return median of two sorted arrays of the same size.
//anonymous 

const findMedianSortedArrays = (nums1, nums2) => {
    const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
    const n = mergedArray.length;
    if (n % 2 === 0) {
        return (mergedArray[n / 2 - 1] + mergedArray[n / 2]) / 2;
    } else {
        return mergedArray[Math.floor(n / 2)];
    }
};
//IIFE:
const median = (function(nums1, nums2) {
    const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
    const n = mergedArray.length;
    if (n % 2 === 0) {
        return (mergedArray[n / 2 - 1] + mergedArray[n / 2]) / 2;
    } else {
        return mergedArray[Math.floor(n / 2)];
    }
})([1, 2, 3], [4, 5, 6]);

console.log("Median of the two sorted arrays is:", median);

//Remove duplicates from an array
//anonymous
let array = [1, 2, 2, 3, 4, 4, 5];

let uniqueArray = array.filter(function(item, index) {
  return array.indexOf(item) === index;
});

console.log(uniqueArray); 

//IIFE function :
const uniqueArray = (function(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
})([1, 2, 2, 3, 4, 4, 5]);

console.log(uniqueArray);


//Rotate an array by k times
//Anonymous 

const rotateArray = function(nums, k) {
    k = k % nums.length; // Handle cases where k is greater than the array length
    return [...nums.slice(-k), ...nums.slice(0, -k)];
};
let arr = [1, 2, 3, 4, 5];
let k = 2;
let rotatedArr = rotateArray(arr, k);
console.log(rotatedArr);

//IIFE 

(function(arr, k) {
    k = k % arr.length; 
    while (k > 0) {
        let temp = arr.pop(); 
        arr.unshift(temp); 
        k--;
    }
    console.log(arr);
})([1, 2, 3, 4, 5, 6], 3);


//programs in arrow functions.
//Print odd numbers in an array

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = arr.filter(num => num % 2 !== 0);
console.log(oddNumbers);

//Convert all the strings to title caps in a string array

const toTitleCase = str => str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');

const stringArray = ["hello world", "javascript is fun", "i love coding"];
const titleCasedArray = stringArray.map(toTitleCase);

console.log(titleCasedArray);

//Sum of all numbers in an array

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

//Return all the prime numbers in an array

const isPrime = num => {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  
  const getPrimes = arr => arr.filter(isPrime);
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const primeNumbers = getPrimes(numbers);
  
  console.log(primeNumbers); 

  //Return all the palindromes in an array
  const findPalindromes = (arr) => arr.filter(word => word === word.split('').reverse().join(''));

  const words = ['madam', 'racecar', 'apple', 'level', 'banana'];
  const palindromes = findPalindromes(words);
  console.log(palindromes);