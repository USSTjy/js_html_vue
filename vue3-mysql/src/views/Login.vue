<template>
  <div>
    <div>
      <el-form
        :model="form"
        label-width="120px"
        ref="formRef"
        :rules="formRules"
      >
        <el-form-item label="用户名:" prop="userName">
          <el-input
            v-model="form.userName"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码:" prop="userPsd">
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
      <el-button type="primary" @click="register">注册</el-button>
    </div>
  </div>
</template>
<script>
import { reactive, getCurrentInstance, ref, unref } from 'vue'
import { loginAPI } from '../axios/apis'
import { ElMessage } from 'element-plus'
export default {
  setup() {
    //setup()函数在beforeCreate之前调用
    const formRef = ref(null)
    let { proxy } = getCurrentInstance()
    const form = reactive({
      userName: '',
      userPsd: '',
    })
    const formRules = {
      userName: [
        {
          required: true,
          message: '不能为空',
          trigger: 'blur',
        },
      ],
      userPsd: [
        {
          required: true,
          message: '不能为空',
          trigger: 'blur',
        },
      ],
    }
    const login = () => {
      const reform = unref(formRef)
      if (!reform) return
      reform.validate(async (valid) => {
        if (valid) {
          const { userName, userPsd } = form
          const res = await loginAPI({
            userName: userName,
            userPsd: userPsd,
          })
          if (res.code === 0) {
            proxy.$router.push({
              path: '/home',
            })
          } else {
            ElMessage.error(res.msg)
          }
        }
      })
    }
    const register = () => {
      console.log('register')
    }
    return {
      form,
      formRules,
      formRef,
      login,
      register,
    }
  },
}
</script>
