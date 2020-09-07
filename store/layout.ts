import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { INav } from '~/types/layout'
import userApi from '~/api/user.api'
@Module({
  name: 'Layout',
  stateFactory: true,
  namespaced: true,
})
export default class extends VuexModule {
  // 激活的导航项ID
  arctiveNavId: string = 'home'
  // 社区首页
  homeNav: INav = {
    id: 'home',
    photo: require('@/assets/imgs/home.png'),
    name: '社区首页',
    url: '/',
  }

  // 游戏社区列表
  communityNavs: INav[] = [
    {
      id: '111dsfds11',
      photo: require('@/assets/imgs/photo.png'),
      name: '绝地求生',
      url: '/',
    },
    {
      id: '222fsdfsa22',
      photo: require('@/assets/imgs/photo.png'),
      name: 'Steam社区',
      url: '/',
    },
  ]

  @Mutation
  changeArctiveNavId(id: string) {
    this.arctiveNavId = id
  }

  @Action
  test(id: string) {
    console.log('testtt')
    return userApi.test()
  }

  @Action({ commit: 'changeArctiveNavId' })
  actionTest(id: string) {
    // console.log('testtt')
    // return userApi.test()
    return id
  }
}
