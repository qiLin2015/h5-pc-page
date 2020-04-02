<template>
  <div class="productDetailForm" v-if="ruleForm.singleId">
    <el-form status-icon :model="ruleForm" ref="ruleForm" label-width="140px" size="small">
      <el-row class="headerTitle">一、文字描述</el-row>
      <el-container>
        <el-main>
          <el-row>
            <el-form-item label="第一段内容">
              <el-input type="textarea" autosize v-model="ruleForm.detail.textInfor.oneLine"></el-input>
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item label="第二段内容">
              <el-input type="textarea" autosize v-model="ruleForm.detail.textInfor.twoLine"></el-input>
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item label="第三段内容">
              <el-input type="textarea" autosize v-model="ruleForm.detail.textInfor.threeLine"></el-input>
            </el-form-item>
          </el-row>
        </el-main>
      </el-container>
      <el-row class="headerTitle">一、图片配置</el-row>
      <el-container>
        <el-main>
          <el-row>
            <el-col :span="18" :offset="4" class="borderImg">
              <el-form-item label>
                <UploadFile :parent.sync="ruleForm.detail.imageInfor.imgSrcOne"></UploadFile>
                <AdminImageSizeTip width="785" height="485"></AdminImageSizeTip>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8" :offset="4" class="borderImg">
              <el-form-item label>
                <UploadFile :parent.sync="ruleForm.detail.imageInfor.imgSrcTwo"></UploadFile>
                <AdminImageSizeTip width="250" height="310"></AdminImageSizeTip>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8" :offset="12" class="borderImg">
              <el-form-item label>
                <UploadFile :parent.sync="ruleForm.detail.imageInfor.imgSrcThree"></UploadFile>
                <AdminImageSizeTip width="250" height="310"></AdminImageSizeTip>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24" class="borderImg">
              <el-form-item label>
                <UploadFile :parent.sync="ruleForm.detail.imageInfor.imgSrcFour"></UploadFile>
                <AdminImageSizeTip width="960" height="540"></AdminImageSizeTip>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8" :offset="4" class="borderImg">
              <el-form-item label>
                <UploadFile :parent.sync="ruleForm.detail.imageInfor.imgSrcFive"></UploadFile>
                <AdminImageSizeTip width="250" height="310"></AdminImageSizeTip>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8" :offset="12" class="borderImg">
              <el-form-item label>
                <UploadFile :parent.sync="ruleForm.detail.imageInfor.imgSrcSix"></UploadFile>
                <AdminImageSizeTip width="250" height="310"></AdminImageSizeTip>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="18" class="borderImg">
              <el-form-item label>
                <UploadFile :parent.sync="ruleForm.detail.imageInfor.imgSrcSevern"></UploadFile>
                <AdminImageSizeTip width="785" height="485"></AdminImageSizeTip>
              </el-form-item>
            </el-col>
          </el-row>
        </el-main>
      </el-container>

      <el-row class="btnAction">
        <el-button type="primary" size="medium" @click="handelSubmit">确定上传详情配置信息</el-button>
        <el-button size="medium" @click="handelCancel">取消</el-button>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import UploadFile from '@/page/components/UploadFile';
import AdminImageSizeTip from '@/page/components/AdminImageSizeTip';
export default {
  props: {
    projectItemInfor: {
      type: Object,
      default: () => {},
    },
    singleDetail: {
      type: Object,
      default: () => ({
        textInfor: {
          oneLine: '',
          twoLine: '',
          threeLine: '',
        },
        imageInfor: {
          imgSrcOne: '',
          imgSrcTwo: '',
          imgSrcThree: '',
          imgSrcFour: '',
          imgSrcFive: '',
          imgSrcSix: '',
          imgSrcSevern: '',
        },
      }),
    },
  },
  components: {
    UploadFile,
    AdminImageSizeTip,
  },
  data() {
    return {
      ruleForm: {
        textInfor: {
          oneLine: '',
          twoLine: '',
          threeLine: '',
        },
        imageInfor: {
          imgSrcOne: '',
          imgSrcTwo: '',
          imgSrcThree: '',
          imgSrcFour: '',
          imgSrcFive: '',
          imgSrcSix: '',
          imgSrcSevern: '',
        },
      },
    };
  },
  mounted() {
    this.render();
  },
  methods: {
    render() {
      this.ruleForm = this.singleDetail;
      console.log('this.singleDetail', this.singleDetail);
    },
    handelSubmit() {
      console.log('this.projectItemInfor', this.projectItemInfor);
      let itemUpdate = this.projectItemInfor.children.map(child => {
        if (child.singleId === this.singleDetail.singleId) {
          child = this.ruleForm;
        }
        return child;
      });
      this.$emit('onSuccessSingle', itemUpdate);
    },
    handelCancel() {
      this.$emit('cancelProductDiago');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
.productDetailForm /deep/ {
  .headerTitle {
    background: #eeeeee;
    display: flex;
    align-items: center;
    height: 30px;
    padding-left: 20px;
  }
  .borderImg {
    border: 2px dashed #eeeeee;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100px;
    .el-form-item__content {
      margin-left: 0 !important;
    }
  }
  .el-row {
    margin-bottom: 20px;
  }
  .btnAction {
    display: flex;
    justify-content: center;
  }
}
</style>
