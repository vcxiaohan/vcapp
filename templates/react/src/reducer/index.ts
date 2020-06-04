import { SET_NAV_BAR, SET_LOT_LIST } from '@/reducer/actionType'
import { setNavBar } from '@/reducer/navBar'
import { setLotList } from '@/reducer/lotList'

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_NAV_BAR:
      return { ...state, ...setNavBar(state, action) }

    case SET_LOT_LIST:
      return { ...state, ...setLotList(state, action) }

    default:
      return state
  }
}