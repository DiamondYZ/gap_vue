<template>
  <a-form-item :label="label" v-bind="formItemLayout">
    <a-input
      v-decorator="[`${fieldName}`, {initialValue: currentValue}]"
      :placeholder="placeHolder"
      @input="onInputEvent"
      @change="handleChange"
    />
  </a-form-item>
</template>

<script>
    export default {
        name: 'input-number',
        // props: ['name', 'label', 'value', 'options', 'fieldName', 'placeHolder'],
        props: {
            value: [String, Number],
            min: Number,
            max: Number,
            floatLength: {
                type: Number,
                default: 2
            }
        },
        data() {
            return {
                currentValue: this.value,
                formItemLayout: {
                    labelCol: {
                        xs: {span: 24},
                        sm: {span: 8}
                    },
                    wrapperCol: {
                        xs: {span: 24},
                        sm: {span: 12}
                    }
                }
            }
        },
        methods: {
            handleChange(event) {
                let val = event.target.value
                //清除数字和"."以外的字符
                val = val.replace(/[^d.]/g, '')
                //验证第一个字符是数字而不是点
                val = val.replace(/^\./g, '')
                //验证最后一个字符是数字而不是点
                val = val.replace(/\.*$/g, '')
                //只保留第一个"." 清除多余的
                val = val.replace(/\.{2,}/g, '.')
                val = val.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.')
                //根据输入小数长度生成正则
                let str = new RegExp('^(-)*(\\d+)\\.(\\d{1, + this.floatLength + \'}).*$')
                val = val.replace(str, '$1$2.$3')
                val = parseFloat(val)
                if (isNaN(val)) {
                    val = this.min ? this.min : 0
                } else {
                    if (this.min !== undefined) val = val > this.min ? val : this.min
                    if (this.max !== undefined) val = val < this.max ? val : this.max
                }
                this.val = val
                this.$emit('input',val)
                this.$emit('change',val)
            },
            onInputEvent(v) {
                this.$emit('tel', this.name, v.target.value)
            }
        },
        watch: {
            value(val) {
                this.currentValue = val
            }
        }
    }
</script>
