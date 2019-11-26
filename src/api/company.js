import request from '@/utils/request'

export function getCompanyList(data) {
  return request({
    url: '/company/getPullDownList',
    method: 'post',
    data
  })
}

export function getCompanyDetail(data) {
  return request({
    url: '/company/get',
    method: 'post',
    data
  })
}

export function deleteCompanyDetail(data) {
  return request({
    url: '/company/remove',
    method: 'post',
    data
  })
}

export function saveCompanyDetail(data) {
  return request({
    url: '/company/post',
    method: 'post',
    data
  })
}

export function editCompanyDetail(data) {
  return request({
    url: '/company/put',
    method: 'post',
    data
  })
}

//部门
export function getDepartmentList(data) {
  return request({
    url: '/department/getList',
    method: 'post',
    data
  })
}

export function getDepartmentDetail(data) {
  return request({
    url: '/department/get',
    method: 'post',
    data
  })
}

export function deleteDepartmentDetail(data) {
  return request({
    url: '/department/remove',
    method: 'post',
    data
  })
}

export function saveDepartmentDetail(data) {
  return request({
    url: '/department/post',
    method: 'post',
    data
  })
}

export function editDepartmentDetail(data) {
  return request({
    url: '/department/put',
    method: 'post',
    data
  })
}

// 人员
export function getStaffList(data) {
  return request({
    url: '/staff/getList',
    method: 'post',
    data
  })
}

export function getStaffDetail(data) {
  return request({
    url: '/staff/get',
    method: 'post',
    data
  })
}

export function deleteStaffDetail(data) {
  return request({
    url: '/staff/remove',
    method: 'post',
    data
  })
}

export function saveStaffDetail(data) {
  return request({
    url: '/staff/post',
    method: 'post',
    data
  })
}

export function editStaffDetail(data) {
  return request({
    url: '/staff/put',
    method: 'post',
    data
  })
}
