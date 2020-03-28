<template>
  <div>
    <div class="projectWrap pcBlock">
      <MenuHeader></MenuHeader>
      <div class="preNextWrap">
        <div class="preNext">
          <div class="pre" @click="handelNav('pre')">pre<div class="textLine"></div></div>
          <div class="line">/</div>
          <div class="next" @click="handelNav('next')">next<div class="textLine"></div></div>
        </div>
      </div>
      <div class="productSwiper">
        <div class="swiper-container" id="productSwiper" v-show="productSwiperList && productSwiperList.length">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in productSwiperList" :key="index" @click="handelGoTo(item)">
              <div class="imgWrap">
                <img class="img" :src="item.imgSrc" alt="">
                <div class="imgBottom">
                  <div class="title">{{item.title}} space</div>
                  <div class="index">{{handelNum(index + 1) + ' / ' + handelNum(productSwiperList.length)}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="contactWrap" @click="goToContact">
        <div class="text">contact us<div class="textLine"></div></div>
      </div>
    </div>

    <div class="mobileBlock">
      <MenuHeader></MenuHeader>
      <div class="mobileSwiper">
        <div class="leftMobileWrap preNext">
          <div class="preNextContent" @click="handelNavMobile('pre')">
            <span>pre</span>
          </div>
        </div>

        <div class="swiper-container" id="mobileProjectSwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in productSwiperList" :key="index" @click="handelGoTo(item)">
              <div class="imgWrap">
                <img class="img" :src="item.imgSrc" alt="">
                <div class="imgBottom">
                  <div class="title">{{item.title}}</div>
                  <div class="index">{{handelNum(index + 1) + ' / ' + handelNum(productSwiperList.length)}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="rightMobileWrap preNext">
          <div class="preNextContent nextContent" @click="handelNavMobile('next')">
            <span>next</span>
          </div>
        </div>
      </div>
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
      productSwiper: null,
      mobileProjectSwiper: null,
      productSwiperList: [],

      imgSrc: require('@/img/project1.png'),
      imgSrc: require('@/img/project2.png'),
      imgSrc: require('@/img/project3.png'),
    }
  },
  mounted() {
    this.query()
  },
  methods: {
    query() {
      let maudeaInfor = JSON.parse(localStorage.getItem('maudeaInfor')) ;
      if(maudeaInfor && maudeaInfor.projects && maudeaInfor.projects.length) {
        this.productSwiperList = maudeaInfor.projects.map((item)=>{
          return {
            title: item.title,
            imgSrc: item.imgSrc
          }
        });
        setTimeout(()=>{
          this.render()
        }, 500)
      }else {
        this.productSwiperList = [];
        this.$router.push({name: 'Home'})
      }
    },
    render() {
      this.productSwiper = new Swiper ('#productSwiper', {
        loop: true, // 循环模式选项
        autoplay: {
          delay: 5000,//1秒切换一次
        },
        slidesPerView : 3,
        slidesPerGroup : 1,
      });
      this.mobileProjectSwiper = new Swiper('#mobileProjectSwiper', {
        loop: true, // 循环模式选项
        autoplay: true,
      });
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
    },
    handelNavMobile(type) {
      if(type === 'next') {
        console.log(this.mobileProjectSwiper)
        this.mobileProjectSwiper.slideNext();
      }else {
        this.mobileProjectSwiper.slidePrev();
      }
    },
    handelNum(val) {
      if(val < 10) {
        return `0${val}`
      }
      return `${val}`
    },
    handelGoTo(item) {
      this.$router.push({
        name: 'ProjectSingle',
        query: {
          projectType: item.title
        }
      })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
.projectWrap{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  .preNextWrap{
    display: flex;
    align-items: center;
    padding-left: 30px;
    font-family: CenturyGothic;
    .preNext{
      position: relative;
      font-size: 12px;
      display: flex;
      justify-content: space-around;
      transform: rotate(-90deg);
      .pre, .next{
        padding:10px 10px;
        color: #999999;
        cursor: pointer;
        position: relative;
        &:hover{
          color: #666666;
          .textLine{
            width: 35px;
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
    padding-right: 30px;
    .text{
      position: relative;
      width: 80px;
      text-align: center;
      color: #999999;
      font-family: CenturyGothic;
      font-size: 12px;
      text-transform: capitalize;
      cursor: pointer;
      transform: rotate(90deg);
      &:hover{
        color: #666666;
        .textLine{
          width: 80px;
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
    width: 75vw;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    .swiper-container {
      width: 100%;
      .swiper-wrapper{
        .swiper-slide{
          width: 25vw;
          display: flex;
          align-items: center;
          justify-content: center;
          &:hover{
            cursor: pointer;
          }
          .imgWrap{
            width: 20vw;
            display: flex;
            flex-direction: column;
            align-items: center;
            .imgTop{
              font-family: PingFangRegular;
              font-size: 16px;
              color: #999999;
              padding: 5px 0;
              text-align: center
            }
            img{
              width: 280px;
              height: auto;
              display: block;
            }
            .imgBottom{
              .title{
                font-family: CenturyGothic;
                font-size: 20px;
                color: #333333;
                padding: 5px 0;
                text-align: center;
                text-transform: capitalize;
              }
              .index{
                font-family: CenturyGothic;
                font-size: 12px;
                color: #999999;
                text-align: center
              }
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
  to {width: 80px;}
}
@keyframes preNextLine
{
  from {width: 0px;}
  to {width: 35px;}
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
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    .mobileSwiper{
      width: 100%;
      display: flex;
      align-items: center;
      .swiper-slide{
        width: 100%;
        padding: 0 5px;
        box-sizing: border-box;
        .imgWrap{
          width: 100%;
          .imgTop{
            font-family: PingFangRegular;
            font-size: 12px;
            color: #999999;
            padding: 10px 0;
            text-align: center
          }
          .img{
            width: 100%;
            display: block;
          }
          .imgBottom{
            .title{
              font-size: 18px;
              color: #000000;
              padding: 15px 0 5px;
              text-align: center;
              text-transform: capitalize;
            }
            .index{
              font-family: PingFangRegular;
              font-size: 12px;
              color: #999999;
              text-align: center
            }
          }
        }
      }
      .preNext{
        width: 50px;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        .preNextContent{
          display: flex;
          align-items: center;
          justify-content: center;
          height: 40px;
          width: 80px;
          transform: rotateZ(-90deg);
          font-size: 12px;
          color: #999999;
          font-family: CenturyGothic;
          &:hover{
            cursor: pointer;
            color: #666666;
          }
          &.nextContent{
            transform: rotateZ(90deg);
          }
        }
      }
    }
  }
}
</style>
