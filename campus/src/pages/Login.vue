<template>
  <div class="login">
    <div class="head hidden-xs-only">
      <Logo></Logo>
      <div class="welcome_wrap">欢迎登录</div>
    </div>

    <div class="header_mobile hidden-sm-and-up">
      <div class="header_mobile_left">
        <el-image :src="src" class="logo_mobile"></el-image>
        <span class="logo_mobile_txt">资源共享平台</span>
      </div>
    </div>

    <div class="content">
      <div class="login_wrap">
        <el-form status-icon label-width="100px">
          <el-form-item label="用户名" required>
            <el-input placeholder="请输入用户名" v-model="name"></el-input>
          </el-form-item>

          <el-form-item label="密码" required>
            <el-input
              type="password"
              show-password
              v-model="password"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="handleLogin">登录</el-button>
          </el-form-item>

          <el-form-item>
            <router-link to="/register" tag="span" class="login_wrap_bottom_item"
              >忘记密码</router-link
            >
            <router-link
              to="/register"
              tag="span"
              class="login_wrap_bottom_item"
              >立即注册</router-link
            >
          </el-form-item>
        </el-form>
      </div>
    </div>

    <Footer></Footer>

  </div>
</template>

<script>
import Logo from "../components/Logo";
import src from "@/assets/logo.png";
import Footer from "../components/Footer";

export default {
  data() {
    return {
      src:src,
      name: "",
      password: "",
    };
  },
  components: {
    Logo,
    Footer,
  },
  methods: {
    //处理登录逻辑
    handleLogin() {
      if (!this.name) {
        this.$message({
          showClose: true,
          message: '请输入用户名',
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
      //发送请求
      //axios....
      alert('登录逻辑走通')
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  background-color: #f4f1f1;
  .head {
    height: 165px;
    padding-left: 35px;
    padding-right: 35px;
    display: flex;
    align-items: center;
    margin-bottom: 120px;
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
    margin-bottom: 100px;
    .login_wrap {
      width: 600px;
      height: 430px;
      border: 1px solid #ccc;
      border-radius: 14px;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      .el-form {
        width: 78%;
        padding-top: 30px;
        .el-form-item {
          margin-bottom: 30px;
          .login_wrap_bottom_item {
            font-size: 18px;
            color: #333;
            padding: 5px 0;
            border-bottom: 2px solid #ccc;
            margin-right: 30px;
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