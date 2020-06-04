// 分割线
import React from 'react';
import { CSSTransition } from 'react-transition-group'
import classnames from 'classnames'
import './index.scss'

type effect = 'fade' | 'rotate'

export interface Props {
  show: boolean
  effect?: effect
  className?: string
}

type MixinProps = Props & React.HtmlHTMLAttributes<HTMLElement>

const VTransition: React.FC<MixinProps> = (props) => {
  const { show, effect, className, children, ...rest } = props

  return (
    <CSSTransition
      in={show}
      classNames={`VTransition-${effect}`}
      timeout={0}
    >
      <div className={classnames('VTransition', `VTransition-${effect}`, className)} {...rest}>
        {
          children
        }
      </div>
    </CSSTransition>
  );
}

VTransition.defaultProps = {
  effect: 'fade',
  className: '',
}

VTransition.displayName = 'VTransition'

export default VTransition;
