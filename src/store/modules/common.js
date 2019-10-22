import {
  getList,
  getDetail,
  deleteDetail,
  saveDetail,
  editDetail,
  getPullDownList,
  getSelectList,
  setDataState,
  getQiniuToken,
  selectSecondLevelTableList
} from '@/api/common'

const state = {
  upload_qiniu_addr: 'http://pz90rgn4x.bkt.clouddn.com/',
  selectToGetOptionsProp: '', // 判断点击选择弹出dialog
  selectedValue: '' // 存储选择的ID及name
}

const mutations = {
  getPullDownList(state, param) {
    return new Promise((resolve, reject) => {
      getPullDownList(param).then(response => {
        // resolve(response)
        if (response.data.length > 0) {
          localStorage.setItem(param.classCode, JSON.stringify(response.data))
        }
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 设置下拉属性
  set_options_value(state, prop) {
    state.selectToGetOptionsProp = prop
  },
  // 清空下拉属性
  set_options_empty_value(state) {
    state.selectToGetOptionsProp = ''
  },
  // 清空下拉属性
  setSelectedValue(state, param) {
    state.selectedValue = param
  }
}

const actions = {
  // user login
  getList({ commit }, param) {
    return new Promise((resolve, reject) => {
      getList(param).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getDetail({ commit }, param) {
    return new Promise((resolve, reject) => {
      getDetail(param).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  deleteDetail({ commit }, param) {
    return new Promise((resolve, reject) => {
      deleteDetail(param).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  saveDetail({ commit }, param) {
    return new Promise((resolve, reject) => {
      saveDetail(param).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  editDetail({ commit }, param) {
    return new Promise((resolve, reject) => {
      editDetail(param).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getPullDownList({ commit }, param) {
    commit('getPullDownList', param)
  },

  // 二级表格
  selectSecondLevelTableList({ dispatch, commit }, param) {
    return new Promise((resolve, reject) => {
      selectSecondLevelTableList(param).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // 部门下拉
  getSelectList({ dispatch, commit }, param) {
    return new Promise((resolve, reject) => {
      getSelectList(param.url).then(response => {
        const newArr = []
        let res = {}
        if (response.data instanceof Array) {
          res = response.data
        } else if (response.data.records instanceof Array) {
          res = response.data.records
        }

        res.map((item) => {
          const json = {}
          json['label'] = item.name
          json['value'] = item.id
          newArr.push(json)
        })

        localStorage.setItem(param.storageName, JSON.stringify(newArr))
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 取下拉数据
  getSelectOptionsList({ dispatch, commit }, param) {
    return new Promise((resolve, reject) => {
      getSelectList(param.url).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 该数据状态
  setDataState({ commit }, param) {
    return new Promise((resolve, reject) => {
      setDataState(param).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 该数据状态
  getQiniuToken({ commit }, param) {
    return new Promise((resolve, reject) => {
      getQiniuToken(param).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 该数据状态
  set_options_value({ commit }, prop) {
    console.log(prop)
    commit('set_options_value', prop)
  },
  // 该数据状态
  set_options_empty_value({ commit }) {
    commit('set_options_empty_value')
  },
  // 清空下拉属性
  setSelectedValue({ commit }, param) {
    commit('setSelectedValue', param)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
