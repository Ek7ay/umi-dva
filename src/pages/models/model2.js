export default {

  namespace: 'model2Test',

  state:{
    info: 'model2测试数据'
  },

  effects: {

  },

  reducers: {
    setModel2Data (state, action) {
      return state.info = action.payload
    }
  }
}
