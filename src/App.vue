<template>
  <div id="app">
    <div class="layui-container">
    <form class="layui-form layui-form-pane" action="">
      <div class="layui-form-item">
        <label class="layui-form-label">手机/邮箱</label>
        <div class="layui-input-block">
          <input
            type="text"
            name="title"
            required
            lay-verify="required"
            placeholder="请输入手机/邮箱"
            autocomplete="off"
            class="layui-input"
          />
        </div>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">密码</label>
        <div class="layui-input-block">
          <input
            type="password"
            name="title"
            required
            lay-verify="required"
            placeholder="请输入密码"
            autocomplete="off"
            class="layui-input"
          />
        </div>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">验证码</label>
        <div class="layui-input-block">
          <input
            type="text"
            name="title"
            required
            lay-verify="required"
            placeholder="请输入验证码"
            autocomplete="off"
            class="layui-input"
          />
        </div>
      </div>
      <button type="button" class="layui-btn">立即登录</button>
<a href="http://www.layui.com" class="text-btn">忘记密码?</a>
    </form>
    </div>
  </div>
</template>

<style lang="scss">
#app{
  background-color: #f2f2f2;
}
.layui-container{
  background-color: #fff;
}
.layui-input-block{
  width: 200px !important;
}
.text-btn{
  margin-left: 24px;
  &:hover{
    color: #01AAED;
  }
}

</style>
