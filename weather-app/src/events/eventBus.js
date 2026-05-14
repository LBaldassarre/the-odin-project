class EventBus {
  constructor() {
    this.subscribers = {};
  }

  subscribe(event, callback) {
    if (!this.subscribers[event]) {
      this.subscribers[event] = [];
    }
    this.subscribers[event].push(callback);
  }

  publish(event, data) {
    if (this.subscribers[event]) {
      this.subscribers[event].forEach(callback => callback(data));
    }
  }

  debug() {
    console.table(
        Object.keys(this.subscribers).map(event => ({
        Event: event,
        Subscribers: this.subscribers[event].length
        }))
    );
    console.log("Full Subscriber Map:", this.subscribers);
    }
}

export const eventBus = new EventBus();