<template>
  <div class="adminWrap">
    <div class="loginWrap" v-if="!isShowAdmin">
      <el-row class="logo">
        <img src="@/img/logoBgWhite.png" alt />
      </el-row>
      <el-row class="welcome">欢迎登录后台管理</el-row>
      <el-row class="name">
        <el-input placeholder="请输入用户名" v-model.trim="name">
          <template slot="prepend">
            <i class="el-icon-user" style="font-size: 18px"></i>
          </template>
        </el-input>
      </el-row>
      <el-row class="pwd">
        <el-input placeholder="请输入密码" v-model.trim="pwd">
          <template slot="prepend">
            <i class="el-icon-lock" style="font-size: 18px"></i>
          </template>
        </el-input>
      </el-row>
      <el-row class="login">
        <el-button class="login-button" type="primary" @click="handelLogin">登录</el-button>
      </el-row>
    </div>

    <el-form
      v-if="isShowAdmin"
      status-icon
      :model="ruleForm"
      ref="ruleForm"
      label-width="140px"
      class="adminForm"
      size="small"
    >
      <el-header class="title">后台信息管理</el-header>
      <el-collapse v-model="activeCollapse">
        <el-collapse-item title="一、Menu菜单图片配置" name="menus">
          <el-container>
            <el-main>
              <el-row v-for="(item, index) in ruleForm.menus" :key="index">
                <el-col :span="6">
                  <el-form-item :label="(index+1).toString()">
                    <el-input v-model="item.title" disabled></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <UploadFile :parent.sync="item.imgInfor"></UploadFile>
                </el-col>
                图片路径：{{item.imgInfor}}
                <el-col :span="8">
                  <AdminImageSizeTip width="220" height="320"></AdminImageSizeTip>
                </el-col>
              </el-row>
            </el-main>
          </el-container>
        </el-collapse-item>

        <el-collapse-item title="二、Projects项目配置(项目、项目案例、案例-详情等)" name="menus">
          <el-container>
            <el-main>
              <div v-for="(project, index) in ruleForm.projects" :key="index" class="projectItem">
                <el-row>
                  <el-col :span="8">
                    <el-form-item :label="'项目' + (index+1)">
                      <el-input v-model.trim="project.title" placeholder="请输入项目名称"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <UploadFile :parent.sync="project.imgSrc"></UploadFile>
                  </el-col>
                  <el-col :span="5">
                    <AdminImageSizeTip width="165" height="245"></AdminImageSizeTip>
                  </el-col>
                  <el-col :span="3">
                    <el-button
                      v-if="ruleForm.projects.length > 1"
                      @click="handelDeleteProject(project, index)"
                      type="danger"
                      size="small"
                      icon="el-icon-delete"
                    >删除项目</el-button>
                  </el-col>
                </el-row>

                <el-row
                  style="background: #eeeeee; padding-left: 20px; margin-bottom: 20px;"
                >project-single</el-row>

                <el-row style="margin-bottom: 20px;">
                  <AdminImageSizeTip width="140" height="205"></AdminImageSizeTip>
                </el-row>

                <div
                  v-for="(child, childIndex) in project.childrens"
                  :key="childIndex"
                  class="singleItem"
                >
                  <el-row>
                    <el-col :span="9">
                      <el-form-item
                        :label="project.title + ' 项目案例 ' + (childIndex +1) + ''"
                        label-width="160px"
                      >
                        <el-input v-model.trim="child.title"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="8">
                      <UploadFile></UploadFile>
                    </el-col>
                    <el-col :span="4">
                      <el-button
                        v-if="child.title"
                        @click="handelProductDetail(project, child)"
                        size="small"
                      >点击上传详情图片</el-button>
                    </el-col>
                    <el-col :span="2">
                      <div class="addProject">
                        <el-button
                          v-if="project.childrens.length > 1"
                          @click="handelDeleteSingle(project, child)"
                          type="danger"
                          size="small"
                          icon="el-icon-delete"
                        >删除</el-button>
                      </div>
                    </el-col>
                  </el-row>
                </div>

                <div class="addProject">
                  <el-button
                    @click="handelAddSingle(project)"
                    type="primary"
                    size="small"
                    icon="el-icon-plus"
                  >增加项目案例</el-button>
                </div>
              </div>
              <el-button
                @click="handelAddProject"
                type="primary"
                size="small"
                icon="el-icon-plus"
              >增加项目</el-button>
            </el-main>
          </el-container>

          <div>
            <el-dialog :title="productDialogTitle" :visible.sync="productDialogVisible" width="50%">
              <span slot="footer" class="dialog-footer">
                <AdminSingleDetail
                  v-if="productDialogVisible"
                  :projectItemInfor="projectItemInfor"
                  :singleDetail="singleDetail"
                  @onSuccessSingle="handelSuccessSingle"
                  @cancelProductDiago="handelcancelProductDiago"
                ></AdminSingleDetail>
              </span>
            </el-dialog>
          </div>
        </el-collapse-item>

        <el-collapse-item title="三、Awards奖项图片配置" name="menus">
          <el-container>
            <el-main>
              <el-row>
                <el-col :span="12">
                  <el-button type="primary" @click="awardDialogVisible = true" size="small">点击上传奖项图片</el-button>
                </el-col>
              </el-row>
            </el-main>
          </el-container>
          <div>
            <el-dialog title="Awards奖项图片配置" :visible.sync="awardDialogVisible" width="50%">
              <span slot="footer" class="dialog-footer">
                <AdminAwardsDetail
                  v-if="awardDialogVisible"
                  @onSuccessAwards="handelSuccessAwards"
                  @cancelAwardDiago="handelcancelAwardDiago"
                ></AdminAwardsDetail>
              </span>
            </el-dialog>
          </div>
        </el-collapse-item>

        <el-collapse-item title="四、Contact配置" name="menus">
          <el-container>
            <el-main>
              <el-row>
                <el-col :span="20">
                  <el-form-item label="Address">
                    <el-input v-model="ruleForm.contact.Address"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="20">
                  <el-form-item label="TeL">
                    <el-input v-model="ruleForm.contact.TeL"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="20">
                  <el-form-item label="Web">
                    <el-input v-model="ruleForm.contact.Web"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="20">
                  <el-form-item label="二维码：">
                    <UploadFile :parent.sync="ruleForm.contact.codeImgSrc"></UploadFile>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-main>
          </el-container>
        </el-collapse-item>
      </el-collapse>

      <el-row class="btnAction">
        <el-button type="primary" size="medium" @click="handelSubmit">确定上传详情配置信息</el-button>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios';
import UploadFile from '@/page/components/UploadFile';
import AdminSingleDetail from '@/page/components/AdminSingleDetail';
import AdminAwardsDetail from '@/page/components/AdminAwardsDetail';
import AdminImageSizeTip from '@/page/components/AdminImageSizeTip';

const projectItem = {
  title: '',
  imgSrc: '',
  childrens: [
    {
      title: '',
      imgSrc: '',
      detail: {
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
    },
  ],
};
const singleProject = {
  title: '',
  imgSrc: '',
  detail: {
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
export default {
  components: {
    UploadFile,
    AdminImageSizeTip,
    AdminSingleDetail,
    AdminAwardsDetail,
  },
  data() {
    return {
      name: '',
      pwd: '',
      isShowAdmin: true,
      activeCollapse: ['menus'],
      productDialogVisible: false,
      productDialogTitle: '详情页图片配置',
      awardDialogVisible: false,
      projectItemInfor: {}, // 增加项目
      singleDetail: {}, // 项目详情
      ruleForm: {
        menus: [
          {
            title: 'Home',
            imgSrc: '',
          },
          {
            title: 'Projects',
            imgSrc: '',
          },
          {
            title: 'About',
            imgSrc: '',
          },
          {
            title: 'Awards',
            imgSrc: '',
          },
          {
            title: 'Contact',
            imgSrc: '',
          },
        ],
        projects: [],
        awards: {},
        contact: {
          codeImgSrc: '',
          Address: '',
          TeL: '',
          Web: '',
        },
      },
    };
  },
  methods: {
    // 登录
    handelLogin() {
      if (!this.name) {
        this.$message.error('请输入用户名');
        return;
      }
      if (!this.pwd) {
        this.$message.error('请输入登录密码');
        return;
      }
      if (this.name !== 'maudea') {
        this.$message.error('用户名不正确，请输入正确的用户名!');
        return;
      }
      if (this.pwd !== 'pwd123') {
        this.$message.error('密码不正确，请输入正确的登录密码!');
        return;
      }
      this.$message.success('登录成功～');
      setTimeout(() => {
        this.isShowAdmin = true;
      }, 2000);
    },
    // 增加项目
    handelAddProject() {
      let item = JSON.parse(JSON.stringify(projectItem));
      this.ruleForm.projects.push(item);
      this.ruleForm.projects = this.ruleForm.projects.map((item, index) => {
        item.childrens = item.childrens.map((child, childIndex) => {
          child = { ...child, singleId: `${childIndex + 1}` };
          return child;
        });
        item = { ...item, projectId: `${index + 1}` };
        return item;
      });
      console.log('this.ruleForm.projects 增加项目', this.ruleForm.projects);
    },
    // 删除项目
    handelDeleteProject(project, index) {
      this.$confirm(`确定删除项目:${project.title}`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true,
      }).then(() => {
        this.ruleForm.projects = this.ruleForm.projects.filter(
          (item, itemIndex) => item.projectId !== project.projectId,
        );
        this.$message({ type: 'success', message: '删除成功!' });
      });
    },
    // 添加项目案例
    handelAddSingle(project) {
      this.ruleForm.projects.forEach((item, index) => {
        if (project.projectId === item.projectId) {
          let singleItem = JSON.parse(JSON.stringify(singleProject));
          item.childrens.push(singleItem);
          item.childrens = item.childrens.map((single, singleIndex) => {
            single.singleId = `${singleIndex + 1}`;
            return single;
          });
        }
      });
    },
    // 删除项目案例
    handelDeleteSingle(project, child) {
      this.ruleForm.projects.forEach((itemProject, index) => {
        if (project.projectId === itemProject.projectId) {
          this.$confirm(`确定删除案例:${child.title}`, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
            center: true,
          }).then(() => {
            console.log('itemProject before', itemProject.childrens);
            itemProject.childrens = itemProject.childrens.filter(
              single => single.singleId !== child.singleId,
            );
            console.log('itemProject after', itemProject.childrens);
            this.$message({ type: 'success', message: '删除成功!' });
          });
        }
      });
    },
    // 案例详情页面
    handelProductDetail(product, child) {
      this.productDialogVisible = true;
      this.projectItemInfor = product;
      this.singleDetail = child;
      this.productDialogTitle = `${child.title}一详情页图片配置`;
    },
    // 案例详情
    handelSuccessSingle(item) {
      this.productDialogVisible = false;
      this.ruleForm.projects = this.ruleForm.projects.map(project => {
        if (project.projectId === item.projectId) {
          project = item;
        }
        return project;
      });
    },
    // 取消详情diago
    handelcancelProductDiago(val) {
      this.productDialogVisible = false;
    },
    // 奖项上传
    handelSuccessAwards(awardsInfor) {
      this.awardDialogVisible = false;
      this.ruleForm.awards = awardsInfor;
    },
    // 取消奖项diago
    handelcancelAwardDiago(val) {
      this.awardDialogVisible = false;
    },
    handelSubmit() {
      this.$refs.ruleForm.validate(valid => {
        console.log('表单内容:', this.ruleForm);
        let url = 'http://139.224.13.0/api/update';
        const params = this.ruleForm;
        axios.post(url, params).then(res => {
          if (res.data.httpCode === 200) {
            console.log('信息配置成功');
            this.$message({
              message: '信息配置成功',
              type: 'success',
              offset: 100,
              onClose: () => {
                this.$router.push({ name: 'Home' });
              },
            });
          }
        });
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
.adminWrap {
  width: 100%;
  min-height: 100vh;
  background: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
  .adminForm {
    width: 70%;
    background: #ffffff;
    min-height: 100vh;
    .title {
      height: 50px;
      line-height: 50px;
      text-align: center;
      margin-top: 20px;
      font-size: 18px;
      color: #000000;
    }
    .el-container {
      padding: 0 20px;
    }
  }
}
.loginWrap {
  height: 400px;
  width: 400px;
  background: #ffffff;
  box-sizing: border-box;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .logo {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
  }
  .welcome {
    font-family: PingFangSC-Medium;
    font-size: 30px;
    color: #a97335;
    font-weight: 500;
    margin-bottom: 30px;
    text-align: center;
  }
  .name {
    margin-bottom: 20px;
  }
  .pwd {
    margin-bottom: 30px;
  }
  .login-button {
    font-size: 24px;
    width: 100%;
    height: 50px;
    background-image: linear-gradient(to right, #eccda1 0%, #a97335 51%, #eccda1a6 100%);
    background-size: 200% auto;
    transition: all 0.5s;
    border-radius: 4px;
    border: none;
  }
  .login-button:hover {
    background-position: right center;
    transition: all 0.5s;
  }
}
.el-collapse /deep/ {
  padding: 0 30px;
  .el-collapse-item__header {
    font-size: 12px;
    height: 30px !important;
    line-height: 30px;
    color: #505050;
    background: #eeeeee;
    padding-left: 20px;
  }
  .el-collapse-item__content {
    padding-bottom: 0;
  }
}
.projectItem {
  padding: 10px;
  margin-bottom: 20px;
  border: 2px dashed #eeeeee;
}
.singleItem {
  padding: 10px;
  margin-bottom: 20px;
  border: 1px dashed #eeeeee;
}
.el-row {
  display: flex;
  align-items: center;
  .el-form-item {
    margin: 10px 0;
  }
}
.btnAction {
  display: flex;
  justify-content: center;
  margin: 50px 0;
}
</style>
