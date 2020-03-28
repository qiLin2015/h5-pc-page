<template>
  <div class="singleDetailWrap">
    <MenuHeader></MenuHeader>
    <div class="detailWrap">
      <div class="headerTitle fullWidth" v-if="projectType === 'Commercial'"><div class="aniTitle">Commercial</div></div>
      <div class="headerTitle fullWidth" v-if="projectType === 'Residential'"><div class="aniTitle">Residential</div></div>
      <div class="headerTitle fullWidth" v-if="projectType === 'Deluxe'"><div class="aniTitle">Deluxe</div></div>
      <div class="detailText fullWidth">
        <div v-if="detailInfor.textInfor && detailInfor.textInfor.oneLine">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{detailInfor.textInfor.oneLine}}</div>
        <div v-if="detailInfor.textInfor && detailInfor.textInfor.twoLine">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{detailInfor.textInfor.twoLine}}</div>
        <div v-if="detailInfor.textInfor && detailInfor.textInfor.threeLine">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{detailInfor.textInfor.threeLine}}</div>
      </div>

      <div class="oneWrap fullWidth">
        <div class="oneImgWrap" v-if="detailInfor.imgSrcOne">
          <div class="animText oneText" v-if="projectType === 'Commercial'">C</div>
          <div class="animText oneText" v-if="projectType === 'Residential'">R</div>
          <div class="animText oneText" v-if="projectType === 'Deluxe'">D</div>
          <img class="img" :src="detailInfor.imgSrcOne" alt="">
        </div>
      </div>

      <div class="twoWrap fullWidth" v-if="detailInfor.imgSrcTwo">
        <div class="twoImgWrap">
          <div class="animText twoText" v-if="projectType === 'Commercial'">O</div>
          <div class="animText twoText" v-if="projectType === 'Residential'">E</div>
          <div class="animText twoText" v-if="projectType === 'Deluxe'">E</div>
          <img class="img" :src="detailInfor.imgSrcTwo" alt="">
        </div>
      </div>

      <div class="threeWrap fullWidth" v-if="detailInfor.imgSrcThree">
        <div class="threeImgWrap">
          <div class="animText threeText" v-if="projectType === 'Commercial'">M</div>
          <div class="animText threeText" v-if="projectType === 'Residential'">S</div>
          <div class="animText threeText" v-if="projectType === 'Deluxe'">L</div>
          <img class="img" :src="detailInfor.imgSrcThree" alt="">
        </div>
      </div>

      <div class="fourWrap fullWidth" v-if="detailInfor.imgSrcFour">
        <div class="fourImgWrap">
          <img class="img" :src="detailInfor.imgSrcFour" alt="">
        </div>
      </div>

      <div class="fiveWrap fullWidth" v-if="detailInfor.imgSrcFive">
        <div class="fiveImgWrap">
          <img class="img" :src="detailInfor.imgSrcFive" alt="">
        </div>
      </div>

      <div class="sixWrap fullWidth"  v-if="detailInfor.imgSrcSix">
        <div class="sixImgWrap">
          <div class="animText sixText" v-if="projectType === 'Commercial'">M</div>
          <div class="animText sixText" v-if="projectType === 'Residential'">I</div>
          <div class="animText sixText" v-if="projectType === 'Deluxe'">U</div>
          <img class="img" :src="detailInfor.imgSrcSix" alt="">
        </div>
      </div>

      <div class="severnWrap fullWidth flexStart" v-if="detailInfor.imgSrcSevern">
        <div class="severnImgWrap" style="margin-top: 100px;">
          <div class="animText severnText" v-if="projectType === 'Commercial'">E</div>
          <div class="animText severnText" v-if="projectType === 'Residential'">D</div>
          <div class="animText severnText" v-if="projectType === 'Deluxe'">X</div>
          <img class="img" :src="detailInfor.imgSrcSevern" alt="">
        </div>
      </div>

      <div class="moretext fullWidth" v-if="projectType === 'Commercial'"><div class="moreTextAbsolute"><span class="animMoreText">RIAL</span></div></div>
      <div class="moretext fullWidth" v-if="projectType === 'Residential'"><div class="moreTextAbsolute"><span class="animMoreText">ENTIAL</span></div></div>
      <div class="moretext fullWidth" v-if="projectType === 'Deluxe'"><div class="moreTextAbsolute"><span class="animMoreText">E</span></div></div>
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
        projectType: this.$route.query.projectType || 'Commercial', // 'com', 'res' , 'del'
        detailId: this.$route.query.detailId || '',
        detailInfor: {},
        imgSrc: require('@/img/singleDetail1.png'),
        imgSrc: require('@/img/singleDetail2.png'),
        imgSrc: require('@/img/singleDetail3.png'),
        imgSrc: require('@/img/singleDetail4.png'),
        imgSrc: require('@/img/singleDetail5.png'),
        imgSrc: require('@/img/singleDetail6.png'),
        imgSrc: require('@/img/singleDetail7.png'),
      }
  },
  mounted() {
    this.query();
  },
  methods: {
    query() {
      let maudeaInfor = JSON.parse(localStorage.getItem('maudeaInfor')) ;
      if(maudeaInfor && maudeaInfor.projects && maudeaInfor.projects.length) {
        let itemProject = maudeaInfor.projects.filter((item)=> item.title.toUpperCase() === this.projectType.toUpperCase());
        itemProject[0].children.forEach((item)=> {
          if(item.id === this.detailId) {
            this.detailInfor = item.detail
            console.log('this.detailInfor', this.detailInfor)
          }
        })
      }else {
        this.detailInfor = {};
        this.$router.push({name: 'Home'})
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
.singleDetailWrap{
  width: 100%;
  height: 100%;
  padding-top: 80px;
  .detailWrap{
    .fullWidth{
      width: 100%;
      box-sizing: border-box;
    }
    .animText{
      font-size: 150px;
      color: #cccccc;
      position: absolute;
      z-index: 10;
      // background-position: center;
      // -webkit-background-clip:text;
      // -webkit-text-fill-color:transparent;
      // -webkit-animation:cliptext 3s linear infinite;

    }
    .img{
      display: block;
      width: 100%;
    }
    .headerTitle{
      padding: 2% 0 2% 20%;
      font-size: 60px;
      color: #333333;
      font-family: DidotBold;
      .aniTitle{
        display: inline-block;
        // animation: scaleRotateTitle 1s 0.8s linear;
      }

    }
    .detailText{
      font-family: PingFangRegular;
      padding: 0 22% 2%;
      box-sizing: border-box;
      font-size: 12px;
      color: #333333;
      line-height: 30px;
    }
    .oneWrap, .severnWrap{
      display: flex;
      justify-content: flex-end;
      &.flexStart{
        justify-content: flex-start;
      }
      .oneImgWrap, .severnImgWrap{
        width: 80%;
        position: relative;
        .oneText{
          left: -5%;
          top: 20%;
          font-size: 135px;
          // animation: LeftTopText 3s 0.8s linear infinite;
        }
        .severnText{
          right: 0%;
          top: -3%;
          font-size: 225px;
          // animation: upDownFloat 3s 0.8s linear infinite;
        }
      }
    }

    .twoWrap, .fiveWrap{
      display: flex;
      margin-top: 100px;
      padding-left: 20%;
      .twoImgWrap, .fiveImgWrap{
        width: 30%;
        position: relative;
        .twoText{
          right: -20%;
          top: -20%;
          font-size: 150px;
          // animation: upDownFloat 3s 0.8s linear infinite;
        }
      }
    }

    .threeWrap, .sixWrap{
      display: flex;
      justify-content: flex-end;
      margin-top: -20px;
      padding-right: 20%;
      .threeImgWrap, .sixImgWrap{
        width: 30%;
        position: relative;
        .threeText{
          left: -60%;
          bottom: -25%;
          font-size: 225px;
          // animation: scaleRotateText 3s 0.8s linear infinite;
        }
        .sixText{
          left: -25%;
          top: -20%;
          font-size: 150px;
          // animation: LeftTopText 3s 0.8s linear infinite;
        }
      }
    }

    .fourWrap{
      display: flex;
      margin-top: 100px;
      .fourImgWrap{
        width: 100%;
      }
    }

    .moretext{
      font-size: 60px;
      color: #333333;
      position: relative;
      height: 200px;
      .moreTextAbsolute{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .animMoreText{
        // animation: scaleRotateText 5s 0.5s linear infinite;
      }
    }
  }
}
@keyframes LeftTopText{
  0%{
    left: -5%;
    top: 20%;
  }
  25%{
    left: -8%;
    top: 15%;
  }
  50%{
    left: -5%;
    top: 20%;
  }
  75%{
    left: -2%;
    top: 25%;
  }
  100%{
    left: -5%;
    top: 20%;
  }
}
@keyframes scaleRotateText{
  0%{
    -webkit-transform: translateY(0) scale(0);
    transform: translateY(0) scale(0);
  }
  25%{
    -webkit-transform: translateY(-50px) scale(0.5);
    transform: translateY(-50px) scale(0.5);
  }
  50%{
    -webkit-transform: translateY(0px) scale(0) rotateZ(180deg);
    transform: translateY(0px) scale(0) rotateZ(180deg);
  }
  75%{
    -webkit-transform: translateY(50px) scale(1.5);
    transform: translateY(50px) scale(1.5);
  }
  100%{
    -webkit-transform: translateY(0) scale(0);
    transform: translateY(0) scale(0);
  }
}

@keyframes scaleRotateTitle{
  0%{
    -webkit-transform: scale(1);
    transform: scale(1);
  }
   50%{
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  100%{
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes upDownFloat{
  0%{
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  25%{
    -webkit-transform: translateY(-50px);
    transform: translateY(-50px);
  }
  50%{
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
  }
  75%{
    -webkit-transform: translateY(50px);
    transform: translateY(50px);
  }
  100%{
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@media screen and (min-width: 480px) {
  .singleDetailWrap{

  }
}
@media screen and (max-width: 480px) {
  .singleDetailWrap{
    .detailWrap{
      .headerTitle{
        padding: 10px 30px 20px;
        font-size: 30px;
        font-family: DidotBold;
      }
      .detailText{
        font-family: PingFangRegular;
        padding: 0 30px 40px;
        line-height: 24px;
        font-size: 10px;
      }
      .animText{
        font-size: 100px !important;
      }
      .moretext{
        padding: 0;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .twoWrap, .fiveWrap{
        .twoImgWrap, .fiveImgWrap{
          width: 60%;
          position: relative;
        }
      }
      .threeWrap, .sixWrap{
        display: flex;
        justify-content: flex-end;
        margin-top: 80px;
        padding-right: 20%;
        .threeImgWrap, .sixImgWrap{
          width: 60%;
        }
      }
    }
  }
}

@keyframes cliptext{
  from { background-position: 0 0; }
  to { background-position: 100% 0; }
}
</style>
