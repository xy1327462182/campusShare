<template>
  <div class="login">
    <div class="head hidden-xs-only">
      <Logo></Logo>
      <div class="welcome_wrap">欢迎注册</div>
    </div>

    <div class="header_mobile hidden-sm-and-up">
      <div class="header_mobile_left">
        <el-image :src="logoSrc" class="logo_mobile"></el-image>
        <span class="logo_mobile_txt">资源共享平台</span>
      </div>
    </div>

    <div class="content">
      <div class="login_wrap">
        <el-form status-icon label-width="100px">
          <el-form-item label="姓名" required>
            <el-input placeholder="请输入姓名" v-model="name"></el-input>
          </el-form-item>

          <el-form-item label="学号" required>
            <el-input placeholder="请输入学号" v-model="sid"></el-input>
          </el-form-item>

          <el-form-item label="昵称">
            <el-input placeholder="请输入昵称" v-model="nickname"></el-input>
          </el-form-item>

          <el-form-item label="密码" required>
            <el-input
              type="password"
              show-password
              v-model="password"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>

          <el-form-item label="重复密码" required>
            <el-input
              type="password"
              show-password
              v-model="rePassword"
              placeholder="请再次输入密码"
            ></el-input>
          </el-form-item>

          <el-form-item label="手机号" required>
            <el-input placeholder="请输入手机号" v-model="phone"></el-input>
          </el-form-item>

          <el-form-item label="性别" required>
            <el-radio v-model="sex" label="0">男</el-radio>
            <el-radio v-model="sex" label="1">女</el-radio>
          </el-form-item>

          <el-form-item label="宿舍号" required>
            <el-input placeholder="请输入宿舍号" v-model="addr"></el-input>
          </el-form-item>

          <el-form-item label="班级" required>
            <el-input placeholder="请输入班级" v-model="cid"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="handleRegister">注册</el-button>
          </el-form-item>

          <el-form-item>
            <router-link to="/login" tag="span" class="login_wrap_bottom_item"
              >去登录</router-link
            >
          </el-form-item>
        </el-form>
      </div>
    </div>

    <Footer></Footer>

  </div>
</template>

<script>
import axios from 'axios'
import Logo from "../components/Logo";
import logoSrc from "@/assets/logo.png";
import Footer from "../components/Footer";

export default {
  data() {
    return {
      logoSrc: logoSrc,
      name: '',
      sid: '',
      nickname: '',
      password: '',
      rePassword: '',
      phone: '',
      sex: '0',//性别 0男 1女
      addr: '',//宿舍号
      cid: '',//班级id
    };
  },
  components: {
    Logo,
    Footer,
  },
  methods: {
    //处理注册
    handleRegister() {
      //验证表单
      const validateRes = this.validate()
      if (validateRes) {
        //发送请求  axios...
        alert('注册逻辑走通')
      }
    },
    //验证表单
    validate() {
      if (!this.name) {
        this.$message({
          showClose: true,
          message: '请输入姓名',
          type: 'error'
        });
        return false
      }
      if (!this.sid) {
        this.$message({
          showClose: true,
          message: '请输入学号',
          type: 'error'
        });
        return false
      }
      if (!this.password) {
        this.$message({
          showClose: true,
          message: '请输入密码',
          type: 'error'
        });
        return false
      }
      if (!this.rePassword) {
        this.$message({
          showClose: true,
          message: '请再次输入密码',
          type: 'error'
        });
        return false
      }
      if (this.rePassword != this.password) {
        this.$message({
          showClose: true,
          message: '两次输入密码不一致',
          type: 'error'
        });
        return false
      }
      let phoneReg = /^[1][3,4,5,7,8,9][0-9]{9}$/
      if (!phoneReg.test(this.phone)) {
        this.$message({
          showClose: true,
          message: '手机号格式不正确',
          type: 'error'
        });
        return false
      }
      if (!this.sex) {
        this.$message({
          showClose: true,
          message: '请选择性别',
          type: 'error'
        });
        return false
      }
      if (!this.addr) {
        this.$message({
          showClose: true,
          message: '请输入宿舍号',
          type: 'error'
        });
        return false
      }
      if (!this.cid) {
        this.$message({
          showClose: true,
          message: '请输入班级',
          type: 'error'
        });
        return false
      }
      return true
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  min-height: 100vh;
  background-color: #f4f1f1;
  .head {
    height: 165px;
    padding-left: 35px;
    padding-right: 35px;
    display: flex;
    align-items: center;
    .welcome_wrap {
      height: 70px;
      border-left: 4px solid #bbb;
      padding-left: 32px;
      margin-left: 32px;
      line-height: 70px;
      font-size: 30px;
      color: #b63535;
    }
  }
  .header_mobile {
    width: 100%;
    height: 70px;
    background-color: #bbc1b1;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 50px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header_mobile_left {
      display: flex;
      align-items: center;
      .logo_mobile {
        width: 65px;
        height: 65px;
        margin-right: 10px;
      }
      .logo_mobile_txt {
        font-size: 17px;
        color: #cc5e60;
        font-weight: 550;
      }
    }
    .header_mobile_right {
      .login_link {
        color: #666;
        font-size: 16px;
        margin-right: 20px;
        cursor: pointer;
      }
    }
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    .login_wrap {
      width: 600px;
      border: 1px solid #ccc;
      border-radius: 14px;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      .el-form {
        width: 70%;
        padding-top: 50px;
        .el-form-item {
          margin-bottom: 30px;
          .login_wrap_bottom_item {
            font-size: 18px;
            color: #333;
            padding: 5px 0;
            border-bottom: 2px solid #ccc;
            margin: 0 15px;
            cursor: pointer;
          }
        }
        .el-button {
          width: 80%;
        }
      }
    }
  }
}
</style>