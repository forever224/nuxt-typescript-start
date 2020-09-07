<template lang="pug">
  .home-header
    .home-header-logo 
      img(src="@/assets/imgs/logo.png") 
      span 
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
@Component({
  name: 'HomeHeader',
})
export default class extends Vue {
  @Prop({ default: '头部' }) propTest?: string
}
</script>

<style scoped lang="scss">
.home-header {
  height: 52px;
  background-color: var(--nn-bg1);
  color: #696a6e;
  &-logo {
    display: inline-block;
    padding: 7px 0 0 23px;
    img {
      width: 68px;
      height: 35px;
    }
  }
}
</style>
