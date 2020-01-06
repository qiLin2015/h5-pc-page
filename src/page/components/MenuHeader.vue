<template>
  <div class="menuWrap">
    <div v-if="menuStatus === 'close'" class="menuHeader">
      <div class="menuLogoText" @click="handelOpenMenu" >
        <div class="leftLine">
          <div :class="colorType === 'white' ? 'topLine line' : 'topLine line whiteLine'"></div>
          <div :class="colorType === 'white' ? 'bottomLine line' : 'bottomLine line whiteLine'"></div>
        </div>
        <span class="mobileHidden">MENU</span>
      </div>
      <div v-if="colorType === 'white'" class="logoWrap"><img class="logo" src="@/img/logoBgWhite.png" alt=""></div>
      <div v-if="colorType === 'black'" class="logoWrap"><img class="logo" src="@/img/logoBgBlack.png" alt=""></div>
    </div>

    <div :class="menuStatus === 'open' ? 'menuContent' : 'noMenuContent'">
      <transition v-if="menuStatus === 'open'" name="fade-menu-content" :appear="true">
        <div class="contentWrap">
          <div class="menuHeader">
            <div class="menuLogoText" @click="handelCloseMenu">
              <div class="leftLine">
                <img class="leftClose" src="@/img/close.png" alt="">
              </div>
            <span class="mobileHidden">MENU</span>
            </div>
            <div class="logoWrap"><img class="logo" src="@/img/logoBgBlack.png" alt=""></div>
          </div>
          <menu-content @closeMenu="handelCloseMenu"></menu-content>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import MenuContent from './MenuContent'

export default {
  props: {
    colorType: {
      type: String,
      default: 'white'
    }
  },
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
  z-index: 100;
  .menuHeader{
    height: 80px;
    display: flex;
    justify-content: center;
    position: relative;
    .logoWrap{
      display: flex;
      align-items: center;
      .logo{
        width: 80px;
        height: 20px;
      }
    }
  }
  .menuLogoText{
    position: absolute;
    left: 40px;
    top: 0;
    height: 80px;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    cursor: pointer;
    transition: all 1s linear;
    .leftLine{
      height: 14px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 0 10px;
      width: 30px;
      .line {
        height: 2px;
        border-radius: 5px;
        background: #000000;
        opacity: 0.8;
        &.whiteLine{
          background: #FFFFFF;
        }
      }
      .topLine {
        width: 24px;
        transition: all 0.8s;
      }
      .bottomLine{
        transition: all 0.8s;
        width: 14px;
      }
      .leftClose{
        width: 10px;
        height: 10px;
      }
    }
    &:hover{
      .leftLine{
        .topLine{
          width: 14px;
          animation: widthLineTop 0.8s;
        }
        .bottomLine{
          animation: widthLineBottom 0.8s;
          width: 24px;
        }
      }
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
      position: relative;
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

@keyframes widthLineTop{
  from { width: 24px }
  to{ width: 14px }
}

@keyframes widthLineBottom{
  from { width: 14px }
  to{ width: 24px }
}

@media screen and (min-width: 480px) {

}
@media screen and (max-width: 480px) {
  .menuHeader{
    .mobileHidden{
      display: none;
    }
    .menuLogoText{
      left: 0;
    }
  }
}
</style>
