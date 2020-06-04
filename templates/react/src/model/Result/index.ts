export interface RowResult<T> {
  rows: T
  pageNum: number
  pageSize: number
  total: number
}

export interface PageResult<T> {
  msg: string
  code: number
  data: RowResult<T>
}

export interface Result<T> {
  msg: string
  code: number
  data: T
}