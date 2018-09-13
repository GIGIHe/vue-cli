<template>
    <div>
        <p>
            <label for="user">username:</label>
            <input type="text" id='user' name="user" v-model="username" >
            </p>
            <p><label for="psw">password:</label>
            <input type="password" name="psw" v-model="password">
            </p>
            <input type="submit" @click="hanleLogin">
            <p><router-link to = '/'>我是手动的跳转</router-link></p>
    </div>
</template>
<script>
import  axios  from 'axios';
export default {
    data(){
        return{
      username:'',
        password:''
        }
    },
    methods:{
        hanleLogin(){
      axios.post('http://localhost:3003/login',{
          username:this.username,
          password:this.password
      }).then(res=>{
          console.log(res)
          if(res.data.code==200){
              alert('login success')
              this.$router.push('/')
          }else{
              alert('login fail')
          }
      })
        },
// //         created() {
// //   console.log(this.$route)
// }
    },

}
</script>

