<template>
  <div class="adminWrap">
    <el-form status-icon :model="ruleForm" ref="ruleForm" label-width="140px" class="adminForm" size="small">
      <el-header class="title">后台信息管理</el-header>
      <el-collapse v-model="activeCollapse">
        <el-collapse-item title="一、Menu菜单图片配置" name="menus">
          <el-container>
            <el-main>
              <el-row v-for="(item, index) in ruleForm.menus" :key="index">
                <el-col :span="8">
                  <el-form-item :label="(index+1).toString()">
                    <el-input  v-model="item.title" disabled></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <UploadFile></UploadFile>
                </el-col>
              </el-row>
            </el-main>
          </el-container>
        </el-collapse-item>

        <el-collapse-item title="二、Projects项目配置(projects、projects-single、projects-single-详情等)" name="menus">
          <el-container>
            <el-main>
              <div v-for="(item, index) in ruleForm.projects" :key="index" class="projectItem">
                <el-row>
                  <el-col :span="8">
                    <el-form-item :label="(index+1) + '.project'">
                      <el-input  v-model="item.title" disabled></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <UploadFile></UploadFile>
                  </el-col>
                </el-row>

                <el-row style="background: #eeeeee; padding-left: 20px; margin-bottom: 20px;">project-single</el-row>

                <div v-for="(child, childIndex) in item.childrens" :key="childIndex" class="singleItem">
                  <el-row>
                    <el-col :span="8">
                      <el-form-item :label="item.title + ' single'">
                        <el-input  v-model="child.title"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="10">
                      <UploadFile></UploadFile>
                    </el-col>
                    <el-col :span="4" v-if="child.title">
                      <el-button @click="handelProductDetail(item, child)" size="small">点击上传详情图片</el-button>
                    </el-col>
                    <el-col :span="2" v-if="ruleForm.projects && ruleForm.projects.length > 2">
                      <div class="addProject">
                        <el-button @click="handelDelete(item, child)" type="danger" size="small" icon="el-icon-delete">删除</el-button>
                      </div>
                    </el-col>
                  </el-row>
                </div>

                <div class="addProject">
                  <el-button @click="handelAddSingle(item)" type="primary" size="small" icon="el-icon-plus">增加projects-single</el-button>
                </div>
              </div>
            </el-main>
          </el-container>

          <div>
            <el-dialog
              :title="productDialogTitle"
              :visible.sync="productDialogVisible"
              width="50%">
              <span slot="footer" class="dialog-footer">
                <AdminSingleDetail
                  v-if="productDialogVisible"
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
                  <UploadFile btnText="点击上传奖项图片"></UploadFile>
                </el-col>
              </el-row>
            </el-main>
          </el-container>
        </el-collapse-item>

        <el-collapse-item title="三、Contact配置" name="menus">
          <el-container>
            <el-main>
              <el-row>
                <el-col :span="20">
                  <el-form-item label="Address">
                    <el-input  v-model="ruleForm.contact.Address"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="20">
                  <el-form-item label="TeL">
                    <el-input  v-model="ruleForm.contact.TeL"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="20">
                  <el-form-item label="Web">
                    <el-input  v-model="ruleForm.contact.Web"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-main>
          </el-container>
        </el-collapse-item>

      </el-collapse>
    </el-form>
  </div>
</template>

<script>
import UploadFile from '@/page/components/UploadFile'
import AdminSingleDetail from '@/page/components/AdminSingleDetail'

export default {
  components: {
    UploadFile,
    AdminSingleDetail
  },
  data () {
    return {
      activeCollapse: ['menus'],
      productDialogVisible: false,
      productDialogTitle: '详情页图片配置',
      ruleForm: {
        menus: [{
          title: 'Home',
          imgSrc: require('@/img/home.png'),
        }, {
          title: 'Projects',
          imgSrc: require('@/img/home.png'),
        }, {
          title: 'About',
          imgSrc: require('@/img/home.png'),
        }, {
          title: 'Awards',
          imgSrc: require('@/img/home.png'),
        }, {
          title: 'Contact',
          imgSrc: require('@/img/home.png'),
        }],
        projects: [{
          title: 'Commercial',
          imgSrc: require('@/img/home.png'),
          childrens: [{
            title: '山东开元职业会所',
            imgSrc: require('@/img/home.png'),
            detail: '',
          }, {
            title: '万科上海启宸销售中心',
            imgSrc: require('@/img/home.png'),
            detail: '',
          }, {
            title: '仁恒上海丰利大楼办公',
            imgSrc: require('@/img/home.png'),
            detail: '',
          }]
        }, {
          title: 'Residential',
          imgSrc: require('@/img/home.png'),
          childrens: [{
            title: '山东开元职业会所',
            imgSrc: require('@/img/home.png'),
            detail: '',
          }, {
            title: '万科上海启宸销售中心',
            imgSrc: require('@/img/home.png'),
            detail: '',
          }, {
            title: '仁恒上海丰利大楼办公',
            imgSrc: require('@/img/home.png'),
            detail: '',
          }]
        }, {
          title: 'Deluxe',
          imgSrc: require('@/img/home.png'),
          childrens: [{
            title: '山东开元职业会所',
            imgSrc: require('@/img/home.png'),
            detail: '',
          }, {
            title: '万科上海启宸销售中心',
            imgSrc: require('@/img/home.png'),
            detail: '',
          }, {
            title: '仁恒上海丰利大楼办公',
            imgSrc: require('@/img/home.png'),
            detail: '',
          }]
        }],
        contact: {
          Address: '',
          TeL: '',
          Web: '',
        }
      }
    }
  },
  methods: {
    handelDelete(item, child) {
      this.ruleForm.projects.forEach((itemSingle, index)=>{
        if(item.title === itemSingle.title) {
          itemSingle.childrens.filter((itemChild)=> itemChild.title !== child.title)
        }
      })
    },
    handelAddSingle(item) {
      this.ruleForm.projects.forEach((itemSingle, index)=>{
        if(item.id) {
          if(item.id === itemSingle.id) {
            itemSingle.childrens.push({
              title: '',
              imgSrc: '',
              detail:''
            })
          }
        }else {
          if(item.title === itemSingle.title) {
            itemSingle.childrens.push({
              title: '',
              imgSrc: '',
              detail:''
            })
          }
        }
      })
    },
    handelProductDetail(item, child) {
      this.productDialogVisible = true;
      this.productDialogTitle = `${child.title}一详情页图片配置`;
    },
    handelcancelProductDiago(val) {
      this.productDialogVisible = false;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
  .adminWrap{
    width: 100%;
    background: #EEEEEE;
    display: flex;
    justify-content: center;
    .adminForm{
      width: 70%;
      background: #FFFFFF;
      min-height: 100vh;
      .title{
        height: 50px;
        line-height: 50px;
        text-align: center;
        margin-top: 20px;
        font-size: 18px;
        color: #000000;
      }
      .el-container{
        padding: 0 20px;
      }
    }
  }
  .el-collapse /deep/{
    padding: 0 30px;
    .el-collapse-item__header{
      font-size: 12px;
      height: 30px !important;
      line-height: 30px;
      color: #505050;
      background: #eeeeee;
      padding-left: 20px;
    }
    .el-collapse-item__content{
      padding-bottom: 0;
    }
  }
  .projectItem{
    padding: 10px;
    margin-bottom: 20px;
    border: 2px dashed #EEEEEE;
  }
  .singleItem{
    padding: 10px;
    margin-bottom: 20px;
    border: 1px dashed #eeeeee;
  }
</style>
