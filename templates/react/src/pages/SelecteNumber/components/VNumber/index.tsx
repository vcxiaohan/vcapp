// 生成选号
import React from 'react';
import classNames from 'classnames'
import './index.scss'

export interface Props {
  allNumber: string[]
  selectNumber: string[]
  setSelectNumber: (selectNumber: string[]) => void
}

const VNumber: React.FC<Props> = (props) => {
  const { allNumber, selectNumber, setSelectNumber, } = props

  return (
    <div className='VNumber'>
      {
        allNumber.map(item => {
          const numberIndex = selectNumber.findIndex(numberItem => numberItem == item)

          return (
            <div key={item} className='VNumber-number-ctn'>
              <div onClick={() => {
                const cloneSelectNumber = [...selectNumber]

                numberIndex + 1 ? cloneSelectNumber.splice(numberIndex, 1) : cloneSelectNumber.push(item)
                setSelectNumber(cloneSelectNumber)
              }} className={classNames('VNumber-number-ctn-item', { 'on': numberIndex + 1 })}>{item}</div>
            </div>
          )
        })
      }
    </div>
  );
}

VNumber.defaultProps = {
  allNumber: [],
  selectNumber: [],
  setSelectNumber: () => { },
}

VNumber.displayName = 'VNumber'

export default VNumber;
