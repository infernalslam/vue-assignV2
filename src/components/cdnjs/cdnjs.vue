<template lang="html">
  <div>

    <div class="columns">
      <div class="column"></div>
      <div class="column" style="padding: 2%;"><search :cdnjs="cdnjs" :search="search"></search></div>
      <div class="column"></div>
    </div>

</div>


  </div>
</template>

<script>
import Search from './search'
export default {
  name: 'cdnjs',
  data () {
    return {
      cdnjs: []
    }
  },
  computed: {},
  mounted () {
    let vm = this
    this.$http.get('https://api.cdnjs.com/libraries').then(res => {
      vm.cdnjs = res.body.results
    })
  },
  methods: {
    search (searchText) {
      var filter = this.cdnjs.filter(item => item.name === searchText)
      console.log(filter)
    }
  },
  components: {
    Search
  }
}
</script>

<style lang="css">
</style>
