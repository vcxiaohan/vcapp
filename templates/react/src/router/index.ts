import React from 'react';
import * as pages from '@/const/page.const'
// import Home from '@/pages/Home'
// import SelecteNumber from '@/pages/SelecteNumber'
// import SelecteLottery from '@/pages/SelecteLottery'
// import LotteryRecord from '@/pages/LotteryRecord'
// import PastPrize from '@/pages/PastPrize'
// import PrizeDetail from '@/pages/PrizeDetail'

const Home = React.lazy(() => import('@/pages/Home'))
const SelecteNumber = React.lazy(() => import('@/pages/SelecteNumber'))
const SelecteLottery = React.lazy(() => import('@/pages/SelecteLottery'))
const LotteryRecord = React.lazy(() => import('@/pages/LotteryRecord'))
const PastPrize = React.lazy(() => import('@/pages/PastPrize'))
const PrizeDetail = React.lazy(() => import('@/pages/PrizeDetail'))

export const routes = [
  {
    title: '彩票',
    path: pages.PAGE_HOME,
    component: Home,
  },
  {
    title: '选择彩种',
    path: pages.PAGE_SELECT_LOTTERY,
    component: SelecteLottery
  },
  {
    title: '双色球',
    path: pages.PAGE_SELECT_NUMBER,
    component: SelecteNumber
  },
  {
    title: '购彩记录',
    path: pages.PAGE_LOTTERY_RECORD,
    component: LotteryRecord
  },
  {
    title: '往期开奖',
    path: pages.PAGE_PAST_PRIZE,
    component: PastPrize
  },
  {
    title: '双色球',
    path: pages.PAGE_PRIZE_DETAIL,
    component: PrizeDetail
  },
]