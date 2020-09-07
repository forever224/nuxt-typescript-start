import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import layout from '~/store/layout'

let layoutStore: layout

function initialiseStores(store: Store<any>): void {
  layoutStore = getModule(layout, store)
}

export { initialiseStores, layoutStore }
