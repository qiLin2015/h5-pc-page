<template>
  <div class="contactWrap">
    <MenuHeader colorType="black"></MenuHeader>
    <div class="contentWrap">
      <div class="leftWrap">
        <img class="imageCode" src="@/img/code.png" alt="">
      </div>
      <div class="rightWrap">
        <div class="text">
          <div class="contact">Contact</div>
          <div class="address">20 / F, Block 17, 1333 Xinlong Road minhang District, Shanghai</div>
          <div class="tel">TEL / 086- 13524446243</div>
          <div class="web">WEB / www.modee- sh.com</div>
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
  background: #1b1818;
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
      .imageCode{
        width: 160px;
        height: 160px;
      }
    }
    .rightWrap{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      flex: 1;
      .text{
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        position: relative;
        color: #999999;
        font-size: 14px;
        line-height: 20px;
      }
      .contact{
        color: #FFFFFF;
        font-size: 40px;
        margin-bottom: 30px;
      }
      .address{
        color: #FFFFFF;
        margin-bottom: 20px;
        font-family: PingFangRegular;
      }
      .tel{
        margin-bottom: 20px;
        font-family: PingFangRegular;
      }
      .web{
        margin-bottom: 20px;
        font-family: PingFangRegular;
      }
    }
  }
}

@media screen and (min-width: 480px) {

}
@media screen and (max-width: 480px) {
  .contactWrap{
    min-height: 100vh;
    padding-top: 80px;
    box-sizing: border-box;
    .contentWrap{
      flex-direction: column;
      .leftWrap{
        width: 100%;
        height: auto;
        padding: 30px 80px;
      }
      .rightWrap{
        padding: 100px 30px 50px;
        height: auto;
        .contact{
          font-size: 30px;
          text-align: center;
        }
        .address{
          font-size: 12px;
          text-align: center;
        }
        .tel{
          font-size: 12px;
          text-align: center;
        }
        .web{
          font-size: 12px;
          text-align: center;
        }
      }
    }
  }
}
</style>
