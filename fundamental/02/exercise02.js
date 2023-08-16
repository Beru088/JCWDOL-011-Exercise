// soal 01
let celcius = 10
let farenheit = (9 / 5) * celcius + 32

console.log(`nilai dari ${celcius} celcius adalah ${farenheit} farenheit`)

// soal 02
let oddEven = 1001
if (oddEven % 2 == 0) {
  console.log(`angka ${oddEven} adalah genap`)
} else {
  console.log(`angka ${oddEven} adalah ganjil`)
}

// soal 03
var prima = 1
let isPrime = true

if (prima > 1) {
  // loop untuk mencari prima
  for (let i = 2; i < prima; i++) {
    if (prima % i == 0) {
      isPrime = false
      break
    }
  }
  if (isPrime) {
    console.log(`${prima} adalah bilangan prima`)
  } else {
    console.log(`${prima} bukan bilangan prima`)
  }
} else if (prima === 1) {
  console.log(`${prima} bukan bilangan prima`)
} else {
  console.log("error")
}

// soal 04
var target = 5
var total = 0
for (var i = 1; i <= target; i++) {
  total = total + i
}
console.log(`total penjumlahan dari angka 1 sampai ${target} adalah ${total}`)

// soal 05
var factorial = 5
var total2 = 1
for (var i = 1; i <= factorial; i++) {
  total2 *= i
}
console.log(`total factorial dari ${factorial} adalah ${total2}`)

// soal 06
const number = 10
let n1 = 0
let n2 = 1
let next

console.log(`seri fibonacci sampai ke angka ${number}:`)
for (let i = 1; i <= number; i++) {
  console.log(n1)
  next = n1 + n2
  n1 = n2
  n2 = next
}

// jawaban instruktor
let n3 = 10
let firstNumber = 0
let secondNumber = 1
let lastNumber = 0

for (let l = 3; l <= n3; l++) {
  lastNumber = firstNumber + secondNumber
  firstNumber = secondNumber
  secondNumber = lastNumber
}
console.log("fibbonaci result is", lastNumber)
