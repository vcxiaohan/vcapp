// 快捷链接
import React from 'react';
import { Link } from 'react-router-dom'
import VIcon from '@/components/VIcon'
import {QuickLinkItem} from '@/model/Home'
import './index.scss'

export interface Props {
  data: QuickLinkItem[]
}

const VQuickLink: React.FC<Props> = (props) => {

  return (
    <div className='VQuickLink'>
      {
        props.data.map(item => (
          <Link key={item.id} to={item.link}>
            <VIcon onClick={() => {
              console.log(123);

            }} title={item.title} src={item.src} />
          </Link>
        ))
      }
    </div>
  );
}

VQuickLink.defaultProps = {
  data: []
}

VQuickLink.displayName = 'VQuickLink'

export default VQuickLink;
