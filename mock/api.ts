export default {
    // 支持值为 Object 和 Array
    'GET /api/users': { data: '服务测试' },

    // GET 可忽略
    '/api/users/1': { info: '测试2的接口数据' },

    // 支持自定义函数，API 参考 express@4
    // 'POST /api/users/create': (req, res) => {
    //   // 添加跨域请求头
    //   res.setHeader('Access-Control-Allow-Origin', '*');
    //   res.end('ok');
    // },
  }