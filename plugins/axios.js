export default function ({ app: { store, $axios, $message }, redirect }) {
  $axios.defaults.timeout = 10000
  $axios.interceptors.request.use((config) => {
    config.headers.reqChannel = '4'
    config.headers.appId = 'nnPcweb_kzMhgPe5'
    return config
  })
  $axios.interceptors.response.use(
    (response) => {
      // {retCode: "100", retMsg: "操作成功", retData: false}
      const db = response.data
      let data =
        db.retCode === undefined
          ? {
              msg: '接口响应错误',
              data: db,
              code: '-1',
            }
          : {
              msg: db.retMsg,
              data: db.retData,
              code: db.retCode,
              retTime: db.retTime,
            }
      // 使用原始值
      if (response.config && response.config.original) {
        data = {
          msg: response.statusText,
          data: db,
          code: response.status === 200 ? '100' : response.status,
        }
      }
      switch (data.code) {
        case '100':
          // 成功
          return Promise.resolve(data)
        default:
          $message.warning(data.msg)
          return Promise.reject(new Error(data.msg))
      }
    },
    (err) => {
      // 发生网络错误后会走到这里
      switch (err.response && err.response.status) {
        case 404:
        case 500:
          $message.error(`服务器开小差了:【${err.response.status}】`)
          break
        default:
          $message.error(err.message)
          console.log('网络错误', err)
          break
      }
      return Promise.reject(err)
    }
  )
}
