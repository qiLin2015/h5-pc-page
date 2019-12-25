<template>
  <div class="main-wrap">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide bg-red">Slide 1</div>
            <div class="swiper-slide bg-yellow">Slide 2</div>
            <div class="swiper-slide bg-blue">Slide 3</div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      mainSwiper: null
    }
  },
  mounted() {
    this.render()
  },
  methods: {
    render() {
      this.mainSwiper = new Swiper ('.swiper-container', {
        direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
.main-wrap{
  .swiper-container {
    width: 600px;
    height: 300px;
  }
  .bg-red{
    background: #555;
  }
  .bg-yellow{
    background: #777;
  }
  .bg-blue{
    background: #999;
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
