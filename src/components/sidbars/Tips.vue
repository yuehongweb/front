<template>
  <div class="yh-tips">
    <div class="car-title">
      温馨提示
    </div>
    <div class="car-content">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tips'
}
</script>

<style scoped lang="scss">
.yh-tips {
  border-radius: 4px;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.05);
  .car-title {
    padding: 0 20px;
    height: 50px;
    line-height: 50px;
    color: #333;
    background-color: #fff;
    border-bottom: 1px solid #e2e2e2;
  }
}
</style>
