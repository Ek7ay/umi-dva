import { getTableList } from '@/services/http';

export default {
  namespace: 'tableDataModel',

  state: {
    tableData: [
      {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
      },
      {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
      },
    ]
  },

  effects: {
    *getTableData ({ payload }, { call, put }) {
      console.log(payload)
      const res = yield call(getTableList, payload)
      yield put({type: 'setTableData', payload: res})
    }
  },

  reducers: {
    setTableData (state, action) {
      return {
        ...state,
        tableData: action.payload.info
      };
    }
  }
}
