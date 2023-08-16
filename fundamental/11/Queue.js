class Queue {
  constructor() {
    this.queue = []
  }

  addOrder(order) {
    this.queue.push(order)
  }

  dequeue() {
    return this.queue.shift()
  }

  process() {
    return new Promise((resolve, reject) => {
      if (this.queue.length > 0) {
        const time = Math.ceil(Math.random() * 10)
        setTimeout(() => {
          const order = this.dequeue()
          console.log(`[Log] Queue ${order} Done in ${time} seconds`)
          resolve(this.queue)
        }, time * 1000)
      }
    })
  }

  async run() {
    console.log("[Log] Print all data in queue")
    while (this.queue.length > 0) {
      await this.process()
    }
  }
}

module.exports = Queue
