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
  .inputgroup {
      color: black;
      width: 100%;
      margin-top: 1.875rem;
      
  }
  .inputgroup > input:nth-child(1) {
      width:70%;
      border-right: 1px solid transparent;
  }
  .inputgroup > input {
      width: 100%;
      border: 1px solid #ccc;
      height: 2rem;
      padding-left: 6px;
      vertical-align:middle;
      
  }
  .inputgroup > button {
      height: 2.25rem;
      vertical-align:middle;
      width: 25%;
      border: 1px solid #ccc;
      background-color: #fff;
  }

</style>