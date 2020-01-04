<template>
  <div class="titleWrap">
    <div class="menuTitleWrap">
      <div class="contentAbsolute">
        <div class="home title">Home<div class="homeBg itemBg"><img src="@/img/menu1.png" alt="" class="image"></div></div>
        <div class="project title">Projects<div class="projectBg itemBg"><img src="@/img/demo1.png" alt="" class="image"></div></div>
        <div class="about title">About<div class="aboutBg itemBg"><img src="@/img/demo2.png" alt="" class="image"></div></div>
        <div class="award title">Awards<div class="awardBg itemBg"><img src="@/img/demo3.png" alt="" class="image"></div></div>
        <div class="contact title">Contact<div class="contactBg itemBg"><img src="@/img/demo4.png" alt="" class="image"></div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
.titleWrap{
  display: flex;
  align-items: center;
  flex: 1;
  width: 100%;
  padding: 0 10%;
  box-sizing: border-box;
  .menuTitleWrap{
    width: 100%;
    height: 40px;
    position: relative;
    .contentAbsolute{
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      height: 40px;
      display: flex;
      justify-content: space-around;
      z-index: 1000;
      background: transparent;
      color: #EEEEEE;
    }
    .title{
      font-size: 40px;
      width: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover{
        cursor: pointer;
        color: red;
        .itemBg{
          opacity: 1;
          animation: imgRotate 1s;
        }
      }
    }
    .itemBg{
      position: fixed;
      left: 0;
      right: 0;
      top: 85px;
      bottom: 0;
      z-index: -100;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: all 1s linear;
      .image{
        width: 23%;
        height: auto;
        display: block;
      }
    }
    .home{
      // &:hover{
      //   .itemBg{
      //     opacity: 1;
      //     animation: imgRotate 1s;
      //   }
      // }
    }
    .projectBg{

    }
  }
}

@keyframes imgRotate{
  0%{
    transform: rotateZ(-45deg) scale(0.5);
    opacity: 0;
  }
  100%{
    transform: rotateZ(0deg) scale(1);
    opacity: 1;
  }
}
</style>
