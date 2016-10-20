<template>
  <div id="app">
    <title-menu></title-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import titleMenu from './components/menu/menu'
export default {
  name: 'app',
  components: {
    titleMenu
  },
  data () {
    return {
      data: []
    }
  },
  methods: {},
  mounted () {
  }
}
</script>

<style>

</style>
