// 标题组件
import React from 'react';
import classnames from 'classnames'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import VTransition from '@/components/VTransition'
import VTable from '@/components/VTable'
import { formatToWeek } from '@/utils/Day'
import VIcon from '@/components/VIcon'
import WinHistoryApi from '@/api/WinHistoryApi'
import { GlobalContext } from '@/App'
import * as icons from '@/const/icon.const'
import * as pages from '@/const/page.const'
import { LotItem, PriceItem, PriceDetail } from '@/model/Home'
import './index.scss'

// export enum LotteryItemType {

// }

// normal-普通彩种 hot-热门彩种 detail-可查看详细的彩种
type LotteryItemType = 'normal' | 'hot' | 'detail'

export interface Props {
  type?: LotteryItemType
  data: PriceItem
  className?: string
}

const defaultPriceDetail = {
  lotCode: '',	//彩种编码
  sales: '',	//本期销售量
  lists: []	//开奖明细
}

type MixinProps = Props & React.HtmlHTMLAttributes<HTMLElement> & RouteComponentProps

const VLotteryItem: React.FC<MixinProps> = (props) => {
  const { type, data, className, history, ...rest } = props
  const [state, dispatch] = React.useContext(GlobalContext)
  const [show, setShow] = React.useState(false)
  const [prizeDetail, setPrizeDetail] = React.useState<PriceDetail>(defaultPriceDetail)

  return (
    <div className={classnames('VLotteryItem', className)} {...rest}>
      <div className='VLotteryItem-top'>
        <div className='VLotteryItem-top-left'>
          <span className='VLotteryItem-top-left-title'>{state.lotList.data.find((item: any) => item.lotCode == data.lotCode) ? state.lotList.data.find((item: any) => item.lotCode == data.lotCode).lotName : ''}</span>
          <span className='VLotteryItem-top-left-desc'>{data.issue}期 {formatToWeek(data.winTime)}</span>
        </div>
        <div className='VLotteryItem-top-right'>奖池 {data.pool}亿</div>
      </div>
      <div className='VLotteryItem-middle'>
        <div className='VLotteryItem-middle-left'>
          {
            data.winNum.split('').map((item, index) => (// todo...winNum不确定格式
              <VIcon key={index} className='VLotteryItem-middle-left-ball' src={icons.BALL_RED_ICON} title={item}></VIcon>
              // <div key={item} className='VLotteryItem-middle-left-ball'>{item}</div>
            ))
          }
        </div>
        {
          type == 'normal' &&
          <VIcon className='VTitle-right-icon' src={icons.ARROW_RIGHT_ICON} onClick={() => {
            history.push(`${pages.PAGE_PRIZE_DETAIL}?lotteryType=${data.lotCode}`)
          }}></VIcon>
        }
        {
          type === 'detail' &&
          <VTransition show={show} effect='rotate'>
            <VIcon className='VTitle-right-icon' src={icons.ARROW_BOTTOM_ICON} onClick={async () => {
              setPrizeDetail(await WinHistoryApi.getDetail({}))
              setShow(show ? false : true)
            }}></VIcon>
          </VTransition>
        }
      </div>
      <VTransition show={show}>
        <div className='VLotteryItem-bottom'>
          <div>
            <div className='VLotteryItem-bottom-top'>
              <div className='VLotteryItem-bottom-top-title'>本期销量（元）</div>
              <div>{prizeDetail.sales}<span className='VLotteryItem-bottom-top-unit'>亿</span></div>
            </div>
            <div className='VLotteryItem-bottom-top'>
              <div className='VLotteryItem-bottom-top-title'>奖池累计（元）</div>
              <div>{data.pool}<span className='VLotteryItem-bottom-top-unit'>亿</span></div>
            </div>
            <div></div>
          </div>
          <div className='VLotteryItem-bottom-bottom'>
            <VTable data={prizeDetail.lists} columns={[
              { title: '奖级', key: 'level' },
              { title: '中奖注数', key: 'count' },
              { title: '单注奖金（元）', key: 'amount' },
            ]}></VTable>
          </div>
        </div>
      </VTransition>
    </div>
  );
}

VLotteryItem.defaultProps = {
  type: 'normal',
  className: '',
}

VLotteryItem.displayName = 'VLotteryItem'

export default withRouter(VLotteryItem);
