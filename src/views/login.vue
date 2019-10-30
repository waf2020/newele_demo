<template>
    <div class="container">
        <div class="logo">
            <img src="../assets/images/logo.jpg">
        </div> 
      
       <inputgroup 
       type="Number"
        placeholder="请输入手机号" 
        :butTitle="butTitle" 
        :disabled="disabled"
        v-model="phone"
        @inputvalues="getinputvalue"
        @btn_click='getVercode'
        :errors="errors.phone"
       />

       <inputgroup 
       type="text"
       placeholder="验证码" 
        v-model="vercode"
        :errors="errors.code"
        @inputvalues="getinputCodevalue"
       />
     <div class="login_des">
         <p>新用户登录剂自动注册，表示已同意 <span>《用户服务协议》</span></p>
     </div>

  <button class="login_btn" @click="handleLogin()">登录</button>
       
       
    </div>
</template>

<script>
import inputgroup from '../components/inputgroup.vue'
import {Toast} from 'mint-ui'
export default {
    name:'login',
    data(){
        return{
           phone:'',
           vercode:'',
           disabled:false,
           butTitle:'获取验证码',
           errors:{}
           
        }
    },
    components:{
       inputgroup
    },
    methods:{
        isClick(){   //登录按钮是否可以被点击
           if(this.phone=='' || this.phone==null || this.vercode=='' || this.vercode==null){
               return true;
           }
           return false;
        },
        handleLogin(){ //登录
        console.log("登录")
             this.$axios.post('/api/posts/sms_back',{
                 phone: this.phone,
                 code: this.vercode
             }).then(res=>{
                 console.log("res======"+res);
                 Toast({
                     message:'登录成功'
                 })
                 localStorage.setItem("ele_login",true);
                 this.$router.push("/");
             }).catch(err=>{
                 this.errors={
                     code: err.response.data.msg
                 };
             })
        },
        
         getinputvalue(value){  //获取子inputgroup组件的 input输入框的值，父组件@inputvalues="getinputvalue"
                                //监听子组件值是否改变 改变立马触发该事件
           
           this.phone=value;
         },
         getinputCodevalue(value){
             console.log("codevale=="+value);
            this.vercode=value
         },
        getcorrectCode(){ //验证phone格式
            if(this.phone=='' || this.phone==null){
                console.log("this.phone=="+this.phone);
                console.log("phone is emty");
                 this.errors={
                    phone:'手机号码不能为空'
                }
                return false;
            }
            else if(!(/^1[3456789]\d{9}$/.test(this.phone))){
                console.log("phone type error");
                this.errors={
                    phone:'手机号码格式错误'
                }
                return false;
            }
            else {
                this.errors={}
                return true;
            }

        },
         getcountdown(){ //倒计时
         console.log("进来了");
                let Time=2090;      
                let timer=setInterval(() => {
                       if(Time==0){
                    this.butTitle="点击获取验证码";
                    this.disabled=false;
                    clearInterval(timer);
                }  else {
                    this.butTitle='请'+ Time-- + 's后重试'
                    this.disabled=true;
                } 
                 
           },1000); 
          } ,        
         getVercode(){
             if(this.getcorrectCode()){
                 
                 console.log("is loding");
                 this.getcountdown();  //调用倒计时
                 console.log("this.phone====="+this.phone);
                
                 this.$axios.post('/api/posts/sms_send',{
                         tpl_id:"195577",
                         phone:this.phone,
                          key: "d0e514ea6c574cf7fe4b24034de51fbc",

                 }).then((res)=>{
                     
                     console.log(res);
                 })

             }
         }
    },
    created(){
     
    }
}
</script>

<style scoped lang="scss">

  .container {
      width: 100%;
      height: 100%;
      padding: px(32);
      box-sizing: border-box;
  }
  .logo {
      text-align: center;
      margin-bottom: px(20);
  }
  .logo img {
      width: px(150);
  }
  .login_des p {
     color: #aaa;
     font-size: px(15);
     line-height: px(22);
  }
  .login_btn {
      width: 100%;
      background-color: #48ca38;
      height: px(40);
      border: none;
      border-radius:px(5);
      color: white;
      outline: none;
     
  }
  .login_des ,
  .login_btn,
  .text_group{
      margin: px(20) 0;
  }
.login_des >p >span {
    color: deepskyblue;
}
  @media screen and (max-width: 320px) {
    .container {
        padding: px(19);
    }
}

</style>