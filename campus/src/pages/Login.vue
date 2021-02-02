<template>
  <div class="login">
    <div class="head">
      <Logo></Logo>
      <div class="welcome_wrap">
        欢迎登录
      </div>
    </div>
    <div class="content">

    </div>
  </div>
</template>

<script>
import Logo from '../components/Logo'
export default {
  components: {
    Logo
  }
}
</script>

<style lang="less" scoped>
.login{
  width: 100%;
  height: 100vh;
  background-color: #f4f1f1;
  .head{
    height: 165px;
    padding-left: 35px;
    padding-right: 35px;
    display: flex;
    align-items: center;
    .welcome_wrap{
      height: 70px;
      border-left: 4px solid #bbb;
      padding-left: 32px;
      margin-left: 32px;
      line-height: 70px;
      font-size: 30px;
      color: #b63535;
    }
  }
  .content{
    
  }
}
</style>