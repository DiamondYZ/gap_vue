import {
  getCompanyList,
  getCompanyDetail,
  deleteCompanyDetail,
  saveCompanyDetail,
  editCompanyDetail,
  // 部门
  getDepartmentList,
  getDepartmentDetail,
  deleteDepartmentDetail,
  saveDepartmentDetail,
  editDepartmentDetail,

	// 人员
  getStaffList,
  getStaffDetail,
  deleteStaffDetail,
  saveStaffDetail,
  editStaffDetail
} from '@/api/company'

const state = {
  name: '',
  avatar: '',
  introduction: '',
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  // user login
  getCompanyList({ commit }, param) {
    return new Promise((resolve, reject) => {
      getCompanyList(param).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getCompanyDetail({ commit }, param) {
    return new Promise((resolve, reject) => {
      getCompanyDetail(param).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  deleteCompanyDetail({ commit }, param) {
    return new Promise((resolve, reject) => {
      deleteCompanyDetail(param).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  saveCompanyDetail({ commit }, param) {
    return new Promise((resolve, reject) => {
      saveCompanyDetail(param).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  editCompanyDetail({ commit }, param) {
    return new Promise((resolve, reject) => {
      editCompanyDetail(param).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  //部门
  getDepartmentList({ commit }, param) {
    return new Promise((resolve, reject) => {
      getDepartmentList(param).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getDepartmentDetail({ commit }, param) {
    return new Promise((resolve, reject) => {
      getDepartmentDetail(param).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  deleteDepartmentDetail({ commit }, param) {
    return new Promise((resolve, reject) => {
      deleteDepartmentDetail(param).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  saveDepartmentDetail({ commit }, param) {
    return new Promise((resolve, reject) => {
      saveDepartmentDetail(param).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  editDepartmentDetail({ commit }, param) {
    return new Promise((resolve, reject) => {
      editDepartmentDetail(param).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // 人员
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
