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
            <div class="animText leftOneText animRotate" style="top: -40%; right: -30%">W</div>
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
            <div class="animText leftThreeText animRotate">S</div>
            <img class="img" src="@/img/leftFour.png" alt="">
          </div>
        </div>

      </div>

      <div class="rightWrap">
        <div class="rightOneWrap">
          <div class="rightOneImgWrap">
            <div class="animText rightOneText" style="top: -16%">A</div>
            <img class="img" src="@/img/rightOne.png" alt="">
          </div>
        </div>
        <div class="rightTwoWrap">
          <div class="rightTwoImgWrap">
            <div class="animText rightTwoText animRotate" style="right: -40%; bottom: -25%">R</div>
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

      <div class="mobileList">
        <div class="mobileItem"><img  class="image" src="@/img/leftOne.png" alt=""></div>
        <div class="mobileItem"><img  class="image" src="@/img/rightOne.png" alt=""></div>
        <div class="mobileItem"><img  class="image" src="@/img/leftTwo.png" alt=""></div>
        <div class="mobileItem"><img  class="image" src="@/img/rightTwo.png" alt=""></div>
        <div class="mobileItem"><img  class="image" src="@/img/leftThree.png" alt=""></div>
        <div class="mobileItem"><img  class="image" src="@/img/rightThree.png" alt=""></div>
        <div class="mobileItem"><img  class="image" src="@/img/leftFour.png" alt=""></div>
        <div class="mobileFixedtext">Awards</div>
      </div>

      <div class="leftFixed" @click="handelGoTo('Project')">All Projects</div>
      <div class="rightFixed"  @click="handelGoTo('Contact')">Contact Us</div>
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
.awardDetailWrap{
  padding-top: 150px;
  .animText{
    font-family: DidotBold;
    font-size: 120px;
    color: #D3D3D3;
    position: absolute;
    z-index: 10;
    animation: upDownFloat 3s 0.8s linear infinite;
  }
  .animRotate{
    animation: mobileText 5s 0.5s linear infinite;
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
  .leftFixed{
    position: fixed;
    top: 50%;
    left: 0%;
    transform: rotateZ(-90deg);
    padding: 10px;
    color: #D3D3D3;
    margin-top: -25px;
    cursor: pointer;
  }
  .rightFixed{
    position: fixed;
    top: 50%;
    right: 0%;
    transform: rotateZ(90deg);
    padding: 10px;
    color: #D3D3D3;
    margin-top: -25px;
    cursor: pointer;
  }
}

@keyframes upDownFloat{
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
@keyframes mobileText{
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

@media screen and (min-width: 480px) {
  .mobileList{
    display: none;
  }
}
@media screen and (max-width: 480px) {
  .awardDetailWrap{
    padding-top: 80px;
    .detailWrap{
      padding: 30px;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      .mobileList{
        display: flex;
        flex-direction: column;
        align-items: center;
        .mobileFixedtext{
          font-family: Didot;
          position: fixed;
          font-size: 45px;
          top: 50%;
          margin-top: -30px;
          animation: mobileText 5s 0.5s linear infinite;
          -webkit-text-fill-color: #FFFFFF;
          -webkit-text-stroke:1px #D3D3D3;
        }
      }
      .mobileItem{
        width: 85%;
        margin-bottom: 40px;
        .image{
          width: 100%;
          height:auto;
        }
      }
      .animText{
        display: none;
      }
      .leftWrap{
        display: none;
      }
      .rightWrap{
        display: none;
      }
      .leftFixed{
        font-size: 12px;
        left: -8%;
        margin-top: -50px;
        text-transform: uppercase;
        cursor: pointer;
      }
      .rightFixed{
        font-size: 12px;
        right: -8%;
        margin-top: -50px;
        text-transform: uppercase;
        cursor: pointer;
      }
    }
  }
}
</style>
