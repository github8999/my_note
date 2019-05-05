const cart = {
    namespaced:true,
    state:{
        cartProductList:[]
    },
    mutations:{
        INC_PDUCT_BY_ID(state, id){
            // 点击shopping中的加号之后, 在shopping 中更新 商品list中的inventory(库存)
            // 然后要把添加的对象添加到购物车的 商品list 中
                // 如果商品中没有该id 就添加 ,并初始化数量为1 , 
                // 如果有该id 的商品, 就在数量上加1
            var index = state.cartProductList.findIndex(val => val.id == id);
            if(index<0){
                state.cartProductList.push({
                    id,
                    count:1
                })
            }else{
                state.cartProductList[index].count++;
            }
        },
        DEC_PDUCT_BY_ID(state, id){
            var index = state.cartProductList.findIndex(val => val.id == id )
            var currPduct = state.cartProductList[index]
            if(currPduct.count>1){
                currPduct.count--;
            }else{
                state.cartProductList.splice(index,1)
            }   
        },
        CLEAR_CART(state){
            state.cartProductList = [];
        }
    },
    actions: {
        clearAndRollbackPductList(context){
            var obj = context.state.cartProductList;
            context.commit('products/ROOLBACK_PDUCT_LIST',obj,{root:true})
            context.commit('CLEAR_CART');
        }
    },
    // getter 可以有四个属性 : state getters rootState rootGetters
    getters:{   
        // 包装cartProductList 
        // 
        wrapCartProductList(state, getters, rootState, rootGetters){
            // console.log(rootState.products)
            // console.log(state.cartProductList)
            return state.cartProductList.map(val => {
                var pduct = rootState.products.productList.find(inval => inval.id == val.id)
                return Object.assign(val,pduct);
            })
        }
    }
}
export default cart