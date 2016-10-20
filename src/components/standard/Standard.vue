<template lang="html">
  <div>
    <div class="columns">
      <div class="column"></div>
      <div class="column" style="padding: 2%;"><list-main :data="data"></list-main></div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
import listMain from './listMain/listMain'
export default {
  name: 'standard',
  data () {
    return {
      data: []
    }
  },
  computed: {},
  mounted () {
    this.data = require('../../itemData/data.js')
    console.log(this.data)
  },
  methods: {},
  components: {
    listMain
  }
}
</script>

<style lang="css">
</style>
