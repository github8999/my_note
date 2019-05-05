import Mock from 'mockjs'

const Random = Mock.Random;

function getProductList(){

    var productList = [];
    
    for(var i = 0 ; i < 6 ; i ++ ){
        var product = {
            id: Random.guid(),
            name: Random.ctitle(3),
            img: Random.image('200x120',Random.color()),
            price: Random.integer(50, 400),
            inventory: Random.integer(5,15)
        }
        productList.push(product);
    }

    return new Promise(resolve => {
        setTimeout(function(){
            resolve(productList);
        },500)
    })
}
export default {
    getProductList
}