import Mock from 'mockjs'

export default Mock.mock(/getNewsList/, {
  'list|5': [{
    'url': '@url',
    'title': '@ctitle(5, 25)'
  }]
})
Mock.mock(/productList/, {
  'list|1': [{
    'pc': {
      'title': '@ctitle(4)',
      'list|4': [
        {
          'name': '@ctitle(4, 10)',
          'url': '@url',
          'hot': '@boolean'
        }
      ]
    },
    'app': {
      'title': '@ctitle(4)',
      'list|4': [
        {
          'name': '@ctitle(4, 10)',
          'url': '@url',
          'hot': '@boolean'
        }
      ]
    }
  }]
})
Mock.mock(/login/, {
  username: '123456',
  userId: 123456
})
