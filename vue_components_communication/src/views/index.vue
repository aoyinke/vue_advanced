<template>
  <div class="container">
      <form>
          <label for="">email:</label>
          <input type="text" placeholder="please input your email" v-model="email">
          <label for="">password:</label>
          <input type="text" placeholder="please input your password" v-model="password">
      </form>
      
  </div>
</template>

<script>
export default {
  components: {},
  data(){
      return{
          foodList:["甘蔗","烤鸭","牛奶"],
          email:"",
          password:""
      }
  },
  computed:{
      
  },
  watch:{
      email:function(val,oldVal){
          console.log(val,oldVal)
      }
  }
};
</script>

<style>
</style>