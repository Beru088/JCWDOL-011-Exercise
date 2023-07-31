// soal 01
function sortLowAvgHigh(arr) {
  let low = arr[0]
  let high = arr[0]
  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    const currentValue = arr[i]
    if (currentValue > high) {
      high = currentValue
    } else if (currentValue < low) {
      low = currentValue
    }
    sum += currentValue
  }
  const average = sum / arr.length
  return `lowest is ${low}, highest is ${high} and average is ${average}`
}

let array1 = [1, 2, 3, 4, 5]
console.log(sortLowAvgHigh(array1)) // output: 1,5,3

// soal 02
function arrayToString(arr) {
  let newString = ""
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      newString += " and " + arr[i]
    } else if (i > 0) {
      newString += ", " + arr[i]
    } else {
      newString += arr[i]
    }
  }
  return newString
}

let array2 = ["saya", "sedang", "belajar", "programming", "di", "purwadhika"]
console.log(arrayToString(array2)) // output: saya, sedang, belajar, programming, di and purwadhika

// soal 03
function stringToArray(str, needle) {
  let newArray = []
  let holder = ""
  for (let i = 0; i < str.length; i++) {
    if (str[i] === needle) {
      // push setiap ada " " / needle
      newArray.push(holder)
      holder = ""
    } else {
      holder += str[i]
    }
  }
  newArray.push(holder) // push kata terakhir
  return newArray
}
console.log(stringToArray("Hello World!", " ")) // output: ["Hello", "World!"]

// soal 04
function sumArray(arr3, arr4) {
  let newArray = []
  for (let i = 0; i < arr3.length; i++) {
    // pakai arr3.length karena di asumsikan sama
    newArray[i] = arr3[i] + arr4[i]
  }
  return newArray
}

let array3 = [10, 10, 10]
let array4 = [4, 5, 6]
console.log(sumArray(array3, array4)) // output: [14, 15, 16]

// soal 05
function addArray(arr, input) {
  let newArray = arr
  isSame = false
  for (let i = 0; i < arr.length; i++) {
    if (input === arr[i]) {
      isSame = true
    }
  }
  if (isSame === false) {
    newArray.push(input)
    return newArray
  } else if (isSame === true) {
    return `angka ${input} sudah ada di dalam array`
  }
}
const array5 = [1, 2, 3, 4]
console.log(addArray(array5, 1)) // output: "angka 1 sudah ada di dalam array"
console.log(addArray(array5, 5)) // output: [1, 2, 3, 4, 5]

// soal 06
function oddRemover(arr) {
  let newArray = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArray.push(arr[i])
    }
  }
  return arr.filter((num) => num % 2 === 0)
}

const array6 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
]
console.log(oddRemover(array6)) // output: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
