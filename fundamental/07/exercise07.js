//soal 01
const obj1 = { a: 3, b: 2, c: 1 }
const obj2 = { a: 1, b: 2, c: 3 }

function checkObject(obj1, obj2) {
  let isSame = true

  if (obj1.typeof === obj2.typeof) {
    for (let key1 in obj1) {
      for (let key2 in obj2) {
        if (key1 === key2 && obj1[key1] === obj2[key2]) {
          isSame = true
        } else {
          isSame = false
        }
      }
    }
  }
  return isSame
}

const Compare = checkObject(obj1, obj2)
console.log(Compare)

// soal 02
const intersection1 = { a: 1, b: 2 }
const intersection2 = { b: 3, b: 2, c: 1, d: 0 }

function intersection(obj1, obj2) {
  newObj = {}

  for (let key1 in obj1) {
    for (let key2 in obj2) {
      if (key1 === key2 && obj1[key1] === obj2[key2]) {
        newObj[key1] = obj1[key1]
      }
    }
  }
  return newObj
}

console.log(intersection(intersection1, intersection2))

// soal 03
const array1 = [
  { name: "student1", email: "student1@mail.com" },
  { name: "student2", email: "student2@mail.com" },
  { name: "student3", email: "student3@mail.com" },
]
const array2 = [
  { name: "student2", email: "student2@mail.com" },
  { name: "student3", email: "student3@mail.com" },
  { name: "student4", email: "student4@mail.com" },
]

function mergeArray(arr1, arr2) {
  let merge = [...arr1, ...arr2]
  //masih belom bisa mengeluarkan duplikat value dalam objek
  return merge
}

const merging = mergeArray(array1, array2)
console.log(merging)

// soal 04
const Array3 = [
  { name: "David", age: 20 },
  { name: "Mikhail", age: 22 },
]

function swapKey(arr) {
  let result = []

  for (let i = 0; i < arr.length; i++) {
    let newObj = {}
    for (let key in arr[i]) {
      let value = arr[i][key]
      newObj[value] = key
    }
    result.push(newObj)
  }

  return result
}

console.log(swapKey(Array3))

// soal 05
function factorial(n) {
  if (n < 0) {
    return `number can't be negative`
  }

  if (n <= 1) {
    return 1
  }

  let result = n * factorial(n - 1)
  return result
}

console.log(factorial(3))
