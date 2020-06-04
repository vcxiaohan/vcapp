import { Http } from '@/utils/Http'
import {
  CarouselList,
  QuickLinkList
} from '@/model/Home'

class HomeApi extends Http {
  // 轮播图
  getCarouselData(params: any) {
    return this.get<CarouselList>('/mock/HomeApi.getCarouselData.json').then(data => data.data)
  }

  // 快捷跳转
  getQuickLink(params: any) {
    return this.get<QuickLinkList>('/mock/HomeApi.getQuickLink.json').then(data => data.data)
  }
}

export default new HomeApi()