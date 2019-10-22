import {
	//产品类型
  getProductTypeList,
  getProductTypeDetail,
  deleteProductTypeDetail,
  saveProductTypeDetail,
  editProductTypeDetail,
  //产品
  getProductList,
  getProductDetail,
  deleteProductDetail,
  saveProductDetail,
  editProductDetail,
  
	//人员
  getStaffList,
  getStaffDetail,
  deleteStaffDetail,
  saveStaffDetail,
  editStaffDetail
} from '@/api/resources'

const state = {
  name: '',
  avatar: '',
  introduction: '',
  roles: []
}

const mutations = {
  
}

const actions = {
  // user login
  getProductTypeList({ commit }, param) {
    return new Promise((resolve, reject) => {
      getProductTypeList(param).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getProductTypeDetail({ commit }, param) {
    return new Promise((resolve, reject) => {
      getProductTypeDetail(param).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  deleteProductTypeDetail({ commit }, param) {
    return new Promise((resolve, reject) => {
      deleteProductTypeDetail(param).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  saveProductTypeDetail({ commit }, param) {
    return new Promise((resolve, reject) => {
      saveProductTypeDetail(param).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  editProductTypeDetail({ commit }, param) {
    return new Promise((resolve, reject) => {
      editProductTypeDetail(param).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  //产品
  getProductList({ commit }, param) {
    return new Promise((resolve, reject) => {
      getProductList(param).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getProductDetail({ commit }, param) {
    return new Promise((resolve, reject) => {
      getProductDetail(param).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  deleteProductDetail({ commit }, param) {
    return new Promise((resolve, reject) => {
      deleteProductDetail(param).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  saveProductDetail({ commit }, param) {
    return new Promise((resolve, reject) => {
      saveProductDetail(param).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  editProductDetail({ commit }, param) {
    return new Promise((resolve, reject) => {
      editProductDetail(param).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  
  //人员
  getStaffList({ commit }, param) {
    return new Promise((resolve, reject) => {
      getStaffList(param).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getStaffDetail({ commit }, param) {
    return new Promise((resolve, reject) => {
      getStaffDetail(param).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  deleteStaffDetail({ commit }, param) {
    return new Promise((resolve, reject) => {
      deleteStaffDetail(param).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  saveStaffDetail({ commit }, param) {
    return new Promise((resolve, reject) => {
      saveStaffDetail(param).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  editStaffDetail({ commit }, param) {
    return new Promise((resolve, reject) => {
      editDepartmentDetail(param).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
