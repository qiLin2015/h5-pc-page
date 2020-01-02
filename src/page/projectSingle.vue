<template>
  <div class="projectSingleWrap">
    <MenuHeader></MenuHeader>
    <div class="preNextWrap">
      <div class="preNext">
        <div class="pre" @click="handelNav('pre')">PRE<div class="textLine"></div></div>
        <div class="line">/</div>
        <div class="next" @click="handelNav('next')">NEXT<div class="textLine"></div></div>
      </div>
    </div>
    <div class="productSingleSwiper">
      <div class="swiper-container" id="productSingleSwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in homeSwiperList" :key="index">
            <div class="imgWrap">
              <img class="img" :src="item.imgSrc" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="contactWrap" @click="goToContact">
      <div class="text">contact <div class="textLine"></div></div>
    </div>
  </div>
</template>

<script>
import MenuHeader from '@/page/components/MenuHeader'
export default {
  components: {
    MenuHeader
  },
    data () {
    return {
      productSingleSwiper: null,
      homeSwiperList: [{
        imgSrc: require('@/img/project1.png'),
        title: 'Commercial'
      }, {
        imgSrc: require('@/img/project2.png'),
        title: 'Residential'
      }, {
        imgSrc: require('@/img/project3.png'),
        title: 'Deluxe'
      }]
    }
  },
  mounted() {
    this.render()
  },
  methods: {
    render() {
      this.productSingleSwiper = new Swiper ('#productSingleSwiper', {
        loop: true, // 循环模式选项
        autoplay: {
          delay: 3000,//1秒切换一次
        },
        effect : 'coverflow',
        slidesPerView: 'auto',
        centeredSlides: true,
        coverflowEffect: {
          rotate: 50,  // y轴旋转角度
          stretch: -200, //
          depth: 100,
          modifier: 1,
          slideShadows : false
        },
        on:{
          init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
          },
          slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
          }
        }
      })
    },
    handelNav(type) {
      if(type === 'next') {
        this.productSwiper.slideNext();
      }else {
        this.productSwiper.slidePrev();
      }
    },
    goToContact() {
      this.$router.push({
        name: 'Contact'
      })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
.projectSingleWrap{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  .preNextWrap{
    display: flex;
    align-items: center;
    padding-left: 100px;
    .preNext{
      position: relative;
      font-size: 24px;
      display: flex;
      justify-content: space-around;
      transform: rotate(90deg);
      .pre, .next{
        padding:10px 10px;
        color: #999999;
        cursor: pointer;
        position: relative;
        &:hover{
          color: #666666;
          .textLine{
            width: 55px;
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
        color: #999999;
      }
    }
  }
  .contactWrap{
    display: flex;
    align-items: center;
    padding-right: 100px;
    .text{
      position: relative;
      width: 120px;
      text-align: center;
      color: #999999;
      font-size: 24px;
      cursor: pointer;
      transform: rotate(90deg);
      &:hover{
        color: #666666;
        .textLine{
          width: 120px;
          height: 2px;
          background: #666666;
          position: absolute;
          left: 0;
          bottom: 0;
          animation: contactLine 0.8s;
        }
      }
    }
  }
  .productSwiper{
    width: 60%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    .swiper-container {
      width: 100%;
      .swiper-wrapper{
        .swiper-slide{
          width: 200px;
          .slideTitle{
            text-align: center;
            font-size: 65px;
            letter-spacing: 3px;
          }
          .imgWrap{
            width: 320px;
            img{
              width: 320px;
              height: auto;
            }
          }
        }
      }
    }
  }
}
@keyframes contactLine
{
  from {width: 0px;}
  to {width: 120px;}
}
@keyframes preNextLine
{
  from {width: 0px;}
  to {width: 55px;}
}
</style>
