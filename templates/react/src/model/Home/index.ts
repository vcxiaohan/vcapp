import { PageData } from '@/model/PageData'

// 轮播图
export interface CarouselItem {
  id: string
  src: string
  link: string
}

// 轮播图列表
export interface CarouselList {
  list: CarouselItem[]
}

// 快捷链接
export interface QuickLinkItem {
  id: string
  src: string
  link: string
  title: string
}

// 快捷链接列表
export interface QuickLinkList {
  list: QuickLinkItem[]
}

// 彩种单元
export interface LotItem {
  lotCode: string	// 彩种id
  lotName: string	// 彩种名称
  iconUrl: string	// 彩种图标
  linkUrl: string	// 链接url
}

// 每期开奖
export interface PriceItem {
  lotCode: string	//彩种编码
  issue: string	//期次编码
  winNum: string	//中奖号码
  winTime: string	//开奖时间
  pool: string	//当前奖池
}

// 每期开奖详情
export interface PriceItemDetail {
  level: string	//奖级名称
  count: string	//中奖注数
  amount: string	//每注金额
}

// 每期开奖详情
export interface PriceDetail {
  lotCode: string	//彩种编码
  sales: string	//本期销售量
  lists: PriceItemDetail[]	//开奖明细
}

// 开奖公告分页查询
export interface PriceParams extends PageData {
  lotCode: string	//彩种编码
}




