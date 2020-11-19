<template>
  <div class="register">
    <div class="top">
      <div class="one">
        <div>手机号</div>
        <input
          placeholder="请输入手机号"
          @input="pho"
          v-model="phone"
          type="text"
        />
      </div>
      <div class="two">
        <div class="left">验证码</div>
        <div class="right">
          <input placeholder="请输入验证码" v-model="code" type="text" />
          <button v-if="iscode" @click="codes" class="code">获取验证码</button>
          <button v-else>获取验证码({{num}})</button>
        </div>
      </div>
      <div class="one">
        <div>请输入新密码</div>
        <input
          id="password"
          placeholder="请输入新密码"
          v-model="newpass"
          type="password"
        />
        <van-icon @click="look" color="#999999" size=".26rem" name="eye-o" />
      </div>
      <div class="one">
        <div>再次输入密码</div>
        <input
          id="repassword"
          placeholder="再次输入新的密码"
          v-model="pass"
          type="password"
        />
        <van-icon @click="looks" color="#999999" size=".26rem" name="eye-o" />
      </div>
    </div>
    <div class="last" style="text-align:center">
      <button @click="sub" v-if="issub" class="sub">提交</button>
      <button v-else>提交</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      phone: "",
      code: "",
      newpass: "",
      pass: "",
      ischeck: false,
      issub: false,
      iscode: false,
      ischecks: false,
      num: 30,
      timer:''
    };
  },
  methods: {
    pho() {
      let reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
      if (reg.test(this.phone)) {
        this.iscode = true;
        
      } else {
        this.iscode = false;
        this.issub = false;
      }
    },
    codes() {
      //  console.log("1");。
      this.iscode = false;
       this.timer = setInterval(()=>{
         this.num--;
        if (this.num == 0) {
          this.iscode = true;
          clearInterval(this.timer);
          this.num = 30;
        }
      }, 1000);
    },
    sub() {
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
    looks() {
      this.ischecks = !this.ischecks;
      if (this.ischecks) {
        repassword.type = "password";
      } else {
        repassword.type = "text";
      }
    },
  },
  updated() {
    let reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
    if (this.newpass != ""&&this.pass!= ""&&reg.test(this.phone)&&this.code!='') {
          this.issub = true;
        }
        else{
          this.issub = false;
        }
  },
  components: {},
};
</script>

<style scoped lang="less">
.register {
  .top {
    padding: 0.25rem;
    .one {
      display: flex;
      align-items: center;
      margin-bottom: 0.29rem;
      div {
        width: 1.75rem;
        font-size: 0.26rem;
        margin-right: 0.2rem;
        font-weight: 700;
      }
      input {
        flex: 1;
        border: 0.01rem solid #e4e4e4;
        border-radius: 0.04rem;
        color: #999999;
        padding: 0.22rem 0.2rem;
      }
      .van-icon {
        position: absolute;
        right: 0.5rem;
      }
    }
    .two {
      display: flex;
      align-items: center;
      margin-bottom: 0.29rem;
      .left {
        width: 1.75rem;
        font-size: 0.26rem;
        margin-right: 0.2rem;
        font-weight: 700;
      }
      .right {
        display: flex;
        font-weight: 400;
        justify-content: space-between;
        align-items: center;
        input {
          width: 2rem;
          border: 0.01rem solid #e4e4e4;
          border-radius: 0.04rem;
          color: #999999;
          padding: 0.22rem 0.2rem;
        }
        button {
          width: 2rem;
          height: 0.68rem;
          margin-left: 0.5rem;
          font-size: 0.22rem;
          border: none;
          border-radius: 0.04rem;
          color: #999999;
        }
        .code {
          width: 2rem;
          height: 0.68rem;
          margin-left: 0.5rem;
          font-size: 0.22rem;
          border: none;
          border-radius: 0.04rem;
          color: white;
          background-color: #3e8af7;
        }
      }
    }
  }
  .last {
    margin-top: 0.75rem;
    button {
      width: 5rem;
      height: 1rem;
      border: none;
      border-radius: 0.09rem;
      color: #999999;
      font-size: 0.34rem;
    }
    .sub {
      background-color: #3e8af7;
      color: white;
      width: 5rem;
      height: 1rem;
    }
  }
}
</style>
