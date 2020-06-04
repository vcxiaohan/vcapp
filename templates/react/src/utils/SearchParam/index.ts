
// 获取链接中某个参数 origin-设置来源
export const getParam = (param: string, origin?: string) => {
  let reg = new RegExp(param + '=(\d*[a-zA-Z]*[^?|^#|^&]*)'),
    str = (origin || location.href).match(reg);
  if (str) {
    str = decodeURIComponent(str[1]) as any;
    return str;
  }
}

// 设置链接中某个参数 origin-设置来源
export const setParam = (param: string, value: string, origin?: string) => {
  let str = (origin || location.href),
    arr = str.split('?');
  return arr[0] + '?' + (arr[1] ? arr[1] + '&' : '') + param + '=' + value
}