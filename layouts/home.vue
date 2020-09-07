<template lang="pug">
  .main
    HomeHeader( @click="onClick" )
    HomeNav( @click="onClick" )
    .content
      Nuxt
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
@Component({
  name: 'DefaultLayout',
})
export default class DefaultLayout extends Vue {
  @Prop({ default: 'prop-test' }) propTest?: string
  head() {
    return {
      bodyAttrs: {
        'nn-theme': ['dark'],
      },
    }
  }

  onClick() {
    console.log('onClick')
  }
}
</script>
<style scoped lang="scss">
.main {
  height: 100vh;
  .content {
    width: calc(100vw - 190px);
    height: calc(100vh - 52px);
    background-color: #36393f;
    float: right;
  }
}
</style>
