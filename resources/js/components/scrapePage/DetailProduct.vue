<template>
    <div class="product">
        <div class="box-image">
            <img :src="product.img" :alt="product.name" width="100%">
        </div>
        <div class="box-content">
            <div class="price">
                <p class="price_sale" v-if="product.strike_price !=''"><span class="red-price">{{product.red_price}} </span> /  <del>{{product.strike_price}}</del></p>
                <p class="price_sale" v-else>{{product.red_price}}</p>
            </div>
            <div class="choose-size">
                <span>Cỡ giày</span>
            </div>
            <div class="table" v-for="(item, index) in items" :key="index">
                <div class="size">
                    {{item.size}}
                </div>
                <div class="info">
                    {{item.cart}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'DetailProduct',
    props: ['product'],
    data(){
        return {
            items: ''
        }
    },
    created(){
        this.getDetailProduct()
    },
    methods: {
        getDetailProduct(){
            this.isLoading = true
            this.item =''
            let form = {
                link: this.product.link
            }
            let self = this
            self.axios
                .post('http://localhost:8000/api/detailProduct',form)
                .then(function(response) {
                    // console.log('run: '+ JSON.stringify(response.data))
                    self.items = response.data;
                })
                .catch(err => 
                        Vue.$toast.error('Lỗi hệ thống' + err, {
                        position:'top-right',
                        duration: 3000
                    }))
                .finally(() => self.isLoading = false)
        }
    }
}
</script>
<style scoped>
.product .box-image{
    width: 50%;
    float: left;
}
.product .box-content{
    width: 45%;
    float: left;
    margin-left: 10px;
    margin-right: 10px;
}
.product .red-price{
    font-weight: 700;
    color: red;
}
.product .box-content .choose-size{
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: 600;
}
.product .box-content .table .size {
    width: 75%;
    float: left;
}
.product .box-content .table .info {
    width: 25%;
    float: left;
}
</style>