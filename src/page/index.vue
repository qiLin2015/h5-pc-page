<template>
  <div class="main-wrap">
    <div>
      <swiper :options="swiperOption" @someSwiperEvent="handelSwiper">
        <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
          I'm Slide {{ slide }}
          <p v-if="index === 0" class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">内容ASDFGHJKLL</p>
          <p v-if="index === 1" class="ani" swiper-animate-effect="bounceInRight" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">内容ASDFGHJKLL</p>
          <p v-if="index === 2" class="ani" swiper-animate-effect="bounceOut" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">内容ASDFGHJKLL</p>
          <p v-if="index === 3" class="ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">内容ASDFGHJKLL</p>
          <p v-if="index === 4" class="ani" swiper-animate-effect="lightSpeedIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">内容ASDFGHJKLL</p>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <!-- <div class="swiper-button-next" slot="button-next"></div> -->
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      swiperOption: {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        // autoplay: {
        //   delay: 3000,
        // },
        zoom: {
          maxRatio: 1.5,
        },
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
        },
        on: {
          init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
          },
          slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
            //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
          }
        },
      },
      swiperSlides: [1, 2, 3, 4, 5],
    }
  },
  mounted() {

  },
  methods: {
    handelSwiper(val) {
      console.log(val)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
.main-wrap{
  background: orange;
  width: 100%;
  // height: 100vh;
  .swiper-container{
    width: 50%;
    // height: 100vh !important;
    height: 200px;
    .swiper-slide{
      background: #ccc;
      // height: 100vh;
    }
  }
}

@media screen and (min-width: 480px) {
  .main-wrap{
    .swiper-container{
      width: 50%;
    }
  }
}
@media screen and (max-width: 480px) {
  .main-wrap{
    .swiper-container{
      width: 60%;
    }
  }
}
</style>
