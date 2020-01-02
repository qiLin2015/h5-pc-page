<template>
  <div class="contactWrap">
    <MenuHeader></MenuHeader>
    <div class="contentWrap">
      <div class="leftWrap">
        <p class="text">contact</p>
      </div>
      <div class="rightWrap">
        <div class="text">
          <div class="address">地址</div>
          <div class="tel">联系方式</div>
          <div class="http">www.https://</div>
          <div class="imgCode"></div>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
.contactWrap{
  width: 100%;
  background: #000000;
  color: #FFFFFF;
  .contentWrap{
    display: flex;
    justify-content: center;
    align-items: center;
    .leftWrap{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      flex: 1;
      font-size: 50px;
      .text{
        -webkit-box-reflect: below 10px -webkit-gradient(liner, 0, 0, 0, 100%, from(transparent), color-stop(.5, transparent), to(rgba(3,3,3,.2)));
        animation: leftWrapScale 5s 0.8s linear infinite;
      }
    }
    .rightWrap{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      flex: 1;
      .text{
        animation: rightWrapFloat 3s 0.8s linear infinite;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        position: relative;
        cursor: pointer;
        &:hover{
          .imgCode{
            position: absolute;
            top: -25px;
            left: -180px;
            width: 150px;
            height: 150px;
            background: red;
          }
        }
      }
    }
  }
}
@keyframes leftWrapScale{
  0%{
    // transform: scale(1);
    transform: rotateY(0deg);
  }
  25%{
    transform: rotateY(90deg);
    // transform: scale(1.2);
  }
  50%{
    transform: rotateY(0deg);
    // transform: scale(1);
  }
  75%{
    transform: rotateY(-90deg);
    // transform: scale(0.8);
  }
  100%{
    transform: rotateY(0deg);
    // transform: scale(1);
  }
}

@keyframes rightWrapFloat{
  0%{
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  25%{
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }
  50%{
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
  }
  75%{
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
  }
  100%{
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
</style>
