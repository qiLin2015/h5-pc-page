<template>
  <div class="aboutWrap">
    <MenuHeader></MenuHeader>
    <div class="contentWrap">
      <div class="leftWrap">
        <div class="text">Wally Mau has more than 20 years of interior design experience,Wally Mau has more than 20 years of interior design experience,Wally Mau has more than 20 years of interior design experience,Wally Mau has more than 20 years of interior design experience,</div>
      </div>
      <div class="rightWrap">
        <img class="img" src="@/img/about.png" alt="">
        <div class="middleText">Wally Mau</div>
      </div>
      <div class="centerText">Wally Mau</div>
      <div class="leftAbsolute" @click="handelGoTo('Project')">All Projects</div>
      <div class="rightAbsolute" @click="handelGoTo('Contact')">Contact Us</div>
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
    handelGoTo(name) {
      this.$router.push({
        name: name
      })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
.aboutWrap{
  width: 100%;
  height: 100vh;
  .contentWrap{
    width: 100%;
    display: flex;
    height: 100vh;
    position: relative;
    box-sizing: border-box;
    .leftWrap{
      display: flex;
      width: 50%;
      align-items: center;
      padding: 0 5% 0 10%;
      box-sizing: border-box;
      background: #FFFFFF;
      .text{
        font-family:Didot;
        font-size: 12px;
        line-height: 20px;
        color: #D3D3D3;
      }
    }
    .rightWrap{
      display: flex;
      width:50%;
      flex: 1;
      align-items: center;
      justify-content: center;
      background: rgba(250,250,250, 1);
      .img{
        width: 40%;
        height: auto;
      }
    }
    .centerText{
      position: absolute;
      top: 50%;
      left: 50%;
      text-transform: capitalize;
      transform: rotateZ(90deg);
      width: 200px;
      height: 50px;
      margin-top: -30px;
      margin-left: -100px;
      font-size: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .leftAbsolute{
      position: absolute;
      top: 50%;
      left: 0%;
      transform: rotateZ(-90deg);
      padding: 10px;
      color: #D3D3D3;
      margin-top: -25px;
      cursor: pointer;
    }
    .rightAbsolute{
      position: absolute;
      top: 50%;
      right: 0%;
      transform: rotateZ(90deg);
      padding: 10px;
      color: #D3D3D3;
      margin-top: -25px;
      cursor: pointer;
    }
  }
}
@media screen and (min-width: 480px) {
  .middleText{
    display: none;
  }
}
@media screen and (max-width: 480px) {
  .aboutWrap{
    .contentWrap{
      padding-top: 80px;
      flex-direction: column;
      .leftWrap{
        width: 100%;
        padding: 30px 40px;
      }
      .rightWrap{
        width: 100%;
        position: relative;
        margin-top: 30px;
        box-sizing: border-box;
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        background: rgba(250,250,250, 1);
        .middleText{
          position: absolute;
          top: 0;
          left: 50%;
          margin-left: -100px;
          margin-top: -25px;
          text-transform: capitalize;
          width: 200px;
          height: 50px;
          font-size: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .img{
          width: 60%;
          height: auto;
        }
      }
      .centerText{
        display: none;
      }
      .leftAbsolute{
        font-size: 12px;
        left: -8%;
        margin-top: -50px;
        text-transform: uppercase;
      }
      .rightAbsolute{
        font-size: 12px;
        right: -8%;
        margin-top: -50px;
        text-transform: uppercase;
      }
    }
  }
}


</style>
