import axios from 'axios'
import { Result } from '@/model/Result'

const url = ''

export class Http {
  get<T>(path: string, params?: any): Promise<Result<T>> {
    return axios.get(`${url}${path}`, { params: { ...params } }).then(data => data.data)
  }

  post<T>(path: string, params?: any): Promise<Result<T>> {
    return axios.post(`${url}${path}`, params).then(data => data.data)
  }
}

const http = new Http()

export { http }