<template>
    <div class="content">
        <b-row>
            <b-col>
                <b-form-group
                    id="fieldset-horizontal"
                    label-cols-sm="1"
                    label-cols-lg="1"
                    content-cols-sm
                    content-cols-lg="8"
                    description=""
                    label="Search Form"
                    label-for="input-horizontal"
                    >
                        <b-form-input id="input-horizontal" v-model="searchKey"></b-form-input>
                        <b-button variant="success" class="btn-search" @click="getDataByKey()">Search</b-button>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12">
                <div class="mt-3 mb-3" v-if="totalPage > 0">
                    <b-pagination v-model="currentPage" :total-rows="totalPage" :per-page="perPage" align="right"></b-pagination>
                </div>
            </b-col>
        </b-row>
        <div v-if="isLoading">
            <div class="d-flex justify-content-center mb-3">
                <b-spinner label="Loading..."></b-spinner>
            </div>
        </div>
        <div v-else>
            <b-row v-if="products !=''">
                <b-col cols="3" v-for="(product, index) in products" :key="index">
                    <div class="box-item" @click="openDetailPage(product)">
                        <b-img-lazy class="img-product" :src="product.img" fluid alt="Responsive image"> </b-img-lazy>
                        <p class="goods-content_off mt-2 rounded">{{product.goods_content_off}}</p>
                        <p class="brand">{{product.brand}}</p>
                        <h6>{{product.name}}</h6>
                        <div class="price">
                            <p class="goods-content_price-red text-red-500">{{product.red_price}}</p>
                            <p class="goods-content_price-strike"><del>{{product.strike_price}}</del></p>
                        </div>
                    </div>
                </b-col>
            </b-row>
            <b-row v-else >
                <h3 class="not-found-data" style="margin-bottom: 20px; color: red">Dữ liệu bạn cần tìm không có</h3>
            </b-row>
            <b-row>
                <b-col>
                    <div class="mt-3 mb-3" v-if="totalPage > 0">
                        <b-pagination v-model="currentPage" :total-rows="totalPage" :per-page="perPage" align="right"></b-pagination>
                    </div>
                </b-col>
            </b-row>
        </div>
        <!-- Show image sale  -->
        <b-row class="box-sale">
            <b-col cols="6">
                <b-img-lazy :src="imageSale['img_main']" alt="" class="img_main"></b-img-lazy>
            </b-col>
            <b-col cols="6">
                <div v-for="(sub_img, index) in imageSale.img_sub" :key="index" class="box-image-sale">
                    <b-img-lazy :src="sub_img" alt=""></b-img-lazy>
                </div>
            </b-col>
        </b-row>
        <!-- Import modal show data -->
        <b-modal id="modal-detail-product" hide-backdrop content-class="shadow" ref="modal-detail-product" size="lg" :title="'Tên giầy: ' + selectedProduct.name">
            <detail-product :product="selectedProduct"></detail-product>
        </b-modal>
    </div>
</template>
<script>
import DetailProduct from './DetailProduct.vue'
export default {
    components: { DetailProduct },
    name: 'Home',
    data (){
        return {
            products:null,
            searchKey:'',
            selectedProduct:'',
            isLoading: false,
            imageSale:'',
            totalPage:0,
            currentPage:1,
            perPage: 5
        }
    },
    created(){
        this.getBannerSale()
    },
    watch: {
        currentPage: function (newValue, oldValue) {
            if (newValue != oldValue){
                this.changePage()
                window.scrollTo(0,0);
            }
        }
    },
    methods: {
        getBannerSale(){
            this.imageSale =''
            let self = this
            self.axios
                .get('http://localhost:8000/api/crawler')
                .then(function(response) {
                    self.imageSale = response.data
                })
                .catch(err => 
                        Vue.$toast.error('Lỗi hệ thống' + err, {
                        position:'top-right',
                        duration: 3000
                    }))
                .finally(() => self.isLoading = false)
        },
        getDataByKey(){
            this.isLoading = true
            let self = this
            self.axios
                .get('http://localhost:8000/api/search='+self.searchKey)
                .then(function(response) {
                    console.log(JSON.stringify(response))
                    self.totalPage = response.data.total_page
                    self.products = response.data.data
                })
                .catch(err => 
                        Vue.$toast.error('Lỗi hệ thống' + err, {
                        position:'top-right',
                        duration: 3000
                    }))
                .finally(() => self.isLoading = false)
        },
        changePage(){
            this.isLoading = true
            let self = this
            self.axios
                .get('http://localhost:8000/api/search='+self.searchKey+'&p='+self.currentPage)
                .then(function(response) {
                    self.totalPage = response.data.total_page
                    self.products = response.data.data
                })
                .catch(err => 
                        Vue.$toast.error('Lỗi hệ thống' + err, {
                        position:'top-right',
                        duration: 3000
                    }))
                .finally(() => self.isLoading = false)
        },
        openDetailPage(product){
            this.$refs['modal-detail-product'].show()
            this.selectedProduct = product
        }
    }
}
</script>
<style scoped>
.content{
    margin-top: 10px;
}
.box-item{
    margin-bottom: 10px;
    border-radius: 4px;
    height: 426px;
    border: 1px solid #a09e9e;
    padding: 5px;
    cursor: pointer;
}
.box-item:hover{
    background: #ffce92;
}
.box-item a{
    text-decoration: none;
}
.box-item .img-product{
    min-width: 100%;
}
.box-item .goods-content_off{
    color: #fff;
    background: rgb(230, 69, 69);
    display: inline-block;
    padding: 5px 10px;
}
.not-found-data{
    display: block;
    margin: 0 auto;
}
.btn-search{
    margin-top: 10px;
}
#modal-detail-product .modal .modal-backdrop{
    opacity: 0.5 !important;
}
.box-sale .img_main{
    height: 100%;
}
.box-image-sale{
    width: 50%;
    float: left;
}
</style>