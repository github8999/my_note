<template>
    <div class="shopping-main">
        <h2>这是购物页面: </h2>
        <div class="porductList">
            <div class="product-bd" v-for="pdt in productList" :key="pdt.id">
                <span class="id">商品id: {{pdt.id.substr(0,5)}} __ 商品名称: {{pdt.name}} __ 商品价格: {{pdt.price}} __ 商品库存: {{pdt.inventory}}</span> 
                <button @click="addToCart(pdt.id)">+</button> 
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'shopping',
        methods:{
            getProductList(){
                this.$store.dispatch('products/getProductListInApi');
            },
            /**
             * 把商品添加到购物车: addToCart
             **/
            addToCart(id){
                this.$store.commit('products/DES_PDUCT_BY_ID',id)
                this.$store.commit('cart/INC_PDUCT_BY_ID',id)
            }
        },
        computed:{
            productList(){
                return this.$store.state.products.productList || [];
            }
        },
        created(){
            
            this.getProductList()
        },
    }
</script>

<style lang="scss" scoped>

</style>