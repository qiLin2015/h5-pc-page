<template>
  <div class="menuWrap">
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
      this.menuSwiper = new Swiper ('#menuSwiper', {
        loop: true, // 循环模式选项
        effect : 'coverflow',
        slidesPerView: 3,
        centeredSlides: true,
        coverflowEffect: {
          rotate: 30,
          stretch: 10,
          depth: 60,
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
.menuWrap{
  width: 100%;
  height: 100vh;
  background: #000000;
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
        }
      }
    }
  }
}

</style>
