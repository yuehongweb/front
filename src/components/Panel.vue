<template>
    <div class="yh-panel">
      <div class="layui-container">
        <!-- 导航区域 -->
        <ul class="layui-clear">
          <li class="layui-hide-xs"><a href="">首页</a></li>
          <li><a href="">提问</a></li>
          <li><a href="">分享<span class="layui-badge-dot"></span></a></li>
          <li><a href="">讨论</a></li>
          <li><a href="">建议</a></li>
          <li><a href="">公告</a></li>
          <li><a href="">动态</a></li>
          <li class="layui-hide-xs layui-hide-sm layui-show-md-inline-block"><span class="line"></span></li>
          <li class="layui-hide-xs layui-hide-sm layui-show-md-inline-block"><a href="">我发表的帖</a></li>
          <li class="layui-hide-xs layui-hide-sm layui-show-md-inline-block"><a href="">我收藏的帖</a></li>
        </ul>
        <!-- 搜索区域 -->
        <div class="yh-panel-right layui-hide-xs">
          <div class="yh-search"><i class="layui-icon">&#xe615;</i></div>
          <a class="layui-btn">发表新帖</a>
        </div>
        <div class="layui-show-xs-block layui-hide-sm yh-row-center">
          <a class="layui-btn">发表新帖</a>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'panel',
  data () {
    return {

    }
  },
  computed: {

  },
  created () {

  },
  mounted () {

  },
  watch: {

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
@media screen and(max-width: 768px) {
  .yh-panel {
    height: auto !important;
    ul {
      padding: 10px;
      li {
        float: left;
        width: 33.33%;
        height: 36px !important;
        line-height: 36px !important;
        text-align: center;
      }
    }
  }
}
.yh-panel {
  background-color: #fff;
  height: 50px;
  line-height: 50px;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
  .layui-container {
    position: relative;
  }
  ul {
    li {
      display: inline-block;
      height: 50px;
      a {
        padding: 0 20px;
      }
      .line {
        display: inline-block;
        height: 15px;
        width: 1px;
        background-color: #e2e2e2;
        vertical-align: middle;
      }
    }
  }
  .yh-panel-right {
    position: absolute;
    top: 0;
    right: 0;
    .yh-search {
      display: inline-block;
      height: 50px;
      margin-right: 20px;
      vertical-align: top;
      i {
        font-size: 20px;
      }
    }
  }
  .yh-row-center {
    text-align: center;
    padding-bottom: 15px;
  }
}
</style>
