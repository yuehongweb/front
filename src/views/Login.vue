<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li class="layui-this">登入</li>
          <li>
            <router-link :to="{ name: 'register' }">注册</router-link>
          </li>
        </ul>
        <div
          class="layui-form layui-tab-content"
          id="LAY_ucm"
          style="padding: 20px 0;"
        >
          <div class="layui-tab-item layui-show">
            <div class="layui-form layui-form-pane">
              <ValidationObserver ref="form">
                <form method="post">
                  <div class="layui-form-item">
                    <label for="L_email" class="layui-form-label">用户名</label>
                    <div class="layui-input-inline">
                      <validation-provider
                        name="username"
                        rules="required|email"
                        v-slot="{ errors }"
                      >
                        <input
                          type="text"
                          name="username"
                          v-model="username"
                          placeholder="请输入用户名"
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
                      <validation-provider
                        name="password"
                        rules="required|min:6"
                        v-slot="{ errors }"
                      >
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
                  </div>
                  <div class="layui-form-item">
                    <label for="L_vercode" class="layui-form-label"
                      >验证码</label
                    >
                    <div class="layui-input-inline">
                      <validation-provider
                        name="code"
                        rules="required|length:4"
                        v-slot="{ errors }"
                      >
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
                    <div
                      class="cursor_pointer svg"
                      v-html="svg"
                      @click="_getCaptcha"
                    ></div>
                  </div>
                  <div class="layui-form-item">
                    <button
                      class="layui-btn"
                      lay-filter="*"
                      lay-submit
                      @click.prevent="submit"
                    >
                      立即登录
                    </button>
                    <span style="padding-left:20px;">
                      <router-link :to="{ name: 'forget' }"
                        >忘记密码？</router-link
                      >
                    </span>
                  </div>
                  <div class="layui-form-item fly-form-app">
                    <span>或者使用社交账号登入</span>
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
              </ValidationObserver>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCaptcha, login } from '@/api/login'
import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'login',
  props: {},
  components: {},
  data () {
    return {
      username: '',
      password: '',
      code: '',
      svg: '' // 图形验证码
    }
  },
  computed: {},
  created () {},
  mounted () {
    this._getCaptcha()
  },
  watch: {},
  methods: {
    // 获取验证码
    async _getCaptcha () {
      // 怎么判断验证码是不是正确的，和发送者一一对应，每一个登陆者生成一个uuid
      let sid = null
      if (!localStorage.getItem('sid')) {
        sid = uuidv4()
        localStorage.setItem('sid', sid)
      } else {
        sid = localStorage.getItem('sid')
      }

      const { data } = await getCaptcha({ sid })
      this.svg = data
    },
    /**
     * 登陆
     */
    async submit () {
      const validRes = await this.$refs.form.validate()
      if (!validRes) return

      const params = {
        username: this.username,
        password: this.password,
        code: this.code,
        sid: localStorage.getItem('sid')
      }

      const { token } = await login(params)
      console.log(token)
    }
  }
}
</script>

<style scoped lang="scss"></style>
