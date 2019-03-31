<template>
  <!-- 容器 -->
  <el-container class="index-container">
    <el-header class="my-header">
      <el-row>
        <el-col :span="4">
          <img src="../assets/logo.png" alt="" />
        </el-col>
        <el-col :span="18">
        
        </el-col>
        <el-col :span="2">
          <el-button type="success" @click="logout">退出</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-container class="mycontainer">
      <!-- 导航菜单 -->
      <el-aside class="my-aside" width="200px">
        <el-menu default-active="2" class="el-menu-vertical-demo" router>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
        
            <el-menu-item router index="user">
              <span class="el-icon-menu"></span>
              选项1
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
    
      <el-main class="my-main">
      <router-view> </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: "index",
    methods: {
      logout(){
        //删除缓存
        window.sessionStorage.removeItem("token");
        this.$router.push("/login")
      }
    },
  beforeCreate() {
    if(window.sessionStorage.getItem("token")){

    }else{
      this.$message.error("先登录");
      this.$router.push("/login")
    }
  },
  };
</script>
<style lang="scss">
  .index-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    .my-header {
      height: 60px;
      background: #b3c0d1;
      line-height: 60px;
       img{
         width:60px;
       }
      h2 {
        margin: 0;
        padding: 0;
        text-align: center;
      }
    }
    .my-contaniner {
      flex: 1;
      .my-aside {
        background: skyblue;
      }
      .my-main {
        background-color: #e9eef3;
        padding-top : 0 ;
      }
    }
  }
</style>
