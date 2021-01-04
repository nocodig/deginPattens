// 发布者

class Dep {
  constructor() {
    // 记录所有订阅者
    this.subs = [];
  }

  addSub(sub) {
    if (sub && sub.update) {
      this.subs.push(sub);
    }
  }

  // 当事件发生时，通知所有的订阅者
  notify() {
    this.subs.forEach(item => item.update())
  }
}

// 订阅者-观察者=
class Watcher {
  // 当事件发生时，由发布者这行该方法
  update() {
    console.log('update');
  }
}