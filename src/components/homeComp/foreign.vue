<template>
    <div class="foreri">

    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {

        };
    },
    mounted(){
        document.getElementsByClassName('inland')[0].style.display = 'none'
    },
    methods: {

    },
    components: {

    },
    beforeDestroy(){
        document.getElementsByClassName('inland')[0].style.display = 'block' 
    }
};
</script>

<style scoped lang="less">

</style>
