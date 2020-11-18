<template>
    <div class="headerr" >
        <span class="heade_tit">{{title}}</span>
        <slot name="car_title"/>
        <slot name="img_left" @click="back"></slot>
        <slot name="img_right"/>
    </div>
</template>

<script>
export default {
    props: {
        title:{
            type:String
        }
    },
    data() {
        return {

        };
    },
    methods: {
        back(){
            console.log(999)
            this.$router.go(-1)
        }
    },
    components: {

    },
};
</script>

<style scoped lang="less">
.headerr{
    width: 100%;
    height: 1.28rem;
    line-height: .46rem;
    font-size: .18rem;
    text-align: center;
    border-bottom: 1px solid #ccc;
    padding: 0 .24rem;
    position: relative;
    background-color: #ffffff;
    box-sizing: border-box;
    .heade_tit{
        display: block;
        position: absolute;
        left: 50%;
        top: .66rem;
        transform: translateX(-50%);
        font-size: .36rem;
        font-weight: bold;
        color: #333333;
        font-family: '苹方';
    }
    .img_right{
        width: .47rem;
        height: .16rem;
        position: absolute;
        top: .65rem;
        right: 0rem;
    }
    .img_left{
        width: .18rem;
        height: .33rem;
        position: absolute;
        top: .67rem;
        left: 0rem; 
    }
    .himg_left{
        width: .3rem;
        height: .34rem;
        position: absolute; 
        left: .28rem;
        top: .67rem; 
        img{
            width: 100%;
            height: 100%;
        }  
        
    }
}

</style>
 