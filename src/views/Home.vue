<template>
    <div class="home">
        <Head> 
            <img src="../assets/images/首页小人儿.png" slot="img_left" class="img_left">
            <span slot="car_title" class="heade_tit">平价租车</span> 
            <van-icon name="ellipsis" slot="img_right" class="img_right"/>
        </Head> 
        <!-- 地图 -->
        <Map></Map>
        <!-- <div class="address">  -->
        <div class="choice_add"> 
            <router-link to="/Home/Inland">国内租车</router-link> 
            <router-link to="/Home/Foreign">境外租车</router-link> 
        </div> 
        <router-view></router-view>  
    </div>
</template>

<script>
import Head from '../components/head/head'
import Map from '../components/homeComp/map'
import UserInfo from '../components/homeComp/userinfo'
export default {
    components: {
        Head,Map,UserInfo
    },
    props: {

    },
    data() {
        return {

        };
    },
    created() {

    },
    watch: {

    },
    computed: {

    },
    mounted() {

    },
    methods: {

    },
};
</script>

<style lang='less' scoped>
.home{
    .map{
        height: 6.06rem;
        background-color: crimson;
    } 
    .choice_add{
        display: flex; 
        background-color: #F5F5F5; 
        height: .84rem;
        line-height: 100%;
        border-radius: .26rem .26rem 0 0;
        a{
            color: #999999;
            font-size: .26rem;
            text-align: center;
            flex: 1; 
            height: 100%;
            line-height: .84rem;  
            &.router-link-active{
                height: 1.12rem;
                line-height: 1.12rem;
                background-color: white;
                color: #403F3F;
                font-size: .3rem;
                font-weight: bold;
                position: relative;
                bottom: .28rem;
            }
        }
        a:nth-child(1){
            border-radius: .26rem .2rem .2rem 0;
        }
        a:nth-child(2){
            border-radius: .2rem .26rem 0 .2rem;
        } 
    }
    
}
</style>

