function excel(alphabet) {
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let result = 0

  for (var i = 0; i < alphabet.length; i++) {
    let findAlphaNumber = 0
    let temp = 0
    for (var j = 0; j <= alphabets.length; j++) {
      if (alphabets[j] == alphabet[i]) {
        findAlphaNumber = j + 1
        break
      }
    }
    temp = findAlphaNumber * Math.pow(26, alphabet.length - i - 1)
    result += temp
  }
  return result
}

console.log(excel("B")) // 2
console.log(excel("Z")) // 26
console.log(excel("AA")) // 27
console.log(excel("AZ")) // 52
console.log(excel("ZZ")) // 702
