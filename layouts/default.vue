<template lang="pug">
  .main
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
}
</script>
<style scoped lang="scss">
.content {
  width: calc(100vw - 190px);
  height: calc(100vh - 52px);
  background-color: #36393f;
  float: right;
}
</style>
