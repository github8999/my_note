import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


import cart from './modules/cart'
import products from './modules/products'

export default new Vuex.Store({
    
    state:{
    },
    mutations:{

    },
    actions:{},
    getters:{},
    modules:{
        cart,
        products
    }
})