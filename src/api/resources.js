import request from '@/utils/request'

export function getProductTypeList(data) {
  return request({
    url: '/product-type/getList',
    method: 'post',
    data
  })
}

export function getProductTypeDetail(data) {
  return request({
    url: '/product-type/get',
    method: 'post',
    data
  })
}

export function deleteProductTypeDetail(data) {
  return request({
    url: '/product-type/remove',
    method: 'post',
    data
  })
}

export function saveProductTypeDetail(data) {
  return request({
    url: '/product-type/post',
    method: 'post',
    data
  })
}

export function editProductTypeDetail(data) {
  return request({
    url: '/product-type/put',
    method: 'post',
    data
  })
}

//部门
export function getProductList(data) {
  return request({
    url: '/product/getList',
    method: 'post',
    data
  })
}

export function getProductDetail(data) {
  return request({
    url: '/product/get',
    method: 'post',
    data
  })
}

export function deleteProductDetail(data) {
  return request({
    url: '/product/remove',
    method: 'post',
    data
  })
}

export function saveProductDetail(data) {
  return request({
    url: '/product/post',
    method: 'post',
    data
  })
}

export function editProductDetail(data) {
  return request({
    url: '/product/put',
    method: 'post',
    data
  })
}


//人员
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
