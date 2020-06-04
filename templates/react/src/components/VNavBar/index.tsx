// 导航栏组件
import React from 'react';
import * as H from 'history';
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { NavBar, Icon } from 'antd-mobile';
import { routes } from '@/router'
import { GlobalContext } from '@/App'
import LotApi from '@/api/LotApi'
import { SET_NAV_BAR } from '@/reducer/actionType'

export interface Props {
}

type MixinProps = Props & RouteComponentProps


const VNavBar: React.FC<MixinProps> = (props) => {
  const { history, location } = props
  const [state, dispatch] = React.useContext(GlobalContext)

  const setTitle = function (location: H.Location) {
    const currentRoute = routes.find(item => item.path == location.pathname)
    currentRoute && dispatch({ type: SET_NAV_BAR, payload: { title: currentRoute.title, mode: 'light' } })
  }

  React.useEffect(() => {
    setTitle(location)

    history.listen((location) => {
      setTitle(location)
    })
  }, [])

  return (
    <div className='VNavBar'>
      <NavBar
        mode={state.navBar.mode}
        icon={<Icon type="left" />}
        onLeftClick={() => history.goBack()}
      >{state.navBar.title}</NavBar>
    </div>
  );
}

VNavBar.displayName = 'VNavBar'

export default withRouter(VNavBar);
