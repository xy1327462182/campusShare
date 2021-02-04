<template>
  <div class="login">
    <div class="head">
      <Logo></Logo>
      <div class="welcome_wrap">欢迎登录</div>
    </div>
    <div class="content">
      <div class="login_wrap">
        <el-form
          status-icon
          label-width="100px"
        >

          <el-form-item label="姓名" required>
            <el-input placeholder="请输入姓名" v-model="username"></el-input>
          </el-form-item>

          <el-form-item label="学号" required>
            <el-input placeholder="请输入学号" v-model="username"></el-input>
          </el-form-item>

          <el-form-item label="昵称">
            <el-input placeholder="请输入昵称" v-model="username"></el-input>
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
              v-model="password"
              placeholder="请再次输入密码"
            ></el-input>
          </el-form-item>

          <el-form-item label="手机号" required>
            <el-input placeholder="请输入手机号" v-model="username"></el-input>
          </el-form-item>

          <el-form-item label="性别" required>
            <el-radio v-model="radio" label="1">备选项</el-radio>
            <el-radio v-model="radio" label="2">备选项</el-radio>
          </el-form-item>

          <el-form-item label="宿舍号" required>
            <el-input placeholder="请输入宿舍号" v-model="username"></el-input>
          </el-form-item>

          <el-form-item label="班级" required>
            <el-input placeholder="请输入班级" v-model="username"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary">注册</el-button>
          </el-form-item>

          <el-form-item>
            <router-link to="/login" tag="span" class="login_wrap_bottom_item">去登录</router-link>
          </el-form-item>

        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "../components/Logo";
export default {
  data() {
    return {
      username: '',
      password: '',
      radio: '1'
    }
  },
  components: {
    Logo,
  },
};
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  min-height: 100vh;
  background-color: #f4f1f1;
  padding-bottom: 30px;
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
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    .login_wrap {
      width: 600px;
      border: 1px solid #ccc;
      border-radius: 14px;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      .el-form{
        width: 70%;
        padding-top: 50px;
        .el-form-item{
          margin-bottom: 30px;
          .login_wrap_bottom_item{
            font-size: 18px;
            color: #333;
            padding: 5px 0;
            border-bottom: 2px solid #ccc;
            margin: 0 15px;
            cursor: pointer;
          }
        }
        .el-button{
          width: 80%;
        }
      }
    }
  }
}
</style>