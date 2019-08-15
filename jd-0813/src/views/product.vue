<template>
    <div class="product">
        <proTitle>
            <topTitle></topTitle>
        </proTitle>
        <button @click="hidden">购物</button>
        <suk v-model="isshow"></suk>
    </div>

</template>
<script>
import proTitle from "@/components/proTitle.vue"
import topTitle from "@/components/topTitle.vue"
import suk from "@/components/suk.vue"
export default {
    name:'product',
    components:{
        proTitle,
        topTitle,
        suk,
    },
    data:function(){
        return{
            id:null,
            title:'',
            isshow:false,
        }
    },
    mounted:function(){
       console.log(this.$route);
       this.id = this.$route.query.pid;
       this.title = this.$route.query.title;

    },
    methods:{
        hidden:function(){
            this.isshow = true;
            console.log(this.isshow)
        }
    }
}
</script>