<template>
  <div class="choose_time">
    <van-picker show-toolbar :title="title" :columns="columns" @confirm="close" ref="choose"/>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      title: "取车时间",
      columns: [
        // 第一列  日期
        {
          values: [
            "11月00日",
            "11月01日",
            "11月02日",
            "11月03日",
            "11月04日",
            "11月05日",
            "11月06日",
            "11月07日",
            "11月08日",
            "11月09日",
            "11月10日",
            "11月11日",
            "11月12日",
            "11月13日",
            "11月14日",
            "11月15日",
            "11月16日",
            "11月17日",
            "11月18日",
            "11月19日",
            "11月20日",
            "11月21日",
            "11月22日",
            "11月23日",
            "11月24日",
            "11月25日",
            "11月26日",
            "11月27日",
            "11月28日",
            "11月29日",
            "11月30日",
          ],
          defaultIndex: 2,
        },
        // 第二列  时间
        {
          values: [
            "10:00",
            "10:30",
            "11:00",
            "11:30",
            "12:00",
            "12:30",
            "13:00",
            "13:30",
            "14:00",
            "14:30",
            "15:00",
            "15:30",
            "16:00",
            "16:30",
            "17:00",
            "17:30",
            "18:00",
            "18:30",
            "19:00",
            "19:30",
            "20:00",
            "20:30",
            "21:00",
            "21:30",
            "22:00",
          ],
          defaultIndex: 1,
        },
      ],
    };
  },
  methods: {
    close(){
      let time_ = this.$refs.choose.getValues();
      console.log(time_);
    }
  },
  components: {},
};
</script>

<style scoped lang="less">
.choose_time{
  width: 100%;
  height: 6rem;
  position: fixed;
  bottom: 0rem;
}


</style>
