<template>
  <div>
    <div class="projectSingleWrap pcBlock">
      <MenuHeader></MenuHeader>
      <div class="leftWrap">
        <div class="project" @click="goToProject">All Project<div class="textLine"></div></div>
        <div class="title">{{projectType}}</div>
        <div @click="goToProject"><img class="closeImg" src="@/img/closeLine.png" alt=""></div>
      </div>

      <div class="singleSwiper">
        <div class="swiper-container" id="singleSwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in swiperList" :key="index" @click="handelGoTo(item)">
              <div class="imgWrap">
                <img class="img" :src="item.imgSrc" alt="">
                <div class="imgBottom">
                  <div class="title">{{item.title}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="prebtn btn" @click="handelNav('pre')"><i class="el-icon-d-arrow-left"></i></div> -->
        <!-- <div class="nextBtn btn" @click="handelNav('next')"><i class="el-icon-d-arrow-right"></i></div> -->
      </div>
    </div>

    <div class="mobileBlock">
      <MenuHeader></MenuHeader>
      <div class="mobileSwiper">
        <div class="leftMobileWrap preNext">
          <div class="preNextContent" @click="handelNavMobile('pre')">
            <span class="marginRight">pre</span>
          </div>
        </div>

        <div class="swiper-container" id="mobileSwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in swiperList" :key="index" @click="handelGoTo(item)">
              <div class="imgWrap">
                <div class="imgTop">{{projectType}}</div>
                <img class="img" :src="item.imgSrc" alt="">
                <div class="imgBottom">
                  <div class="title">{{item.title}}</div>
                  <div class="index">{{handelNum(index + 1) + ' / ' + handelNum(swiperList.length)}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="rightMobileWrap preNext">
          <div class="preNextContent nextContent" @click="handelNavMobile('next')">
            <span class="marginRight">next</span>
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
      singleSwiper: null,
      mobileSwiper: null,
      projectType: this.$route.query.projectType || '',
      swiperList: [],
    }
  },
  mounted() {
    this.query()
  },
  methods: {
    query() {
      let maudeaInfor = JSON.parse(localStorage.getItem('maudeaInfor')) ;
      if(maudeaInfor && maudeaInfor.projects && maudeaInfor.projects.length) {
        let itemProject = maudeaInfor.projects.filter((item)=> item.title === this.projectType);
        if(itemProject && itemProject.length ) {
          this.swiperList = itemProject[0].children;
          debugger;
          this.render()

        }else {
          this.swiperList = [];
        }
      }else {
        this.swiperList = [];
        this.$router.push({name: 'Home'})
      }
    },
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
      });

      this.mobileSwiper = new Swiper ('#mobileSwiper', {
        loop: true, // 循环模式选项
        // autoplay: {
        //   delay: 3000,//1秒切换一次
        // },
      });
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
    },
    handelNavMobile(type) {
      if(type === 'next') {
        this.mobileSwiper.slideNext();
      }else {
        this.mobileSwiper.slidePrev();
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
        name: 'SingleDetail',
        query: {
          projectType: this.$route.query.projectType,
          productId: item.id || 'id'
        }
      })
    },
    goToProject() {
      this.$router.push({
        name: 'Projects'
      })
    },
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
      font-size: 12px;
      cursor: pointer;
      transform: rotate(-90deg);
      position: relative;
      text-transform: capitalize;
      letter-spacing: 2px;
      padding-bottom: 5px;
      font-family: CenturyGothic;
      &:hover{
        color: #666666;
        .textLine{
          width: 80px;
          height: 2px;
          background: #999999;
          position: absolute;
          left: 0;
          bottom: 0;
          animation: projectLine 0.8s;
        }
      }
    }
    .title{
      font-size: 50px;
      text-transform: uppercase;
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
      z-index: 10;
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
            .imgBottom{
              .title{
                font-family: CenturyGothic;
                font-size: 12px;
                color: #333333;
                padding: 5px 0;
                text-align: center;
                text-transform: capitalize;
              }
              .index{
                font-family: PingFangRegular;
                transform: scale(0.8);
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
@keyframes projectLine
{
  from {width: 0px;}
  to {width: 80px;}
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
            font-size: 20px;
            color: #000000;
            padding: 25px 0 5px;
            text-align: center;
            text-transform: capitalize;
          }
          .img{
            width: 100%;
            display: block;
          }
          .imgBottom{
            .title{
              font-family: PingFangRegular;
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
