<template>
    <div class="home">   
        
        <div class="info" v-show="isShow">
            <UserInfo></UserInfo>
           <div class="hide" @click="hide"></div>
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
         <div class="inland">
        <ul class="add">
            <li>
                <span>取还车城市</span>
                <van-dropdown-menu active-color>
                    <van-dropdown-item v-model="value1" :options="option1" :overlay="overlay"/> 
                </van-dropdown-menu>
            </li>
            <li>
                <span>取还车地点</span>
                <van-dropdown-menu active-color>
                    <van-dropdown-item v-model="value2" :options="option2" /> 
                </van-dropdown-menu>
            </li>
            <li>
                <span>异地还车</span>
                <van-switch v-model="other_place" size="17px" inactive-color="#A9A9A9"/>
            </li>
        </ul>
        <div class="time">
            <p>
                <span>今天</span>
                <span>周一</span>
            </p>
            <p>
                <span>11月20日 19:30</span>
                <img src="../assets/images/首页半箭头.png" alt="">
                <span>11月23日 19:30</span>
            </p>
        </div>
        <van-checkbox v-model="isSendcar" icon-size="16px">送车上门</van-checkbox>
        
    </div>
        <router-view></router-view>   
       <van-button type="info">我要租车</van-button>
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
            isShow:false,
            overlay:false,
            isSendcar:false,
            other_place:true,
            value1: 0,
            value2: 'a',
            option1:[
                {text:'选项1',value:0},
                {text:'选项2',value:1}
            ],
            option2:[
                {text:'选择1',value:'a'},
                {text:'选择2',value:'b'}
            ]
        };
    }, 
    mounted(){
        // this.$router.push()
    },
    methods: {
        showInfo() {
            this.isShow = true;
         
        },
       hide(){
           this.isShow = false
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
        transition: width 2s;
       
       .hide{
           flex: 1;
           height: 100%;
           background-color: #000;
           opacity: .8;
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

    .inland{
    padding: 0 .52rem;
    .add{
        display: flex;
        border-bottom: #EEEEEE solid 1px;
        li{ 
            display: flex;
            flex-direction: column;
            span{
                line-height: .5rem;
                font-size: .22rem;
                color: #999999;
            }
             
        }
        li:nth-child(1){
            width: 1.94rem;
            margin-left: .28rem; 
        }
        li:nth-child(2){
            flex: 1; 
        }
        li:nth-child(3){
            width: .96rem;
            .van-switch{
                margin-top: .16rem;
            }
        }
    }
    .time{
        color: #333333;
        padding: .3rem 0 .34rem .28rem;
        border-bottom: #EEEEEE solid 1px;
        p:nth-child(1){
            display: flex;
            justify-content: space-between;
            font-size: .22rem;
            font-weight: bold;
            margin-bottom: .14rem;
        }
        p:nth-child(2){
            font-size: .32rem;
            font-weight: bolder;
            display: flex;
            justify-content: space-between;
            img{
                width: .5rem;
                height: .18rem;  
                margin-top: .06rem;
            }
        }
        
    }
    .van-checkbox{
        color: #999999;
        font-size: .24rem; 
        width: 100%;
        padding: .3rem 4.6rem .3rem .32rem;
        box-sizing: border-box;
        border-bottom: #EEEEEE solid 1px;
    }
    
}
.van-button{
        width: 5.82rem;
        // margin: 0 auto;
        position: fixed;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
        height: .92rem;
        color: white;
        font-size: .32rem;
        font-weight: bold;
        border-radius: .1rem;
        // margin: .54rem .34rem 0;
    }
li:nth-child(1){
    .van-dropdown-menu__title{
        font-size: .4rem;
        color: #333;
        font-weight: bold;
    }
}
li:nth-child(2){
    .van-dropdown-menu__title{
        font-size: .28rem;
        color: #333;
        font-weight: bold;
    }
}
 
.van-dropdown-menu{
    box-shadow: none;
    margin-bottom: .18rem;
    .van-dropdown-menu__bar{
        box-shadow: none;
        height: .6rem;
        .van-dropdown-menu__item{
            justify-content: left;
            .van-dropdown-menu__title{
                padding-left: 0; 
            }
            .van-dropdown-menu__title::after{
                border-color: transparent transparent #999999 #999999;
            }
        }
    } 
}
} 
</style>
 