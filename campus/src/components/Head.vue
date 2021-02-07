<template>
  <div class="head">
    <div class="header hidden-xs-only">
      <div class="top_bar">
        <el-row>
          <el-col :xs="24" :sm="16" :md="10" :lg="10">
            <Logo></Logo>
          </el-col>
          <el-col :md="8" :lg="8" class="hidden-sm-and-down">
            <div class="search_wrap">
              <el-input placeholder="搜索" prefix-icon="el-icon-search">
              </el-input>
              <el-button type="primary">搜索</el-button>
            </div>
          </el-col>
          <el-col :sm="8" :md="6" :lg="6" class="hidden-xs-only">
            <div class="login_wrap">
              <router-link to="/login" class="login_link">[登录]</router-link>
              <router-link to="/register" class="login_link">[注册]</router-link>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="header_mobile hidden-sm-and-up">
      <div class="header_mobile_left">
        <el-image :src="src" class="logo_mobile"></el-image>
        <span class="logo_mobile_txt">资源共享平台</span>
      </div>
      <div class="header_mobile_right">
        <router-link to="/login" class="login_link" tag="span"
          >[登录]</router-link
        >
        <router-link to="/register" class="login_link" tag="span"
          >[注册]</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import src from "@/assets/logo.png";
import Logo from "../components/Logo";

export default {
  data() {
    return {
      src: src,
    };
  },
  components: {
    Logo,
  },
};
</script>

<style lang="less" scoped>
.head {
  .header {
    height: 165px;
    background-color: #bbc1b1;
    .top_bar {
      height: 165px;
      padding-left: 35px;
      padding-right: 35px;
      .search_wrap {
        height: 165px;
        padding-bottom: 16px;
        box-sizing: border-box;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        .el-button {
          background-color: #a75422;
          border-color: #a3d0fd;
          margin-left: 20px;
        }
      }
      .login_wrap {
        height: 165px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .login_link {
          color: #666;
          font-size: 16px;
          margin-right: 20px;
        }
      }
    }
  }
  .header_mobile {
    width: 100%;
    height: 70px;
    background-color: #bbc1b1;
    padding-left: 20px;
    padding-right: 20px;
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
}
</style>