import React from 'react';

export interface LotteryRecordProps {
  name: string
}

const LotteryRecord: React.FC<LotteryRecordProps> = (props) => {
  return (
    <div className='LotteryRecord'>
      购彩记录
    </div>
  );
}

export default LotteryRecord;
