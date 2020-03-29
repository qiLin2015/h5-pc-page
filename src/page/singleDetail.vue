<template>
  <div class="singleDetailWrap">
    <MenuHeader></MenuHeader>
    <div class="detailWrap">
      <div class="preNextWrap">
        <div class="preNext">
          <div class="pre" @click="handelNav('pre')">
            PRE PROJECT
            <div class="textLine"></div>
          </div>
          <div class="line" @click="handelNav('return')">
            RETURN
            <div class="textLine"></div>
          </div>
          <div class="next" @click="handelNav('next')">
            NEXT PROJECT
            <div class="textLine"></div>
          </div>
        </div>
      </div>

      <div class="headerTitle fullWidth">
        <div class="aniTitle">{{itemProject.title}}</div>
      </div>
      <div class="detailText fullWidth">
        <div
          v-if="detailInfor.textInfor && detailInfor.textInfor.oneLine"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{detailInfor.textInfor.oneLine}}</div>
        <div
          v-if="detailInfor.textInfor && detailInfor.textInfor.twoLine"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{detailInfor.textInfor.twoLine}}</div>
        <div
          v-if="detailInfor.textInfor && detailInfor.textInfor.threeLine"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{detailInfor.textInfor.threeLine}}</div>
      </div>

      <div class="oneWrap fullWidth">
        <div class="oneImgWrap" v-if="detailInfor.imgSrcOne">
          <div class="animText oneText">{{itemProject.title.slice(0, 1)}}</div>
          <img class="img" :src="detailInfor.imgSrcOne" alt />
        </div>
      </div>

      <div class="twoWrap fullWidth" v-if="detailInfor.imgSrcTwo">
        <div class="twoImgWrap">
          <div class="animText twoText">{{itemProject.title.slice(1, 2)}}</div>
          <img class="img" :src="detailInfor.imgSrcTwo" alt />
        </div>
      </div>

      <div class="threeWrap fullWidth" v-if="detailInfor.imgSrcThree">
        <div class="threeImgWrap">
          <div class="animText threeText">{{itemProject.title.slice(2, 3)}}</div>
          <img class="img" :src="detailInfor.imgSrcThree" alt />
        </div>
      </div>

      <div class="fourWrap fullWidth" v-if="detailInfor.imgSrcFour">
        <div class="fourImgWrap">
          <img class="img" :src="detailInfor.imgSrcFour" alt />
        </div>
      </div>

      <div class="fiveWrap fullWidth" v-if="detailInfor.imgSrcFive">
        <div class="fiveImgWrap">
          <img class="img" :src="detailInfor.imgSrcFive" alt />
        </div>
      </div>

      <div class="sixWrap fullWidth" v-if="detailInfor.imgSrcSix">
        <div class="sixImgWrap">
          <div class="animText sixText">{{itemProject.title.slice(3, 4)}}</div>
          <img class="img" :src="detailInfor.imgSrcSix" alt />
        </div>
      </div>

      <div class="severnWrap fullWidth flexStart" v-if="detailInfor.imgSrcSevern">
        <div class="severnImgWrap" style="margin-top: 100px;">
          <div class="animText severnText">{{itemProject.title.slice(4, 5)}}</div>
          <img class="img" :src="detailInfor.imgSrcSevern" alt />
        </div>
      </div>

      <div class="moretext fullWidth">
        <div class="moreTextAbsolute">
          <span class="animMoreText">{{itemProject.title.slice(5, itemProject.title.length)}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuHeader from '@/page/components/MenuHeader';
export default {
  components: {
    MenuHeader,
  },
  data() {
    return {
      projectId: this.$route.query.projectId || '',
      singleId: this.$route.query.singleId || '',
      itemProject: { title: '' },
      detailInfor: {},
    };
  },
  mounted() {
    this.query();
  },
  methods: {
    query() {
      let maudeaInfor = JSON.parse(localStorage.getItem('maudeaInfor'));
      if (maudeaInfor && maudeaInfor.projects && maudeaInfor.projects.length) {
        this.itemProject = maudeaInfor.projects.filter(
          item => item.projectId === this.projectId,
        )[0];
        this.itemProject.children.forEach(item => {
          if (item.singleId === this.singleId) {
            this.detailInfor = item.detail;
            console.log('this.detailInfor', this.detailInfor);
          }
        });
      } else {
        this.detailInfor = {};
        this.$router.push({ name: 'Home' });
      }
    },
    handelNav(type) {
      if (type === 'return') {
        this.$router.push({
          name: 'ProjectSingle',
          query: {
            projectId: this.projectId,
          },
        });
      } else {
        let currentIndex = null;
        let preNextIndex = null;
        let singleId = null;

        this.itemProject.children.forEach((item, index) => {
          if (item.singleId === this.singleId) {
            currentIndex = index;
          }
        });

        if (type === 'pre') {
          preNextIndex =
            currentIndex <= 0 ? this.itemProject.children.length - 1 : currentIndex - 1;
        } else {
          preNextIndex = currentIndex >= this.itemProject.children.length ? 0 : currentIndex + 1;
        }

        this.itemProject.children.forEach((item, index) => {
          if (index === preNextIndex) {
            singleId = item.singleId;
          }
        });

        this.singleId = singleId;
        this.query();
        // this.$router.replace({
        //   name: 'SingleDetail',
        //   query: {
        //     projectId: this.projectId,
        //     singleId: singleId,
        //   },
        // });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
.singleDetailWrap {
  width: 100%;
  height: 100%;
  padding-top: 80px;
  .detailWrap {
    position: relative;
    .fullWidth {
      width: 100%;
      box-sizing: border-box;
    }
    .animText {
      font-size: 150px;
      color: #cccccc;
      position: absolute;
      z-index: 10;
      // background-position: center;
      // -webkit-background-clip:text;
      // -webkit-text-fill-color:transparent;
      // -webkit-animation:cliptext 3s linear infinite;
    }
    .img {
      display: block;
      width: 100%;
    }
    .headerTitle {
      padding: 2% 0 2% 20%;
      font-size: 60px;
      color: #333333;
      font-family: DidotBold;
      .aniTitle {
        display: inline-block;
        // animation: scaleRotateTitle 1s 0.8s linear;
      }
    }
    .detailText {
      font-family: PingFangRegular;
      padding: 0 22% 2%;
      box-sizing: border-box;
      font-size: 12px;
      color: #333333;
      line-height: 30px;
    }
    .oneWrap,
    .severnWrap {
      display: flex;
      justify-content: flex-end;
      &.flexStart {
        justify-content: flex-start;
      }
      .oneImgWrap,
      .severnImgWrap {
        width: 80%;
        position: relative;
        .oneText {
          left: -5%;
          top: 20%;
          font-size: 135px;
          // animation: LeftTopText 3s 0.8s linear infinite;
        }
        .severnText {
          right: 0%;
          top: -3%;
          font-size: 225px;
          // animation: upDownFloat 3s 0.8s linear infinite;
        }
      }
    }

    .twoWrap,
    .fiveWrap {
      display: flex;
      margin-top: 100px;
      padding-left: 20%;
      .twoImgWrap,
      .fiveImgWrap {
        width: 30%;
        position: relative;
        .twoText {
          right: -20%;
          top: -20%;
          font-size: 150px;
          // animation: upDownFloat 3s 0.8s linear infinite;
        }
      }
    }

    .threeWrap,
    .sixWrap {
      display: flex;
      justify-content: flex-end;
      margin-top: -20px;
      padding-right: 20%;
      .threeImgWrap,
      .sixImgWrap {
        width: 30%;
        position: relative;
        .threeText {
          left: -60%;
          bottom: -25%;
          font-size: 225px;
          // animation: scaleRotateText 3s 0.8s linear infinite;
        }
        .sixText {
          left: -25%;
          top: -20%;
          font-size: 150px;
          // animation: LeftTopText 3s 0.8s linear infinite;
        }
      }
    }

    .fourWrap {
      display: flex;
      margin-top: 100px;
      .fourImgWrap {
        width: 100%;
      }
    }

    .moretext {
      font-size: 60px;
      color: #333333;
      position: relative;
      height: 200px;
      .moreTextAbsolute {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .animMoreText {
        // animation: scaleRotateText 5s 0.5s linear infinite;
      }
    }
  }
}

.preNextWrap {
  position: absolute;
  top: 200px;
  left: -90px;
  display: flex;
  align-items: center;
  padding-left: 30px;
  font-family: CenturyGothic;
  .preNext {
    position: relative;
    font-size: 12px;
    display: flex;
    justify-content: space-around;
    transform: rotate(-90deg);
    .pre,
    .next {
      padding: 10px 0px;
      color: #999999;
      cursor: pointer;
      position: relative;
      &:hover {
        color: #666666;
        .textLine {
          width: 80px;
          height: 2px;
          background: #898989;
          position: absolute;
          left: 0;
          bottom: 0;
          animation: preNextLine 0.8s;
        }
      }
    }
    .line {
      padding: 10px 0px;
      margin: 0 20px;
      color: #999999;
      cursor: pointer;
      position: relative;
      &:hover {
        color: #666666;
        .textLine {
          width: 45px;
          height: 2px;
          background: #898989;
          position: absolute;
          left: 0;
          bottom: 0;
          animation: Line 0.8s;
        }
      }
    }
  }
}
@keyframes preNextLine {
  from {
    width: 0px;
  }
  to {
    width: 80px;
  }
}
@keyframes Line {
  from {
    width: 0px;
  }
  to {
    width: 45px;
  }
}

@keyframes LeftTopText {
  0% {
    left: -5%;
    top: 20%;
  }
  25% {
    left: -8%;
    top: 15%;
  }
  50% {
    left: -5%;
    top: 20%;
  }
  75% {
    left: -2%;
    top: 25%;
  }
  100% {
    left: -5%;
    top: 20%;
  }
}
@keyframes scaleRotateText {
  0% {
    -webkit-transform: translateY(0) scale(0);
    transform: translateY(0) scale(0);
  }
  25% {
    -webkit-transform: translateY(-50px) scale(0.5);
    transform: translateY(-50px) scale(0.5);
  }
  50% {
    -webkit-transform: translateY(0px) scale(0) rotateZ(180deg);
    transform: translateY(0px) scale(0) rotateZ(180deg);
  }
  75% {
    -webkit-transform: translateY(50px) scale(1.5);
    transform: translateY(50px) scale(1.5);
  }
  100% {
    -webkit-transform: translateY(0) scale(0);
    transform: translateY(0) scale(0);
  }
}

@keyframes scaleRotateTitle {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes upDownFloat {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  25% {
    -webkit-transform: translateY(-50px);
    transform: translateY(-50px);
  }
  50% {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
  }
  75% {
    -webkit-transform: translateY(50px);
    transform: translateY(50px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@media screen and (min-width: 480px) {
  .singleDetailWrap {
  }
}
@media screen and (max-width: 480px) {
  .singleDetailWrap {
    .detailWrap {
      .preNextWrap {
        display: none;
      }
      .headerTitle {
        padding: 10px 30px 20px;
        font-size: 30px;
        font-family: DidotBold;
      }
      .detailText {
        font-family: PingFangRegular;
        padding: 0 30px 40px;
        line-height: 24px;
        font-size: 10px;
      }
      .animText {
        font-size: 100px !important;
      }
      .moretext {
        padding: 0;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .twoWrap,
      .fiveWrap {
        .twoImgWrap,
        .fiveImgWrap {
          width: 60%;
          position: relative;
        }
      }
      .threeWrap,
      .sixWrap {
        display: flex;
        justify-content: flex-end;
        margin-top: 80px;
        padding-right: 20%;
        .threeImgWrap,
        .sixImgWrap {
          width: 60%;
        }
      }
    }
  }
}

@keyframes cliptext {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 100% 0;
  }
}
</style>
