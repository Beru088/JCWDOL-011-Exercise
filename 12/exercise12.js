// soal 02
function uniqueNumber(arr) {
  let result = null
  for (let i = 0; i < arr.length; i++) {
    let isSame = false
    for (let j = 0; j < arr.length; j++) {
      if (i != j && arr[i] == arr[j]) {
        isSame = true
        break
      }
    }
    if (!isSame) {
      result = arr[i]
    }
  }
  return result
}
console.log(uniqueNumber([1, 2, 2])) // 1
console.log(uniqueNumber([4, 1, 2, 1, 2])) // 4
console.log(uniqueNumber([2, 1, 2, 1, 4])) // 4

// soal 03
function anagram(input, str) {
  let input2 = input.split("").sort().join("")
  let str2 = str.split("").sort().join("")
  if (input2 != str2) {
    return false
  }
  return true
}
console.log(anagram("rat", "cars"))
console.log(anagram("dimas", "samid"))

// soal 04
function climbStair(stair) {
  if (stair < 4) {
    return stair
  } else {
    return climbStair(stair - 1) + climbStair(stair - 2)
  }
}
console.log(climbStair(2))
console.log(climbStair(3))
console.log(climbStair(4))
console.log(climbStair(5))
console.log(climbStair(6))
console.log(climbStair(7))
console.log(climbStair(8))
console.log(climbStair(9))
