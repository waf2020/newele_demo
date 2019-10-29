<template>
    <div class="inputgroup">
        <input 
        :placeholder="placeholder"
        :type="type"
        @input="$emit('getchild',$event.target.value)">
    </div>
</template>

<script>

export default {
    name:'inputtese',
    props:{
        placeholder:String,
        type:{
            type:String,
            defaule:Text
        }
    }
    
}
</script>