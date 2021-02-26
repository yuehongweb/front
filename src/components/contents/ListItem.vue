<template>
     <div class="list-item">
                <a href="">
                  <img
                    src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"
                    alt=""
                  />
                </a>
                <div class="item-right">
                  <h2>
                    <div class="tag">分享</div>
                    <a class="title">基于 layui 的极简社区页面模版</a>
                  </h2>
                  <div class="list-info">
                    <a class="auth">王一博</a>
                    <div class="created">刚刚</div>
                    <div class="fly-kiss">
                      <i class="iconfont icon-kiss"></i>60
                    </div>
                    <span class="list-nums">
                      <i class="iconfont icon-pinglun1" title="回答"></i>
                      230
                    </span>
                  </div>
                </div>
              </div>
</template>

<script>
export default {
  name: 'list-item'
}
</script>

<style scoped lang="scss">
.list-item {
      padding: 20px;
      display: flex;
      a {
        img {
          display: inline-block;
          width: 45px;
          height: 45px;
          border-radius: 2px;
        }
      }
      .item-right {
        margin-left: 20px;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h2 {
          display: flex;
          width: 100%;
          height: 16px;
          line-height: 16px;
          .tag {
            height: 16px;
            line-height: 16px;
            border: 1px solid #5fb878;
            border-radius: 2px;
            font-size: 14px;
            margin-right: 12px;
            color: #5fb878;
            padding: 0 6px;
          }
          a {
            font-size: 16px;
            cursor: pointer;
          }
        }
        .list-info {
          display: flex;
          position: relative;
          >*{
              padding-right: 12px;
          }
          .fly-kiss{
              color: red;
          }
          .list-nums{
              position: absolute;
              top: 0;
              right: 0;
          }
        }
      }
    }
</style>
