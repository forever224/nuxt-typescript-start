module.exports = {
  dev: {
    MODE: 'development',
    API_TARGETS: [
      {
        base: ['/nchannel'],
        target: 'http://test-web01.nn.com',
      },
    ],
  },
  test: {
    MODE: 'testing',
    API_TARGETS: [
      {
        base: ['/api'],
        target: 'http://zhongfumin.com',
      },
    ],
  },
  prod: {
    MODE: 'production',
    API_TARGETS: [
      {
        base: ['/nchannel'],
        target: 'http://web01.nn.com',
      },
    ],
  },
}
