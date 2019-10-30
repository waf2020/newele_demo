<template>
      <div class="text_group">
      <div class="input-group" :class="{'error-border-style':errors}">
             <input 
             :disabled="disabled"
             :placeholder="placeholder" 
             :value="value" 
             :type="type"
             :name="name"
             @input="$emit('inputvalues',$event.target.value)"/>  <!-- 获取input表单的值 -->
             <button v-if="butTitle" @click="$emit('btn_click')">{{butTitle}}</button>
          
       
       </div>
       <div v-if="errors" class="error-style">{{errors}}</div>
</div>
  
    
</template>

<script>
export default {
    name:'inputgroup',
    props:{
        type:{
            type:String,
            default:'text'
        },
        value:String,
        placeholder: String,
        name:String,
        butTitle:String,
        disabled:Boolean,
        errors:String
    },
    created(){
        
    },
    methods:{
      getvalue(){
         console.log("this.value=="+this.value)
      }
    }

}
</script>

<style scoped lang="scss">
@media screen and (max-width: 320px) {
    .input-group > button {
        width: px(80)
    }
    .input-group > input{
        flex: 0;
        width: 50%;
    }
}
.input-group {
     height: 100%;
    display: flex;
    justify-content:space-between;
    flex-direction: row;
      border: 1px solid #ccc;
        background: #fff;
        border-radius: px(4);
}
.input-group  input {
    height: 100%;
     outline: none;
   border: none;
    width: 60%;
    padding:px(10);
   
}
.input-group > button {
  border: none;
  background: #fff;
  outline: none;
  
   
}
input:disabled {
  background-color: #fff;
}
.error-style {
  color: red;
  font-size: px(14); 
}
.error-border-style {
  border: 1px solid red;
}


</style>