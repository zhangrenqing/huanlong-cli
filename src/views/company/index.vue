<template>
  <div class="user-header">
    <div class="user-header__title"> 公司组织 </div>
    <user-layout :logourl="logourl">
      <template #img>

      </template>
      <template #header>
        <global-footer :str="strings" />
      </template>
    </user-layout>
  </div>
</template>

<script>
export default {
  name: 'user-header',
  data() {
    return {
      strings: '武汉圣莉斯歌顾问管理有限公司｜数字美业经营后台 V2.3.3',
      logourl: require('@/assets/images/meiyelogo.png')
    }
  },

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
