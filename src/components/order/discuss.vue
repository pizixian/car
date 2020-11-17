<template>
    <div class="discuss">
        <Head></Head>
        <div class="cont">
            <ul>
                <li>
                    <span>手续办理： </span> 
                    <van-rate
                        v-model="value"
                        size=".54rem"
                        gutter=".36rem"
                        color="#FFAE3A"
                        void-icon="star"
                        void-color="#eee" 
                    />
                </li>
                <li>
                    <span>车辆情况： </span> 
                    <van-rate
                        v-model="value"
                        size=".54rem"
                        gutter=".36rem"
                        color="#FFAE3A"
                        void-icon="star"
                        void-color="#eee" 
                    />
                </li>
                <li>
                    <span>服务态度： </span> 
                    <van-rate
                        v-model="value"
                        size=".54rem"
                        gutter=".36rem"
                        color="#FFAE3A"
                        void-icon="star"
                        void-color="#eee" 
                    />
                </li>
            </ul>
            <textarea name="" id="" placeholder="感谢您对平驾的支持,来说说您的评价之旅吧!"></textarea>
            <button>匿名提交</button>
        </div>
    </div>
</template>

<script>
import Head from "../head/head";
export default {
    props: {

    },
    data() {
        return {
            value:3
        };
    },
    methods: {

    },
    components: {

    },
};
</script>

<style scoped lang="less">
.discuss{
    .cont{
        border-top: #F4F4F4 solid 0.06rem;
        padding: 0 .74rem;
        ul{
            margin: .66rem 0 .68rem;
            height: 2.3rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            li{
                display: flex;
                align-items: center;
                span{
                    font-size: .3rem;
                    font-weight: bolder;
                }
                .van-rate{
                    // vertical-align: middle;
                }
            }
        }
        textarea{
            box-sizing: border-box;
            padding: .18rem .2rem;
            width: 100%;
            height: 2rem;
            background-color: #F7F7F7;
            border: #DDDDDD solid 1px;
            border-radius: .08rem;
            font-size: .3rem;
            line-height: .5rem; 
        }
        textarea::-webkit-input-placeholder{ 
            color: #ccc; 
        } 
        button{
            width: 100%;
            height: 1.02rem;
            margin-top: .3rem;
            color: white;
            background-color: #DDDDDD;
            border: none;
            outline: none;
            font-size: .34rem;
            font-weight: 550;
            border-radius: .08rem;
        }

    }
}

</style>
