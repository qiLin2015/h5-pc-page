<template>
  <div class="titleWrap">
    <div class="menuTitleWrap">
      <div class="contentAbsolute">
        <div class="home title" @click="handelGoDetail('Index')">Home<div class="homeBg itemBg"><img src="@/img/menu1.png" alt="" class="image"></div></div>
        <div class="project title" @click="handelGoDetail('Project')">Projects<div class="projectBg itemBg"><img src="@/img/demo1.png" alt="" class="image"></div></div>
        <div class="about title" @click="handelGoDetail('About')">About<div class="aboutBg itemBg"><img src="@/img/demo2.png" alt="" class="image"></div></div>
        <div class="award title" @click="handelGoDetail('Award')">Awards<div class="awardBg itemBg"><img src="@/img/demo3.png" alt="" class="image"></div></div>
        <div class="contact title" @click="handelGoDetail('Contact')">Contact<div class="contactBg itemBg"><img src="@/img/demo4.png" alt="" class="image"></div></div>
      </div>
    </div>

    <div class="menuTitleWrapMobile">
      <div class="title home" @click="handelGoDetail('Index')"><span class="small">01</span>Home</div>
      <div class="title project" @click="handelGoDetail('Project')"><span class="small">02</span>Projects</div>
      <div class="title about" @click="handelGoDetail('About')"><span class="small">03</span>About</div>
      <div class="title award" @click="handelGoDetail('Award')"><span class="small">04</span>Awards</div>
      <div class="title contact" @click="handelGoDetail('Contact')"><span class="small">05</span>Contact</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  mounted() {
  },
  methods: {
    handelGoDetail(name) {
      this.$router.push({name: name})
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
.titleWrap{
  display: flex;
  align-items: center;
  flex: 1;
  width: 100%;
  padding: 0 10%;
  box-sizing: border-box;
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
    .home{
      // &:hover{
      //   .itemBg{
      //     opacity: 1;
      //     animation: imgRotate 1s;
      //   }
      // }
    }
    .projectBg{

    }
  }
}

@keyframes imgRotate{
  0%{
    transform: rotateZ(-45deg) scale(0.5);
    opacity: 0;
  }
  100%{
    transform: rotateZ(0deg) scale(1);
    opacity: 1;
  }
}

@media screen and (min-width: 480px) {
  .titleWrap{
    .menuTitleWrapMobile{
      display: none;
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
    .menuTitleWrap{
      display: none;
    }
    .menuTitleWrapMobile{
      padding-top: 30%;
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
          transform: scale(1.5);
        }
        &.home{
          animation: opacityHome 0.5s;
        }
        &.project{
          animation: opacityProject 0.8s;
        }
        &.about{
          animation: opacityAbout 1.1s;
        }
        &.award{
          animation: opacityAward 1.4s;
        }
        &.contact{
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
</style>
