<template>
  <div class="order">
    <div class="orderNamu compadd">
      <span>订单号: {{ orderNum }}</span>
      <span>下单日期: {{ orderTime }}</span>
    </div>
    
    <div class="carInfor compadd">
    <h4 class="title">车辆信息</h4>
    <div class="cardetial">
      <img
        src="../../assets/img/orderInfor_car.png"
        alt="丰田汉兰达"
        class="car_img"
      />
      <div class="car_title">
        <p class="title ">丰田汉兰达</p>
        <p class="special">
          <span> SUV</span> <span class="middle">2.7自动</span
          ><span>乘坐5人</span>
        </p>
      </div>
      </div>
    </div>

    <div class="main">
      <div class="time compadd">
        租车时长： <span class="title two">2</span>
        天
      </div> 
      <div class="infor_detail compadd">
      <ul>
      <li>定金： 2000元</li>
      <li>加油服务费：0元</li>
      <li>使用费： 600元</li>
      <li>油费： 0元</li>
      <li>基本保险： 100元</li>
      <li>车辆损失费：0元</li>
      <li>手续费： 30元</li>
      </ul>
       <div class="title priceText">合计：<span class="price">2730</span> 元</div>
      </div>
      <div class="btn">
      <button class="btn_ ">再次下单</button>
      <button class="reserve btn_">预定/评估</button>
      </div>
   
  </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      orderNum: "00120114082557",
      orderTime: "2020-12-01",
    };
  },
  methods: {},
  components: {},
};
</script>

<style scoped lang="less">

.order {
  color: #666;
  .compadd {
    padding: 0 0.3rem 0rem 0.38rem;
  }

  .orderNamu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1rem;
    font-size: 0.24rem;
    border-bottom: 0.01rem solid #e0e0e0;
  }
   .title {
      font-size: 0.27rem;
      font-weight: 560;
      color: #333;
     
    }
   
  .carInfor {
    height: 2.6rem;
    padding-top: 0.32rem;
     border-bottom: 0.01rem solid #e0e0e0;
  

    .cardetial {
      display: flex;
      margin-top: 0.23rem;
      img {
        width: 2.2rem;
        height: 1.3rem;
      }
      .car_title {
        flex: 1;
        color: #999999;
        padding-left: 0.31rem;
        padding-top: 0.22rem;
        .special {
          margin-top: 0.18rem;

          span {
            padding: 0 0.2rem;
          }
          .middle {
            border-left: 0.03rem solid #dddddd;
            border-right: 0.03rem solid #dddddd;
          }
        }
        .special span:nth-child(1) {
          padding-left: 0;
        }
      }
    }
  }
  .main{
      .time{
          font-size: .24rem;
          height: .8rem;
          line-height: .8rem;
          border-bottom: 0.01rem solid #e0e0e0;
      }
     .infor_detail{
         ul{
        display: flex;
        flex-wrap: wrap;
             padding: .42rem 0 .5rem 0;
             border-bottom: .01rem solid #e0e0e0;
             
             li{    
                 width: 50%;
                  color: #666;
                  margin-bottom: .24rem;
                  font-size: .22rem;
             }

         }

      }
      .priceText{
        margin-top: .33rem;
        .price{

        font-size: .33rem;
        }
      }
      .btn{
        margin-top: .68rem;
        text-align: center;
        .btn_{

          width: 2.51rem;
          height: .89rem;
          color: #666666;
          border-radius: .1rem;
          border: .01rem solid #e0e0e0;
        }
        .reserve{
          margin-left: .42rem;
        }
      }
  }
}
</style>
