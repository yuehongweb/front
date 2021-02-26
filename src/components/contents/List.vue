<template>
    <div class="layui-col-md8">
          <div class="yh-list-content">
            <div class="yh-title">
              <ul class="layui-clear">
                <li class="yh-line"><a href="">综合</a></li>
                <li class="yh-line"><a href="">未结</a></li>
                <li class="yh-line"><a href="">已结</a></li>
                <li><a href="">精华</a></li>
              </ul>
            </div>
            <div class="yh-content">
              <yh-list-item></yh-list-item>
            </div>
          </div>
        </div>
</template>

<script>
import ListItem from './ListItem'
export default {
  name: 'list',
  components: {
    'yh-list-item': ListItem
  }
}
</script>

<style scoped lang="scss">
.yh-list-content {
  padding: 0 20px;
  border-radius: 5px;
  .yh-title {
    height: 50px;
    line-height: 50px;
    background-color: #fff;
    border-bottom: 1px solid #e2e2e2;
    ul {
      li {
        float: left;
        padding-left: 20px;
      }
    }
  }
  .yh-content {
    background-color: #fff;
  }
}
</style>
