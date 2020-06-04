// 标题组件
import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom'
import classnames from 'classnames'
import VIcon from '@/components/VIcon'
import { ARROW_RIGHT_ICON } from '@/const/icon.const'
import './index.scss'

export interface Props {
  className?: string
  title: string
  link?: string
}

type MixinProps = Props & React.HtmlHTMLAttributes<HTMLElement> & RouteComponentProps

const VTitle: React.FC<MixinProps> = (props) => {
  const { className, title, link, history, ...rest } = props

  return (
    <div className={classnames('VTitle', className)} {...rest}>
      <div className='VTitle-left'>{title}</div>
      {
        link && <>
          <div className='VTitle-right' onClick={() => {
            history.push(link)
          }}>
            <span className='VTitle-right-txt'>更多</span>
            <VIcon className='VTitle-right-icon' src={ARROW_RIGHT_ICON}></VIcon>
          </div>
        </>
      }
    </div>
  );
}

VTitle.defaultProps = {
  className: '',
  title: '标题',
  link: ''
}

VTitle.displayName = 'VTitle'

export default withRouter(VTitle);
