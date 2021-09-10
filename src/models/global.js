export default {
  namespace: 'globalModel',

  state: {
    globalInfo: '全局测试数据'
  },

  reducers: {
    changeGlobalInfo (state, action) {
      return state.globalInfo = action.payload
    }
  }
}
