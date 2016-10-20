<template lang="html">
  <div>

        <div v-for="(show, key) in data">
          <div class="card extend">
            <div class="card-image">
              <figure class="image is-4by3">
                <img :src="show.img" alt="">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-32x32">
                    <img :src="show.img" alt="Image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-5">{{show.title}}</p>
                  <p class="subtitle is-6">@ Vue.js Question</p>
                </div>
              </div>

              <div class="content">
                  <i class="fa fa-github"></i> Github <a href="#">{{show.link}}</a> <br> tag
                  <a href="#"> #{{show.tag[0].tagTitle}}</a>
                  <a href="#"> #{{show.tag[1].tagTitle}}</a>
                  <br>
                <small>{{show.time}}</small>
              </div>
            </div>
            </div>
            <br>
        </div>
</div>
</template>

<script>
export default {
  name: 'listMain',
  data () {
    return {}
  },
  computed: {},
  mounted () {
  },
  methods: {},
  components: {},
  props: ['data']
}
</script>

<style lang="css">
.extend {
  width: 100%
}
</style>
