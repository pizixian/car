<template>
  <div class="wallet">
    <Head>
      <span slot="car_title" class="heade_tit">我的</span>
      <img src="" slot="img_left">
    </Head>


    <!-- 两个大块的余额详情 -->
    <div class="wall_head">
      <div class="head_one header">
        <div class="head_txt">我的平驾币</div>
        <span class="wenhao"></span>
        <p class="head_amount">2030<span class="mei">枚</span></p>
        <div class="use" @click="show_details">使用明细</div>
      </div>
      <div class="head_two header">
        <div class="head_txt">可用积分</div>
        <span class="wenhao"></span>
        <p class="head_amount">1000<span class="mei">积分</span></p>
        <div class="use" @click="show_details">使用明细</div>
      </div>
    </div>

    <!-- vant遮罩层 -->
    <van-overlay :show="isShow" @click="isStop">
      <div class="wrapper" @click.stop>
        <div class="ovecenter">
          <h3>使用说明</h3>
          <p>1.1平驾币=1元</p>
          <p>2.平驾币可用于冲抵租车消费</p>
          <p>3.平驾币不可取现</p>
          <p>4.1积分=1元，每单最高可使用积分冲抵40%的租车费用</p>
        </div>
      </div>
    </van-overlay>

    <!-- 充值六个块 -->
    <div class="wall_list">
      <p class="wall_title">充值额度</p>
      <ul class="wa_list">
        <li @click="cli(0)" :class="0==num?'blue':''">
          <p class="amount">500枚</p>
          <p class="donate">送50积分</p>
        </li>
        <li @click="cli(1)" :class="1==num?'blue':''">
          <p class="amount">1000枚</p>
          <p class="donate">送100积分</p>
        </li>
        <li @click="cli(2)" :class="2==num?'blue':''">
          <p class="amount">2000枚</p>
          <p class="donate">送300积分</p>
        </li>
        <li @click="cli(3)" :class="3==num?'blue':''">
          <p class="amount">5000枚</p>
          <p class="donate">送1000积分</p>
        </li>
        <li @click="cli(4)" :class="4==num?'blue':''">
          <p class="amount">10000枚</p>
          <p class="donate">送3000积分</p>
        </li>
        <li @click="cli(5)" :class="5==num?'blue':''">
          <input type="number" placeholder="其他金额" class="another" />
        </li>
      </ul>
    </div>

    <!-- 充值按钮 -->
    <div class="wall_pay"  v-show="!changebox">
      <button class="pay_but" :class="changecolor==true?'light':''" @click="top_up">立即充值</button>
    </div>

    <!-- 点击充值按钮触发的效果 -->
    <div class="payBott" v-show="changebox">
        <van-radio-group v-model="radio">
          <van-cell-group>
            <van-cell title="微信" clickable @click="radio = '1'">
              <template #right-icon>
                <van-radio name="1" icon-size=".24rem"/>
              </template>
            </van-cell>
            <van-cell title="支付宝" clickable @click="radio = '2'">
              <template #right-icon>
                <van-radio name="2" icon-size=".24rem"/>
              </template>
            </van-cell>            
          </van-cell-group>
        </van-radio-group>

        <div>
          <p>更多支付方式</p>
          <span></span>
        </div>
      <button class="paybott_but">支付</button>
    </div>


  </div>
</template>

<script>
// vue、vant配置
import Vue from 'vue'
import { Checkbox, CheckboxGroup  ,RadioGroup, Radio,Overlay} from 'vant';
import Head from '../../head/head'

Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Overlay);


export default {
  props: {},
  data() {
    return {
      num:null,
      isShow: false,
      isBotshow:false,
      radio: '1',
      changebox:false,
      changecolor:false,
      pay:[
        {coin:500,integral:50},
        {coin:1000,integral:100},
        {coin:2000,integral:300},
        {coin:5000,integral:1000},
        {coin:10000,integral:3000}
      ],
      title:'我的钱包'
    };
  },
  methods: {
    show_details() {
      this.isShow = true;
    },
    isStop() {
      this.isShow = false;
    },
    cli(i){
      this.num=i;
      this.changecolor=true;
    },
    top_up(){
      this.changebox=true;
    }
  },
  components: {
    Head
  },
};
</script>

<style scoped lang="less">
.wallet>.wall_pay{
  .light{
    background-color: #0d5fd7;
    color: #fff;
  }
}
.wall_list{
  .wa_list{
    .blue{
      border: .01rem solid #0d5fd7;
      .amount{
        color: #0d5fd7;
      }
      .donate{
        color: #0d5fd7;
      }
    }
  }
}
// vant遮罩层
.wrapper {
  .ovecenter {
    width: 4.5rem;
    height: 3.28rem;
    background-color: #fff;
    margin: 4.26rem auto;
    color: #333333;
    padding: 0.38rem 0.29rem;
    // display: flex;
    h3 {
      font-size: 0.28rem;
      font-weight: bold;
      margin-bottom: 0.3rem;
    }
    p {
      font-size: 0.24rem;
    }
  }
}


// 头部预览框
.wall_head {
  width: 7.03rem;
  height: 4.4rem;
  margin: 0 auto;
  position: relative;
}
.header {
  width: 7.03rem;
  height: 2rem;
  // line-height: 2rem;
  font-size: 0.24rem;
  border-radius: 0.18rem;
  color: #fff;
  position: relative;

  .head_txt {
    position: absolute;
    top: 0.5rem;
    left: 0.49rem;
  }
  .head_amount {
    display: block;
    position: absolute;
    top: 0.9rem;
    left: 0.49rem;
  }
  .head_amount {
    font-size: 0.48rem;
  }
  .mei {
    font-size: 0.24rem;
    margin-left: 0.13rem;
  }
  .use {
    width: 1.32rem;
    height: 0.6rem;
    font-family: "苹方";
    border-radius: 0.25rem 0 0 0.25rem;
    background-color: #0d5fd7;
    text-align: center;
    line-height: 0.6rem;
    position: absolute;
    right: 0rem;
    top: 50%;
    transform: translateY(-50%);
  }
}
.head_one {
  background-color: #1c86ff;
}
.head_two {
  background-color: #ff7944;
  position: absolute;
  bottom: 0;
}

// 充值额度框
.wall_list {
  width: 7.03rem;
  height: 2.97rem;
  margin: 0 auto;
  .wall_title {
    width: 100%;
    height: 0.85rem;
    line-height: 0.85rem;
    font-size: 0.2804rem;
    font-family: "苹方";
    // 225 100
  }
  .wa_list {
    height: 2.12rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      width: 2.25rem;
      height: 1rem;
      background-color: #f2f2f2;
      border-radius: 0.06rem;
      // 充值的币
      .amount {
        font-size: 0.28rem;
        font-family: "苹方";
        color: #333333;
        font-weight: bold;
      }
      //送的积分
      .donate {
        font-size: 0.24rem;
        font-family: "苹方";
        color: #333333;
      }
      //其他金额
      .another {
        width: 100%;
        height: 100%;
        background-color: #f2f2f2;
        text-align: center;
        font-size: 0.28rem;
        color: #333333;
        font-family: "苹方";
        border: none;
        border-radius: 0.06rem;
        font-weight: bold;
        div{
          border: none;
        }
      }
    }
  }
}
.another::-webkit-input-placeholder {
  font-weight: bold;
  font-size: 0.28rem;
  color: #333333;
  font-family: "苹方";
}

// 充值界面
.wall_pay {
  width: 7.03rem;
  height: 4.69rem;
  margin: 0 auto;
  position: relative;
  .pay_but {
    width: 5rem;
    height: 1rem;
    position: absolute;
    top: 1.2rem;
    left: 50%;
    transform: translateX(-50%);
    background-color: #f2f2f2;
    color: #999999;
    font-size: 0.36rem;
    border-radius: 0.08rem;
  }
}

//支付选项弹出框
.payBott{
  width: 7.03rem;
  height: 4.69rem;
  margin: 0 auto;
  padding-top: .5rem;
  box-sizing: border-box;
  font-size: .28rem;
  font-family: '苹方';
  color: #333333;
  font-weight: bold;
  position: relative;

  .van-cell{
    height: .48rem;
    line-height: .48rem;
    padding: 0rem;
    font-size: .28rem;
    font-family: '苹方';
    margin-bottom: .3rem;
    border: none;
    color: #333333;
    font-weight: bold;
  }

  .paybott_but{
    position: absolute;
    width: 5rem;
    height: 1rem;
    background-image: linear-gradient(to right ,#43a5ff ,#3d88f7);
    font-size: .36rem;
    color: #fff;
    font-weight: bold;
    border-radius: .08rem;
    left: 50%;
    transform: translateX(-50%);
    bottom: .88rem;
  }
}
</style>
