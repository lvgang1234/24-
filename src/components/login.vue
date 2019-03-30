<template>
  <div class="login">
    <!-- 居中的盒子 -->
    <div class="box">
      <!-- 标题 -->
      <h2>用户登录</h2>
      <!-- 饿了么ui的form -->
      <el-form
        label-position="top"
        ref="loginForm"
        :model="loginForm"
        :rules="rules"
        lebel-width="80px"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>

        <el-button type="primary" @click="submit('loginForm')">登录</el-button>
        <el-button type="success" @click="resetForm('loginForm')"
          >重置</el-button
        >
      </el-form>
    </div>
  </div>
</template>
<script>
  export default {
    name: "login",
    data() {
      return {
        loginForm: {
          username: "",
          password: ""
        },
        rules: {
          username: [
            { required: true, message: "用户名不能为空", trigger: "blur" },
            {
              min: 4,
              max: 16,
              message: "长度在 4 到 16 个字符",
              trigger: "blur"
            }
          ],
          password: [
            { required: true, message: "请输入密码", trigger: "blur" },
            {
              min: 6,
              max: 16,
              message: "长度在 6 到 16 个字符",
              trigger: "blur"
            }
          ]
        }
      };
    },
    methods: {
      //表单提交
      submit(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            // alert("submit!");
          } else {
           this.$message.error("数据格式错误")
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  };
</script>
<style lang="scss">
  .login {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #324152;

    .box {
      width: 550px;
      padding: 35px;
      border-radius: 10px;
      box-sizing: border-box;
      height: 420px;
      background: #fff;
      .my-btn {
        width: 100%;
      }
    }
  }
</style>
