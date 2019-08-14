<template>
    <div>商品详情:
        <div v-text="id"></div>
        <div v-text="title"></div>
    </div>

</template>
<script>
export default {
    name:'product',
    data:function(){
        return{
            id:null,
            title:'',
        }
    },
    mounted:function(){
       console.log(this.$route);
       this.id = this.$route.query.pid;
       this.title = this.$route.query.title;

    }
}
</script>