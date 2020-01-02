<template>
  <div class="main-wrap">
    <MenuHeader ></MenuHeader>
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
</style>
