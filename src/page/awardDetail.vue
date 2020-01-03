<template>
  <div class="awardDetailWrap">
    <MenuHeader></MenuHeader>
    <div class="detailWrap">
      <div class="leftWrap">
        <div class="leftOneWrap">
          <div class="leftOneImgWrap">
            <img class="img" src="@/img/leftOne.png" alt="">
          </div>
        </div>

        <div class="leftTwoWrap">
          <div class="leftTwoImgWrap">
            <div class="animText leftOneText">W</div>
            <img class="img" src="@/img/leftTwo.png" alt="">
          </div>
        </div>

        <div class="leftThreeWrap">
          <div class="leftThreeImgWrap">
            <div class="animText leftTwoText">A</div>
            <img class="img" src="@/img/leftThree.png" alt="">
          </div>
        </div>

        <div class="leftFourWrap">
          <div class="leftFourImgWrap">
            <div class="animText leftThreeText">S</div>
            <img class="img" src="@/img/leftFour.png" alt="">
          </div>
        </div>

      </div>

      <div class="rightWrap">
        <div class="rightOneWrap">
          <div class="rightOneImgWrap">
            <div class="animText rightOneText">A</div>
            <img class="img" src="@/img/rightOne.png" alt="">
          </div>
        </div>
        <div class="rightTwoWrap">
          <div class="rightTwoImgWrap">
            <div class="animText rightTwoText">R</div>
            <img class="img" src="@/img/rightTwo.png" alt="">
          </div>
        </div>
        <div class="rightThreeWrap">
          <div class="rightThreeImgWrap">
            <div class="animText rightThreeText">D</div>
            <img class="img" src="@/img/rightThree.png" alt="">
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
.awardDetailWrap{
  padding-top: 150px;
  .animText{
    font-size: 70px;
    color: #cccccc;
    position: absolute;
    z-index: 10;
  //     -webkit-background-clip:text;
  // -webkit-text-fill-color:transparent;
  -webkit-text-stroke:1px #CCCCCC;color: transparent;
  }
  img{
    display: block;
    width: 100%;
  }
  .detailWrap{
    width: 100%;
    display: flex;
    .leftWrap{
      flex: 1;
      padding-right: 5%;
      box-sizing: border-box;
      .leftOneWrap{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        .leftOneImgWrap{
          width: 40%;
        }
      }
      .leftTwoWrap{
        width: 100%;
        padding-right: 10%;
        padding-top: 20%;
        box-sizing: border-box;
        display: flex;
        justify-content: flex-end;
        .leftTwoImgWrap{
          position: relative;
          width: 38%;
          .leftOneText{
            top: -40%;
            right: 0;
          }
        }
      }
      .leftThreeWrap{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        padding-top: 20%;
        .leftThreeImgWrap{
          width: 75%;
          margin-right: -10%;
          position: relative;
          .leftTwoText{
            top: -20%;
            left: 30%;
          }
        }
      }
      .leftFourWrap{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        padding-top: 15%;
        padding-bottom: 20%;
        .leftFourImgWrap{
          width: 45%;
          margin-right: -20%;
          position: relative;
          .leftThreeText{
            bottom: 0%;
            left: -30%;
          }
        }
      }
    }
    .rightWrap{
      flex: 1;
      padding-left: 5%;
      box-sizing: border-box;
      .rightOneWrap{
        width: 100%;
        display: flex;
        padding-top: 30%;
        .rightOneImgWrap{
          width: 80%;
          position: relative;
          .rightOneText{
            top: -20%;
            left: 50%;
          }
        }
      }
      .rightTwoWrap{
        width: 100%;
        display: flex;
        padding-top: 20%;
        .rightTwoImgWrap{
          width: 35%;
          position: relative;
          .rightTwoText{
            right: -30%;
            bottom: 0%;
          }
        }
      }
      .rightThreeWrap{
        width: 100%;
        display: flex;
        padding-top: 20%;
        .rightThreeImgWrap{
          width: 58%;
          position: relative;
          .rightThreeText{
            right: -10%;
            bottom: 10%;
          }
        }
      }
    }
  }
}
</style>
