<template lang="pug">
  .home-nav-item( :class="{ 'home-nav-item-active': arctiveNavId === nav.id }" )
    nuxt-link(:to="nav.url")
      b
        img( :src="nav.photo" )
      span {{ nav.name }}
</template>

<script lang="ts">
import { Component, Vue, Prop, namespace } from 'nuxt-property-decorator'
import { INav } from '~/types/layout'
const LayoutModule = namespace('layout')
@Component({
  name: 'HomeNavItem',
})
export default class extends Vue {
  @Prop() nav!: INav
  @LayoutModule.State('arctiveNavId') arctiveNavId!: string
}
</script>

<style scoped lang="scss">
.home-nav-item {
  margin-bottom: 10px;
  a {
    color: #72767d;
    display: flex;
    align-items: center;
    b {
      width: 48px;
      height: 48px;
      border-radius: 24px;
      background-color: #2a2c31;
      vertical-align: middle;
      img {
        width: 48px;
        height: 48px;
        border-radius: 24px;
      }
    }
    span {
      flex: 1;
      line-height: 58px;
      padding-left: 10px;
    }
  }
}
.home-nav-item {
  width: 100%;
  height: 58px;
  padding-left: 14px;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  transition: background 0.2s linear;
  color: var(--nav-label);
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 0;
    border-radius: 0 3px 3px 0;
    background: var(--vs-theme-color);
    contain: layout size;
    transition: height 0.2s linear, background 325ms linear;
  }
  &-active,
  &:hover,
  &:active {
    background-color: var(--nav-hover);
    color: var(--nav-label-active);
    &::after {
      height: 100%;
    }
    i.bx {
      color: white;
    }
  }
  .screen {
    overflow: hidden;
    .flow {
      flex: 1;
      animation: none;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      user-select: none;
    }
  }
  &:hover {
    .screen {
      .flow {
        overflow: visible;
        // alternate
        animation: screenFlow 3s infinite linear;
      }
    }
  }
  .avatar {
    min-width: 52px;
    min-height: 52px;
    display: flex;
    border: 3px solid transparent;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    position: relative;
    &.indicator {
      transition: all 250ms ease-in;
    }
    .iconNotice {
      position: absolute;
      right: -8px;
      bottom: -8px;
    }
  }
}
</style>
