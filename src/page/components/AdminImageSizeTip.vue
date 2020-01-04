<template>
  <div class="imageText">
    <div>图片规格,宽:<span class="red">{{width}}</span>, 高:<span class="red">{{height}}</span></div>
    <div>支持等比例缩放;</div>
  </div>
</template>

<script>
export default {
 props: {
   width: {
     type: String,
     default: ''
   },
   height: {
     type: String,
     default: ''
   },
 },
   data () {
    return {

    }
  },
  mounted() {
  },
  methods: {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
.imageText{
  width: 100%;
  color: #999999;
  padding: 5px 0;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .red{
    color: red;
  }
}
</style>
