/* 彩票方法 */

// 阶乘
export const factorial = (n: number, total = 1): number => {
  if (n === 1) return total
  return factorial(n - 1, n * total)
}

// 排列组合
export const permutation = (m: number, n: number): number => {
  return factorial(m) / factorial(n) / factorial(m - n)
}

// 获取所有选号
export const getAllNumber = (start: number, end: number): string[] => {
  let arr = []
  for (let i = start; i <= end; i++) {
    arr.push(String(i).padStart(2, '0'))
  }
  return arr
}

// 获取随机选号
export const getRandomNumber = (amount: number, allNumber: string[]): string[] => {
  let arr: string[] = [],
    total = allNumber.length

  if (amount > total) {
    console.info('随机数量不能多于号码总数')
    return []
  }

  while (arr.length < amount) {
    let a = Math.floor(Math.random() * total)
    let res = allNumber[a]
    !arr.includes(res) && arr.push(res)
  }
  return arr
}





