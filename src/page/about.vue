<template>
  <div class="aboutWrap">
    <MenuHeader></MenuHeader>
    <div class="contentWrap">
      <div class="leftWrap">
        <div class="text">{{aboutInfor.textContent}}</div>
      </div>
      <div class="rightWrap">
        <img class="img" :src="aboutInfor.imgSrc" alt />
        <div class="middleText">{{aboutInfor.title}}</div>
      </div>

      <div class="centerText">{{aboutInfor.title}}</div>
      <div class="leftAbsolute" @click="handelGoTo('Projects')">All Projects</div>
      <div class="rightAbsolute" @click="handelGoTo('Contact')">Contact Us</div>
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
      aboutInfor: {
        textContent: '',
        title: '',
        imgSrc: '',
      },
    };
  },
  mounted() {
    this.query();
  },
  methods: {
    query() {
      let maudeaInfor = JSON.parse(localStorage.getItem('maudeaInfor'));
      if (maudeaInfor && maudeaInfor.about) {
        this.aboutInfor = maudeaInfor.about;
      } else {
        this.aboutInfor = { textContent: '', title: '', imgSrc: '' };
        this.$router.push({ name: 'Home' });
      }
    },
    handelGoTo(name) {
      this.$router.push({
        name: name,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
.aboutWrap {
  width: 100%;
  height: 100vh;
  .contentWrap {
    width: 100%;
    display: flex;
    height: 100vh;
    position: relative;
    box-sizing: border-box;
    .leftWrap {
      display: flex;
      width: 50%;
      align-items: center;
      padding: 0 5% 0 10%;
      box-sizing: border-box;
      background: #ffffff;
      font-family: CenturyGothic;
      .text {
        font-family: CenturyGothic;
        font-size: 12px;
        line-height: 20px;
        color: #d3d3d3;
      }
    }
    .rightWrap {
      display: flex;
      width: 50%;
      flex: 1;
      align-items: center;
      justify-content: center;
      background: rgba(250, 250, 250, 1);
      .img {
        width: 40%;
        height: auto;
      }
    }
    .centerText {
      position: absolute;
      top: 50%;
      left: 50%;
      text-transform: capitalize;
      transform: rotateZ(90deg);
      width: 300px;
      height: 50px;
      margin-top: -30px;
      margin-left: -150px;
      font-size: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .leftAbsolute {
      position: absolute;
      top: 50%;
      left: 0%;
      transform: rotateZ(-90deg);
      padding: 10px;
      color: #d3d3d3;
      margin-top: -25px;
      cursor: pointer;
      font-family: CenturyGothic;
    }
    .rightAbsolute {
      position: absolute;
      top: 50%;
      right: 0%;
      transform: rotateZ(90deg);
      padding: 10px;
      color: #d3d3d3;
      margin-top: -25px;
      cursor: pointer;
      font-family: CenturyGothic;
    }
  }
}
@media screen and (min-width: 480px) {
  .middleText {
    display: none;
  }
}
@media screen and (max-width: 480px) {
  .aboutWrap {
    .contentWrap {
      padding-top: 80px;
      flex-direction: column;
      .leftWrap {
        width: 100%;
        padding: 10px 40px;
        padding-top: 0;
        box-sizing: border-box;
      }
      .rightWrap {
        width: 100%;
        position: relative;
        margin-top: 15px;
        box-sizing: border-box;
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        background: rgba(250, 250, 250, 1);
        .middleText {
          position: absolute;
          top: 0;
          left: 50%;
          margin-left: -100px;
          margin-top: -20px;
          text-transform: capitalize;
          width: 200px;
          height: 50px;
          font-size: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .img {
          width: 60%;
          height: auto;
        }
      }
      .centerText {
        display: none;
      }
      .leftAbsolute {
        font-size: 12px;
        left: -8%;
        margin-top: -50px;
        text-transform: uppercase;
      }
      .rightAbsolute {
        font-size: 12px;
        right: -8%;
        margin-top: -50px;
        text-transform: uppercase;
      }
    }
  }
}
</style>
