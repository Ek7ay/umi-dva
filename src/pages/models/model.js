import { getInfo } from '@/services/http';

export default {
  namespace: 'shopcart',

  state:{
    data: '测试',
  },

  effects:{
    *getData({ payload }, { call, put }) {
      const res = yield call(getInfo)
      yield put({type: 'setShopcartData', payload: res})
    }
  },

  reducers:{
    setShopcartData(state, action) {
      return state.data = action.payload
    }
  }
}
