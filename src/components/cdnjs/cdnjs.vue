<template lang="html">
  <div>

    <div class="columns">
      <div class="column"></div>
      <div class="column" style="padding: 2%;">
        <search
        :cdnjs="cdnjs"
        :addCode="addCode"
        ></search></div>
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
      cdnjs: [],
      strCode: ''
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
    addCode (cdnjs) {
      console.log(cdnjs.split('.'))
      var str = cdnjs.split('.')
      if (str[str.length-1] === 'css') {
        this.strCode = '<link rel=\"stylesheet" href=\"'+  cdnjs  +'\">'
      } else if (str[str.length-1] === 'js') {
        // this.strCode = '<script type=\"text/javascript\"src=\"'+ cdnjs +'\"><script>'
        this.strCode = `<script type=\"text/javascript\"src=\"${cdnjs}\"><script>`
        // this.copy(this.strCode)
      }
    },
    copy (text) {
      text.execCommand("Copy")
      console.log(text)
    }
  },
  components: {
    Search
  }
}
</script>

<style lang="css">
</style>
