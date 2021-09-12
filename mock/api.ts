export default {
  // 支持值为 Object 和 Array
  'GET /api/users': { data: '服务测试' },

  // GET 可忽略
  '/api/users/1': { info: '测试2的接口数据' },

  '/api/users/tableList': {
    info: [
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
      {
        key: '3',
        name: '胡彦斌',
        age: 42,
        address: '西湖区湖底公园1号',
      },
      {
        key: '4',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
      },
      {
        key: '5',
        name: '胡彦斌',
        age: 42,
        address: '西湖区湖底公园1号',
      },
      {
        key: '6',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
      },
      {
        key: '7',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
      },
      {
        key: '8',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
      },
      {
        key: '9',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
      },
      {
        key: '10',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
      },
    ],
  },

  // 支持自定义函数，API 参考 express@4
  // 'POST /api/users/create': (req, res) => {
  //   // 添加跨域请求头
  //   res.setHeader('Access-Control-Allow-Origin', '*');
  //   res.end('ok');
  // },
};
