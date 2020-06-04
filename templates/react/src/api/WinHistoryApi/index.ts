/* 往期开奖 */
import { Http } from '@/utils/Http'
import { RowResult } from '@/model/Result'
import { LotItem, PriceItem, PriceDetail, PriceParams } from '@/model/Home'

class WinHistoryApi extends Http {
  // 查询最新开奖公告
  findNew(params: any) {
    // return this.post<PriceItem[]>('', { action: 'lottery.winHistory.findNew', ...params }).then(data => data.data)
    return this.get<PriceItem[]>('/mock/WinHistoryApi.findNew.json').then(data => data.data)
  }

  // 开奖公告分页查询
  pageQuery(params: PriceParams) {
    // return this.post<RowResult<PriceItem[]>>('', { action: 'lottery.winHistory.pageQuery', ...params }).then(data => data.data)
    return this.get<RowResult<PriceItem[]>>('/mock/WinHistoryApi.pageQuery.json').then(data => data.data)
  }

  // 期次开奖详情查询
  getDetail(params: any) {
    // return this.post<PriceDetail>('', { action: 'lottery.winHistory.getDetail', ...{ lotCode: '102', issue: '' } }).then(data => data.data)
    return this.get<PriceDetail>('/mock/WinHistoryApi.getDetail.json').then(data => data.data)
  }
}

export default new WinHistoryApi()