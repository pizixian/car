<template>
  <div class="set">
    <ul>
      <li @click="setPass">修改密码</li>
      <li @click="forgetPass">忘记密码</li>
      <li>关于我们</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {
    setPass(){
      this.$router.push('/setPass')
    },
    forgetPass(){
      this.$router.push('/forgetPass')
    }
  },
  components: {},


};
</script>


<style scoped lang="less">
.set{
    ul{
        font-size: 0;    
        li{ 
             height: .98rem;
             line-height: .98rem;
             font-size: .26rem;
             padding-left: .25rem;
             border-bottom: .01rem solid #e0e0e0;
          
        }
    }
}
</style>
