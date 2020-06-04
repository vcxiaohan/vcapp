// 选择彩票号码
import React from 'react';
import { getParam } from '@/utils/SearchParam'
import VLotteryTWO from '@/pages/SelecteNumber/components/VLotteryTWO'
import { GlobalContext } from '@/App'
import './index.scss'

export interface Props {
  name: string
}

export interface NumberItem {
  title: string
  desc: string
  data: string[]
  getRandomNumber: Function
}

export interface LotteryItem {
  getBet: Function
  numbers: NumberItem[]
}

export interface refMethod {
  getRandomNumber: () => void,
  resetNumber: () => void
}

const defaultRefMethod: refMethod = {
  getRandomNumber() { },
  resetNumber() { },
}

const SelecteNumber: React.FC<Props> = (props) => {
  const [state, dispatch] = React.useContext(GlobalContext)
  const numberRef = React.useRef(defaultRefMethod)
  const [lotteryType, setLotteryType] = React.useState(0)
  const [selectNumber, setSelectNumber] = React.useState<string[]>([])

  React.useEffect(() => {
    setLotteryType(Number(getParam('lotteryType')))
    numberRef.current.getRandomNumber()
  }, [])

  return (
    <div className='SelecteNumber'>
      {
        state.lotList.data && state.lotList.data.map((item: any) => (
          <div key={item.lotName}>---{item.lotName}</div>
        ))
      }
      <div className='SelecteNumber-block'>
        <VLotteryTWO ref={numberRef} getSelectNumber={setSelectNumber}></VLotteryTWO>
        <div>已选：{selectNumber}</div>
        <div onClick={numberRef.current.getRandomNumber}>机选</div>
        <div onClick={numberRef.current.resetNumber}>清空</div>
      </div>
    </div>
  );
}

export default SelecteNumber;
