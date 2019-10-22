import CInput from './c-input.vue'
import { setArrayMapVal } from '@/utils/validate'

export const formConfigs = [
  {
    type: 'input',
    formItemProp: {
      label: '活动名称',
      prop: 'activeName'
    },
    elementProp: {
      size: 'medium'
    }
  },
  {
    type: 'select',
    formItemProp: {
      label: '活动区域',
      prop: 'activeArea'
    },
    optionList: [{
      label: '区域一',
      value: '1'
    },
    {
      label: '区域二',
      value: '2'
    }
    ]
  },
  // {
  //   type: 'select',
  //   formItemProp: {
  //     label: '活动区域',
  //     prop: 'activeArea'
  //   },
  //   optionList: JSON.parse(localStorage.getItem("select")).select
  // },
  {
    type: 'datePicker',
    formItemProp: {
      label: '活动名称',
      prop: 'activeTime'
    },
    elementProp: {
      type: 'date',
      placeholder: '选择日期'
    }
  },
  {
    type: 'switch',
    formItemProp: {
      label: '及时配送',
      prop: 'instantDelivery'
    },
    elementProp: {}
  },
  // {
  // type: 'checkboxGroup',
  // formItemProp: {
  // label: '活动性质',
  // prop: 'activeType',
  // },
  // elementProp: {},
  // optionList: [
  // {
  // label: '美食/餐厅线上活动',
  // },
  // ],
  // },
  {
    type: 'radioGroup',
    formItemProp: {
      label: '特殊资源',
      prop: 'resource'
    },
    elementProp: {},
    optionList: [{
      label: '线上品牌商赞助'
    },
    {
      label: '线下场地免费'
    }
    ]
  },
  {
    type: 'input',
    formItemProp: {
      label: '活动形式',
      prop: 'desc'
    },
    elementProp: {
      type: 'textarea'
    }
  },
  {
    type: 'extend',
    formItemProp: {
      label: '账号',
      prop: 'account'
    },
    elementProp: {
      component: CInput,
      propsHandle: () => {
        return {
          ggg: 123
        }
      },
      listeners: {
        kk: data => {
          console.log(data)
        }
      }
    }
  }
]

// 客户
export const consumerFormConfigs = [
  { type: 'input', formItemProp: { label: '编号', prop: 'number' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '名称', prop: 'name' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '描述', prop: 'description' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '状态', prop: 'statusDict' }, elementProp: { size: 'medium' }},
  {
    type: 'input',
    formItemProp: {
      label: '联系人名称',
      prop: 'contactName'
    },
    elementProp: {
      size: 'medium'
    }
  },
  {
    type: 'input',
    formItemProp: {
      label: '联系人电话',
      prop: 'contactPhone'
    },
    elementProp: {
      size: 'medium'
    }
  },
  {
    type: 'datePicker',
    formItemProp: {
      label: '注册日期',
      prop: 'registrationDate'
    },
    elementProp: {
      size: 'medium'
    }
  },
  {
    type: 'input',
    formItemProp: {
      label: '邮箱',
      prop: 'email'
    },
    elementProp: {
      size: 'medium'
    }
  },
  {
    type: 'input',
    formItemProp: {
      label: '经营范围',
      prop: 'businessScope'
    },
    elementProp: {
      size: 'medium'
    }
  },
  {
    type: 'input',
    formItemProp: {
      label: '营业执照/身份证号',
      prop: 'licenseNumber'
    },
    elementProp: {
      size: 'medium'
    }
  },
  {
    type: 'input',
    formItemProp: {
      label: '法定代表人',
      prop: 'legalRepresentative'
    },
    elementProp: {
      size: 'medium'
    }
  },
  {
    type: 'input',
    formItemProp: {
      label: '员工人数',
      prop: 'staffsNumber'
    },
    elementProp: {
      size: 'medium'
    }
  },
  {
    type: 'input',
    formItemProp: {
      label: '注册资金',
      prop: 'registeredCapital'
    },
    elementProp: {
      size: 'medium'
    }
  },
  {
    type: 'datePicker',
    formItemProp: {
      label: '成立日期',
      prop: 'foundDate'
    },
    elementProp: {
      size: 'medium'
    }
  },
  {
    type: 'input',
    formItemProp: {
      label: '企业地址',
      prop: 'address'
    },
    elementProp: {
      size: 'medium'
    }
  },
  {
    type: 'input',
    formItemProp: {
      label: '企业类型dict',
      prop: 'companyTypeDict'
    },
    elementProp: {
      size: 'medium'
    }
  },
  {
    type: 'input',
    formItemProp: {
      label: '备注',
      prop: 'remark'
    },
    elementProp: {
      size: 'medium'
    }
  }
]
// 销售订单
export const saleOrderFormConfigs = [
  { type: 'input', formItemProp: { label: '订单编号', prop: 'number' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '订单描述', prop: 'description' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '状态', prop: 'statusDict' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '客户', prop: 'consumerId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '销售方', prop: 'supplierId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '负责人', prop: 'supplierName' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '总金额', prop: 'sumMoney' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '税金', prop: 'taxMoney' }, elementProp: { size: 'medium' }},
  { type: 'datePicker', formItemProp: { label: '签订日期', prop: 'signingDate' }, elementProp: { size: 'medium' }},
  { type: 'datePicker', formItemProp: { label: '实际交货日期', prop: 'realDeliveryDate' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '联系人', prop: 'linkPerson' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '联系电话', prop: 'linkPhone' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '联系地址', prop: 'linkAddress' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '收货地址', prop: 'receiverAddress' }, elementProp: { size: 'medium' }}
]
// 供应商
export const supplierFormConfigs = -[
  { type: 'input', formItemProp: { label: '编号', prop: 'number' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '名称', prop: 'name' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '描述', prop: 'description' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '状态', prop: 'statusDict' }, elementProp: { size: 'medium' }},
  {
    type: 'input',
    formItemProp: {
      label: '联系人名称',
      prop: 'contactName'
    },
    elementProp: {
      size: 'medium'
    }
  },
  {
    type: 'input',
    formItemProp: {
      label: '联系人电话',
      prop: 'contactPhone'
    },
    elementProp: {
      size: 'medium'
    }
  },
  { type: 'datePicker', formItemProp: { label: '注册日期', prop: 'registrationDate' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '邮箱', prop: 'email' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '经营范围', prop: 'businessScope' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '营业执照', prop: 'licenseNumber' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '法定代表人', prop: 'legalRepresentative' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '员工人数', prop: 'staffsNumber' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '注册资金', prop: 'registeredCapital' }, elementProp: { size: 'medium' }},
  { type: 'datePicker', formItemProp: { label: '成立日期', prop: 'foundDate' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '企业地址', prop: 'address' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '企业类型', prop: 'companyTypeDict' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '备注', prop: 'remark' }, elementProp: { size: 'medium' }}
]
// 采购订单
export const purchaseOrderFormConfigs = [
  { type: 'input', formItemProp: { label: '编号', prop: 'number' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '描述', prop: 'description' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '状态', prop: 'statusDict' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '供应商', prop: 'supplierId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '采购员', prop: 'operatorId' }, elementProp: { size: 'medium' }}
]
// 生产计划
export const productionPlanFormConfigs = [
  { type: 'input', formItemProp: { label: '编号', prop: 'number' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '描述', prop: 'description' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '状态', prop: 'statusDict' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '生产基地', prop: 'productionBaseId' }, elementProp: { size: 'medium' }},
  { type: 'datePicker', formItemProp: { label: '开始时间', prop: 'beginTime' }, elementProp: { size: 'medium' }},
  { type: 'datePicker', formItemProp: { label: '结束时间', prop: 'endTime' }, elementProp: { size: 'medium' }}
]
// 生产订单
export const productionOrderFormConfigs = [
  { type: 'input', formItemProp: { label: '编号', prop: 'number' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '描述', prop: 'description' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '状态', prop: 'statusDict' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '生产基地', prop: 'productionBaseId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '产品', prop: 'productId' }, elementProp: { size: 'medium' }}
]
// 工单
export const workOrderFormConfigs = [
  { type: 'input', formItemProp: { label: '编号', prop: 'number' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '描述', prop: 'description' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '状态', prop: 'statusDict' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '产品', prop: 'productionId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '数量', prop: 'quantity' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '单位', prop: 'unitDict' }, elementProp: { size: 'medium' }},
  { type: 'datePicker', formItemProp: { label: '计划开始时间', prop: 'planBeginTime' }, elementProp: { size: 'medium' }},
  { type: 'datePicker', formItemProp: { label: '计划结束时间', prop: 'planEndTime' }, elementProp: { size: 'medium' }},
  { type: 'datePicker', formItemProp: { label: '实际开始时间', prop: 'beginTime' }, elementProp: { size: 'medium' }},
  { type: 'datePicker', formItemProp: { label: '实际结束时间', prop: 'endTime' }, elementProp: { size: 'medium' }}
]
// 任务类型
export const taskTypeFormConfigs = [
  { type: 'input', formItemProp: { label: '编号', prop: 'number' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '名称', prop: 'name' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '描述', prop: 'description' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '备注', prop: 'remark' }, elementProp: { size: 'medium' }}
]
// 任务
export const taskFormConfigs = [
  { type: 'input', formItemProp: { label: '工单', prop: 'workOrderId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '任务编号', prop: 'number' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '任务描述', prop: 'description' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '任务', prop: 'taskTypeId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '状态', prop: 'statusDict' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '产品', prop: 'productId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '物料', prop: 'materialId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '数量', prop: 'quantity' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '单位', prop: 'unitDict' }, elementProp: { size: 'medium' }},
  { type: 'datePicker', formItemProp: { label: '任务生成时间', prop: 'generateTime' }, elementProp: { size: 'medium' }},
  { type: 'datePicker', formItemProp: { label: '发布时间', prop: 'issuedTime' }, elementProp: { size: 'medium' }},
  { type: 'datePicker', formItemProp: { label: '完成时间', prop: 'completeTime' }, elementProp: { size: 'medium' }},
  { type: 'datePicker', formItemProp: { label: '计划开始时间', prop: 'planBeginTime' }, elementProp: { size: 'medium' }},
  { type: 'datePicker', formItemProp: { label: '计划结束时间', prop: 'planEndTime' }, elementProp: { size: 'medium' }},
  { type: 'datePicker', formItemProp: { label: '实际开始时间', prop: 'beginTime' }, elementProp: { size: 'medium' }},
  { type: 'datePicker', formItemProp: { label: '实际结束时间', prop: 'endTime' }, elementProp: { size: 'medium' }}
]
// 公司
export const companyFormConfigs = [
  { type: 'input', formItemProp: { label: '公司名称', prop: 'name' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '默认账号', prop: 'account' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '企业地址', prop: 'address' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '经营范围', prop: 'businessScope' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '公司代码', prop: 'code' }, elementProp: { size: 'medium' }},
  {
    type: 'select',
    formItemProp: { label: '企业类型', prop: 'companyTypeDict' },
    optionList: setArrayMapVal(JSON.parse(localStorage.getItem('ENTERPRISE_TYPE_DICT')))
  },
  { type: 'input', formItemProp: { label: '联系人名称', prop: 'contactName' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '联系人电话', prop: 'contactPhone' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '描述', prop: 'description' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '邮箱', prop: 'email' }, elementProp: { size: 'medium' }},
  { type: 'datePicker', formItemProp: { label: '成立日期', prop: 'foundDate' }, elementProp: { size: 'medium' }},
  // { type: 'input', formItemProp: { label: '主键ID', prop: 'id' }, elementProp: { size: 'medium' }},
  {
    type: 'input',
    formItemProp: { label: '法定代表人', prop: 'legalRepresentative' },
    elementProp: { size: 'medium' }
  },
  {
    type: 'input',
    formItemProp: { label: '营业执照', prop: 'licenseNumber' },
    elementProp: { size: 'medium' }
  },
  {
    type: 'select',
    formItemProp: { label: '状态', prop: 'statusDict' },
    optionList: setArrayMapVal(JSON.parse(localStorage.getItem('ENTERPRISE_STATUS_DICT')))
  },
  { type: 'input', formItemProp: { label: '员工人数', prop: 'staffsNumber' }, elementProp: { size: 'medium' }},
  // { type: 'input', formItemProp: { label: '状态', prop: 'statusDict' }, elementProp: { size: 'medium' }},
  // { type: 'input', formItemProp: { label: '节点Id', prop: 'nodeId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '公司简介', prop: 'overview' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '图片url', prop: 'picPath' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '注册资金', prop: 'registeredCapital' }, elementProp: { size: 'medium' }},
  { type: 'datePicker', formItemProp: { label: '注册日期', prop: 'registrationDate' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '备注', prop: 'remark' }, elementProp: { size: 'medium' }}
]

// 部门
export const departmentFormConfigs = [
  { type: 'input', formItemProp: { label: '编号', prop: 'number' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '名称', prop: 'name' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '描述', prop: 'description' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '负责人', prop: 'managerName' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '编制人数', prop: 'staffsNumber' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '备注', prop: 'remark' }, elementProp: { size: 'medium' }}
]
// 人员
export const staffFormConfigs = [
  { type: 'input', formItemProp: { label: '编号', prop: 'number' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '名称', prop: 'name' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '描述', prop: 'description' }, elementProp: { size: 'medium' }},
  { type: 'dialog', formItemProp: { label: '部门', prop: 'departmentName', id: 'department' }, elementProp: { size: 'medium' }},
  {
    type: 'select',
    formItemProp: { label: '性别', prop: 'sexDict' },
    optionList: setArrayMapVal(JSON.parse(localStorage.getItem('SEX')))
  },
  { type: 'datePicker', formItemProp: { label: '生日', prop: 'birthday' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '手机号', prop: 'mobile' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '微信号', prop: 'wechatNumber' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '邮箱', prop: 'email' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '职位', prop: 'position' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '地址', prop: 'address' }, elementProp: { size: 'medium' }},
  {
    type: 'select',
    formItemProp: { label: '证件类型', prop: 'identityTypeDict' },
    optionList: setArrayMapVal(JSON.parse(localStorage.getItem('CERTIFICATE_TYPE')))
  },
  { type: 'input', formItemProp: { label: '证件编号', prop: 'identityNumber' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '识别码', prop: 'code' }, elementProp: { size: 'medium' }},
  { type: 'datePicker', formItemProp: { label: '入职日期', prop: 'entryDate' }, elementProp: { size: 'medium' }},
  {
    type: 'select',
    formItemProp: { label: '状态', prop: 'statusDict' },
    optionList: setArrayMapVal(JSON.parse(localStorage.getItem('EMPLOYEE_STATUS')))
  },
  { type: 'input', formItemProp: { label: '备注', prop: 'remark' }, elementProp: { size: 'medium' }}
]
// 产品类型
export const productTypeFormConfigs = [
  { type: 'input', formItemProp: { label: '编号', prop: 'number' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '名称', prop: 'name' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '描述', prop: 'description' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '备注', prop: 'remark' }, elementProp: { size: 'medium' }}
]
// 产品
export const productFormConfigs = [
  { type: 'input', formItemProp: { label: '描述', prop: 'description' }, elementProp: { size: 'medium' }},
  {
    type: 'select',
    formItemProp: { label: '产品类型', prop: 'productTypeId' },
    optionList: JSON.parse(localStorage.getItem('productTypeSelect'))
  },
  { type: 'input', formItemProp: { label: '是否特殊需求', prop: 'isSpecial' }, elementProp: { size: 'medium' }},
  {
    type: 'input',
    formItemProp: { label: '纬度左区间值', prop: 'latitudeLeftIntervalValue' },
    elementProp: { size: 'medium' }
  },
  {
    type: 'input',
    formItemProp: { label: '纬度右区间值', prop: 'latitudeRightIntervalValue' },
    elementProp: { size: 'medium' }
  },
  {
    type: 'input',
    formItemProp: { label: '经度左区间值', prop: 'longitudeLeftIntervalValue' },
    elementProp: { size: 'medium' }
  },
  {
    type: 'input',
    formItemProp: { label: '经度右区间值', prop: 'longitudeRightIntervalValue' },
    elementProp: { size: 'medium' }
  },
  { type: 'input', formItemProp: { label: '海拔上限', prop: 'maxAltitude' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '温度上限', prop: 'maxTemperature' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '海拔下限', prop: 'minAltitude' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '温度下限', prop: 'minTemperature' }, elementProp: { size: 'medium' }},
  {
    type: 'select',
    formItemProp: { label: '温度单位', prop: 'temperatureUnitDict' },
    optionList: setArrayMapVal(JSON.parse(localStorage.getItem('TEMPERATURE_UNIT')))
  },
  { type: 'input', formItemProp: { label: '产品简介', prop: 'overview' }, elementProp: { size: 'medium' }},
  { type: 'img', formItemProp: { label: '图片', prop: 'picPath' }, elementProp: { size: 'medium' }}

]
// 物料类型
export const materialTypeFormConfigs = [
  { type: 'input', formItemProp: { label: '编号', prop: 'number' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '名称', prop: 'remark' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '描述', prop: 'description' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '备注', prop: 'remark' }, elementProp: { size: 'medium' }}

]
// 物料
export const materialFormConfigs = [
  { type: 'input', formItemProp: { label: '编号', prop: 'number' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '名称', prop: 'name' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '描述', prop: 'description' }, elementProp: { size: 'medium' }},
  {
    type: 'select',
    formItemProp: { label: '物料类型', prop: 'materialTypeId' },
    optionList: JSON.parse(localStorage.getItem('materialTypeSelect'))
  },
  {
    type: 'select',
    formItemProp: { label: '来源', prop: 'sourceDict' },
    optionList: setArrayMapVal(JSON.parse(localStorage.getItem('MATERIAL_SOURCE_DICT')))
  },
  { type: 'input', formItemProp: { label: '是否指定供应商', prop: 'isDesignateSupplier' }, elementProp: { size: 'medium' }},
  {
    type: 'select',
    formItemProp: { label: '供应商', prop: 'supplierId' },
    optionList: JSON.parse(localStorage.getItem('supplierSelect'))
  },
  { type: 'input', formItemProp: { label: '备注', prop: 'remark' }, elementProp: { size: 'medium' }},
  { type: 'img', formItemProp: { label: '图片', prop: 'picPath' }, elementProp: { size: 'medium' }}

]
// 设备类型
export const equipmentTypeFormConfigs = [
  { type: 'input', formItemProp: { label: '编号', prop: 'number' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '名称', prop: 'name' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '描述', prop: 'description' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '是否有效', prop: 'isValid' }, elementProp: { size: 'medium' }},
  {
    type: 'select',
    formItemProp: { label: 'ABC分类', prop: 'abcTypeDict' },
    optionList: setArrayMapVal(JSON.parse(localStorage.getItem('ABC_CLASS')))
  },
  {
    type: 'select',
    formItemProp: { label: '设备使用类型', prop: 'useTypeDict' },
    optionList: setArrayMapVal(JSON.parse(localStorage.getItem('EQUIPMENT_USE_CLASS')))
  },
  {
    type: 'select',
    formItemProp: { label: '设备管理类型', prop: 'manageTypeDict' },
    optionList: setArrayMapVal(JSON.parse(localStorage.getItem('EQUIPMENT_M_TYPE')))
  },
  { type: 'input', formItemProp: { label: '监管标准', prop: 'superviseStandard' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '监管单位', prop: 'superviseDept' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '备注', prop: 'remark' }, elementProp: { size: 'medium' }}

]
// 设备型号
export const equipmentModelFormConfigs = [
  { type: 'input', formItemProp: { label: '编号', prop: 'number' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '名称', prop: 'name' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '描述', prop: 'description' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '图片路径', prop: 'photoPath' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '是否启用', prop: 'isValid' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '备注', prop: 'remark' }, elementProp: { size: 'medium' }},
  { type: 'img', formItemProp: { label: '图片', prop: 'picPath' }, elementProp: { size: 'medium' }}
]
// 设备
export const equipmentFormConfigs = [
  { type: 'input', formItemProp: { label: '编号', prop: 'number' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '数据类型', prop: 'dataType' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '默认设备', prop: 'defaultDataId' }, elementProp: { size: 'medium' }},
  {
    type: 'input',
    formItemProp: { label: '设备来源', prop: 'sourcesDict' },
    elementProp: { size: 'medium' }
  },
  { type: 'input', formItemProp: { label: '设备描述', prop: 'description' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '设备类型', prop: 'equipmentTypeIdname' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '设备型号', prop: 'equipmentModelName' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '制造商', prop: 'manufacturerId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '出厂序列号', prop: 'serialNumber' }, elementProp: { size: 'medium' }},
  { type: 'datePicker', formItemProp: { label: '设备到厂日期', prop: 'arrivalDate' }, elementProp: { size: 'medium' }},
  { type: 'datePicker', formItemProp: { label: '生产日期', prop: 'produceDate' }, elementProp: { size: 'medium' }},
  { type: 'datePicker', formItemProp: { label: '到厂日期', prop: 'arrivalDate' }, elementProp: { size: 'medium' }},
  { type: 'datePicker', formItemProp: { label: '验收日期', prop: 'acceptanceDate' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '图片', prop: 'picPath' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '状态', prop: 'availableStatus' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '位置', prop: 'position' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '工作中心', prop: 'workCenterId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '设备原值', prop: 'originalValue' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '账面金额', prop: 'accountValue' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '预计使用寿命', prop: 'estimatedLife' }, elementProp: { size: 'medium' }},
  {
    type: 'input',
    formItemProp: { label: '预计使用寿命单位', prop: 'estimatedLifeUnitDict' },
    elementProp: { size: 'medium' }
  },
  { type: 'input', formItemProp: { label: '尚可使用寿命', prop: 'lastedLife' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '尚可使用寿命单位', prop: 'lastedLifeUnitDict' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '净残值', prop: 'residualValue' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '折旧方法', prop: 'depreciationMethodDict' }, elementProp: { size: 'medium' }},
  { type: 'datePicker', formItemProp: { label: '折旧开始日期', prop: 'depreciationBeginDate' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '重量', prop: 'weight' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '设备占地面积', prop: 'coveringArea' }, elementProp: { size: 'medium' }},
  {
    type: 'input',
    formItemProp: { label: '占地面积单位', prop: 'coveringAreaUnitDict' },
    elementProp: { size: 'medium' }
  },
  {
    type: 'input',
    formItemProp: { label: '占地面积单位', prop: 'coveringAreaUnitDict' },
    elementProp: { size: 'medium' }
  },
  { type: 'input', formItemProp: { label: '厂家设备型号', prop: 'equipmentTypeCustom' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '品牌code', prop: 'brandCode' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '品牌名称', prop: 'brandName' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '是否联网', prop: 'isNetwork' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '是否授权', prop: 'isImpower' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '是否监控', prop: 'isMonitoring' }, elementProp: { size: 'medium' }},
  { type: 'img', formItemProp: { label: '图片', prop: 'picPath' }, elementProp: { size: 'medium' }}
]
// 机具类型
export const implementTypeFormConfigs = [
  { type: 'input', formItemProp: { label: '编号', prop: 'number' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '名称', prop: 'name' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '描述', prop: 'description' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '备注', prop: 'remark' }, elementProp: { size: 'medium' }}
]
// 机具型号
export const implementModelFormConfigs = [
  { type: 'input', formItemProp: { label: '编号', prop: 'number' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '名称', prop: 'name' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '描述', prop: 'description' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '图片', prop: 'photoPath' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '是否启用', prop: 'isValid' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '备注', prop: 'remark' }, elementProp: { size: 'medium' }}

]
// 机具
export const implementFormConfigs = [
  { type: 'input', formItemProp: { label: '编号', prop: 'number' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '名称', prop: 'name' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '描述', prop: 'description' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '机具类型', prop: 'implementTypeId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '机具型号', prop: 'implementModelId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '所属生产基地', prop: 'productionBaseId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '批次编号', prop: 'batchNumber' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '数量', prop: 'quantity' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '数量单位', prop: 'quantityUnitDict' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '备注', prop: 'remark' }, elementProp: { size: 'medium' }},
  { type: 'img', formItemProp: { label: '图片', prop: 'picPath' }, elementProp: { size: 'medium' }}
]
// 生产基地
export const productionBaseFormConfigs = [
  { type: 'input', formItemProp: { label: '基地编号', prop: 'number' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '基地名称', prop: 'name' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '基地描述', prop: 'description' }, elementProp: { size: 'medium' }},
  { type: 'dialog', formItemProp: { label: '负责人', prop: 'managerName', id: 'staff' }, elementProp: { size: 'medium' }},
  // { type: 'input', formItemProp: { label: '负责人', prop: 'managerId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '省份', prop: 'province' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '城市', prop: 'city' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '区/县', prop: 'district' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '街道(乡镇)', prop: 'street' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '纬度', prop: 'lat' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '经度', prop: 'lng' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '海拔', prop: 'altitude' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '面积', prop: 'area' }, elementProp: { size: 'medium' }},
  {
    type: 'select',
    formItemProp: { label: '面积单位', prop: 'areaUnitDict' },
    optionList: setArrayMapVal(JSON.parse(localStorage.getItem('AREA_UNIT_DICT')))
  },
  // { type: 'input', formItemProp: { label: '面积单位', prop: 'areaUnit' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '简介', prop: 'overview' }, elementProp: { size: 'medium' }}
]
// 生产基地人员
export const productionBaseStaffFormConfigs = [
  { type: 'input', formItemProp: { label: '基地id', prop: 'productionBaseId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '人员id', prop: 'staffId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '状态dict', prop: 'statusDict' }, elementProp: { size: 'medium' }}
]
// 生产单元
export const productionCellFormConfigs = [
  { type: 'input', formItemProp: { label: '编号', prop: 'number' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '描述', prop: 'description' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '状态', prop: 'statusDict' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '生产基地', prop: 'productionBaseId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '负责人', prop: 'managerId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '面积', prop: 'area' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '面积单位', prop: 'areaUnitDict' }, elementProp: { size: 'medium' }}

]
// 库房
export const warehouseFormConfigs = [
  { type: 'input', formItemProp: { label: '编号', prop: 'number' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '描述', prop: 'description' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '状态', prop: 'statusDict' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '位置', prop: 'position' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '类型', prop: 'typeDict' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '存储条件id', prop: 'storeConditionId' }, elementProp: { size: 'medium' }}, // todo 是否下拉
  { type: 'input', formItemProp: { label: '仓库日历id', prop: 'calendarModelId' }, elementProp: { size: 'medium' }}, // todo 是否下拉
  {
    type: 'input',
    formItemProp: { label: '是否必须满足存储条件', prop: 'isMustStoreCondition' },
    elementProp: { size: 'medium' }
  },
  { type: 'input', formItemProp: { label: '是否库位控制', prop: 'isLocationControlled' }, elementProp: { size: 'medium' }},
  {
    type: 'input',
    formItemProp: { label: '是否参与物料需求计划运算', prop: 'isParticipatePlan' },
    elementProp: { size: 'medium' }
  }

]
// 库区
export const warehouseAreaFormConfigs = [
  { type: 'input', formItemProp: { label: '库区编号', prop: 'number' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '库区描述', prop: 'description' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '库区位置', prop: 'position' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '所属仓库', prop: 'warehouseId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '存储条件id', prop: 'storeConditionId' }, elementProp: { size: 'medium' }},
  {
    type: 'input',
    formItemProp: { label: '是否必须满足存储条件', prop: 'isMustStoreCondition' },
    elementProp: { size: 'medium' }
  },
  { type: 'input', formItemProp: { label: '是否库位控制', prop: 'isLocationControlled' }, elementProp: { size: 'medium' }}
]
// 库位
export const warehouseLocationFormConfigs = [
  { type: 'input', formItemProp: { label: '编号', prop: 'number' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '描述', prop: 'description' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '架号', prop: 'rowNumber' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '层号', prop: 'levelNumber' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '位号', prop: 'binNumber' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '所属仓库', prop: 'warehouseId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '所属库区', prop: 'areaId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '物料', prop: 'materialDescription' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '长度', prop: 'length' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '长度单位', prop: 'lengthUnitDict' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '宽度', prop: 'width' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '宽度单位', prop: 'widthUnitDict' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '高度', prop: 'height' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '高度单位', prop: 'heightUnitDict' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '重量', prop: 'weight' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '重量单位', prop: 'weightUnitDict' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '是否为无限容量', prop: 'isInfiniteCapacity' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '是否为专用库位', prop: 'isSpecializeLocation' }, elementProp: { size: 'medium' }},
  {
    type: 'input',
    formItemProp: { label: '库位容积利用率', prop: 'volumeUtilizationRatio' },
    elementProp: { size: 'medium' }
  },

  {
    type: 'input',
    formItemProp: { label: '专用库位对应物料项目号', prop: 'specializeMaterialProjectNumber' },
    elementProp: { size: 'medium' }
  },
  {
    type: 'input',
    formItemProp: { label: '专用库位对应物料编码', prop: 'specializeMaterialNumber' },
    elementProp: { size: 'medium' }
  },
  { type: 'input', formItemProp: { label: '物料容量', prop: 'materialCapacity' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '物料容量单位', prop: 'materialCapacityUnit' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '是否库位控制', prop: 'isLocationControlled' }, elementProp: { size: 'medium' }}
]
// 库存
export const stockFormConfigs = [
  { type: 'input', formItemProp: { label: '数量', prop: 'quantity' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '单位', prop: 'unitDict' }, elementProp: { size: 'medium' }},
  {
    type: 'input',
    formItemProp: { label: '可用数量', prop: 'availableQuantity' },
    elementProp: { size: 'medium' }
  },
  {
    type: 'input',
    formItemProp: { label: '冻结数量 不填默认为0', prop: 'freezeQuantity' },
    elementProp: { size: 'medium' }
  },
  { type: 'input', formItemProp: { label: '仓库id', prop: 'warehouseId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '物料id', prop: 'materialId' }, elementProp: { size: 'medium' }}
]

// 包裝
export const packagingFormConfigs = [
  { type: 'input', formItemProp: { label: '品名', prop: 'brandName' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '规格', prop: 'specification' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '批号', prop: 'lotNumber' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '产地', prop: 'origin' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '包装', prop: 'packing' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '生产单位', prop: 'productionUnit' }, elementProp: { size: 'medium' }},
  { type: 'datePicker', formItemProp: { label: '日期', prop: 'packingTime' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '合格证', prop: 'certificateUrl' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '备注', prop: 'remark' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '任务编号', prop: 'taskId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '生产基地', prop: 'productBaseId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '生产单元', prop: 'productCellId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '责任人', prop: 'managerId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '产品', prop: 'productId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '产品', prop: 'productId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '数量', prop: 'quantity' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '单位', prop: 'unitDict' }, elementProp: { size: 'medium' }},
  { type: 'datePicker', formItemProp: { label: '开始时间', prop: 'beginTime' }, elementProp: { size: 'medium' }},
  { type: 'datePicker', formItemProp: { label: '结束时间', prop: 'endTime' }, elementProp: { size: 'medium' }},
  { type: 'img', formItemProp: { label: '图片', prop: 'picPath' }, elementProp: { size: 'medium' }}

]

// 种植
export const plantFormConfigs = [
  { type: 'input', formItemProp: { label: '任务编号', prop: 'taskId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '生产基地', prop: 'productBaseId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '生产单元', prop: 'productCellId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '责任人', prop: 'managerId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '产品', prop: 'productId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '数量', prop: 'quantity' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '单位', prop: 'unitDict' }, elementProp: { size: 'medium' }},
  { type: 'datePicker', formItemProp: { label: '开始时间', prop: 'beginTime' }, elementProp: { size: 'medium' }},
  { type: 'datePicker', formItemProp: { label: '结束时间', prop: 'endTime' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '备注', prop: 'remark' }, elementProp: { size: 'medium' }},
  { type: 'img', formItemProp: { label: '图片', prop: 'picPath' }, elementProp: { size: 'medium' }}
]

// 加工
export const processingFormConfigs = [
  { type: 'input', formItemProp: { label: '任务编号', prop: 'taskId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '生产基地', prop: 'productBaseId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '生产单元', prop: 'productCellId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '操作人', prop: 'operatorId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '产品', prop: 'productId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '数量', prop: 'quantity' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '单位', prop: 'unitDict' }, elementProp: { size: 'medium' }},
  { type: 'datePicker', formItemProp: { label: '开始时间', prop: 'beginTime' }, elementProp: { size: 'medium' }},
  { type: 'datePicker', formItemProp: { label: '结束时间', prop: 'endTime' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '备注', prop: 'remark' }, elementProp: { size: 'medium' }},
  { type: 'img', formItemProp: { label: '图片', prop: 'picPath' }, elementProp: { size: 'medium' }}
]

// 采收
export const harvestFormConfigs = [
  { type: 'input', formItemProp: { label: '任务编号', prop: 'taskId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '生产基地', prop: 'productBaseId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '生产单元', prop: 'productCellId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '责任人', prop: 'managerId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '产品', prop: 'productId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '数量', prop: 'quantity' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '单位', prop: 'unitDict' }, elementProp: { size: 'medium' }},
  { type: 'datePicker', formItemProp: { label: '开始时间', prop: 'beginTime' }, elementProp: { size: 'medium' }},
  { type: 'datePicker', formItemProp: { label: '结束时间', prop: 'endTime' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '备注', prop: 'remark' }, elementProp: { size: 'medium' }},
  { type: 'img', formItemProp: { label: '图片', prop: 'picPath' }, elementProp: { size: 'medium' }}

]

// 种植SOP
export const plantSopFormConfigs = [
  { type: 'input', formItemProp: { label: '编号', prop: 'number' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '描述', prop: 'description' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '产品', prop: 'productId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '内容', prop: 'content' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '方法', prop: 'method' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '周期', prop: 'period' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '工具', prop: 'tools' }, elementProp: { size: 'medium' }},
  { type: 'img', formItemProp: { label: '图片', prop: 'picPath' }, elementProp: { size: 'medium' }}

]

// 存储SOP
export const storeSopFormConfigs = [
  { type: 'input', formItemProp: { label: '编号', prop: 'number' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '描述', prop: 'description' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '产品', prop: 'productId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '内容', prop: 'content' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '存装', prop: 'store' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '最高温度', prop: 'maximumTemperature' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '最低温度', prop: 'minimumTemperature' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '温度单位', prop: 'temperatureUnitDict' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '最大湿度', prop: 'maximumHumidity' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '最小湿度', prop: 'minimumHumidity' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '湿度单位', prop: 'humidityUnitDict' }, elementProp: { size: 'medium' }},
  { type: 'img', formItemProp: { label: '图片', prop: 'picPath' }, elementProp: { size: 'medium' }}
]

// 加工sop
export const herbalProcessingSopFormConfigs = [
  { type: 'input', formItemProp: { label: '编号', prop: 'number' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '描述', prop: 'description' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '产品', prop: 'productId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '内容', prop: 'content' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '方法', prop: 'method' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '周期', prop: 'period' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '工具', prop: 'tools' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '存装', prop: 'store' }, elementProp: { size: 'medium' }},
  { type: 'img', formItemProp: { label: '图片', prop: 'picPath' }, elementProp: { size: 'medium' }}
]

// 采收sop
export const harvestSopFormConfigs = [
  { type: 'input', formItemProp: { label: '编号', prop: 'number' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '描述', prop: 'description' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '产品', prop: 'productId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '内容', prop: 'content' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '方法', prop: 'method' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '周期', prop: 'period' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '工具', prop: 'tools' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '存装', prop: 'store' }, elementProp: { size: 'medium' }},
  { type: 'img', formItemProp: { label: '图片', prop: 'picPath' }, elementProp: { size: 'medium' }}
]

// 用户组别
export const staffGroupFormConfigs = [
  { type: 'input', formItemProp: { label: '名称', prop: 'name' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '编号', prop: 'number' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '描述', prop: 'description' }, elementProp: { size: 'medium' }}
]

// 用户
export const usersFormConfigs = [
  { type: 'input', formItemProp: { label: '账户', prop: 'account' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '密码', prop: 'password' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '确认密码', prop: 'confirmPassword' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '地址', prop: 'address' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '编号', prop: 'number' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '名称', prop: 'name' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '描述', prop: 'description' }, elementProp: { size: 'medium' }}
]

// 溯源记录
export const tracingFormConfigs = [
  { type: 'input', formItemProp: { label: '生产订单', prop: 'productionOrderId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '任务', prop: 'taskId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '生产基地', prop: 'productBaseId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '生产单元', prop: 'productCellId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '负责人', prop: 'managerId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '产品', prop: 'productId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '数量', prop: 'quantity' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '单位', prop: 'unitDict' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '生产行为', prop: 'actionDict' }, elementProp: { size: 'medium' }},
  { type: 'datePicker', formItemProp: { label: '开始时间', prop: 'beginTime' }, elementProp: { size: 'medium' }},
  { type: 'datePicker', formItemProp: { label: '结束时间', prop: 'endTime' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '记录人', prop: 'recorderId' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '图片', prop: 'picPath' }, elementProp: { size: 'medium' }},
  { type: 'input', formItemProp: { label: '备注', prop: 'remark' }, elementProp: { size: 'medium' }}
]

export const formData = {}
