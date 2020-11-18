<template>
  <div class="forgetPass">
    <div>
      <label for="username" > 手机号 </label>
      <input
        type="text"
        id="username"
        placeholder="请输入手机号"
        @input="codestyle"
        v-model="username"
      />
      <span :class="{err:isErr}" v-show="isErr">请输入正确的手机号</span>
    </div>
    <div class="two">
      <label for="code"> 验证码 </label>
      <input type="text" id="code" placeholder="请输入验证码" v-model="code" />
      <button
        :class="{btn_active: isActive }"
        class="getCode con"
        :disabled="disabled"
        @click="getCode"
        
      >
        <span v-show=" !isText">获取验证码</span>
        <span v-show="isText">还剩下{{codeNum}}秒</span>
      </button>
     

    </div>
    <div>
      <label for="password"> 新密码 </label>
      <input type="password" id="password" placeholder="请输入新密码" />
      <img src="../../../assets/img/eye.png" id="img_in" @click="checked(0)" />
    </div>
    <div>
      <label for="repassword">确认</label>
      <input type="password" id="repassword" placeholder="再次输入新的密码" />
      <img src="../../../assets/img/eye.png" id="img_in" @click="checked(1)" />
    </div>
    <div class="sut">
      <button class="subtn">提交</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      ischeck: false,
      isText:false,
      timer: "",
      codeNum: 10,
      disabled: true,
      isActive: false,
      code:'',
      isShow:false,
      isErr:false,
      username:'',
    };
  },
  methods: {
    //小眼睛显示隐藏密码框
    checked(v) {
      this.ischeck = !this.ischeck;
      if (v == 0) {
        if (this.ischeck) {
          password.type = "text";
        } else {
          password.type = "password";
        }
      }
      if (v == 1) {
        if (this.ischeck) {
          repassword.type = "text";
        } else {
          repassword.type = "password";
      
        }
      }
    },
    codestyle() {
      let reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
      if (reg.test(this.username)) {
        this.disabled = false;
        this.isActive = true;
         this.isErr=false;
      }else{
        this.disabled=true
        this.isActive= false
        this.isErr=true
        if(this.username ==''){
             this.isErr=false
        }
      }
    },
    getCode() {  
      this.isText =true
       this.disabled = true;
       this.timer=setInterval(()=>{
               this.codeNum--;
               if(this.codeNum ==0){
                    clearInterval(this.timer) 
                    this.isText =false
                    this.disabled = false;
                    this.code =222222
                    this.codeNum=10;
                    
               }
              },1000)
    },
  },
  components: {},
};
</script>

<style scoped lang="less">
.textcolor {
  color: #e0e0e0;
}
.fontSize(@size) {
  font-size: @size;
}
.forgetPass {
  .fontSize(0);
  div {
    position: relative;
    height: 0.98rem;
    line-height: 0.98rem;
    .fontSize(0.26rem);
    font-weight: 600;
    padding: 0 0.25rem;
    color: #000000;

    input {
      .textcolor;
      margin-left: 0.4rem;
      .fontSize(0.23rem);
      width: 5.53rem;
      height: 0.71rem;
      outline: none;
      padding-left: 0.2rem;
      border-radius: 0.1rem;
      border: 0.01rem solid #e0e0e0;
    }
    label {
      display: inline-block;
      width: 0.86rem;
    }
    #img_in {
      position: absolute;
      top: 0.36rem;
      right: 0.66rem;
      width: 0.38rem;
    }
  }

  .two input {
    width: 3.07rem;
  }
  .con {
    font-size: 0.21rem;
    width: 1.98rem;
    height: 0.68rem;
    border-radius: 0.1rem;
    margin-left: 0.48rem;
  }
  .two .getCode {
    color: #a4a4a4;
  }
  .two .btn_active {
    color: #ffffff;
    background-color: #42a4ff;
  }
  .sut {
    text-align: center;
    margin-top: 1rem;
    .subtn {
      width: 5rem;
      height: 0.96rem;
      font-size: 0.36rem;
      color: #999999;
      font-weight: 500;
      border-radius: 0.1rem;
      border: 0.01rem solid #e0e0e0;
    }
  }
  div .err{
    font-size: .18rem;
    color: red;
    position: absolute;
    right: 0.8rem;
  }
}
</style>
