<template>
<div class="index_wrap">字体大小</div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  mounted() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
@media screen and (min-width: 480px) {
  * {font-size: 12px;}
  .index_wrap{
    width: 100%;
    height: 100vh;
    background: #ccc;
    color:red;
  }
}
@media screen and (max-width: 480px) {
  * {font-size: 12px;}
  .index_wrap{
    width: 100%;
    height: 100vh;
    background: green;
    color:red;
  }
}
</style>
