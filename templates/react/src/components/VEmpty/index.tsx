/* 没有数据 */
import React from 'react';
import classnames from 'classnames'
import './index.scss'

export interface Props {
  title?: string
  className?: string
}

type MixinProps = Props & React.HtmlHTMLAttributes<HTMLElement>

const VEmpty: React.FC<MixinProps> = (props) => {
  const { title, className, ...rest } = props

  return (
    <div className={classnames('VEmpty', className)} {...rest}>{title}</div>
  );
}

VEmpty.defaultProps = {
  title: '没有数据',
  className: ''
}

VEmpty.displayName = 'VEmpty'

export default VEmpty;
