<template>
  <el-upload
  class="upload-file"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :before-remove="beforeRemove"
  multiple
  :limit="1"
  :on-exceed="handleExceed"
  :file-list="fileList"
  list-type="picture">
  <el-button size="small" type="primary" v-if="!(fileList && fileList.length)">{{btnText}}</el-button>
</el-upload>
</template>

<script>
import Vue from 'vue';
export default {
  mame: 'UploadFile',
  props: {
    btnText: {
      type: String,
      default: '点击上传'
    }
  },
  data() {
    return {
      fileList: []
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.upload-file /deep/{
  display: flex;
  padding-left: 20px;
  .el-upload__tip{
    padding-left: 30px;
  }
  .el-upload-list{
    display: flex;
    align-items: center;
    .el-upload-list__item{
      margin-top: 0 !important;
    }
  }
  .el-upload-list__item:first-child{
    margin-top: 0;
  }
}
</style>
