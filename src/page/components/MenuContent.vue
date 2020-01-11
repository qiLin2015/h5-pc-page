<template>
  <div class="titleWrap">
    <div class="contentWrap">
      <div class="imgWrap" v-if="menusList && menusList.length">
        <img v-for="(item, index) in menusList" :key="index" v-show="mouseEnterTitle === item.title || mouseLeaveTitle === item.title "
          :class="mouseLeaveTitle === item.title ? 'image leave' : 'image'"
          :src="item.imgSrc" alt=""
          @click="handelGoDetail(item.title)">
      </div>

      <div class="titleList">
        <div :class="['title', item.title]" v-for="(item, index) in menusList" :key="index"
          @click="handelGoDetail(item.title)"
          @mouseenter="handelMouseEnter(item.title)"
          @mouseleave="handelMouseLeave(item.title)">
          {{item.title}}
        </div>
      </div>
    </div>

    <div class="menuTitleWrapMobile">
      <div :class="['title', item.title]" v-for="(item, index) in menusList" :key="index" @click="handelGoDetail(item.title)">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mouseEnterTitle: '',
      mouseLeaveTitle: '',
      menusList: [],
    }
  },
  mounted() {
    this.render()
  },
  methods: {
    render() {
      let maudeaInfor = JSON.parse(localStorage.getItem('maudeaInfor')) ;
      if(maudeaInfor && maudeaInfor.menus && maudeaInfor.menus.length) {
        this.menusList = maudeaInfor.menus;
      }else {
        this.menusList = [];
        this.$router.push({name: 'Home'})
      }
    },
    handelGoDetail(name) {
      if(this.$router.history.current.name === name) {
        this.$emit('closeMenu');
      }else {
        this.$router.push({name: name})
      }
    },
    handelMouseEnter(name) {
      this.mouseEnterTitle = name;
      this.mouseLeaveTitle = '';
    },
    handelMouseLeave(name) {
      this.mouseLeaveTitle = name;
      this.mouseEnterTitle = ''
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
.titleWrap{
  display: flex;
  flex: 1;
  width: 100%;
  box-sizing: border-box;
  .contentWrap{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .imgWrap{
      width: 20%;
      .image{
        width: 100%;
        height: auto;
        display: block;
        opacity: 1;
        animation: imgRotateEnter 1s;
        &.leave{
          animation: imgRotateLeaver 1s;
        }
      }
    }
    .titleList{
      position: absolute;
      left: 0;
      top: 50%;
      right: 0;
      height: 60px;
      margin-top: -30px;
      padding: 0 10%;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-around;
      font-size: 40px;
      .title{
        width: 150px;
        text-align: center;
        color: #4e4e4e;
        &:hover{
          cursor: pointer;
          color: #5c5348;
        }
      }
    }
  }

  .menuTitleWrap{
    width: 100%;
    height: 40px;
    position: relative;
    .contentAbsolute{
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      height: 40px;
      display: flex;
      justify-content: space-around;
      z-index: 1000;
      background: transparent;
      color: #EEEEEE;
    }
    .title{
      font-size: 40px;
      width: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover{
        cursor: pointer;
        color: red;
        .itemBg{
          opacity: 1;
          animation: imgRotate 1s;
        }
      }
    }
    .itemBg{
      position: fixed;
      left: 0;
      right: 0;
      top: 85px;
      bottom: 0;
      z-index: -100;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: all 1s linear;
      .image{
        width: 23%;
        height: auto;
        display: block;
      }
    }
  }
}

@keyframes imgRotateEnter{
  0%{
    transform: rotateZ(-45deg) scale(0.3);
    opacity: 0;
  }
  100%{
    transform: rotateZ(0deg) scale(1);
    opacity: 1;
  }
}

@keyframes imgRotateLeaver{
  0%{
    transform: rotateZ(0deg) scale(1);
    opacity: 1;
  }
  100%{
    transform: rotateZ(45deg) scale(0);
    opacity: 0;
  }
}


@media screen and (min-width: 480px) {
  .titleWrap{
    .menuTitleWrapMobile{
      display: none;
    }
    .titleList{
      .title{
        &.Home{
          animation: upDownHome 0.6s;
        }
        &.Projects{
          animation: upDownProject 0.8s;
        }
        &.About{
          animation: upDownAbout 1.1s;
        }
        &.Awards{
          animation: upDownAward 1.4s;
        }
        &.Contact{
          animation: upDownContact 1.7s;
        }
      }
    }
  }
}
@media screen and (max-width: 480px) {
  .titleWrap{
    display: flex;
    align-items: flex-start;
    flex: 1;
    width: 100%;
    padding: 0 8%;
    box-sizing: border-box;
    .contentWrap{
      display: none;
    }
    .menuTitleWrapMobile{
      padding-top: 30%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .title{
        font-size: 30px;
        margin-bottom: 20px;
        cursor: pointer;
        display: flex;
        align-items: center;
        .small{
          font-size: 12px;
          transform: scale(0.8);
          color: #999999;
          margin-right: 10px;
          font-family: PingFangRegular;
        }
        &:hover{
          opacity: 0.7;
        }
        &.Home{
          animation: opacityHome 0.5s;
        }
        &.Projects{
          animation: opacityProject 0.8s;
        }
        &.About{
          animation: opacityAbout 1.1s;
        }
        &.Awards{
          animation: opacityAward 1.4s;
        }
        &.Contact{
          animation: opacityContact 1.7s;
        }
      }
    }
  }
}
@keyframes opacityHome{
  0%{
    opacity: 0;
    transform: translateX(500px);
  }
  100%{
    opacity: 1;
    transform: translateX(0px);
  }
}
@keyframes opacityProject{
  0%{
    opacity: 0;
    transform: translateX(500px);
  }
  100%{
    opacity: 1;
    transform: translateX(0px);
  }
}
@keyframes opacityAbout{
  0%{
    opacity: 0;
    transform: translateX(500px);
  }
  100%{
    opacity: 1;
    transform: translateX(0px);
  }
}
@keyframes opacityAward{
  0%{
    opacity: 0;
    transform: translateX(500px);
  }
  100%{
    opacity: 1;
    transform: translateX(0px);
  }
}
@keyframes opacityContact{
  0%{
    opacity: 0;
    transform: translateX(500px);
  }
  100%{
    opacity: 1;
    transform: translateX(0px);
  }
}


@keyframes upDownHome{
  0%{
    opacity: 0;
    transform: translate(2000px, -2000px);
  }
  100%{
    opacity: 1;
    transform: translate(0px, 0px);
  }
}
@keyframes upDownProject{
  0%{
    opacity: 0;
    transform: translate(2000px, -2000px);
  }
  100%{
    opacity: 1;
    transform: translate(0px, 0px);
  }
}
@keyframes upDownAbout{
  0%{
    opacity: 0;
    transform: translate(2000px, -2000px);
  }
  100%{
    opacity: 1;
    transform: translate(0px, 0px);
  }
}
@keyframes upDownAward{
  0%{
    opacity: 0;
    transform: translate(2000px, -2000px);
  }
  100%{
    opacity: 1;
    transform: translate(0px);
  }
}
@keyframes upDownContact{
  0%{
    opacity: 0;
    transform: translate(2000px, -2000px);
  }
  100%{
    opacity: 1;
    transform: translate(0px);
  }
}

</style>
