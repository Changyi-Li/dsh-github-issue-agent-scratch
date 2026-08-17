/**
 * Task runner used by the acceptance fixtures. The intermittent-failure
 * fixture lives here.
 */
export class TaskRunner {
  constructor({ concurrency = 2 } = {}) {
    this.concurrency = concurrency
    this.queue = []
    this.running = 0
  }

  enqueue(task) {
    this.queue.push(task)
    this.pump()
    return this
  }

  pump() {
    while (this.running < this.concurrency && this.queue.length > 0) {
      const task = this.queue.shift()
      this.running += 1
      Promise.resolve().then(() => task())
        .finally(() => {
          this.running -= 1
          this.pump()
        })
    }
  }
}
