<template>
  <Button @click="hello">Hello World</Button>
</template>
<script>
import Button from 'kpc/components/button'
import Message from 'kpc/components/message'

export default {
  name: 'HelloButton',
  components: {
    Button
  },

  methods: {
    hello() {
      Message.success('Welcome to kpc world!')
    }
  }
}
</script>
