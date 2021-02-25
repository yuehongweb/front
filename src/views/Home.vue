<template>
  <div>
    <div class="panel">
      <div class="layui-container">
        <!-- 导航区域 -->
        <ul class="layui-clear">
          <li><a href="">首页</a></li>
          <li><a href="">提问</a></li>
          <li><a href="">分享</a></li>
          <li><a href="">讨论</a></li>
          <li><a href="">建议</a></li>
          <li><a href="">公告</a></li>
          <li><a href="">动态</a></li>
          <li><span class="line"></span></li>
          <li><a href="">我发表的帖</a></li>
          <li><a href="">我收藏的帖</a></li>
        </ul>
        <!-- 搜索区域 -->
        <div class="panel-right">
          <span class="search"
            ><i class="layui-icon layui-icon-search"></i
          ></span>
          <a class="layui-btn">发表新帖</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  props: {},
  components: {},
  data () {
    return {}
  },
  computed: {},
  created () {},
  mounted () {},
  watch: {},
  methods: {}
}
</script>

<style scoped lang="scss">
.panel {
  background-color: #fff;
  height: 50px;
  line-height: 50px;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.05);
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
  .panel-right {
    position: absolute;
    top: 0;
    right: 0;
    .search {
      display: inline-block;
      width: 50px;
      height: 50px;
    }
  }
}
</style>
