<template>
  <div class="aboutWrap">
    <MenuHeader></MenuHeader>
    <div class="contentWrap">
      <div class="leftWrap">
        <div class="text">Wally Mau has more than 20 years of interior design experience,Wally Mau has more than 20 years of interior design experience,Wally Mau has more than 20 years of interior design experience,Wally Mau has more than 20 years of interior design experience,</div>
      </div>
      <div class="rightWrap">
        <img class="img" src="@/img/about.png" alt="">
      </div>
      <div class="centerText">Wally Mau</div>
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
.aboutWrap{
  width: 100%;
  height: 100vh;
  .contentWrap{
    width: 100%;
    display: flex;
    height: 100vh;
    position: relative;
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
        color: #666666;
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
  }
}
</style>
