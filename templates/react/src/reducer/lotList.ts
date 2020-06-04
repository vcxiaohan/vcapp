/* 彩票枚举 */

export const setLotList = (state: any, action: any) => ({
  lotList: { ...state.lotList, ...action.payload }
})