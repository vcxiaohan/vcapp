/* 往期开奖 */
import React from 'react';
import VTitle from '@/components/VTitle'
import VDivider from '@/components/VDivider'
import VLotteryItem from '@/components/VLotteryItem'
import VEmpty from '@/components/VEmpty'
import { QuickLinkItem, PriceItem } from '@/model/Home'
import { PAGE_PAST_PRIZE } from '@/const/page.const'
import LotApi from '@/api/LotApi'
import WinHistoryApi from '@/api/WinHistoryApi'
import { GlobalContext } from '@/App'
import { SET_LOT_LIST } from '@/reducer/actionType'
import './index.scss'

export interface Props {
  data: QuickLinkItem[]
}

const VPastPrize: React.FC<Props> = (props) => {
  const [state, dispatch] = React.useContext(GlobalContext)
  const [prize, setPrize] = React.useState<PriceItem[]>([])

  React.useEffect(() => {
    (async () => {
      dispatch({ type: SET_LOT_LIST, payload: { data: await LotApi.list({}) } })
      setPrize((await WinHistoryApi.findNew({ a: 1, b: 2 })).splice(0, 2))
    })()
  }, [])

  return (
    <div className='VPastPrize'>
      <VTitle title='往期开奖' link={PAGE_PAST_PRIZE}></VTitle>
      <div className='VPastPrize-ctn'>
        {
          prize.length ?
            prize.map(item => (
              <div key={item.lotCode}>
                <VLotteryItem type='hot' data={item}></VLotteryItem>
                <VDivider height={1}></VDivider>
              </div>
            )) : <VEmpty></VEmpty>
        }
      </div>
    </div>
  );
}

VPastPrize.defaultProps = {
  data: []
}

VPastPrize.displayName = 'VPastPrize'

export default VPastPrize;
