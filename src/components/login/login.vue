<template>
  <div class="login">
    <div class="top">
      <span>平价</span>
      <span>租车</span>
      <span class="last">At Par</span>
    </div>
    <div class="center">
      <div class="name">
        <span>账号</span>
        <input placeholder="请输入新密码" v-model="name" type="text" />
      </div>
      <div class="password">
        <span>密码</span>
        <input id="password" placeholder="再次输入新密码" v-model="pass" type="password" />
        <van-icon @click="look" color="#999999" size=".26rem" name="eye-o" />
      
      </div>
      <button @click="login">登录</button>
      <p>
        <router-link to="/register">注册</router-link>
        <router-link to="">忘记密码</router-link>
      </p>
    </div>
    <div class="end">
      登录即表示您同意<span class="agreement">《平价租车用户隐私协议》</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      name: "",
      pass: "",
      ischeck: false,
    };
  },
  methods: {
    login() {
      console.log("1");
    },
      look() {
      this.ischeck = !this.ischeck;
      if (this.ischeck) {
        password.type = "password";
      } else {
        password.type = "text";
      }
    },
  },
  components: {},
};
</script>

<style scoped lang="less">
.login {
  .top {
    margin-bottom: 1.58rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #2476fa;
    font-size: 0.43rem;
    font-weight: 700;
    .last {
      font-size: 0.34rem;
      width: 1.03rem;
    }
  }
  .center {
    padding: 0 0.33rem 0 0.25rem;
    div {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.28rem;
      align-items: center;
      position: relative;
      input {
        flex: 1;
        border: 0.01rem solid #e4e4e4;
        border-radius: 0.04rem;
        color: #999999;
        padding: 0.32rem 0.2rem;
      }
      span {
        color: #000000;
        font-size: 0.26rem;
        font-weight: 700;
        margin-right: .86rem;
      }
      .van-icon{
       position: absolute;
       right: .2rem;
      }
    }
    button {
      margin-top: 1.14rem;
      height: 1rem;
      color: white;
      background: -webkit-linear-gradient(left, #43a5ff, #3d88f7);
      border: none;
      width: 100%;
      border-radius: 0.1rem;
      font-size: 0.32rem;
    }
    p {
      display: flex;
      justify-content: space-between;
      a {
        font-size: 0.25rem;
        color: #2476fa;
      }
    }
  }
  .end {
    width: 100%;
    position: absolute;
    bottom: 0.5rem;
    text-align: center;
    left: 50%;
    transform: translate(-50%);
    color: #bcbcbc;
    .agreement {
      color: #0c67f9;
    }
  }
}
</style>
