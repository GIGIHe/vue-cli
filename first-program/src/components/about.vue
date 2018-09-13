<template>
    <div>
        <h2>这是about</h2>
        <h3>我是动态路由参数{{$route.params.id}}</h3>
    <ul>
            <li>
                <router-link to = '/'>home</router-link>
                <router-link to = '/about/666'>about</router-link>
            </li>
        </ul>
        </div>
</template>
<script>
export default {
  name: "about",
  created() {
      console.log(this)
      console.log(this.$router)
    console.log(this.$route.params.id);
  }
};
</script>


