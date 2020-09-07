<template lang="pug">
  .test 
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
@Component({})
export default class HomePage extends Vue {
  @Prop({ default: 'prop-test' }) propTest?: string
}
</script>
<style>
.NuxtLogo {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
