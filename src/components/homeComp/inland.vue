<template>
    <div class="inland">
        <ul class="add">
            <li>
                <span>取还车城市</span>
                <van-dropdown-menu active-color>
                    <van-dropdown-item v-model="value1" :options="option1" overlay='false'/> 
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
                <img src="../../assets/images/首页半箭头.png" alt="">
                <span>11月23日 19:30</span>
            </p>
        </div>
        <van-checkbox v-model="isSendcar" icon-size="16px">送车上门</van-checkbox>
        <van-button type="info">我要租车</van-button>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
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
    methods: {

    },
    components: {

    },
};
</script>

<style scoped lang="less">
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
    .van-button{
        width: 5.82rem;
        margin: 0 auto;
        height: .92rem;
        color: white;
        font-size: .32rem;
        font-weight: bold;
        border-radius: .1rem;
        margin: .54rem .34rem 0;
    }
}
</style>

<style lang="less">
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
</style>