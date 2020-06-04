// 双色球
import React from 'react';
import { getAllNumber, getRandomNumber } from '@/utils/Lottery'
import VNumber from '@/pages/SelecteNumber/components/VNumber'
import { refMethod } from '@/pages/SelecteNumber'

export interface Props {
  ref?: any
  getSelectNumber: Function
}

const VLotteryTWO: React.FC<Props> = React.forwardRef((props, ref) => {
  const { getSelectNumber } = props
  const [selectNumberRed, setSelectNumberRed] = React.useState<string[]>([])
  const [selectNumberBlue, setSelectNumberBlue] = React.useState<string[]>([])
  const allNumberRed = getAllNumber(1, 33)
  const allNumberBlue = getAllNumber(1, 16)

  React.useImperativeHandle(ref, (): refMethod => ({
    getRandomNumber: () => {
      console.log(33);
      
      setSelectNumberRed(getRandomNumber(6, allNumberRed))
      setSelectNumberBlue(getRandomNumber(1, allNumberBlue))
    },
    resetNumber: () => {
      setSelectNumberRed([])
      setSelectNumberBlue([])
    }
  }))

  React.useEffect(() => {
    getSelectNumber([...selectNumberRed.sort(), ...selectNumberBlue.sort()])
  }, [selectNumberRed, selectNumberBlue])

  return (
    <div className='VLotteryTWO'>
      <div className='VLotteryTWO-title'>红区<span>请至少选择6个红球</span></div>
      <VNumber allNumber={allNumberRed} selectNumber={selectNumberRed} setSelectNumber={setSelectNumberRed}></VNumber>
      <div className='VLotteryTWO-title'>蓝区<span>请至少选择1个蓝球</span></div>
      <VNumber allNumber={allNumberBlue} selectNumber={selectNumberBlue} setSelectNumber={setSelectNumberBlue}></VNumber>
    </div>
  );
})

VLotteryTWO.defaultProps = {
}

VLotteryTWO.displayName = 'VLotteryTWO'

export default VLotteryTWO;
