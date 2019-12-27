<template>
  <div class="menuSwiper">
    <div class="swiper-container" id="menuSwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in homeSwiperList" :key="index">
          <p class="ani slideTitle" swiper-animate-effect="bounceInRight" swiper-animate-duration="1s" swiper-animate-delay="0.1s">{{item.title}}</p>
          <div class="imgWrap">
            <img class="img" :src="item.imgSrc" alt="">
          </div>
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
        effect : 'coverflow',
        slidesPerView: 'auto',
        centeredSlides: true,
        coverflowEffect: {
          rotate: 0,  // y轴旋转角度
          stretch: 50, //
          depth: 200,
          modifier: 2,
          slideShadows : true
        },
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
  .swiper-container {
    width: 100%;
    height: 50%;
    .swiper-wrapper{
      .swiper-slide{
        width: 50%;
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
