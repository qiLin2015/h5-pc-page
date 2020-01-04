<template>
  <div class="productDetailForm">
      <el-form status-icon :model="ruleForm" ref="ruleForm" label-width="140px" size="small">
        <el-row class="headerTitle">一、文字描述</el-row>
        <el-container>
          <el-main>
            <el-row>
              <el-form-item label="第一段内容">
                <el-input type="textarea" autosize v-model="ruleForm.textInfor.textFirst"></el-input>
              </el-form-item>
            </el-row>
            <el-row>
              <el-form-item label="第二段内容">
                <el-input type="textarea" autosize v-model="ruleForm.textInfor.textSecont"></el-input>
              </el-form-item>
            </el-row>
            <el-row>
              <el-form-item label="第三段内容">
                <el-input type="textarea" autosize v-model="ruleForm.textInfor.textThird"></el-input>
              </el-form-item>
            </el-row>
          </el-main>
        </el-container>
        <el-row class="headerTitle">一、图片配置</el-row>
        <el-container>
          <el-main>
            <el-row>
              <el-col :span="18" :offset="4" class="borderImg">
                <el-form-item label="">
                  <UploadFile></UploadFile>
                  <AdminImageSizeTip width="785" height="485"></AdminImageSizeTip>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8" :offset="4" class="borderImg">
                <el-form-item label="">
                  <UploadFile></UploadFile>
                  <AdminImageSizeTip width="250" height="310"></AdminImageSizeTip>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8" :offset="12" class="borderImg">
                <el-form-item label="">
                  <UploadFile></UploadFile>
                  <AdminImageSizeTip width="250" height="310"></AdminImageSizeTip>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24" class="borderImg">
                <el-form-item label="">
                  <UploadFile></UploadFile>
                  <AdminImageSizeTip width="960" height="540"></AdminImageSizeTip>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8" :offset="4" class="borderImg">
                <el-form-item label="">
                  <UploadFile></UploadFile>
                  <AdminImageSizeTip width="250" height="310"></AdminImageSizeTip>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8" :offset="12" class="borderImg">
                <el-form-item label="">
                  <UploadFile></UploadFile>
                  <AdminImageSizeTip width="250" height="310"></AdminImageSizeTip>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="18" class="borderImg">
                <el-form-item label="">
                  <UploadFile></UploadFile>
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
import UploadFile from '@/page/components/UploadFile'
import AdminImageSizeTip from '@/page/components/AdminImageSizeTip'
export default {
  components: {
    UploadFile,
    AdminImageSizeTip
  },
  data () {
    return {
      ruleForm: {
        textInfor: {
          textFirst: '',
          textSecont: '',
          textThird: '',
        },
        imageInfor: {
          singleDetail1: '',
          singleDetail2: '',
          singleDetail3: '',
          singleDetail4: '',
          singleDetail5: '',
          singleDetail6: '',
        }
      }
    }
  },
  mounted() {

  },
  methods: {
    handelSubmit() {

    },
    handelCancel() {
      this.$emit('cancelProductDiago')
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
.productDetailForm /deep/{
  .headerTitle{
    background: #EEEEEE;
    display: flex;
    align-items: center;
    height: 30px;
    padding-left: 20px;
  }
  .borderImg{
    border: 2px dashed #EEEEEE;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100px;
    .el-form-item__content{
      margin-left: 0 !important;
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
