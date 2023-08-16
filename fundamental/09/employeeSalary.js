class Employee {
  constructor() {
    this.hour = []
    this.salary = 0
  }
}

class FulltimeEmployee extends Employee {
  constructor(hour, salary) {
    super(hour, salary)
  }

  set setHour(hour) {
    this.hour.push(hour)
  }

  get getHour() {
    return this.hour.map((h, i) => `Day ${i + 1}: ${h} Hour`).join("\n")
  }

  get getSalary() {
    if (this.hour[this.hour.length - 1] > 6) {
      this.salary = this.hour[this.hour.length - 1] * 75_000
    } else {
      this.salary = this.hour[this.hour.length - 1] * 100_000
    }
    return `Day ${this.hour.length} salary: ${this.salary}`
  }

  addWorkingHour() {
    let totalHour = 0
    this.hour.forEach((hour) => (totalHour += hour))
    return totalHour
  }

  calculateTotalSalary() {
    let totalSalary = 0
    for (let i = 0; i < this.hour.length; i++) {
      let holder = 0
      if (this.hour[i] > 6) {
        holder = this.hour[i] * 75_000
      } else {
        holder = this.hour[i] * 100_000
      }
      totalSalary += holder
    }
    return totalSalary
  }
}

class ParttimeEmployee extends Employee {
  constructor(hour, salary) {
    super(hour, salary)
  }

  set setHour(hour) {
    this.hour.push(hour)
  }

  get getHour() {
    return this.hour.map((h, i) => `Day ${i + 1}: ${h} Hour`).join("\n")
  }

  get getSalary() {
    if (this.hour[this.hour.length - 1] > 6) {
      this.salary = this.hour[this.hour.length - 1] * 30_000
    } else {
      this.salary = this.hour[this.hour.length - 1] * 50_000
    }
    return `Day ${this.hour.length} salary: ${this.salary}`
  }

  addWorkingHour() {
    let totalHour = 0
    this.hour.forEach((hour) => (totalHour += hour))
    return totalHour
  }

  calculateTotalSalary() {
    let totalSalary = 0
    for (let i = 0; i < this.hour.length; i++) {
      let holder = 0
      if (this.hour[i] > 6) {
        holder = this.hour[i] * 30_000
      } else {
        holder = this.hour[i] * 50_000
      }
      totalSalary += holder
    }
    return totalSalary
  }
}

// run asep si full timer
console.log("asep")
// set hour and salary per day
const asep = new FulltimeEmployee()
asep.setHour = 8
console.log(asep.getSalary)
asep.setHour = 4
console.log(asep.getSalary)
asep.setHour = 6
console.log(asep.getSalary)
console.log(asep.getHour)

// get total hour
console.log("total hour is: ", asep.addWorkingHour())

// get total salary
console.log("total salary is: ", asep.calculateTotalSalary())

// run agus si part timer
console.log("agus")
// set hour and salary per day
const agus = new ParttimeEmployee()
agus.setHour = 10
console.log(agus.getSalary)
agus.setHour = 8
console.log(agus.getSalary)
agus.setHour = 3
console.log(agus.getSalary)
console.log(agus.getHour)

// get total hour
console.log("total hour is: ", agus.addWorkingHour())

// get total salary
console.log("total salary is: ", agus.calculateTotalSalary())
