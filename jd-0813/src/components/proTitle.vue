<template>
    <div class="title">
        <img class="back" src="../assets/images/back.png" @click="$router.go(-1)" />
        <img class="caidan" src="../assets/images/caidan.png"/>
    </div>
</template>
<style lang="less">
    .title{
        background-color: #fff;
        img{
            &.back{
            width: 0.4rem;
            height: 0.4rem;
            padding: 0;
            padding-top: 0.3rem;
            padding-bottom: 0.2rem;
            padding-left: 0.2rem;
            text-align: center;
            margin: 0;
            }
            &.caidan{
                width: 20px;
                display: block;
                float: right;
                margin-top: 0.5rem; 
                margin-right: 0.3rem;
                margin-bottom: 0.3rem;
            }
        }
    }
</style>
<script>
export default {
    
}
</script>