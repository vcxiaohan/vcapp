/* 导航条 */

export const setNavBar = (state: any, action: any) => ({
  navBar: { ...state.navBar, ...action.payload }
})