import request from "umi-request";

export const getInfo = () => request('/api/users')

export const getEnsaioData = () => request('/api/users/1')

export const getTableList = (data:any) => request('/api/users/tableList', {
  params: {
    ...data
  },
  skipErrorHandler: true,
})
