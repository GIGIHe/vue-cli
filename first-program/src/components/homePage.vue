<template>
    <div>
        <h2>这是homePage</h2>
       
        <h3>我是动态路由参数{{$route.params.id}}</h3>
        <ul>
            <li>
                <router-link to = '/'>home</router-link>
                <router-link to = '/about/666'>about</router-link>
                <router-link to='/login'>login</router-link>
            </li>
        </ul>
        <p><router-link :to ="{path:'/login',query:{userinfo:'name is sam'}}"> to login</router-link></p>
    <!-- <h2><router-link to='/layout'>layout</router-link></h2> -->
    </div>
</template>
<script>
export default {
    // created(){
    //     console.log(this.$route)
    //     console.log(this.$route.params)
    //     console.log(this.$router)
    // }
}
</script>


