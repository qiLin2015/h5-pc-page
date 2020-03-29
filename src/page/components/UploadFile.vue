<template>
  <el-upload
    class="upload-file"
    action="http://139.224.13.0/api/upload"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    :on-success="onSuccess"
    :on-error="onError"
    :multiple="false"
    :limit="1"
    :file-list="fileList"
    list-type="picture"
  >
    <el-button size="small" type="primary" v-if="!(fileList && fileList.length)">{{btnText}}</el-button>
  </el-upload>
</template>

<script>
import Vue from 'vue';
export default {
  mame: 'UploadFile',
  props: {
    parent: {
      type: String,
      default: '',
    },
    btnText: {
      type: String,
      default: '点击上传',
    },
  },
  computed: {
    fileList() {
      if (this.imgSrc) {
        return [{ name: this.imgName, url: this.imgSrc }];
      } else {
        return [];
      }
    },
  },
  data() {
    return {
      imgSrc: '',
      imgName: '',
    };
  },
  watch: {
    parent: function() {
      this.imgSrc = this.parent;
    },
    imgSrc: function(newVal) {
      let url =
        'http://139.224.13.0/static/20200329191609-b0c79720-71ae-11ea-b8ef-ef80d3429f7a.png';
      this.$emit('update:parent', url);
    },
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
      this.imgSrc = '';
      this.imgName = '';
    },
    handlePreview(file) {
      console.log(file);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除${file.name ? file.name : '此图片嘛～'}?`);
    },
    onSuccess(data, file, fileList) {
      console.log('file', file);
      console.log('data', data);
      if (file.response) {
        this.imgSrc = file.response.data.url || '';
        this.imgName = file.name;
      } else {
        this.imgSrc = '';
        this.imgName = '';
      }
    },
    onError(data) {
      this.$message.error('文件上传失败');
    },
  },
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.upload-file /deep/ {
  display: flex;
  padding-left: 20px;
  .el-upload__tip {
    padding-left: 30px;
  }
  .el-upload-list {
    display: flex;
    align-items: center;
    padding: 5px 0;
    .el-upload-list__item {
      margin-top: 0 !important;
    }
  }
  .el-upload-list__item:first-child {
    margin-top: 0;
  }
  .el-upload-list__item-name {
    margin-right: 10px;
  }
}
</style>
