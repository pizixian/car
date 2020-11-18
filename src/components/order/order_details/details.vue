<template>
    <div class="detail">
        <Head :title="title">
            <img src="" slot="img_left">
        </Head>

        <div class="main">
            <div class="num box">
                <p class="ding_num">订单号：<span class="gray">**********已完成</span></p>
                <p class="quche_txt">请及时到店取车</p>
            </div>
            <div class="address box">
                <div class="dizhi">
                    <p class="gray dizitxt">金水路未来路交叉路口南500米路西</p>
                </div>
                <span class="dizhi_img"></span>
                <div class="tell">
                    <p class="gray telltxt">0371-1377777777</p>
                </div>
                <span class="tell_img"></span>
                <button class="send_butn">立即发送</button>
            </div>

        </div>
        <div class="back_main">返回首页</div>
    </div>
</template>

<script>
import Head from '../../head/head'
export default {
    props: {

    },
    data() {
        return {
            title:'订单详情'
        };
    },
    methods: {

    },
    components: {
        Head
    },
};
</script>

<style scoped lang="less">
.detail{
    width: 100%;
    height: 13rem;
    background-color: #eeeeee;
    .main{
        padding: 0rem .24rem;
        box-sizing: border-box;
    }
    .box{
        width: 7.03rem;
        height: 3.4rem;
        background-color: #fff;
        border-radius: .09rem;
        position: relative;
        p{
            font-size: .36rem;          
        }
    }
}
.address{
    margin-top: .16rem;
}
.gray{
    color: #7f7f7f;
}
.num{
    margin-top: .2rem;
}
.ding_num{
    position: absolute;
    top: .5rem;
    left: .14rem;
}
.quche_txt{
    position: absolute;
    top: 1.2rem;
    left: 1.58rem;
    color: #7f7f7f;
}
.dizhi{
    position: absolute;
    left: .92rem;
    top: .69rem;
    font-size: .3rem;
}
.tell{
    position: absolute;
    left: .92rem;
    top:1.42rem;
    font-size: .3rem;
    p{
        color: #7f7f7f;
    }
}
.send_butn{
    width: 2rem;
    height: .6rem;
    background-color: #4395ff;
    border-radius: .3rem;
    font-size: .3rem;
    color: #fff;
    font-weight: bold;
    position: absolute;
    bottom: .34rem;
    right: .24rem;
}
.back_main{
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0;
    width: 100%;
    height: .81rem;
    color: #fff;
    font-weight: bold;
    background-color: #4395ff;
    font-family: '苹方';
    font-size: .3rem;
}
.dizhi_img{
    display: block;
    width: .32rem;
    height: .32rem;
    position: absolute;
    top: .77rem;
    left: .44rem;
}
.tell_img{
    display: block;
    width: .32rem;
    height: .32rem;
    position: absolute;
    top: 1.5rem;
    left: .44rem;
}
</style>
