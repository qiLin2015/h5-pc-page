<template>
  <div class="contactWrap">
    <MenuHeader colorType="black"></MenuHeader>
    <div class="contentWrap">
      <div class="leftWrap">
        <img class="imageCode" :src="contactInfor.codeImgSrc" alt />
      </div>
      <div class="rightWrap">
        <div class="text">
          <div class="contact">Contact</div>
          <div class="address">{{contactInfor.Address}}</div>
          <div class="tel">{{contactInfor.TeL}}</div>
          <div class="web">{{contactInfor.Web}}</div>
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
      contactInfor: {
        codeImgSrc: '',
        Address: '',
        TeL: '',
        Web: '',
      },
    };
  },
  mounted() {
    this.query();
  },
  methods: {
    query() {
      let maudeaInfor = JSON.parse(localStorage.getItem('maudeaInfor'));
      if (maudeaInfor && maudeaInfor.contact) {
        this.contactInfor = maudeaInfor.contact;
      } else {
        this.contactInfor = {};
        this.$router.push({ name: 'Home' });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
.contactWrap {
  width: 100%;
  background: #1b1818;
  color: #ffffff;
  .contentWrap {
    display: flex;
    justify-content: center;
    align-items: center;
    .leftWrap {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      flex: 1;
      .imageCode {
        width: 160px;
        height: 160px;
      }
    }
    .rightWrap {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      flex: 1;
      .text {
        // height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        position: relative;
        color: #999999;
        font-size: 14px;
        line-height: 20px;
      }
      .contact {
        color: #ffffff;
        font-size: 40px;
        line-height: 50px;
        margin-bottom: 20px;
      }
      .address {
        color: #ffffff;
        margin-bottom: 15px;
        font-family: PingFangRegular;
      }
      .tel {
        margin-bottom: 15px;
        font-family: PingFangRegular;
      }
      .web {
        font-family: PingFangRegular;
      }
    }
  }
}

@media screen and (min-width: 480px) {
}
@media screen and (max-width: 480px) {
  .contactWrap {
    min-height: 100vh;
    padding-top: 80px;
    box-sizing: border-box;
    .contentWrap {
      flex-direction: column;
      .leftWrap {
        width: 100%;
        height: auto;
        padding: 30px 80px;
        box-sizing: border-box;
      }
      .rightWrap {
        padding: 100px 30px 50px;
        height: auto;
        box-sizing: border-box;
        .contact {
          font-size: 30px;
          text-align: center;
        }
        .address {
          font-size: 12px;
          text-align: center;
        }
        .tel {
          font-size: 12px;
          text-align: center;
        }
        .web {
          font-size: 12px;
          text-align: center;
        }
      }
    }
  }
}
</style>
