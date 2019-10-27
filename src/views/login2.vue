<template>
    <div class="container">
        <div class="logo">
            <img src="../assets/images/logo.jpg"/>
        </div>
        <div class="inputgroup">
            <div class="btn-group">
             <input type="number" placeholder="请输入手机号"/>
             <button>获取验证码</button>
            </div>
          
            <input type="number" placeholder="请输入验证码"/>
        </div>
        <button class="btn">登录sss</button>
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
       width: 100%;
       /* background-color: pink; */
       display: flex;
       flex-wrap:wrap;
       padding:20px 0;
      

  }

  .inputgroup input:nth-child(1){
      width: 11.5rem;
      border-right: none;
  }
  .inputgroup input:nth-child(2){
      margin-top: 20px;
  }

  .inputgroup input {
      border: 1px solid #ccc;
      height: 1.875rem;
     width: 100%;
     padding-left: 4px;
  }

.btn-group button {
    flex: 1;
    border: 1px solid #ccc;
    background-color: #fff;
    border-left: none;
    padding: 2px 0;
}

.btn-group {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

</style>