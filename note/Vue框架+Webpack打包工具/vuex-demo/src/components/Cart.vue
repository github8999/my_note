<template>
    <div class="cart-main">
        <h2>这是购物车:</h2>
        <br>
        <div class="cart-pduct-list">
            <div class="pduct-bd" v-for="pduct in wrapCartProductList" :key="pduct.id">
                商品id: {{pduct.id}} -- 商品数量 :{{pduct.count}}--商品价格{{pduct.price}}
            <button @click="desCartPduct(pduct.id)">-</button>
            </div>
            <br>    
            <button @click="clearCart">清空购物车</button>
            <button @click="buyCart">立即购买</button>
        </div>
        <br>

    </div>
</template>

<script>        
    export default {
        name:'cart',
        data(){
            return {}
        },
        methods:{
            desCartPduct(id){
                this.$store.commit('cart/DEC_PDUCT_BY_ID',id)
            },
            clearCart(){
                this.$store.dispatch('cart/clearAndRollbackPductList')
            },
            buyCart(){
                this.$store.commit('cart/CLEAR_CART')
            }
        },
        created(){
        },
        computed:{
            wrapCartProductList(){
                console.log()
               return this.$store.getters['cart/wrapCartProductList']
            }
        }

       
    }
</script>

<style lang="scss" scoped>
</style>