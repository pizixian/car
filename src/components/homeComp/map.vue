<template>
     <div id="map" style="width:100%;height:6rem;"></div>
</template>

<script> 
//所有的独立组件均存放在 vue-baidu-map/components 文件夹下，按需引用即可
import BaiduMap from "vue-baidu-map/components/map/Map.vue"; 
import BmNavigation from "vue-baidu-map/components/controls/Navigation.vue";
export default {
  components: {
    BaiduMap,
    BmNavigation,
  },
  data() {
    return {
   
    };
  },
  mounted() {
            // 百度地图API功能
            var map = new BMap.Map("map");    // 创建Map实例
            map.centerAndZoom(new BMap.Point(113.687202,34.810331), 22);  // 初始化地图,设置中心点坐标和地图级别
            //添加地图类型控件
            map.addControl(new BMap.MapTypeControl({
                mapTypes:[
                    BMAP_NORMAL_MAP,
                    BMAP_HYBRID_MAP
                ]}));
            map.setCurrentCity("郑州");          // 设置地图显示的城市 此项是必须设置的
            map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
  },
};
</script>

<style lang="less" scoped>
  
</style>