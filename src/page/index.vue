<template>
  <div class="welcomeHome">
    <div class="welcome" v-show="isWelcome && !this.$route.query.isFromMenu">
      <img class="logo welocomLogo" src="@/img/logoBgWhite.png" alt />
    </div>

    <div class="homeContent">
      <div class="main-wrap">
        <MenuHeader colorType="black"></MenuHeader>

        <div class="allProject" @click="goToProject">
          <div class="text">
            View all projects
            <div class="textLine"></div>
          </div>
        </div>

        <div class="mobileSwiper">
          <div
            class="swiper-container"
            id="mainSwiper"
            v-show="homeSwiperList && homeSwiperList.length"
          >
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="(item, index) in homeSwiperList"
                :key="index"
                @click="goToProject"
                @mouseover="handelImgEnter"
                @mouseout="handelImgLeave"
              >
                <div
                  class="ani slideTitleWrap"
                  :swiper-animate-effect="titleEffectRight ? 'bounceInUp' : 'bounceInDown' "
                  swiper-animate-duration="1s"
                  swiper-animate-delay="0s"
                >
                  <span class="title pcTitle">{{item.title}}</span>
                  <span
                    class="title mobileTitle"
                    :style="{backgroundImage: 'url('+ item.imgSrc +')'}"
                  >{{item.title}}</span>
                </div>
                <div :class="handelImgClass()" v-if="item.imgSrc">
                  <img class="img" :src="item.imgSrc" alt />
                </div>
                <div
                  class="ani swiperCircle"
                  v-if="swiperCircleIsShow"
                  swiper-animate-effect="fadeIn"
                  swiper-animate-duration="1s"
                  swiper-animate-delay="0.1s"
                ></div>
              </div>
            </div>
          </div>

          <div class="swiperFooter">
            <div class="left" @click="goToProject">View all projects</div>
            <div class="right">
              <div class="pre btn" @click="handelNav('pre')">pre</div>
              <div class="line">/</div>
              <div class="next btn" @click="handelNav('next')">next</div>
            </div>
          </div>
        </div>

        <div class="preNextWrap">
          <div class="preNext">
            <div class="pre" @click="handelNav('pre')">
              Pre
              <div class="textLine"></div>
            </div>
            <div class="line">/</div>
            <div class="next" @click="handelNav('next')">
              Next
              <div class="textLine"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import MenuHeader from '@/page/components/MenuHeader';

export default {
  name: 'HelloWorld',
  components: {
    MenuHeader,
  },
  data() {
    return {
      isWelcome: true,
      isFromMenu: '',
      mainSwiper: null,
      mobileSwiperHome: null,
      swiperCircleIsShow: true,
      imageEnterScale: false,
      imageLeaveScale: false,
      titleEffectRight: true,
      homeSwiperList: [],

      imgSrc: require('@/img/project1.png'),
      imgSrc: require('@/img/project2.png'),
      imgSrc: require('@/img/project3.png'),
    };
  },
  mounted() {
    this.query();
  },
  methods: {
    query() {
      let url = 'http://139.224.13.0/api/data';
      axios.get(url).then(res => {
        console.log('axios res');
        console.log(res);
        if (res.status === 200) {
          this.homeSwiperList = res.data.menus || [];
          if (res.data.projects && res.data.projects.length) {
            this.homeSwiperList = res.data.projects.map(item => {
              return {
                title: item.title,
                imgSrc: item.imgSrc,
              };
            });
            localStorage.setItem('maudeaInfor', JSON.stringify(res.data));
            if (!this.$route.query.isFromMenu) {
              setTimeout(() => {
                this.isWelcome = false;
                this.render();
              }, 5000);
            } else {
              setTimeout(() => {
                this.isWelcome = false;
                this.render();
              }, 100);
            }
          } else {
            this.homeSwiperList = [];
          }
        } else {
          this.homeSwiperList = [];
        }
      });
    },
    render() {
      this.renderPcSwiper();
    },
    renderPcSwiper() {
      let self = this;
      this.mainSwiper = new Swiper('#mainSwiper', {
        speed: 1000,
        direction: 'vertical', // 垂直切换选项
        mousewheel: true,
        loop: true, // 循环模式选项
        autoplay: {
          delay: 50000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        on: {
          slideChangeTransitionStart: function() {
            self.swiperCircleIsShow = false;
          },
          slideChangeTransitionEnd: function() {
            self.swiperCircleIsShow = true;
          },
          slidePrevTransitionStart: function() {
            self.titleEffectRight = false;
          },
          slideNextTransitionStart: function() {
            self.titleEffectRight = true;
          },
          init: function() {
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
          },
          slideChangeTransitionEnd: function() {
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
            self.swiperCircleIsShow = true;
            //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
          },
        },
      });
    },
    goToProject() {
      this.$router.push({
        name: 'Projects',
      });
    },
    handelNav(type) {
      if (type === 'next') {
        console.log(this.mainSwiper);
        this.mainSwiper && this.mainSwiper.slideNext();
      } else {
        this.mainSwiper && this.mainSwiper.slidePrev();
      }
    },
    handelImgClass() {
      if (this.imageEnterScale) {
        return 'imgWrap imageEnter';
      } else if (this.imageLeaveScale) {
        return 'imgWrap imageLeave';
      } else {
        return 'imgWrap';
      }
    },
    handelImgEnter() {
      this.imageEnterScale = true;
      this.imageLeaveScale = false;
    },
    handelImgLeave() {
      this.imageEnterScale = false;
      this.imageLeaveScale = true;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
.welcomeHome {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.welcome {
  width: 100%;
  height: 100vh;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: welcomeUpDownHome 1s 4s linear;
  .welocomLogo {
    animation: welcomeLogoAni 3s linear;
  }
}
.main-wrap {
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
    .swiper-wrapper {
      .swiper-slide {
        padding: 0 10%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        margin-right: 20vw;
        &:hover {
          cursor: pointer;
          .slideTitleWrap {
            .title {
              letter-spacing: 10px;
            }
          }
        }
        .imageEnter {
          .img {
            transition: all 0.8s;
            transform: scale(1.1);
          }
        }
        .imageLeave {
          .img {
            transition: all 0.8s;
            transform: scale(1);
          }
        }
        .imgWrap {
          width: 100%;
          transition: all 0.8s;
          overflow: hidden;
          .img {
            width: 100%;
            max-height: 80vh;
          }
        }
        .slideTitleWrap {
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
          .title {
            font-size: 100px;
            letter-spacing: 3px;
            color: #ffffff;
            transition: all 0.8s;
          }
        }
      }
    }
    .swiperCircle {
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
  .allProject {
    width: 10%;
    position: relative;
    font-family: CenturyGothicBold;
    .text {
      position: absolute;
      right: -10vw;
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
      &:hover {
        color: #ffffff;
        .textLine {
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
  .preNextWrap {
    width: 10%;
    position: relative;
    font-family: CenturyGothicBold;
    .preNext {
      position: absolute;
      left: -10vw;
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
      .pre,
      .next {
        padding: 10px 10px;
        position: relative;
        transition: all 0.8s;
        &:hover {
          color: #ffffff;
          .textLine {
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
      .line {
        padding: 10px 0;
        color: #898989;
      }
    }
  }
}

@keyframes allProjectLine {
  from {
    width: 0px;
  }
  to {
    width: 130px;
  }
}
@keyframes preNextLine {
  from {
    width: 0px;
  }
  to {
    width: 45px;
  }
}
@media screen and (min-width: 480px) {
  .homeContent {
    .main-wrap {
      .swiperFooter {
        display: none;
      }
      .mobileTitle {
        display: none;
      }
    }
  }
}
@media screen and (max-width: 480px) {
  .homeContent {
    .main-wrap {
      .allProject {
        display: none;
      }
      .preNextWrap {
        display: none;
      }
    }
    .mobileSwiper {
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
      .swiper-container {
        width: 100%;
        height: 100vh;
        padding: 0;
        .swiper-slide {
          width: 100%;
          height: 100vh;
          padding: 80px 0;
          box-sizing: border-box;
          .slideTitleWrap {
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
            .title {
              font-size: 45px;
              letter-spacing: 3px;
              color: #ffffff;
              transition: all 0.8s;
            }
            .pcTitle {
              display: none;
            }
            .mobileTitle {
              background-position: center;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              -webkit-text-stroke: 1px #898989;
              -webkit-animation: cliptext 3s linear infinite;
            }
          }
          .swiperCircle {
            display: none;
          }
          .imgWrap {
            width: 100%;
            height: 100%;
            .img {
              width: 100%;
              height: 100%;
              display: block;
            }
          }
        }
      }
      .swiperFooter {
        position: absolute;
        left: 0;
        bottom: 30px;
        width: 100%;
        color: #898989;
        display: flex;
        justify-content: space-between;
        padding: 0 10%;
        box-sizing: border-box;
        font-size: 12px;
        height: 40px;
        z-index: 10;
        font-family: CenturyGothicBold;
        .left {
          line-height: 40px;
          &:hover {
            cursor: pointer;
          }
        }
        .right {
          display: flex;
          align-items: center;
          .btn {
            padding: 10px 0;
            &:hover {
              cursor: pointer;
            }
            &.pre {
              padding-right: 10px;
            }
            &.next {
              padding-left: 10px;
            }
          }
        }
      }
    }
  }
}

@keyframes swiperCircle {
  0% {
    border-top: 1px solid #ffffff;
    opacity: 0;
    transform: rotate(0deg);
  }
  100% {
    border-top: 1px solid #ffffff;
    opacity: 1;
    transform: rotate(180deg);
  }
}

@keyframes welcomeUpDownHome {
  0% {
    height: 100vh;
  }
  100% {
    height: 0vh;
  }
}

@keyframes welcomeLogoAni {
  0% {
    -webkit-transform: scale(0.2) rotateZ(0deg);
    transform: scale(0.2) rotateZ(0deg);
    opacity: 0;
  }
  25% {
    -webkit-transform: scale(0.4) rotateZ(90deg);
    transform: scale(0.4) rotateZ(90deg);
    opacity: 0.2;
  }
  50% {
    -webkit-transform: scale(0.6) rotateZ(180deg);
    transform: scale(0.6) rotateZ(180deg);
    opacity: 0.5;
  }
  75% {
    -webkit-transform: scale(0.8) rotateZ(270deg);
    transform: scale(0.8) rotateZ(270deg);
    opacity: 0.8;
  }
  100% {
    -webkit-transform: scale(1) rotateZ(360deg);
    transform: scale(1) rotateZ(360deg);
    opacity: 1;
  }
}

@keyframes cliptext {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 100% 0;
  }
}
</style>
