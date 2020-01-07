<template>
  <div>
    <div class="main-wrap pcBlock">
      <MenuHeader colorType="black"></MenuHeader>
      <div class="swiper-container" id="mainSwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in homeSwiperList" :key="index">
            <div class="ani slideTitle" swiper-animate-effect="bounceInRight" swiper-animate-duration="1s" swiper-animate-delay="0.1s">
              {{item.title}}
            </div>
            <div class="imgWrap">
              <img class="img" :src="item.imgSrc" alt="">
            </div>
          </div>
        </div>
        <div class="allProject" @click="goToProject">View all projects<div class="textLine"></div></div>
        <div class="preNext">
          <div class="pre" @click="handelNav('pre')">pre <div class="textLine"></div></div>
          <div class="line">/</div>
          <div class="next" @click="handelNav('next')">next <div class="textLine"></div></div>
        </div>
      </div>
    </div>

    <div class="mobileBlock">
      <MenuHeader colorType="black"></MenuHeader>
      <div class="mobileSwiper">
        <div class="swiper-container" id="mobileSwiperHome">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in homeSwiperList" :key="index">
              <div v-if="item.imgSrc" class="mobileFixedtext" :style="{backgroundImage: 'url('+ item.imgSrc +')', backgroundSize:cover }">{{item.title}}</div>
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
        <div class="btnArrow"></div>
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
      mainSwiper: null,
      mobileSwiperHome: null,
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
    this.render()
  },
  methods: {
    render() {
      this.mainSwiper = new Swiper ('#mainSwiper', {
        direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        zoom : {
          maxRatio: 1.5,
        },
        // on:{
        //   init: function(){
        //     swiperAnimateCache(this); //隐藏动画元素
        //     swiperAnimate(this); //初始化完成开始动画
        //   },
        //   slideChangeTransitionEnd: function(){
        //     swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        //     //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
        //   }
        // }
      });

      this.mobileSwiperHome = new Swiper ('#mobileSwiperHome', {
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
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
.main-wrap{
  width: 100%;
  height: 100vh;
  background: #000000;
  .swiper-container {
    width: 30%;
    height: 100vh;
    overflow: unset;
    position: relative;
    .swiper-wrapper{
      .swiper-slide{
        padding: 0 10%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        .imgWrap{
          width: 100%;
          .img{
            width: 100%;
            max-height: 80vh;
          }
        }
        .slideTitle{
          position: absolute;
          top: 50%;
          left: -50%;
          right: -50%;
          margin-top: -50px;
          width: 200%;
          height: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 100px;
          letter-spacing: 3px;
          color: #FFFFFF;
          -webkit-background-clip: text;
	        -webkit-text-fill-color: transparent;
          background-image: url(../img/home.png);
          background-size: 100% 100px;
          background-position: center;
        }
      }
    }
    .swiper-pagination{
      .swiper-pagination-bullet{
        background: red;
      }
    }
    .allProject{
      position: absolute;
      top: 20%;
      left: -70px;
      padding:10px 10px;
      color: #898989;
      font-size: 15px;
      cursor: pointer;
      transform: rotate(-90deg);
      &:hover{
        color: #fff;
        .textLine{
          width: 128px;
          height: 2px;
          background: #898989;;
          position: absolute;
          left: 0;
          bottom: 0;
          animation: allProjectLine 0.8s;
        }
      }
    }

    .preNext{
      position: absolute;
      right: -70px;
      bottom: 20%;
      font-size: 15px;
      display: flex;
      justify-content: space-around;
      transform: rotate(90deg);
      .pre, .next{
        padding:10px 10px;
        color: #898989;
        cursor: pointer;
        position: relative;
        &:hover{
          color: #fff;
          .textLine{
            width: 45px;
            height: 2px;
            background: #898989;;
            position: absolute;
            left: 0;
            bottom: 0;
            animation: preNextLine 0.8s;
          }
        }
      }
      .line{
        padding: 10px 0;
        color: #FFFFFF;
      }
    }
  }
}

@keyframes allProjectLine
{
  from {width: 0px;}
  to {width: 128px;}
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
      background: #000000;
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
      .btnArrow{
        position:absolute;
        bottom: 15px;
        left: 50%;
        margin-left: -15px;
        width: 30px;
        height: 30px;
        background: url('../img/btnArrow.png') no-repeat center;
        background-size: 100% 100%;
        animation: floatupDown 1.5s 0.8s ease-in-out infinite;
        z-index:10
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
@keyframes floatupDown{
  0%{
    -webkit-transform: translateY(0) scale(1);
    transform: translateY(0) scale(1);
  }
  50%{
    -webkit-transform: translateY(-10px) scale(0.9);
    transform: translateY(-10px) scale(0.9);
  }
  100%{
    -webkit-transform: translateY(0) scale(1);
    transform: translateY(0) scale(1);
  }
}
</style>
