// soal 01
function triangle(height) {
  let value = 1
  let newString = ""
  for (i = 1; i <= height; i++) {
    newString = ""
    for (j = 1; j <= i; j++) {
      newString += value.toString().padStart(2, "0") + " "
      value++
    }
    console.log(newString)
  }
}
triangle(5)

// soal 02
function fizzBuzz(n) {
  for (i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz")
    } else if (i % 3 === 0 || i % 5 === 0) {
      if (i % 3 === 0) {
        console.log("Fizz")
      } else {
        console.log("Buzz")
      }
    } else {
      console.log(i)
    }
  }
}
fizzBuzz(20)

// soal 03
function BMI(weight, height) {
  let heightToMeter = height / 100
  let bmi = weight / heightToMeter ** 2
  if (bmi < 18.5) {
    return "less weight"
  } else if (bmi >= 18.5 && 24.9 >= bmi) {
    return "ideal"
  } else if (bmi >= 25 && 29.9 >= bmi) {
    return "overweight"
  } else if (bmi >= 30 && 39.9 >= bmi) {
    return "very overweight"
  } else if (bmi > 39.9) {
    return "obesity"
  } else {
    return "error"
  }
}
let tubuhSaya = BMI(77, 175) //berat 76 kg & tinggi 175 cm
console.log(tubuhSaya)

// soal 04
function oddRemover(arr) {
  return arr.filter((num) => num % 2 === 0)
}

const arrayAwal = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
]
const newArray = oddRemover(arrayAwal)
console.log(newArray)

// soal 05
function splitString(string) {
  return string.split(/\s+/)
}
const string1 = "Nama saya mikhail"
const string2 = splitString(string1)
console.log(string2)
