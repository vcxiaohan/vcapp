/* 开奖详情 */
import React from 'react';
import VDivider from '@/components/VDivider'
import VLotteryItem from '@/components/VLotteryItem'
import VScroll from '@/components/VScroll'
import { PriceItem, PriceParams } from '@/model/Home'
import { defaultVScrollRefMethod } from '@/components/VScroll'
import WinHistoryApi from '@/api/WinHistoryApi'
import './index.scss'

export interface Props {
  name: string
}

const defaultPriceParams = {
  lotCode: ''
}

const PrizeDetail: React.FC<Props> = (props) => {
  const [params, setParams] = React.useState(defaultPriceParams)
  let scrollRef = React.useRef(defaultVScrollRefMethod)

  const load = async (reset: boolean = false) => {
    let res = await scrollRef.current.load<PriceItem[]>(params, reset)
  }

  React.useEffect(() => {
    (async () => {
      load()
    })()
  }, [])

  return (
    <div className='PrizeDetail'>
      <div onClick={() => {
        setParams({ lotCode: '100000' })
        load(true)
      }}>模拟改变列表的请求参数</div>
      <VScroll
        ref={scrollRef}
        api={(data: PriceParams) => WinHistoryApi.pageQuery(data)}
        renderRow={(rowData: PriceItem) => (
          <>
            <VLotteryItem type='detail' data={rowData}></VLotteryItem>
            <VDivider height={16}></VDivider>
          </>
        )}
      >
      </VScroll>
    </div>
  );
}

export default PrizeDetail;
