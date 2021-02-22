<template>
<div v-show="isShow">
    <div class="alert">
      <div class="msg">{{ msg }}</div>
      <div class="btn" @click="close" >确定</div>
    </div>
    <div class="mask" @click="maskColse"></div>
</div>
</template>

<script>
export default {
  name: 'Alert',
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
      this.close()
    }
  }
}
</script>

<style scoped lang="scss">
$color-main: #009688;
$main-dark: darken($color-main, 3%);
.alert{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 300px;
    height: 150px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 5px 5px 8px rgba(0,0,0,0.5);
    z-index: 3000;
    padding: 20px 10px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    .msg{
        flex: 1;
        display: flex;
        align-items: center;
    }
    .btn{
        width: 60px;
        height: 28px;
        color: #fff;
        background-color: $color-main;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover{
            background-color: $main-dark;
        }
    }
}
.mask{
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
    z-index: 2000;
    overflow: hidden;
}
</style>
