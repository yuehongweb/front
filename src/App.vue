<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'app',
  components: {
    Header,
    Footer
  }

}
</script>
<style lang="scss">
// 这里是全局的样式
@import "assets/layui/css/layui.css";
@import "assets/css/global.css";
@import "assets/layui/css/modules/layer/default/layer.css";
.yh-line{
  &::after{
    content: ' ';
    width: 1px;
    height: 16px;
    background-color: #e2e2e2;
    display: inline-block;
    vertical-align: middle;
    margin-left: 20px;
  }
}

</style>
