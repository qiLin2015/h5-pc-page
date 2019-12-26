<template>
  <div class="main-wrap">
    <MenuHeader></MenuHeader>
    <div class="swiper-container" id="mainSwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in homeSwiperList" :key="index">
          <p class="ani slideTitle" swiper-animate-effect="bounceInRight" swiper-animate-duration="1s" swiper-animate-delay="0.1s">{{item.title}}</p>
          <div class="imgWrap">
            <img class="img" :src="item.imgSrc" alt="">
          </div>
        </div>
      </div>

      <div class="preNextBtn">
        <div class="pre item" @click="handelNav('pre')">pre</div>
        <div class="item line">/</div>
        <div class="next item" @click="handelNav('next')">next</div>
      </div>

      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
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
        on:{
          init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
          },
          slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
            //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
          }
        }
      })
    },
    handelNav(type) {
      alert(val)
      if(type === 'next') {
        this.mySwiper.slideNext();
      }else {
        this.mySwiper.slidePrev();
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
  // background: #000000;
  .swiper-container {
    width: 50%;
    height: 100vh;
    border: 1px solid red;
    .swiper-wrapper{
      .swiper-slide{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        .imgWrap{
          width: 50%;
          max-height: 80vh;
          overflow: hidden;
          .img{
            width: 100%;
            max-height: 80vh;
            // border: 1px solid yellow;
          }
          &:hover{
            .img{
              width: 120%;
              transform: scale(1.1);
              transition: all 0.5s ease-in;
            }
            .slideTitle{
              font-size: 70px;
              transform: scale(1.1);
              transition: all 0.5s ease-in;
            }
          }
        }
        .slideTitle{
          color: #FFFFFF;
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          margin-top: -50px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 65px;
          letter-spacing: 3px;
          z-index: 1000;
          // -webkit-background-clip: text;
          // -webkit-text-fill-color: transparent;
          // background-image: url(../img/home.png);
          // background-repeat: no-repeat;
          width: 100%;
          border: 1px solid red;
        }
      }
    }
    .swiper-pagination{
      .swiper-pagination-bullet{
        background: red;
      }
    }
    .preNextBtn{
      font-size: 15px;
      color: #FFFFFF;
      position: fixed;
      right: 0;
      bottom: 20%;
      padding: 10px;
      &:hover{
        cursor: pointer;
      }
      .item{
        transform:rotate(90deg);
        padding: 5px;
        text-align: center;
      }
    }
  }
}

// @media screen and (min-width: 480px) {
//   .main-wrap{
//     .swiper-container{
//       width: 50%;
//     }
//   }
// }
// @media screen and (max-width: 480px) {
//   .main-wrap{
//     .swiper-container{
//       width: 60%;
//     }
//   }
// }
</style>
