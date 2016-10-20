<template>
  <div>
      <nav class="nav">
        <div class="nav-left">
          <a class="nav-item is-brand" href="#">
            <img src="https://1.bp.blogspot.com/-9VbbVQftGig/V43fyud5x2I/AAAAAAAAAD0/8zbribQUI9Y7k_o6gYJJWn4Q3ErBuwyJACEw/w1200-h630-p-nu/logo_vue.pngjpg" alt="Bulma logo">
            Vue.js Question
          </a>
        </div>

    <div class="nav-right nav-menu">
      <span class="nav-item">
        <a class="button is-warning">
          <span class="icon">
            <i class="fa fa-asterisk"></i>
          </span>
          <span><router-link to="/cdnjs">Cdnjs</router-link></span>
        </a>
        <a class="button is-success">
          <span class="icon">
            <i class="fa fa-asterisk"></i>
          </span>
          <span><router-link to="/standard">Vue Standard</router-link></span>
        </a>
        <a class="button is-info">
          <span class="icon">
            <i class="fa fa-asterisk"></i>
          </span>
          <span> <router-link to="/apis">APIs</router-link></span>
        </a>


        <a class="button">
          <span class="icon">
            <i class="fa fa-asterisk"></i>
          </span>
          <span><router-link to="/libraries">libraries</router-link></span>
        </a>


        <a class="button is-danger">
          <span class="icon">
            <i class="fa fa-asterisk"></i>
          </span>
          <span><router-link to="/issues">issues</router-link></span>
        </a>


      </span>
    </div>
  </nav>
  </div>
</template>

<script>
export default {
  name: 'menu',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<style>

</style>
