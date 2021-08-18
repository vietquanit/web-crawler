<template>
    <div class="notFoundPage">
        <h1 class="text-center mt-6 text-2xl">URL NOT FOUND</h1>
        <button class="text-center" @click="backToPage()">Quay lại</button>
    </div>
</template>
<script>

export default {
    name: 'notFoundPage',
    methods: {
        backToPage(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
button{
    display: block;
    margin: 0 auto;
    color: blue;
}
</style>