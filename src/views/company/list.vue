<template>
  <div class="user-header">
    <div class="user-header__title"> 公司list</div>
  </div>
</template>

<script>
export default {
  name: 'user-header',

}
</script>

<style lang="less" scoped>
.user-header {
  padding-top: 80px;
  text-align: center;
  &__title {
    font-size: 32px;
  }
  &__description {
    color: #999;
    padding-top: 10px;
  }
}
</style>
