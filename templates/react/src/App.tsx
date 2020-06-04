import React from 'react';
import { Route, withRouter, RouteComponentProps } from 'react-router-dom'
import VNavBar from '@/components/VNavBar'
import VEmpty from '@/components/VEmpty'
import { LotItem } from '@/model/Home'
import { routes } from '@/router'
import { reducer } from '@/reducer'
import './App.scss';

export interface Props {
}

export interface NavBarContext {
  title: string
}

export interface LotListContext {
  data: LotItem[]
}

// 全局变量
export interface GlobalContextProps {
  navBarContext: NavBarContext// 导航栏
  lotListContext: LotListContext// 导航栏
}

const defaultNavBarContext = {
  title: '彩票'
}

const defaultLotListContext = {
  data: [{
    lotCode: '',
    lotName: '',
    iconUrl: '',
    linkUrl: ''
  }]
}

const defaultGlobalContextProps = {
  navBarContext: defaultNavBarContext,
  lotListContext: defaultLotListContext,
}
// Dispatch<SetStateAction<{ navBarContext: { title: string; }; lotListContext: { ...; }; }>>
export const GlobalContext = React.createContext<any>(defaultGlobalContextProps)

type MixinProps = Props & RouteComponentProps

const App: React.FC<MixinProps> = () => {

  return (
    <GlobalContext.Provider value={React.useReducer(reducer, {
      navBar: { title: 'action.title', mode: 'dark' }, lotList: {
        data: [{
          lotCode: '',
          lotName: '',
          iconUrl: '',
          linkUrl: ''
        }]
      }
    } as any)}>
      <div className='App'>
        <VNavBar></VNavBar>
        <div className='App-ctn'>
          <React.Suspense fallback={<VEmpty title='加载中...'></VEmpty>}>
            {
              routes.map(item => (<Route key={item.path} exact path={item.path} component={item.component}></Route>))
            }
          </React.Suspense>
        </div>
      </div>
    </GlobalContext.Provider>
  );
}

export default withRouter(App);
