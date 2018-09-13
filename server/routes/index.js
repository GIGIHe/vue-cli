var express = require('express');
var router = express.Router();
const users={
  username:'he',
  password:'1234'
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/login', (req,res,next)=>{
  const {username,password} = req.body
  let loginSuc = false
  console.log(username,password)
  users.forEach(t => {
    if(t.username===username && t.password===password){
      loginSuc=true
    }
  });
  if(loginSuc){
    res.json({
      code:200,
      msg:'login success'
    })
  }
})
module.exports = router;
