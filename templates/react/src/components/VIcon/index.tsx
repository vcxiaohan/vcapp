// 图标组件
import React from 'react';
import classnames from 'classnames'
import { DEFAULT_ICON } from '@/const/icon.const'
import './index.scss'

export interface Props {
  className?: string
  src?: string
  title?: string
}

type MixinProps = Props & React.HtmlHTMLAttributes<HTMLElement>

const VIcon: React.FC<MixinProps> = (props) => {
  const { className, src, title, ...rest } = props

  return (
    <div className={classnames('VIcon', className)} {...rest}>
      <img className='VIcon-icon' src={src} />
      <div className='VIcon-title'>{title}</div>
    </div>
  );
}

VIcon.defaultProps = {
  className: '',
  src: DEFAULT_ICON,
  title: ''
}

VIcon.displayName = 'VIcon'

export default VIcon;
