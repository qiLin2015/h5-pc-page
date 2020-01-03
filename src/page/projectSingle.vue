<template>
  <div class="projectSingleWrap">
    <MenuHeader></MenuHeader>
    <div class="leftWrap">
      <div class="project">Project <div class="textLine"></div></div>
      <div class="title">Commercial</div>
      <div><img class="closeImg" src="@/img/closeLine.png" alt=""></div>
    </div>

    <div class="singleSwiper">
      <div class="swiper-container" id="singleSwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in homeSwiperList" :key="index">
            <div class="imgWrap">
              <img class="img" :src="item.imgSrc" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="prebtn btn" @click="handelNav('pre')"><i class="el-icon-d-arrow-left"></i></div>
      <div class="nextBtn btn" @click="handelNav('next')"><i class="el-icon-d-arrow-right"></i></div>
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
      singleSwiper: null,
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
      this.singleSwiper = new Swiper ('#singleSwiper', {
        loop: true, // 循环模式选项
        autoplay: {
          delay: 3000,
        },
        slidesPerView : 3,
        slidesPerGroup : 1,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
    },
    goToContact() {
      this.$router.push({
        name: 'Contact'
      })
    },
    handelNav(type) {
      if(type === 'next') {
        this.singleSwiper.slideNext();
      }else {
        this.singleSwiper.slidePrev();
      }
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
  justify-content: center;
  .leftWrap{
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .project{
      color: #999999;
      font-size: 24px;
      cursor: pointer;
      transform: rotate(-90deg);
      position: relative;
      &:hover{
        color: #666666;
        .textLine{
          width: 80px;
          height: 2px;
          background: #666666;
          position: absolute;
          left: 0;
          bottom: 0;
          animation: projectLine 0.8s;
        }
      }
    }
    .title{
      font-size: 50px;
    }
    .closeImg{
      padding-right: 100px;
      cursor: pointer;
    }
  }
  .singleSwiper{
    width: 50%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    position: relative;
    .btn{
      position: absolute;
      top: 50%;
      margin-top: -20px;
      width: 40px;
      height: 40px;
      border: 4px solid #EEEEEE;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 100;
      box-sizing: border-box;
      color: #EEEEEE;
      font-size: 24px;
      font-weight: 900;
      &:hover{
        border: 4px solid #3ab1df;
        color: #3ab1df
      }
    }
    .prebtn{
      left: -40px;
    }
    .nextBtn{
      right: -40px;
    }
    .swiper-container {
      width: 100%;
      .swiper-wrapper{
        .swiper-slide{
          width:100%;
          padding: 0 20px;
          box-sizing: border-box;
          cursor: pointer;
          .slideTitle{
            text-align: center;
            font-size: 65px;
            letter-spacing: 3px;
          }
          .imgWrap{
            img{
              width: 100%;
              height: auto;
            }
          }
        }
      }
    }
  }
  // .preNextWrap{
  //   display: flex;
  //   align-items: center;
  //   padding-left: 100px;
  //   .preNext{
  //     position: relative;
  //     font-size: 24px;
  //     display: flex;
  //     justify-content: space-around;
  //     transform: rotate(90deg);
  //     .pre, .next{
  //       padding:10px 10px;
  //       color: #999999;
  //       cursor: pointer;
  //       position: relative;
  //       &:hover{
  //         color: #666666;
  //         .textLine{
  //           width: 55px;
  //           height: 2px;
  //           background: #898989;;
  //           position: absolute;
  //           left: 0;
  //           bottom: 0;
  //           animation: preNextLine 0.8s;
  //         }
  //       }
  //     }
  //     .line{
  //       padding: 10px 0;
  //       color: #999999;
  //     }
  //   }
  // }
  // .contactWrap{
  //   display: flex;
  //   align-items: center;
  //   padding-right: 100px;
  //   .text{
  //     position: relative;
  //     width: 120px;
  //     text-align: center;
  //     color: #999999;
  //     font-size: 24px;
  //     cursor: pointer;
  //     transform: rotate(90deg);
  //     &:hover{
  //       color: #666666;
  //       .textLine{
  //         width: 120px;
  //         height: 2px;
  //         background: #666666;
  //         position: absolute;
  //         left: 0;
  //         bottom: 0;
  //         animation: contactLine 0.8s;
  //       }
  //     }
  //   }
  // }
}
@keyframes projectLine
{
  from {width: 0px;}
  to {width: 80px;}
}
</style>
