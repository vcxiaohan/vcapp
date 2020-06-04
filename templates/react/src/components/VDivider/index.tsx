// 分割线
import React from 'react';
import classnames from 'classnames'
import './index.scss'

export interface Props {
  className?: string
  height?: number
}

type MixinProps = Props & React.HtmlHTMLAttributes<HTMLElement>

const VDivider: React.FC<MixinProps> = (props) => {
  const { className, height, ...rest } = props

  return (
    <div className={classnames('VDivider', className)} style={{ height }} {...rest}></div>
  );
}

VDivider.defaultProps = {
  className: '',
  height: 4
}

VDivider.displayName = 'VDivider'

export default VDivider;
