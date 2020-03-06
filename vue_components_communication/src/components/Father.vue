<template>
  <div class="container">
    <p>---------------这是父组件------------------------</p>
    <input type="text" placeholder="请输入你想对儿子说的话" v-model="message" />
    <h2>访问子组件对象</h2>
    <button @click="visitChild">visitChild</button>
    <h2>{{food.name}}</h2>
    <child :message="message" @receivefood="getFood"></child>
    <grandChild></grandChild>
    <p>---------------这是父组件------------------------</p>
  </div>
</template>

<script>
import child from "./child";
import grandChild from './grandChild'
export default {
  components: {
    child,
    grandChild
  },
  data() {
    return {
      message: "",
      food: []
    };
  },
  methods: {
    getFood: function(item) {
      this.food = item;
      
      
    },
    visitChild:function(){
        console.log(this.$children)
    }
  },
  provide:{
      title:"我是你爸爸"
  }
};
</script>

<style>
</style>