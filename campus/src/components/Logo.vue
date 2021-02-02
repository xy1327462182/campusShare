<template>
  <div class="logo_wrap">
    <el-image :src="src" class="logo"></el-image>
    <div class="logo_title">
      <span>资源共享平台</span>
      <span>Resource Sharing</span>
    </div>
  </div>
</template>

<script>
import src from '@/assets/logo.png'
export default {
  data() {
    return {
      src: src
    }
  }
}
</script>

<style lang="less" scoped>
.logo_wrap{
  height: 165px;
  display: flex;
  align-items: center;
  .logo{
    width: 165px;
    height: 165px;
    margin-right: 20px;
  }
  .logo_title{
    height: 65px;
    font-size: 20px;
    color: #cc5e60;
    font-weight: 550;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
  }
}
</style>