import request from '@/utils/request'

export function getList(param) {
  const data = param.data
  const userToken = '18aad253349dacb94e9ea0863a7d664d'
  data.userToken = userToken
  return request({
    url: '/' + param.name + '/getList',
    method: 'post',
    data
  })
}

export function getDetail(param) {
  const data = param.data
  return request({
    url: '/' + param.name + '/get',
    method: 'post',
    data
  })
}

export function deleteDetail(param) {
  const data = param.data
  return request({
    url: '/' + param.name + '/remove',
    method: 'post',
    data
  })
}

export function saveDetail(param) {
  const data = param.data
  return request({
    url: '/' + param.name + '/post',
    method: 'post',
    data
  })
}

export function editDetail(param) {
  const data = param.data
  return request({
    url: '/' + param.name + '/put',
    method: 'post',
    data
  })
}

export function selectSecondLevelTableList(param) {
  const data = param.data
  return request({
    url: '/' + param.url + '-detail/getList',
    method: 'post',
    data
  })
}

// 字典表下拉取值
export function getPullDownList(param) {
  const data = {
    'entity': {
      'classCode': param.classCode
    }
  }
  return request({
    url: '/lookup-item/getPullDownList',
    method: 'post',
    data
  })
}
// 部门等下拉取值
export function getSelectList(url) {
  const data = {
    'entity': {}
  }
  return request({
    url: url,
    method: 'post',
    data
  })
}

// 改变数据状态
export function setDataState(param) {
  const data = param.data
  return request({
    url: param.url,
    method: 'post',
    data
  })
}

export function getQiniuToken(data) {
  return request({
    url: '/uploadToken/get',
    method: 'post',
    data
  })
}

// 省份下拉取值
export function getProvinceList(param) {
  const data = {
    'entity': {
      'classCode': param.classCode
    }
  }
  return request({
    url: '/province/getPullDownList',
    method: 'post',
    data
  })
}

