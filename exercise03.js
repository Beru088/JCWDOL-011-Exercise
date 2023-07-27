// soal 01
console.log("soal 01")
function multiplicationTable(input) {
  let limit = 10

  for (i = 1; i <= limit; i++) {
    console.log(`${input} x ${i} = `, input * i)
  }
}
multiplicationTable(8)

// soal 02
console.log("\nsoal 02")
function palindrome(str) {
  var holder = str.toLowerCase().split("")
  var newString = ""

  if (holder.length > 1) {
    for (var i = holder.length - 1; i >= 0; i--) {
      newString += holder[i]
    }
    if (holder === newString) {
      console.log(`kata "${str}" merupakan kata palindrome`)
    } else if (holder !== newString) {
      console.log(`kata "${str}" bukan kata palindrome`)
    }
  } else {
    console.log(`"${str}" bukan merupakan kata`)
  }
}
palindrome("Aba-aBA")

// soal 03
console.log("\nsoal 03")
function convertDistance(cm) {
  var km = cm / 10 ** 5
  console.log(`${cm} cm convert into ${km} km`)
}
convertDistance(1000000)

// soal 04
console.log("\nsoal 04")
function formatIDR(angka) {
  var holder = angka.toString().split("").reverse()
  var idr = ""

  for (var i = 0; i < holder.length; i++) {
    idr += holder[i]
    if ((i + 1) % 3 === 0 && i !== holder.length - 1) {
      idr += "."
    }
  }
  console.log(
    angka,
    "akan diubah menjadi Rp. ",
    idr.split("").reverse().join(""),
    ",00"
  )
}
formatIDR(10_000_000)

// soal 05
console.log("\nsoal 05")
function pemisahKata(dihapus, kataLengkap) {
  holder = kataLengkap.toString().toLowerCase()
  dihapus.toLowerCase()
  newString = holder.split(dihapus).join("")
  console.log(`kata ${holder} menjadi ${newString}`)
}
pemisahKata("ell", "Hello World!")

// soal 06
console.log("\nsoal 06")
function capitalizeWords(words) {
  var holderWords = words.split(" ")
  var newString = ""

  for (i = 0; i < holderWords.length; i++) {
    var holderWord = holderWords[i].split("")
    for (j = 0; j < holderWord.length; j++) {
      if (j === 0) {
        newString += holderWord[j].toUpperCase()
      } else {
        newString += holderWord[j]
      }
    }
    if (i !== holderWords.length - 1) {
      newString += " "
    }
  }
  console.log(`"${words}" akan diubah menjadi "${newString}"`)
}
capitalizeWords("saya sedang memasak")

// soal 07
console.log("\nsoal 07")
function reverseString(str) {
  var newString = ""

  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i] // or newString = newString + str[i];
  }
  console.log(`"${str}" akan diubah menjadi "${newString}"`)
}
reverseString("hello world")

// soal 08
console.log("\nsoal 08")
function swapCase(letter) {
  var holder = letter.split("")
  var newString = ""

  for (i = 0; i < holder.length; i++) {
    if (holder[i] === holder[i].toUpperCase()) {
      newString += holder[i].toLowerCase()
    } else {
      newString += holder[i].toUpperCase()
    }
  }
  console.log(`"${letter}" akan diubah menjadi "${newString}"`)
}
swapCase("SaYa SEDang BeLAJaR")

// soal 09
console.log("\nsoal 09")
function largestInt(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    if (a > b) {
      console.log(`angka yang paling besar dari ${a} dan ${b} adalah ${a}`)
    } else if (a < b) {
      console.log(`angka yang paling besar dari ${a} dan ${b} adalah ${b}`)
    } else {
      console.log(`angka yang paling besar dari ${a} dan ${b} adalah sama`)
    }
  } else {
    console.log("masukan angka!")
  }
}
largestInt(20, 40)

// soal 10
console.log("\nsoal 10")
function sorting(a, b, c) {
  var min = a
  var max = c
  var mid = b
  if (typeof a === "number" && typeof b === "number" && typeof c === "number") {
    if (a < c) {
      min = a
      max = c
    }
    if (a > c) {
      min = c
      max = a
    }
    if (max < b) {
      mid = max
      max = b
    }
    if (b < min) {
      mid = min
      min = b
    }
    console.log(
      `urutan ${a},${b},${c} dari nilai paling kecil ke paling besar adalah ${min},${mid},${max}`
    )
  } else {
    console.log("masukan angka!")
  }
}
sorting(400, 786, 187)

// soal 11
console.log("\nsoal 11")
function findingType(input) {
  switch (typeof input) {
    case "string":
      console.log(`tipe data dari ${input} adalah tipe 1`)
      break
    case "number":
      console.log(`tipe data dari ${input} adalah tipe 2`)
      break
    default:
      console.log(`tipe data dari ${input} adalah tipe 3`)
      break
  }
}
findingType(123)

// soal 12
console.log("\nsoal 12")
function changeWord(word) {
  var holder = word.toString().split("")
  var newString = ""

  for (i = 0; i < holder.length; i++) {
    if (holder[i] === "a") {
      newString += "*"
    } else {
      newString += holder[i]
    }
  }
  console.log(`"${word}" akan diubah menjadi "${newString}"`)
}
changeWord("saya sedang memasak ikan")
