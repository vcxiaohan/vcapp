/* 对dayjs二次封装 */
import dayjs, { UnitType, ConfigType as MixedDate } from 'dayjs'

// YYYY-MM-DD HH:mm:ss
export const formatToDay = (value: MixedDate = new Date(), format: string = 'YYYY-MM-DD') => {
  return dayjs(value).format(format)
}

export const getAddDay = (num: number = 0, value: MixedDate = new Date(), format: string = 'YYYY-MM-DD') => {
  return formatToDay(dayjs(value).add(num, 'day'), format)
}

let weekMap = new Map([[0, '日'], [1, '一'], [2, '二'], [3, '三'], [4, '四'], [5, '五'], [6, '六']])

// 格式化日期为周几，如：2019-3-20 星期三
export const formatToWeek = (value: MixedDate = new Date(), format: string = 'YYYY-MM-DD', prefix: string = '星期') => {
  return `${formatToDay(value, format)} ${prefix}${weekMap.get(+dayjs(value).format('d'))}`
}

export const getHour = (value1: MixedDate, value2: MixedDate, unit: UnitType = 'hour') =>
  Math.ceil(dayjs(value1).diff(dayjs(value2), unit, true))

/**
 * 根据开始时间和结束时间计算累计的年数
 * @param value1 结束时间
 * @param value2 开始时间
 * @param unit
 */
export const getYear = (value1: MixedDate, value2: MixedDate, unit: UnitType = 'year') => {
  let endYear = dayjs(value1)
  let startYear = dayjs(value2)
  return endYear.isValid() && startYear.isValid() ? endYear.diff(startYear, unit, true) : ''
}

/**
 * 通过开始时间和累计的年数计算结束时间
 * @param value1 开始时间
 * @param value2 累计年数
 * @param unit
 */
export const getEndYear = (value1: MixedDate, value2: number, unit: UnitType = 'year') => {
  let res = dayjs(value1).add(value2, unit)
  return res.isValid() ? res.format('YYYY-MM-DD HH:mm:ss') : ''
}

