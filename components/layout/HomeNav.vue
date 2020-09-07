<template lang="pug">
  .home-nav
    HomeNavItem( @click.native="handelChangeId(homeNav.id)" :nav="homeNav" )
    HomeNavItem( v-for="item in communityNavs" :key="item.id" :nav="item" @click.native="handelChangeId(item.id)" )
</template>

<script lang="ts">
import { Component, Vue, namespace } from 'nuxt-property-decorator'
import { INav } from '~/types/layout'

const LayoutModule = namespace('layout')
@Component({
  name: 'HomeNav',
})
export default class extends Vue {
  @LayoutModule.State('homeNav') homeNav!: INav
  @LayoutModule.State('communityNavs') communityNavs!: INav[]

  mounted() {}

  handelChangeId(id: string) {
    console.log(this.$store, 'this.$store')
    // this.changeArctiveNavId(id)
    this.$store.commit('layout/changeArctiveNavId', id)
    this.$store.dispatch('layout/test', id)
  }
}
</script>

<style scoped lang="scss">
.home-nav {
  width: 190px;
  background-color: #202225;
  height: calc(100vh - 52px);
  color: #72767d;
  float: left;
}
</style>
