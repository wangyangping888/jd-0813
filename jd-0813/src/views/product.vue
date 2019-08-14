<template>
    <proTitle></proTitle>

</template>
<script>
import proTitle from "@/components/proTitle.vue"
export default {
    name:'product',
    components:{
        proTitle,
    },
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