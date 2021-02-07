<template>
  <div class="more">
    <Head></Head>
    <Nav></Nav>

    <div class="content">
      <div class="content_main">
        <div class="content_main_title">
          <span class="el-icon-edit title_icon"></span>
          <p class="title_txt">发布信息</p>
        </div>

        <div class="form_wrap">
          <el-form label-position="right" label-width="80px">
            <el-form-item label="标题" required>
              <el-input placeholder="请输入标题"></el-input>
            </el-form-item>

            <el-form-item label="信息分类" required>
              <el-select v-model="sort" placeholder="请选择分类">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="图片" required>
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>

            <el-form-item label="描述" required>
              <textarea class="info_txt" placeholder="请输入描述信息"></textarea>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" round>提交</el-button>
            </el-form-item>


          </el-form>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Head from "../components/Head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default {
  name: "Home",
  data() {
    return {
      sort: "",
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      tdHeight: {
        height: "60px",
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  components: {
    Head,
    Nav,
    Footer,
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.more {
  .content {
    padding-top: 20px;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    .content_main {
      width: 85%;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      .content_main_title {
        width: 100%;
        height: 60px;
        background-color: #bfceaa;
        border-radius: 10px;
        display: flex;
        align-items: center;
        margin: 30px 0;
        .title_icon {
          font-weight: 700;
          font-size: 24px;
          margin-left: 20px;
          margin-right: 24px;
        }
        .title_txt {
          font-weight: 600;
          font-size: 20px;
        }
      }
      .form_wrap {
        width: 600px;
        max-width: 90%;
        margin-top: 50px;
        .el-form-item{
          margin-bottom: 40px;
        }
        .avatar-uploader {
          width: 178px;
          border: 1px dashed #d9d9d9;
          border-radius: 6px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          &:hover {
            border-color: #409eff;
          }
          .avatar-uploader-icon {
            font-size: 28px;
            color: #8c939d;
            width: 178px;
            height: 178px;
            line-height: 178px;
            text-align: center;
          }
          .avatar {
            width: 178px;
            height: 178px;
            display: block;
          }
        }
        .info_txt{
          width: 100%;
          height: 200px;
          border: 1px solid #ccc;
          border-radius: 8px;
          resize: none;
          padding: 12px;
          font-size: 16px;
        }
      }
    }
  }
}
</style>