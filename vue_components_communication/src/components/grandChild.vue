<template>
  <div class="container">
    <p>---------------这是子孙组件------------------------</p>
    <h2>{{title}}</h2>
    <p>---------------这是子孙组件------------------------</p>
  </div>
</template>

<script>
export default {
    inject:['title']
};
</script>

<style>
</style>