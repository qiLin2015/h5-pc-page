<template>
  <div class="menuSwiper">
    <div class="swiper-container" id="menuSwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in homeSwiperList" :key="index">
          <div class="imgWrap">
            <img class="img" :src="item.imgSrc" alt="">
          </div>
          <p class="ani slideTitle" swiper-animate-effect="bounceIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.5s">{{item.title}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      menuSwiper: null,
      homeSwiperList: [{
        imgSrc: require('@/img/demo1.png'),
        title: 'Commercial'
      }, {
        imgSrc: require('@/img/demo2.png'),
        title: 'Residential'
      }, {
        imgSrc: require('@/img/demo3.png'),
        title: 'Deluxe'
      }, {
        imgSrc: require('@/img/demo1.png'),
        title: 'Commercial'
      }, {
        imgSrc: require('@/img/demo2.png'),
        title: 'Residential'
      },]
    }
  },
  mounted() {
    this.render()
  },
  methods: {
    render() {
      this.menuSwiper = new Swiper ('#menuSwiper', {
        loop: true, // 循环模式选项
        autoplay: {
          delay: 3000,//1秒切换一次
        },
        effect : 'coverflow',
        slidesPerView: 'auto',
        centeredSlides: true,
        coverflowEffect: {
          rotate: 0,  // y轴旋转角度
          stretch: 150, //
          depth: 100,
          modifier: 2,
          slideShadows : true
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
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
.menuSwiper{
  width: 100%;
  height: 100%;
  padding: 0 20%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  .swiper-container {
    width: 100%;
    height: 50%;
    .swiper-wrapper{
      .swiper-slide{
        width: 50%;
        .slideTitle{
          text-align: center;
          font-size: 65px;
          letter-spacing: 3px;
        }
        .imgWrap{
          width:100%;
          img{
            width: 100%;
            height: auto;
          }
        }
      }
    }
  }
}

</style>
