<template>
  <div class="singleDetailWrap">
    <MenuHeader></MenuHeader>
    <div class="detailWrap">
      <div class="headerTitle fullWidth">Commercial</div>
      <div class="detailText fullWidth">
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由毛明镜先生创立的MAUDEADesign（牧笛设计）成立于2011年，坐落于中国上海。致力于为国内不同行业的一流企业提供国际化的建筑、景观、室内、平面以及产品设计服务。公司项目遍布全国，并获得诸多国内外权威设计奖项，是一家具备多元化设计经验的合伙人制设计师事务所。</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MAUDEADesign秉承严谨的设计态度，打造充满深厚文化底蕴与丰富情感的内涵空间。结合全球化的设计理念，力求设计不是表象而是呼应心境的写照，从而细致丰富的将美学表达。</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MAUDEADesign经过短短几年的迅速发展，现有团队成员近 120 名，先后为 50 多家地产集团提供了室内设计及顾问服务，充分得到了万科、世茂、龙湖、华润置地、融信、金地、远洋、新城、旭辉、路劲、正荣、建发、中粮等国内百强地产商的高度认可。在亚太地区，事务所还与世界著名的建筑师合作，共同打造极具高水平及挑战性的尖端专案。</div>
      </div>

      <div class="oneWrap fullWidth">
        <div class="oneImgWrap">
          <div class="animText oneText">C</div>
          <img class="img" src="@/img/singleDetail1.png" alt="">
        </div>
      </div>

      <div class="twoWrap fullWidth">
        <div class="twoImgWrap">
          <div class="animText twoText">O</div>
          <img class="img" src="@/img/singleDetail2.png" alt="">
        </div>
      </div>

      <div class="threeWrap fullWidth">
        <div class="threeImgWrap">
          <div class="animText threeText">M</div>
          <img class="img" src="@/img/singleDetail3.png" alt="">
        </div>
      </div>

      <div class="fourWrap fullWidth">
        <div class="fourImgWrap">
          <img class="img" src="@/img/singleDetail4.png" alt="">
        </div>
      </div>

      <div class="fiveWrap fullWidth">
        <div class="fiveImgWrap">
          <img class="img" src="@/img/singleDetail5.png" alt="">
        </div>
      </div>

      <div class="sixWrap fullWidth">
        <div class="sixImgWrap">
          <div class="animText sixText">M</div>
          <img class="img" src="@/img/singleDetail6.png" alt="">
        </div>
      </div>

      <div class="severnWrap fullWidth flexStart">
        <div class="severnImgWrap" style="margin-top: 100px;">
          <div class="animText severnText">E</div>
          <img class="img" src="@/img/singleDetail6.png" alt="">
        </div>
      </div>

      <div class="moretext fullWidth">RIAL</div>
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

    }
  },
  mounted() {

  },
  methods: {
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
    }
    .animText{
      font-size: 150px;
      color: #cccccc;
      position: absolute;
      z-index: 10;
    }
    .img{
      display: block;
      width: 100%;
    }
    .headerTitle{
      width: 100%;
      padding: 2% 0 2% 20%;
      font-size: 60px;
      color: #333333;
    }
    .detailText{
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
          animation: oneTextAni 3s 0.8s linear infinite;
        }
        .severnText{
          right: -5%;
          top: -7%;
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
          top: -25%;
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
        }
        .sixText{
          left: -30%;
          top: -30%;
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
      padding: 100px 0;
      text-align: center;
      font-size: 60px;
      color: #333333;
      // -webkit-box-reflect: below 10px -webkit-gradient(liner, 0, 0, 0, 100%, from(transparent), color-stop(.5, transparent), to(rgba(3,3,3,.2)));
    }
  }
}
@keyframes oneTextAni{
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
</style>
