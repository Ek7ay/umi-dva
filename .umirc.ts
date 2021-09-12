import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      routes: [
        { path: '/test', component: '@/pages/test/index' },
        { path: '/test2', component: '@/pages/test2/index' },
        { path: '/tableList', component: '@/pages/tableList/index' },
      ],
    },
  ],
  fastRefresh: {},
});
