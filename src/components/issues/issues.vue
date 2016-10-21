<template lang="html">
  <div>
    <div class="container">
  <h1>Vuejs Issues</h1>
  <div class="columnmd" id="column-two">
            <h1 class="title">Document title</h1>
            <hr>
            <p>Lorem eos quia corporis corrupti aperiam! Sequi quos molestias non incidunt quos? Fugit autem modi aliquid possimus nostrum repudiandae eaque. Quos illo modi sed quas a ea, itaque, repellat aspernatur!</p>
            <p>Lorem quis sint ut dignissimos dolorem. Ad quos asperiores expedita corporis praesentium minima libero nesciunt praesentium inventore amet! Neque temporibus assumenda facilis dolores impedit inventore exercitationem optio. Odio porro inventore.</p>
            <p>Amet corporis iste provident nam id adipisci. Animi consequatur illum sit dolorem tenetur. Est commodi mollitia dignissimos facere eaque minus laudantium. Suscipit voluptatibus sequi soluta temporibus unde, officiis soluta soluta.</p>
            <hr>
        </div>
 </div>
  </div>
</template>

<script>
window.onload = function () {
    var myEditor = new MediumEditor(".columnmd", {
        toolbar: {
        buttons: [
            "bold"
          , "italic"
          , "underline"
          , "anchor"
          , "header1"
          , "header2"
          , "quote"
          , "customHtml"
        ],
      sticky: true,
      static: true,
      align: 'center',
      updateOnEmptySelection: true
        }, extensions: {
            "customHtml": new CustomHtml({
                buttonText: "<Input>"
              , htmlToInsert: "<input type='text'/>"
            })
        }
    })
}

        var editorColTwo = new MediumEditor('.coldumn', {
                toolbar: {
                    buttons: ['bold', 'italic', 'underline', 'strikethrough', 'quote', 'anchor', 'image', 'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'superscript', 'subscript', 'orderedlist', 'unorderedlist', 'pre', 'outdent', 'indent', 'h2', 'h3'],
                    sticky: true,
                    static: true,
                    align: 'center',
                    updateOnEmptySelection: true
                },
                buttonLabels: 'fontawesome'
            })
export default {
  name: 'issues',
  data () {
    return {}
  },
  computed: {},
  mounted () {
    var myEditor = new MediumEditor(".columnmd", {
        toolbar: {
        buttons: [
            "bold"
          , "italic"
          , "underline"
          , "anchor"
          , "header1"
          , "header2"
          , "quote"
          , "customHtml"
        ],
      sticky: true,
      static: true,
      align: 'center',
      updateOnEmptySelection: true
        }, extensions: {
            "customHtml": new CustomHtml({
                buttonText: "<Input>"
              , htmlToInsert: "<input type='text'/>"
            })
        }
    })
  },
  methods: {},
  components: {}
}
</script>

<style lang="css">
</style>
