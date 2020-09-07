<template lang="pug">
  .index
    el-button.btn.btn-primary(type='submit' @click="onClick") Submit1 
    span {{zzz}}
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import userApi from '~/api/user.api'
@Component({
  layout: 'home',
  name: 'HomeIndexPage',
})
export default class extends Vue {
  zzz = process.env.API_TARGETS
  onClick() {
    console.log('xxxxxx', process.env.NODE_ENV, process.env.BASE_URL)
    userApi.test()
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
