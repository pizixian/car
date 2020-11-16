<template>
    <div class="order">
        <Head></Head>
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
            // this.$router.push('/orderDetail');
        }
    },
    components: {

    },
};
</script>

<style scoped lang="less">
.order{
    background-color: #999;
    .order_list{ 
        margin: .1rem .2rem 0;
        overflow: hidden;
        li{
            margin-top: .2rem;
            padding: .24rem .2rem .26rem;
            background-color: white;
            width: 7.12rem;
            height: 1.81rem;
            display: flex;
            align-items: center;
            img{
                width: 2.2rem;
                height: 1.3rem;
                margin-right: .2rem;
            }
            div{ 
                flex: 1;
                font-size: .24rem;
                p:nth-child(1){
                    display: flex;
                    justify-content: space-between;
                    span:nth-child(1){
                        font-size: .3rem;
                        font-weight: bolder; 
                    }
                    span:nth-child(2){
                        color: #999999;
                    }
                }
                p:nth-child(2),p:nth-child(3){
                    color: #666;
                } 
            }
        }
    }
}

</style>
