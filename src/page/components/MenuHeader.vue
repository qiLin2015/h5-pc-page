<template>
  <div class="menuWrap">
    <div v-if="menuStatus === 'close'" class="menuHeader">
      <div class="menuLogo" @click="handelOpenMenu">menu</div>
      <div>标题logo</div>
    </div>

    <div :class="menuStatus === 'open' ? 'menuContent' : 'noMenuContent'">
      <transition v-if="menuStatus === 'open'" name="fade-menu-content" :appear="true">
        <div class="contentWrap">
          <div class="menuHeader">
            <div class="menuLogo" @click="handelCloseMenu">close</div>
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
    background: rgba(153, 153, 153, .8);
    color: #FFFFFF;
    .contentWrap{
      background: #000000;
      height: 100vh;
      display: flex;
      flex-direction: column;
      .swiperWrap{
        flex:1;
      }
    }
  }
  .noMenuContent{
    width: 100%;
    animation: closeMenu 0.8s;
  }
}
/*--通用--*/
.fade-menu-content-leave-active,
.fade-menu-content-enter-active {
  transition: all 1s;
}
.fade-menu-content-enter {
  transform: translateY(-1200px);
}
.fade-menu-content-leave-to {
  transform: translateY(-1200px);
}

@keyframes closeMenu
{
  from {height: 100vh; background: rgba(255, 255, 255, 0.5);}
  to {disaply: none; height: 0vh;}
}
</style>
