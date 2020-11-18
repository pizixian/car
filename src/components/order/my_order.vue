<template>
    <div class="order">
        <Head>
            <van-icon name="arrow-left"  slot="img_left" class="img_left"/>
            <span slot="car_title" class="heade_tit">我的订单</span>
        </Head>
        <ul class="order_list">
            <li>
                <img src="" alt="">
                <div>
                    <p>
                        <span>丰田汉兰达</span>
                        <span @click="to_detail">订单详情 ></span>
                    </p>
                    <p>日租： 2天</p>
                    <p>租车日期：2020年12月27日</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import Head from '../head/head'
export default {
    props: {

    },
    data() {
        return {

        };
    },
    methods: {
        to_detail(){
            this.$router.push('/orderDetail');
        }
    },
    components: {
        Head
    },
};
</script>

<style scoped lang="less">
.order{
    height: 100%;
    background-color:#EEEEEE;
    overflow: hidden;
    .order_list{  
        overflow: hidden;
        margin: .1rem .2rem 0; 
        li{
            margin-top: .2rem;
            padding: .24rem .2rem .26rem;
            background-color: white;
            border-radius: .08rem;
            width: 7.12rem;
            box-sizing: border-box;
            height: 1.81rem;
            display: flex;
            align-items: center; 
            img{
                width: 2.2rem;
                height: 1.3rem;
                margin-right: .2rem;
                background-color: chartreuse;
            }
            div{ 
                flex: 1;
                font-size: .24rem;
                p:nth-child(1){
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    span:nth-child(1){
                        font-size: .3rem;
                        line-height: .46rem;
                        font-weight: bolder; 
                    }
                    span:nth-child(2){
                        color: #999999;
                    }
                }
                p:nth-child(2),p:nth-child(3){
                    color: #666;
                    line-height: .34rem;
                } 
            }
        }
    }
}

</style>
