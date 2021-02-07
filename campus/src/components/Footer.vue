<template>
  <footer>
    <p>©2021 HuangZhen.All rights reserved.</p>
    <div class="empty_line"></div>
    <p>豫ICP备20006661号</p>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
footer {
  width: 100%;
  height: 90px;
  background-color: #ebede9;
  font-size: 14px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  .empty_line {
    height: 10px;
  }
}
</style>