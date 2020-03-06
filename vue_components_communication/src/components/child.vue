<template>
  <div class="container">
      <p>---------------这是子组件------------------------</p>
      <h1>{{message}}</h1>
      {{title}}
      <button @click="bindClick(item)" v-for="(item,idx) in food" :key="idx">{{item.name}}</button>
      <p>---------------这是子组件------------------------</p>
  </div>
</template>

<script>
export default {
  props: ["message"],
  data(){
      return{
          food:[{name:"apple",method:"煮了"},{name:"banana",method:"煮了"},{name:"watermenlon",method:"煮了"},{name:"duck",method:"煮了"}]
      }
  },    
  methods:{
      bindClick:function(item){
          this.$emit("receivefood",item)
      }
  },
  inject:['title']
};
</script>

<style>
</style>