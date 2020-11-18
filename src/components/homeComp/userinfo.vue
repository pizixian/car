<template>
  <div class="userinfo">
    <div class="user">
      <div><img :src="img" alt="" /></div>
      <div>
        <p>{{ name }}</p>
        <p>{{ phone }}</p>
      </div>
      <div>
        <!-- 路由路径暂时未配置 -->
        <router-link to="#">
          <van-icon
            name="arrow"
            class="right_arrow"
            size="30"
            color="#ffffff"
          />
        </router-link>
        <router-view></router-view>
      </div>
    </div>
    <div>
      <ul class="lis">
        <li>
          <router-link to="#">
            <van-icon name="smile" size="40" color="#42a3fe" />
            <p>我的钱包</p>
          </router-link>
        </li>
        <li>
          <router-link to="#">
            <van-icon name="smile" size="40" color="#42a3fe" />
            <p>我的订单</p>
          </router-link>
        </li>

        <li>
          <router-link to="#">
            <van-icon name="smile" size="40" color="#42a3fe" />
            <p>用户反馈</p>
          </router-link>
        </li>
        <li>
          <router-link to="#">
            <van-icon name="smile" size="40" color="#42a3fe" />
            <p>帮助中心</p>
          </router-link>
        </li>
        <li>
          <router-link to="#">
            <van-icon name="smile" size="40" color="#42a3fe" />
            <p>设置</p>
          </router-link>
        </li>
        <li>
          <router-link to="#">
            <van-icon name="smile" size="40" color="#42a3fe" />
            <p>版本检测</p>
          </router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      img: require("./img/user.jpg"),
      name: "李先生",
      phone: "176****6785",
    };
  },
  created() {},
  watch: {},
  computed: {},
  mounted() {},
  methods: {},
};
</script>

<style lang='less' scoped>
html,
body {
  height: 100%;
}

.userinfo {
  width: 5rem;
  height: 100%;
  background-color: #333;
  // opacity: .8;    
   
  .user {
    padding-top: 0.8rem;
    height: 3.07rem;
    align-items: center;
    opacity: 1;
    background-color: dodgerblue;
    border-radius: 0 0.45rem 0 0;
    overflow: hidden;
    display: flex;
    div:nth-of-type(1) {
      margin-left: 0.23rem;
      img {
        width: 1.3rem;
        height: 1.3rem;
        border-radius: 50%;
      }
    }
    div:nth-of-type(2) {
      margin-left: 0.28rem;
      p {
        color: white;
      }
      p:nth-of-type(1) {
        font-size: 0.28rem;
      }
      p:nth-of-type(2) {
        font-size: 0.24rem;
      }
    }
    div:nth-of-type(3) {
      margin-left: 1.2rem;
    }
  }
  .lis{
    background-color: #ffff;
    // opacity: 1;
    flex: 1;
    height: 10.27rem;
      li{
          height: 1rem;
          line-height: 1rem;
          margin-left: .25rem;
          a{
              display: flex;
              p{
                  font-size: .28rem;
                  margin-left: .35rem;
                  margin-top: .05rem;
                  font-weight: 600;
              }
              i{
                  display: inline-block;
                  margin-top: .2rem;
                  
              }
          }
      }
  }
}
</style>
