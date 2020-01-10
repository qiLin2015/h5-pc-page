<template>
  <div class="welcomeHome">
      <div class="welcome" v-show="isWelcome">
        <img class="logo welocomLogo" src="@/img/logoBgWhite.png" alt="">
      </div>

      <div class="homeContent">
        <div class="main-wrap pcBlock">
          <MenuHeader colorType="black"></MenuHeader>

          <div class="allProject" @click="goToProject"><div class="text">View all projects<div class="textLine"></div></div></div>

          <div class="swiper-container" id="mainSwiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item, index) in homeSwiperList" :key="index" @click="goToProject" @mouseover="handelImgEnter" @mouseout="handelImgLeave">
                <div class="ani slideTitleWrap" :swiper-animate-effect="titleEffectRight ? 'bounceInRight' : 'bounceInLeft' " swiper-animate-duration="1s" swiper-animate-delay="0s">
                  <span class="title" :style="{backgroundImage: 'url('+ item.imgSrc +')'}">{{item.title}}</span>
                </div>
                <div :class="handelImgClass()">
                  <img class="img" :src="item.imgSrc" alt="">
                </div>
                <div class="ani swiperCircle" v-if="swiperCircleIsShow" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.1s"></div>
              </div>
            </div>
          </div>

          <div class="preNextWrap">
            <div class="preNext">
              <div class="pre" @click="handelNav('pre')">Pre<div class="textLine"></div></div>
              <div class="line">/</div>
              <div class="next" @click="handelNav('next')">Next<div class="textLine"></div></div>
            </div>
          </div>
        </div>

        <div class="mobileBlock">
          <MenuHeader colorType="black"></MenuHeader>
          <div class="mobileSwiper">
            <div class="swiper-container" id="mobileSwiperHome">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in homeSwiperList" :key="index" @click="goToProject">
                  <div v-if="item.imgSrc" class="mobileFixedtext" :style="{backgroundImage: 'url('+ item.imgSrc +')'}">{{item.title}}</div>
                  <div class="imgWrap">
                    <img class="img" :src="item.imgSrc" alt="">
                  </div>
                </div>
              </div>
            </div>
            <div class="swiperFooter">
              <div class="left" @click="goToProject">View all projects</div>
              <div class="right">
                <div class="pre btn" @click="handelNavMobile('pre')">pre</div>
                <div class="line">/</div>
                <div class="next btn" @click="handelNavMobile('next')">next</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import MenuHeader from '@/page/components/MenuHeader'

export default {
  name: 'HelloWorld',
  components: {
    MenuHeader
  },
  data () {
    return {
      isWelcome: true,
      mainSwiper: null,
      mobileSwiperHome: null,
      swiperCircleIsShow: true,
      imageEnterScale: false,
      imageLeaveScale: false,
      titleEffectRight: true,
      homeSwiperList: [{
        imgSrc: require('@/img/home.png'),
        title: 'Commercial'
      }, {
        imgSrc: require('@/img/home.png'),
        title: 'Residential'
      }, {
        imgSrc: require('@/img/home.png'),
        title: 'Deluxe'
      }]
    }
  },
  mounted() {
    setTimeout(()=>{
      this.isWelcome = false;
      this.render()
    }, 5000)
  },
  methods: {
    render() {
      this.renderPcSwiper();
      this.renderMobileSwiper();
    },
    renderPcSwiper() {
      let self = this;
      this.mainSwiper = new Swiper ('#mainSwiper', {
        speed: 1000,
        direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: {
          delay: 5000,//1秒切换一次
        },
        on:{
          slideChangeTransitionStart: function(){
            self.swiperCircleIsShow = false;
          },
          slideChangeTransitionEnd: function(){
            self.swiperCircleIsShow = true;
          },
          slidePrevTransitionStart: function(){
            self.titleEffectRight = false;
          },
          slideNextTransitionStart: function(){
            self.titleEffectRight = true;
          },
          init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
          },
          slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
            self.swiperCircleIsShow = true;
            //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
          }
        }
      });
    },
    renderMobileSwiper() {
      this.mobileSwiperHome = new Swiper ('#mobileSwiperHome', {
        speed: 1000,
        loop: true, // 循环模式选项
        direction: 'vertical', // 垂直切换选项
        autoplay: {
          delay: 5000,//1秒切换一次
        },
      });
    },
    goToProject() {
      this.$router.push({
        name: 'Project'
      })
    },
    handelNav(type) {
      if(type === 'next') {
        this.mainSwiper.slideNext();
      }else {
        this.mainSwiper.slidePrev();
      }
    },
    handelNavMobile(type) {
      if(type === 'next') {
        this.mobileSwiperHome.slideNext();
      }else {
        this.mobileSwiperHome.slidePrev();
      }
    },
    handelImgClass() {
      if(this.imageEnterScale) {
        return 'imgWrap imageEnter'
      }else if(this.imageLeaveScale){
        return 'imgWrap imageLeave'
      }else {
        return 'imgWrap'
      }
    },
    handelImgEnter() {
      this.imageEnterScale = true;
      this.imageLeaveScale = false;
    },
    handelImgLeave() {
      this.imageEnterScale = false;
      this.imageLeaveScale = true;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
.welcomeHome{
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.welcome{
  width: 100%;
  height: 100vh;
  background: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: welcomeUpDownHome 1s 4s linear;
  .welocomLogo{
    animation: welcomeLogoAni 3s linear;
  }
}
.main-wrap{
  width: 100%;
  height: 100vh;
  background: #1b1818;
  display: flex;
  justify-content: center;
  .swiper-container {
    width: 30vw;
    height: 100vh;
    position: relative;
    margin: 0;
    padding: 0 10vw;
    .swiper-wrapper{
      .swiper-slide{
        padding: 0 10%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        &:hover{
          cursor: pointer;
          .slideTitleWrap{
            .title{
              letter-spacing: 10px;
            }
          }
        }
        .imageEnter{
          .img{
            transition: all 0.8s;
            transform: scale(1.1);
          }
        }
        .imageLeave{
          .img{
            transition: all 0.8s;
            transform: scale(1);
          }
        }
        .imgWrap{
          width: 100%;
          transition: all 0.8s;
          overflow: hidden;
          .img{
            width: 100%;
            max-height: 80vh;
          }
        }
        .slideTitleWrap{
          position: absolute;
          top: 50%;
          left: 50%;
          width: 50vw;
          height: 50px;
          margin-top: -25px;
          margin-left: -25vw;
          box-sizing: border-box;
          overflow: visible;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          .title{
            font-size: 100px;
            letter-spacing: 3px;
            color: #FFFFFF;
            transition: all 0.8s;
             background-position: center;
            -webkit-background-clip:text;
            -webkit-text-fill-color:transparent;
            -webkit-animation:cliptext 10s linear infinite;
          }
        }
      }
    }
    .swiperCircle{
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 30vw;
      margin-top: -15vw;
      margin-left: -15vw;
      border-radius: 50%;
      background: transparent;
      z-index: 10;
      border: 2px solid #999999;
      border-top: 0px solid #999999;
      border-bottom: 0px solid #999999;
      animation: swiperCircle 0.5s linear;
      box-sizing: border-box;
      opacity: 0.5;
    }
  }
  .allProject{
    width: 10%;
    position: relative;
    font-family: CenturyGothicBold;
    .text{
      position: absolute;
      left: 0;
      top: 25%;
      width: 130px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #898989;
      font-size: 12px;
      cursor: pointer;
      transform: rotate(-90deg);
      transition: all 0.8s;
      z-index: 50;
      &:hover{
        color: #FFFFFF;
        .textLine{
          width: 130px;
          height: 2px;
          transition: all 1s;
          background: #898989;
          position: absolute;
          left: 0;
          bottom: 0;
          animation: allProjectLine 0.8s;
        }
      }
    }
  }
  .preNextWrap{
    width: 10%;
    position: relative;
    font-family: CenturyGothicBold;
    .preNext{
      position: absolute;
      left: 0;
      bottom: 25%;
      width: 130px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #898989;
      font-size: 12px;
      cursor: pointer;
      transform: rotate(90deg);
      z-index: 50;
      .pre, .next{
        padding:10px 10px;
        position: relative;
        transition: all 0.8s;
        &:hover{
          color: #FFFFFF;
          .textLine{
            width: 45px;
            height: 2px;
            background: #898989;
            position: absolute;
            left: 0;
            bottom: 0;
            animation: preNextLine 0.8s;
          }
        }
      }
      .line{
        padding: 10px 0;
        color: #898989;
      }
    }
  }
}

@keyframes allProjectLine
{
  from {width: 0px;}
  to {width: 130px;}
}
@keyframes preNextLine
{
  from {width: 0px;}
  to {width: 45px;}
}
@media screen and (min-width: 480px) {
  .mobileBlock{
    display: none;
  }
}
@media screen and (max-width: 480px) {
  .pcBlock{
    display: none;
  }
  .mobileBlock{
    width: 100%;
    .mobileSwiper{
      position: relative;
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      align-items: center;
      padding: 0 10%;
      box-sizing: border-box;
      background: #1b1818;
      .swiper-container{
        width: 100%;
        height: 100vh;
        .swiper-slide{
          width: 100%;
          height: 100vh;
          padding: 80px 0;
          box-sizing: border-box;
          .mobileFixedtext{
            font-family: Didot;
            position: absolute;
            width: 100%;
            text-align: center;
            font-size: 45px;
            top: 50%;
            margin-top: -40px;
            z-index: 10;
            animation: mobileText 5s 0.5s linear infinite;
            -webkit-text-stroke:1px #D3D3D3;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-position: center;
          }
          .imgWrap{
            width: 100%;
            height: 100%;
            .img{
              width: 100%;
              height: 100%;
              display: block;
            }
          }
        }
      }
      .swiperFooter{
        position: absolute;
        left: 0;
        bottom: 30px;
        width: 100%;
        color: #FFFFFF;
        display: flex;
        justify-content: space-between;
        padding: 0 10%;
        box-sizing: border-box;
        font-size: 12px;
        height: 40px;
        z-index: 10;
        .left{
          line-height: 40px;
          &:hover{
            cursor: pointer;
          }
        }
        .right{
          display: flex;
          align-items: center;
          .btn{
            padding: 10px 0;
            &:hover{
              cursor: pointer;
            }
            &.pre{
              padding-right: 10px;
            }
            &.next{
              padding-left: 10px;
            }
          }
        }
      }
    }
  }
}
@keyframes mobileText{
  0%{
    -webkit-transform: translateY(0) scale(0);
    transform: translateY(0) scale(0);
  }
  25%{
    -webkit-transform: translateY(-50px) scale(0.5);
    transform: translateY(-50px) scale(0.5);
  }
  50%{
    -webkit-transform: translateY(0px) scale(0) rotateZ(180deg);
    transform: translateY(0px) scale(0) rotateZ(180deg);
  }
  75%{
    -webkit-transform: translateY(50px) scale(1.5);
    transform: translateY(50px) scale(1.5);
  }
  100%{
    -webkit-transform: translateY(0) scale(0);
    transform: translateY(0) scale(0);
  }
}

@keyframes swiperCircle {
0% {
  border-top: 1px solid #FFFFFF;
  opacity: 0;
  transform: rotate(0deg);
}
100% {
  border-top: 1px solid #FFFFFF;
  opacity: 1;
  transform: rotate(180deg);
  }
}

@keyframes welcomeUpDownHome{
  0%{
    height: 100vh
  }
  100%{
    height: 0vh;
  }
}

@keyframes welcomeLogoAni{
  0%{
    -webkit-transform: scale(0.2) rotateZ(0deg);
    transform: scale(0.2) rotateZ(0deg);
    opacity: 0;
  }
  25%{
    -webkit-transform: scale(0.4) rotateZ(90deg);
    transform: scale(0.4) rotateZ(90deg);
    opacity: 0.2;
  }
  50%{
    -webkit-transform: scale(0.6) rotateZ(180deg);
    transform: scale(0.6) rotateZ(180deg);
    opacity: 0.5;
  }
  75%{
    -webkit-transform: scale(0.8) rotateZ(270deg);
    transform: scale(0.8) rotateZ(270deg);
    opacity: 0.8;
  }
  100%{
    -webkit-transform: scale(1) rotateZ(360deg);
    transform: scale(1) rotateZ(360deg);
    opacity: 1;
  }
}


@keyframes cliptext{
  from { background-position: 0 0; }
  to { background-position: 100% 0; }
}
</style>
