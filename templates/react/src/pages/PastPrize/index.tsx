/* 往期开奖 */
import React from 'react';
import VDivider from '@/components/VDivider'
import VLotteryItem from '@/components/VLotteryItem'
import VEmpty from '@/components/VEmpty'
import { LotteryType } from '@/enum/LotteryType'
import { PAGE_PAST_PRIZE } from '@/const/page.const'
import { QuickLinkItem, PriceItem } from '@/model/Home'
import LotApi from '@/api/LotApi'
import WinHistoryApi from '@/api/WinHistoryApi'
import { GlobalContext } from '@/App'
import './index.scss'

export interface Props {
  name: string
}

const PastPrize: React.FC<Props> = (props) => {
  const [prize, setPrize] = React.useState<PriceItem[]>([])

  React.useEffect(() => {
    (async () => {
      setPrize(await WinHistoryApi.findNew({ a: 1, b: 2 }))
    })()
  }, [])

  return (
    <div className='PastPrize'>
      {
        prize.length ? prize.map(item => (
          <div key={item.lotCode}>
            <VLotteryItem data={item}></VLotteryItem>
            <VDivider height={16}></VDivider>
          </div>
        )) : <VEmpty></VEmpty>
      }
    </div>
  );
}

export default PastPrize;
