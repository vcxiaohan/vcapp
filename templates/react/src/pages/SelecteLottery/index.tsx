// 选择彩票种类
import React from 'react';
import { Link } from 'react-router-dom'
import VIcon from '@/components/VIcon'
import { LotteryType } from '@/enum/LotteryType'
import { GlobalContext } from '@/App'
import * as pages from '@/const/page.const'
import './index.scss'

export interface Props {
  name: string
}

const types = [
  { id: '1', name: '双色球', type: LotteryType.TWO, src: '', link: '/1' },
  { id: '2', name: '福彩3D-直选', type: LotteryType.THREE, src: '', link: '' },
  { id: '3', name: '福彩3D-组选三', type: LotteryType.THREE_3, src: '', link: '' },
  { id: '4', name: '福彩3D-组选六', type: LotteryType.THREE_6, src: '', link: '' },
  { id: '5', name: '七乐彩', type: LotteryType.SEVEN, src: '', link: '' },
]

const SelecteLottery: React.FC<Props> = (props) => {
  const [state, dispatch] = React.useContext(GlobalContext)

  return (
    <div className='SelecteLottery'>
      <div className='SelecteLottery-types'>
        {
          state.lotList.data && state.lotList.data.map((item: any) => (
            <Link key={item.lotCode} to={`${pages.PAGE_SELECT_NUMBER}?lotteryType=${item.lotCode}`}>
              <VIcon src={item.iconUrl} title={item.lotName} ></VIcon>
            </Link>
          ))
        }
      </div>
    </div>
  );
}

export default SelecteLottery;
