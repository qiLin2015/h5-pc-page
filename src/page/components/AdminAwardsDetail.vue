<template>
  <div class="awardDetailForm">
      <el-form status-icon :model="ruleForm" ref="ruleForm" label-width="140px" size="small">
        <el-container>
          <el-main>
            <el-row>
              <el-col :span="10" :offset="2">
                <div class="borderImg width60">
                  <el-form-item label="">
                    <UploadFile :parent.sync="ruleForm.leftOne"></UploadFile>
                    <AdminImageSizeTip width="195" height="290"></AdminImageSizeTip>
                  </el-form-item>
                </div>
                <div class="borderImg width60">
                  <el-form-item label="">
                    <UploadFile :parent.sync="ruleForm.leftTwo"></UploadFile>
                    <AdminImageSizeTip width="180" height="270"></AdminImageSizeTip>
                  </el-form-item>
                </div>
                <div class="borderImg width80">
                  <el-form-item label="">
                    <UploadFile :parent.sync="ruleForm.leftThree"></UploadFile>
                    <AdminImageSizeTip width="360" height="530"></AdminImageSizeTip>
                  </el-form-item>
                </div>
                <div class="borderImg width60">
                  <el-form-item label="">
                    <UploadFile :parent.sync="ruleForm.leftFour"></UploadFile>
                    <AdminImageSizeTip width="220" height="330"></AdminImageSizeTip>
                  </el-form-item>
                </div>
              </el-col>
              <el-col :span="10" :offset="2">
                <div class="borderImg width80">
                  <el-form-item label="">
                    <UploadFile :parent.sync="ruleForm.rightOne"></UploadFile>
                    <AdminImageSizeTip width="295" height="435"></AdminImageSizeTip>
                  </el-form-item>
                </div>
                <div class="borderImg width60">
                  <el-form-item label="">
                    <UploadFile :parent.sync="ruleForm.rightTwo"></UploadFile>
                    <AdminImageSizeTip width="165" height="245"></AdminImageSizeTip>
                  </el-form-item>
                </div>
                <div class="borderImg width80">
                  <el-form-item label="">
                    <UploadFile :parent.sync="ruleForm.rightThree"></UploadFile>
                    <AdminImageSizeTip width="265" height="395"></AdminImageSizeTip>
                  </el-form-item>
                </div>
              </el-col>
            </el-row>
          </el-main>
        </el-container>

        <el-row class="btnAction">
          <el-button type="primary" size="medium" @click="handelSubmit">确定上传配置信息</el-button>
          <el-button size="medium" @click="handelCancel">取消</el-button>
        </el-row>
      </el-form>
  </div>
</template>

<script>
import UploadFile from '@/page/components/UploadFile';
import AdminImageSizeTip from '@/page/components/AdminImageSizeTip'

export default {
  components: {
    UploadFile,
    AdminImageSizeTip
  },
  data () {
    return {
      ruleForm: {
        leftOne: '',
        leftTwo: '',
        leftThree: '',
        leftFour: '',
        rightOne: '',
        rightTwo: '',
        rightThree: '',
      }
    }
  },
  mounted() {

  },
  methods: {
    handelSubmit() {
      this.$emit('onSuccessAwards', this.ruleForm);
    },
    handelCancel() {
      this.$emit('cancelAwardDiago')
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
.awardDetailForm /deep/{
  .borderImg{
    border: 2px dashed #EEEEEE;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100px;
    margin-bottom: 20px;
    .el-form-item__content{
      margin-left: 0 !important;
    }
    &.width60{
      width: 60%;
    }
    &.width80{
      width: 80%;
      height: 150px;
    }
  }
  .el-row{
    margin-bottom: 20px;
  }
  .btnAction{
    display: flex;
    justify-content: center;
  }
}
</style>
