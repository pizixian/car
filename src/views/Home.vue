<template>
    <div class="home">   
        
        <div class="info" v-show="isShow">
            <UserInfo ></UserInfo> 
            <div class="bj" @click="hide"></div>
        </div>
        
        <Head>  
            <div slot="img_left" class="himg_left" @click="showInfo"> 
                <img src="../assets/images/首页小人儿.png">
            </div> 
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
            isShow:false
        };
    }, 
    methods: {
        showInfo() {
            this.isShow = true;
        },
        hide(){
            this.isShow=false;
        }
     
    }
}
</script>


<style lang='less' scoped>
.home{  
    height: 100%;
    position: relative;
    .info{
        z-index: 100;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        div:nth-child(2){
            flex:1;
            height: 100%;
            background-color: #aaa;
            opacity: .6; 
        }
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
 