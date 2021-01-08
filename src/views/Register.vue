<template>
     <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li>
            <router-link :to="{name: 'login'}">登入</router-link>
          </li>
          <li class="layui-this">注册</li>
        </ul>
        <div class="layui-form layui-tab-content" id="LAY_ucm" style="padding: 20px 0;">
          <div class="layui-tab-item layui-show">
            <div class="layui-form layui-form-pane">
              <form method="post">
                <div class="layui-form-item">
                  <label for="L_email" class="layui-form-label">邮箱</label>
                  <div class="layui-input-inline">
                    <validation-provider name="邮箱" rules="required|email" v-slot="{ errors }">
                    <input
                      type="text"
                      name="email"
                      v-model="email"
                      placeholder="请输入邮箱"
                      autocomplete="off"
                      class="layui-input"
                    />
                    <span class="text_error">{{ errors[0] }}</span>
                    </validation-provider>
                  </div>
                  <div class="layui-form-mid layui-word-aux">将会成为您唯一的登入名</div>
                </div>
                <div class="layui-form-item">
                  <label for="L_username" class="layui-form-label">昵称</label>
                  <div class="layui-input-inline">
                    <validation-provider name="昵称" rules="required" v-slot="{ errors }">
                    <input
                      type="text"
                      name="username"
                      v-model="username"
                      placeholder="请输入昵称"
                      autocomplete="off"
                      class="layui-input"
                    />
                     <span class="text_error">{{ errors[0] }}</span>
                    </validation-provider>
                  </div>
                </div>
                <div class="layui-form-item">
                  <label for="L_pass" class="layui-form-label">密码</label>
                  <div class="layui-input-inline">
                    <validation-provider name="密码" rules="required|min:6" v-slot="{ errors }">
                    <input
                      type="password"
                      name="password"
                      v-model="password"
                      placeholder="请输入密码"
                      autocomplete="off"
                      class="layui-input"
                    />
                     <span class="text_error">{{ errors[0] }}</span>
                    </validation-provider>
                  </div>
                  <div class="layui-form-mid layui-word-aux">6到16个字符</div>
                </div>
                <div class="layui-form-item">
                  <label for="L_repass" class="layui-form-label">确认密码</label>
                  <div class="layui-input-inline">
                    <validation-provider name="确认密码" rules="required|min:6" v-slot="{ errors }">
                    <input
                      type="password"
                      name="repassword"
                      v-model="repassword"
                      placeholder="请输入确认密码"
                      autocomplete="off"
                      class="layui-input"
                    />
                     <span class="text_error">{{ errors[0] }}</span>
                    </validation-provider>
                  </div>
                </div>
                <div class="layui-form-item">
                  <label for="L_vercode" class="layui-form-label">验证码</label>
                  <div class="layui-input-inline">
                    <validation-provider name="验证码" rules="required|length:4" v-slot="{ errors }">
                    <input
                      type="text"
                      name="code"
                      v-model="code"
                      placeholder="请输入验证码"
                      autocomplete="off"
                      class="layui-input"
                    />
                     <span class="text_error">{{ errors[0] }}</span>
                    </validation-provider>
                  </div>
                 <div class="cursor_pointer svg" v-html="svg" @click="_getCaptcha"></div>
                </div>
                <div class="layui-form-item">
                  <button class="layui-btn" lay-filter="*" lay-submit>立即注册</button>
                </div>
                <div class="layui-form-item fly-form-app">
                  <span>或者直接使用社交账号快捷注册</span>
                  <a
                    href
                    onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})"
                    class="iconfont icon-qq"
                    title="QQ登入"
                  ></a>
                  <a
                    href
                    onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})"
                    class="iconfont icon-weibo"
                    title="微博登入"
                  ></a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCaptcha } from '@/api/login'
export default {
  name: 'Register',
  props: {

  },
  components: {

  },
  data () {
    return {
      email: '',
      username: '',
      password: '',
      repassword: '',
      code: '',
      svg: ''
    }
  },
  computed: {

  },
  created () {

  },
  mounted () {
    this._getCaptcha()
  },
  watch: {

  },
  methods: {
    _getCaptcha () {
      getCaptcha().then(res => {
        const { code, data } = res
        if (code === 200) {
          this.svg = data
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">

</style>
