// @ts-nocheck

// 去抖(多次事件只执行1次，wait为延时执行时间，immediate表示首次事件是立即执行还是延时执行)
export function debounce(fn, wait, immediate) {
  // 闭包形成局部作用域
  // 定时器
  let timer = null
  console.log(1);
  
  return function () {// #1
    // 保存#1的this上下文
    const self = this
    // 保存#1的参数列表
    const args = arguments
    // 清除定时器，阻止fn的执行
    clearTimeout(timer)
    if (immediate) {// 事件立即执行
      // 首次事件时，timer为null
      let callNow = !timer
      // 接下来的事件，timer都是定时器的引用，即存在
      timer = setTimeout(() => {
        // 延时时间过后，恢复timer为null
        timer = null
      }, wait)
      // 首次事件时，callNow为true，所以会立即执行
      if (callNow) fn.apply(self, args)
    } else {// 事件延时执行
      // 开启新的定时器，延时wait时间后，执行fn
      timer = setTimeout(() => {
        // 执行fn，改变this指向#1的上下文，并传入#1的参数
        fn.apply(self, args)
      }, wait)
    }
  }
}

// 节流(多次事件间隔执行，wait为间隔执行时间，immediate表示首次事件是立即执行还是延时执行)
export function throttle(fn, wait, immediate) {
  // 闭包形成局部作用域
  // 定时器
  let timer = null
  // 开始时间
  let start = 0
  return function () {// #1
    // 保存#1的this上下文
    const self = this
    // 保存#1的参数列表
    const args = arguments
    if (immediate) {// 立即执行
      // 每次要执行fn时，记录当前时间(此时fn并未执行)
      let end = new Date()
      if (end - start >= wait) {// 累积时间大于间隔时间时执行(首次事件的时间戳远远大于wait)
        // 执行fn，改变this指向#1的上下文，并传入#1的参数
        fn.apply(self, args)
        // 更新开始时间
        start = end
      }
    } else {// 延时执行
      if (!timer) {
        timer = setTimeout(() => {
          // 执行fn，改变this指向#1的上下文，并传入#1的参数
          fn.apply(self, args)
          // 赋值为null，以便下次继续执行
          timer = null
        }, wait)
      }
    }
  }
}