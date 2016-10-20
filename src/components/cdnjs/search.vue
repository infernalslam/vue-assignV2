<template lang="html">
  <div>

    <div class="navbar-item">
      <p class="control has-addons">
        <input class="input" type="text" placeholder="Search" size="80" v-model="searchText">
        <button class="button" @click="search(searchText)">
          Search
        </button>
      </p>
    </div>
    <hr>

    <div v-repeat="cdnjs  | filterBy searchText">
      {{show.name}}<br>
      <hr>
    </div>

  </div>
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      searchText: '',
      data: []
    }
  },
  computed: {},
  mounted () {
  },
  methods: {},
  components: {},
  props: ['cdnjs', 'search']
}
</script>

<style lang="css">
</style>
