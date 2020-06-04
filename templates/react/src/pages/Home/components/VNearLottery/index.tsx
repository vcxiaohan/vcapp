// 附近彩点
import React from 'react';
import VTitle from '@/components/VTitle'
import { QuickLinkItem } from '@/model/Home'

export interface Props {
  data: QuickLinkItem[]
}

const VNearLottery: React.FC<Props> = (props) => {

  return (
    <div className='VNearLottery'>
      <VTitle title='附近彩点' link='/qqqq'></VTitle>
      <div>
        <div>列表</div>
        <div>列表</div>
      </div>
    </div>
  );
}

VNearLottery.defaultProps = {
  data: []
}

VNearLottery.displayName = 'VNearLottery'

export default VNearLottery;
