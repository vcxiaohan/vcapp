/* 彩种 */
import { Http } from '@/utils/Http'
import { LotItem } from '@/model/Home'

class LotApi extends Http {
  // 查询彩种列表
  list(params: any) {
    // return this.post<LotItem[]>('', { action: 'lottery.lot.list', ...params }).then(data => data.data)
    return this.get<LotItem[]>('/mock/LotApi.list.json').then(data => data.data)
  }
}

export default new LotApi()