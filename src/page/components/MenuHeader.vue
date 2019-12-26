<template>
  <div class="menuWrap">
    <div v-if="menuStatus === 'close'" class="ani menuHeader" swiper-animate-effect="bounceOutUp" swiper-animate-duration="1s" swiper-animate-delay="0.1s">
      <div class="menuLogo" @click="handelOpenMenu">menu</div>
      <div>标题logo</div>
    </div>
    <div class="menuContent" v-if="menuStatus === 'open'">
      <div @click="handelCloseMenu">关闭</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuStatus: 'close'
    }
  },
  mounted() {
  },
  methods: {
    handelOpenMenu() {
      this.menuStatus = 'open'
    },
    handelCloseMenu() {
      this.menuStatus = 'close'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
.menuWrap{
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  .menuHeader{
    width: 100%;
    padding: 30px;
    position: relative;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    .menuLogo{
      position: absolute;
      top: 0;
      left: 0;
      padding: 30px;
    }
  }
  .menuContent{
    height: 100vh;
    background: #000000;
    color: #FFFFFF;
  }
}
</style>
