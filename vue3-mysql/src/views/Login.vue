<template>
  <div>
    <div>
      <el-form :model="form" label-width="120px">
        <el-form-item label="用户名:">
          <el-input
            v-model="form.userName"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码:">
          <el-input
            v-model="form.userPsd"
            placeholder="请输入密码"
            type="password"
            show-password
          ></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <el-button type="primary" @click="login">登录</el-button>
      <el-button type="primary" @click="register"> 注册{{ msg }}</el-button>
    </div>
  </div>
</template>
<script>
import { ref, getCurrentInstance } from 'vue'
import { loginAPI } from '../axios/apis'
// import { ElMessage } from 'element-plus'
export default {
  setup() {
    //setup()函数在beforeCreate之前调用
    let { proxy } = getCurrentInstance()
    const msg = ref('')
    const form = ref({
      userName: '',
      userPsd: '',
    })
    async function login() {
      const res = await loginAPI({
        userName: 'jy',
        userPsd: '123456',
      })
      if (res.code === 0) {
        // ElMessage.success(res.msg)
        proxy.$router.push({
          path: '/home',
        })
      }
    }
    function register() {
      console.log('register')
    }
    return {
      msg,
      form,
      login,
      register,
    }
  },
}
</script>
