import productApi from '@/api/productApi'

const products = {
    namespaced: true,
    state:{
        productList: []
    },
    mutations:{
        GET_PRODUCT_LIST(state, productList){

            state.productList = productList;
        },
        // 更新减少的数量
        DES_PDUCT_BY_ID(state,id){
            var currPdt = state.productList.find(val => val.id == id)
            // console.log(currPdt);
            currPdt.inventory --;

            // 减少之后要调用购物车中的增加数量的方法

        },
        ROOLBACK_PDUCT_LIST(state, cartPductList){
            // console.log(cartPductList)
            cartPductList.map(val => {
                var obj = state.productList.find(inVal => inVal.id == val.id)
                obj.inventory += val.count;
            })
        }
    },
    actions:{
        getProductListInApi(context){
            productApi.getProductList()
            .then(res =>{
                    context.commit('GET_PRODUCT_LIST',res);
                });

        }
    }
}
export default products