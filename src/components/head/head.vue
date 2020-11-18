<template>
    <div class="head">
         
    </div>
</template>

<script>
export default {
    components: {

    },
    props: {

    },
    data() {
        return {

        };
    },
    created() {

    },
    watch: {

    },
    computed: {

    },
    mounted() {
        
    },
    methods: {
        back(){
            this.$router.go(-1);
        }
    },
};
</script>

<style lang='less' scoped>
.head{
    height: .88rem;
    line-height: .88rem;
    text-align: center;
    position: relative;
    .back{
        position: absolute;
        left: .24rem;
        top: 0.18rem;
    }
    p{
        font-size: .36rem;
    }
}
</style>
