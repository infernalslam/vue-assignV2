<template lang="html">
  <div>

    <div class="navbar-item">
      <p class="control has-addons">
        <input class="input" type="text" placeholder="Search" size="80" v-model="searchText" debounce="700">
        <button class="button">
          Search
        </button>
      </p>
    </div>
    <hr>

    <div v-for="(show, key) in cdnjs">
      {{show.name}}<br>
      {{show.latest}}
      <button class="button" @click="addCode(show.latest)">copy</button>
      <hr>
    </div>


  </div>
  </div>
</template>

<script>
// var results = require('./../../itemData/cdnjs.js')

export default {
  name: 'search',
  data () {
    return {
      searchText: ''
    }
  },
  computed: {},
  mounted () {
  },
  methods: {},
  components: {},
  props: ['cdnjs', 'addCode']
}
</script>

<style lang="css">
</style>
