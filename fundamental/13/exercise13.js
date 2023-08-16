// soal 01
function weekend(date) {
  if (new Date(date).getDay() === 6 || new Date(date).getDay() === 0) {
    return "weekend"
  } else return "weekdays"
}

console.log(weekend("2023-08-15")) // 2
console.log(weekend("2022-11-19")) // 6
console.log(weekend("2022-11-20")) // 0

// soal 02

// soal 03

// soal 04
function commonCharacter(str) {
  let char = null
  let charMax = 0
  for (let i = 0; i < str.length; i++) {
    let charCount = 0
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j] && i !== j) {
        charCount += 1
      }
    }

    if (charCount > charMax) {
      charMax = charCount
      char = str[i]
    }
  }

  return char
}

console.log(commonCharacter("MIKHAIL"))
console.log(commonCharacter("MIKHAIL YUWAN KHO"))
console.log(commonCharacter("PURWADHIKA"))

// soal 05
function sortString(arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = null
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][0] < arr[j][0]) {
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }

  return arr
}

console.log(sortString(["MIKHAIL", "YUWAN", "KHO"]))

// soal 06
function minimumDate(dates) {
  let min = new Date(dates[0])

  for (let i = 1; i < dates.length; i++) {
    if (min > new Date(dates[i])) {
      min = new Date(dates[i])
    }
  }
  return min
}

console.log(
  minimumDate(["2023-08-15", "2023-08-17", "2001-12-27", "2001-01-01"])
)

// soal 07

// soal 08
