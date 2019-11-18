import request from '@/utils/request'
import store from '@/store'
import { getToken } from '@/utils/auth'

export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  let data
  if (store.getters.token) {
    const userToken = getToken()
    data.userToken = userToken
  }
  return request({
    url: '/logout',
    method: 'post',
    data
  })
}
