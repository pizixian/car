<template>
    <div class="order_det">
        <Head>
            <van-icon name="arrow-left"  slot="img_left" class="img_left"/>
            <span slot="car_title" class="heade_tit">订单详情</span>
        </Head>
        <div class="cont">
            <div class="title">
                <span>订单号：000000000</span>
                <span>下单日期：2020-10-9</span>
            </div>
            
            <p class="car_info">车辆信息</p>
            <div class="car_type">
                <img src="" alt="" />
                <div>
                    <p>丰田汉兰达</p>
                    <p>
                        <span>SUV </span>
                        <span> | </span>
                        <span>2.7自动 </span>
                        <span> | </span>
                        <span>乘坐5人 </span>
                    </p>
                </div>
            </div>
 
            <p class="time">租车时长:
                <span>2</span>天
            </p>
            <ul>
                <li>
                    <span>定金：2000元</span>
                    <span>加油服务费：0元</span>
                </li>
                <li>
                    <span>使用费：600元</span>
                    <span>油费：0元</span>
                </li>
                <li>
                    <span>基本保险：100元</span>
                    <span>车辆损失费：0元</span>
                </li>
                <li><span>手续费：30元</span></li>
            </ul>
            <div class="pay">
                <p>合计： <span>2730 </span>元</p>
                <p>
                    <button>再次下单</button>
                    <button @click="discuss">预定/评价</button>
                </p>
            </div>  
        </div>
    </div>
</template>

<script>
import Head from "../head/head";
export default {
  props: {},
  data() {
    return {};
  },
  methods: {
      discuss(){
          this.$router.push('/Discuss')
      }
  },
  components: {
      Head
  },
};
</script>

<style scoped lang="less">
.order_det {
    .cont{ 
        color: #666666;
        .title {
            padding: 0 .24rem;
            height: .94rem;
            line-height: .94rem;
            display: flex;
            justify-content: space-between; 
            border-top: #F4F4F4 solid 0.06rem;
            border-bottom: #E0E0E0 solid 1px;
        }
        .car_info{
            font-size: .3rem;
            font-weight: bolder;
            color: #333333;
            margin-top: .34rem;
            margin-left: .38rem;
        }
        .car_type{
            display: flex;
            padding: .22rem .24rem .46rem .38rem;
            img{
                margin-right: .3rem;
                width: 2.2rem;
                height: 1.3rem;
                background-color: chartreuse;
            }
            div{
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                p:nth-child(1){
                    font-size: .36rem; 
                    font-weight: bolder;
                    color: #333333;
                }
                p:nth-child(2){
                    font-size: .28rem;
                    color: #999999;
                }
            }

        }
        .time{
            height: .8rem;
            line-height: .8rem;
            font-size: .24rem;
            padding: 0 .38rem;
            border-top: #E0E0E0 solid 1px;
            border-bottom: #E0E0E0 solid 1px;
            span{
                font-size: .27rem;
                font-weight: bolder;
                color: #333333; 
            }
        }
        ul{
            height: 1.68rem;
            padding: .48rem .24rem .5rem;
            box-sizing: content-box;
            border-bottom: #E0E0E0 solid 1px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            li{
                display: flex;
                span{
                    flex: 1;
                    padding-left: .14rem;
                }
            }
        }
        .pay{
            p:nth-child(1){
                font-size: .22rem;
                color: #333;
                font-weight: bold;
                margin: .32rem 0 .68rem .38rem;
                span{
                    font-size: .36rem;
                    font-weight: bolder; 
                }
            }
            p:nth-child(2){
                text-align: center;
                button{ 
                    width: 2.5rem;
                    height: .9rem;
                    border: #CCCCCC solid 1px;
                    border-radius: .08rem;
                    font-size: .3rem;
                    background-color: #EEEEEE;
                }
                button:nth-child(1){
                    margin-right: .4rem;
                }
            }
        }
    }
  
}
</style>
