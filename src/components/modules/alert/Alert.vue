<template>
  <div v-show="isShow">
    <div class="alert">
      <div class="msg">{{ msg }}</div>
      <div v-if="type === 'alert'">
        <div class="btn primary" @click="close">确定</div>
      </div>
      <div v-else class="confirm">
        <div class="btn" @click="cancel">取消</div>
        <div class="btn primary" @click="confirm">确定</div>
      </div>
    </div>
    <div class="mask" @click="maskColse"></div>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  type: {
    type: String,
    default: 'alert'
  },
  props: {
    msg: {
      type: String,
      default: ''
    },
    isShow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close () {
      this.isShow = false
    },
    maskColse () {
      // 如果是confirm弹框，点击遮罩层不可以关闭弹框
      if (this.type === 'comfirm') return
      this.close()
    },
    confirm () {
      this.$emit('confirm')
      this.close()
    },
    cancel () {
      this.$emit('cancel')
      this.close()
    }
  }
}
</script>

<style scoped lang="scss">
$color-primary: #009688;
$main-dark: darken($color-primary, 3%);
.alert {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 150px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.5);
  z-index: 3000;
  padding: 20px 10px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  .msg {
    flex: 1;
    display: flex;
    align-items: center;
  }
  .btn {
    width: 60px;
    height: 28px;
    color: #333;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    border:1px solid $color-primary;
    &.primary {
      color: #fff;
      background-color: $color-primary;
      &:hover {
        background-color: $main-dark;
      }
    }
  }
  .confirm{
      display: flex;
      justify-content: space-around;
      width: 100%;
      padding: 0 40px;
  }
}
.mask {
  position: fixed;
  top: 0;
  height: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow: hidden;
}
</style>
