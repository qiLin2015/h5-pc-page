<template>
  <div class="menuWrap">
    <div v-if="menuStatus === 'close'" class="menuHeader">
      <div class="menuLogo" @click="handelOpenMenu">menu</div>
      <div>标题logo</div>
    </div>

    <div v-if="menuStatus === 'open'" class="menuContent">
      <transition name="fade-menu-content" mode="out-in" :appear="true">
        <div class="contentWrap">
          <div class="menuHeader">
            <div class="menuLogo">menu</div>
            <div>标题logo</div>
          </div>
          <div class="swiperWrap">
            <menu-content></menu-content>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import MenuContent from './MenuContent'

export default {
  components: {
    MenuContent
  },
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
  z-index: 1000;
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
    width: 100%;
    height: 100vh;
    background: rgba(153, 153, 153, .6);
    color: #FFFFFF;
    .contentWrap{
      background: #000000;
      height: 100vh;
      .swiperWrap{

      }
    }
  }
}
/*--通用--*/
.fade-app-main-leave-active,
.fade-app-main-enter-active {
  transition: all 0.5s;
}
.fade-app-main-enter {
  opacity: 0;
  transform: translateX(-30px);
}
.fade-app-main-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
