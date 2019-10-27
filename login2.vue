<template>
    <div class="container">
        <div class="logo">
            <img src="../assets/images/logo.jpg"/>
        </div>
        <div class="inputgroup">
           <input type="number" placeholder="请输入手机号"/>
           <button>获取验证码</button>
           <br><br>
           <input type="number" placeholder="请输入验证码"/>
        </div>
        <button class="btn">登录</button>
    </div>
</template>

<script>
export default {
    name:'login'
}
</script>

<style scoped>
  .container{
      height: 100%;
      width: 100%;
      padding:2.625rem;
      box-sizing: border-box;
      background-color: #fff;
  } 
  .logo {
     text-align: center;
  }
  .logo img{
     width: 150px;
  }


</style>