<template>
  <div class="forgetPass">
<div>
      <label for="password"> 旧密码 </label>
      <input type="text" id="oldpassword" placeholder="请输入新密码" />
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
      <button class="subtn">确认修改</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      ischeck: false,
      isShow:false,
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


  .sut {
    text-align: center;
    margin-top: 1rem;
    .subtn {
      width: 5rem;
      height: 0.96rem;
      font-size: 0.36rem;
      color: #ffffff;
      font-weight: 500;
      border-radius: 0.1rem;
       background-color: #42a4ff;
      border: 0.01rem solid #e0e0e0;
    }
  }
}
</style>
