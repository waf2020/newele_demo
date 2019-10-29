<template>
    <div class="container">
        <div class="logo">
            <img src="../assets/images/logo.jpg"/>
        </div>
        <div class="inputgroup">
            <div class="btn-group">
             <input type="number" placeholder="请输入手机号" v-model="phone"/>
             <button @click="getcode">获取验证码</button>
            </div>
          
            <input type="number" placeholder="请输入验证码" v-model="codenumber" />
        </div>
        <button class="btn" @click="submit">登录</button>
       
    </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
    name:'login2',
    data(){
        return{
           phone: '',
           codenumber:''
           
        }
    },
    methods:{
       submit:function(){
          if(!(this.phone=='' || this.codenumber=='' || !(/^1[3456789]\d{9}$/.test(this.phone)))){
              console.log("可以发请求")
          }
          else{
               if(this.phone==''){
                Toast({
                   message:'手机号不能为空！',
                    duration: 2000,
               })
           } else if(this.codenumber==''){
                 Toast({
                   message:'验证码不能为空！',
                    duration: 2000,
               })
           } else if(!(/^1[3456789]\d{9}$/.test(this.phone))){
                      Toast({
                   message:'手机号码格式错误！',
                    duration: 2000,
               })
             
               }
            
          }


       },
       getcode:function(){
           
           if(this.phone==''){
           Toast({
                   message:'手机号码不能为空！',
                    duration: 2000,
               })
               return false;
           }
           else{
               if(!(/^1[3456789]\d{9}$/.test(this.phone))){
                      Toast({
                   message:'手机号码格式错误！',
                    duration: 2000,
               })
               return false;
               }
           }
       }
    }
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
      width: 60%;
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