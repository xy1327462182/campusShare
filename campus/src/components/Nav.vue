<template>
  <div class="nav">
    <el-menu
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      mode="horizontal"
      :router="true"
      class="hidden-xs-only"
    >
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/publish">发布信息</el-menu-item>
      <el-submenu index="1">
        <template slot="title">信息分类</template>
        <el-menu-item index="/more?current=study">学习专区</el-menu-item>
        <el-menu-item index="/more?current=daily">生活专区</el-menu-item>
        <el-menu-item index="/more?current=entertainment"
          >娱乐专区</el-menu-item
        >
        <el-menu-item index="/more?current=others">其他</el-menu-item>
      </el-submenu>
      <el-menu-item index="/notice">平台公告</el-menu-item>
      <el-menu-item index="/published">我的发布</el-menu-item>
    </el-menu>

    <el-dropdown trigger="click">
      <el-button type="info" class="hidden-sm-and-up">
        <i class="el-icon-menu"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-menu :router="true">
          <el-menu-item index="/">
            <i class="el-icon-mobile-phone"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="/publish">
            <i class="el-icon-edit"></i>
            <span slot="title">发布信息</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-coin"></i>
              <span>信息分类</span>
            </template>
            <el-menu-item index="/more?current=study">学习专区</el-menu-item>
            <el-menu-item index="/more?current=daily">生活专区</el-menu-item>
            <el-menu-item index="/more?current=entertainment">娱乐专区</el-menu-item>
            <el-menu-item index="/more?current=others">其他</el-menu-item>
          </el-submenu>
          <el-menu-item index="/notice">
            <i class="el-icon-chat-dot-square"></i>
            <span slot="title">平台公告</span>
          </el-menu-item>
          <el-menu-item index="/published">
            <i class="el-icon-time"></i>
            <span slot="title">我的发布</span>
          </el-menu-item>
        </el-menu>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.nav {
  position: relative;
  width: 100%;
  height: 60px;
  background-color: #545c64;
  padding-left: 50px;
  box-sizing: border-box;
  .el-menu {
    height: 60px;
  }
  .el-dropdown {
    position: absolute;
    right: 20px;
    top: 10px;
    .el-button {
      box-sizing: border-box;
      width: 55px;
      height: 40px;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      .el-icon-menu {
        font-size: 22px;
      }
    }
    .el-dropdown-menu {
    }
  }
}
</style>