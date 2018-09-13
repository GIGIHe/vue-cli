<template>
    <div>
<header class="head">
    <h3>top</h3>
</header>
<nav class="nav-l">
<ul>
  <!-- 出现重复命名，默认跳转到外部的路由 -->
    <li>  <router-link :to="{name:'homePage1'}">首页</router-link> </li>    
    <li>  <router-link :to="{name:'aboutPage1'}">列表页</router-link></li>
    <li>  <router-link :to="{name:'login1'}">详情页</router-link></li>
</ul>
</nav>
<section class="main">
    <router-view></router-view>
    <h2>center-content</h2>
    </section>
    </div>
</template>

<script>
export default {};
</script>
<style scoped>
.head {
  padding: 20px;
  text-align: center;
  background-color: #f0f;
}
.nav-l {
  position: fixed;
  width: 200px;
  left: 0;
  bottom: 0;
  top: 0;
  background-color: #4e2756;
  z-index: 998;
}
.nav-l ul li {
  list-style-type: none;
  color: #fff;
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
}
.nav-l ul li a {
  color: #fff;
}
.main {
  text-align: center;
  background-color: #00f;
}
</style>