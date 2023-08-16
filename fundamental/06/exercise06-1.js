// soal 01
students = [
  {
    name: "Mikhail",
    email: "Mikhail@gmail.com",
    age: new Date("2001-12-27"),
    score: 85,
  },
  {
    name: "Yuwan",
    email: "Yuwan@gmail.com",
    age: new Date("2000-08-12"),
    score: 95,
  },
  {
    name: "Kho",
    email: "Kho@gmail.com",
    age: new Date("2002-09-16"),
    score: 95,
  },
]

function calculateStudentData(students) {
  let result = {
    score: {
      highest: students[0].score,
      lowest: students[0].score,
      average: 0,
    },
    age: {
      highest: new Date().getFullYear() - students[0].age.getFullYear(),
      lowest: new Date().getFullYear() - students[0].age.getFullYear(),
      average: 0,
    },
  }
  let sumAge = 0
  let sumScore = 0

  for (let i = 0; i < students.length; i++) {
    let years = new Date().getFullYear() - students[i].age.getFullYear()
    sumAge += years
    sumScore += students[i].score

    if (students[i].score > result.score.highest) {
      result.score.highest = students[i].score
    } else if (students[i].score < result.score.lowest) {
      result.score.lowest = students[i].score
    }

    if (years > result.age.highest) {
      result.age.highest = years
    } else if (years < result.age.lowest) {
      result.age.lowest = years
    }
  }
  result.score.average = sumScore / students.length
  result.age.average = sumAge / students.length

  return result
}

const studentData = calculateStudentData(students)
console.log(studentData)
