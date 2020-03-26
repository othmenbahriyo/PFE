var express = require('express');
var router = express.Router();
var localStorage = require('localStorage')
const {jwtkey} = require('../keys');
const jwt = require('jsonwebtoken');


const Admin = require('../models/admin');






 /*--------------------------------------------------tzid w tod5ol admin ------------------------------------------*/
 router.post('/registera', (req, res) => {
    let userData = req.body
    let user = new Admin(userData)
    user.save((err, registeredUser) => {
      if (err) {
        console.log(err)      
      } else {
        let payload = {subject: user._id}
      let token = jwt.sign(payload, 'secretKey')
      res.status(200).send({token})
      }
    })
  })


  router.post('/logina',async (req,res)=>{
    const {email,password} = req.body

    if(!email || !password){
        return res.status(422).send({error :"must provide email or password"})
    }
    const user = await Admin.findOne({email})
    if(!user){
        return res.status(422).send({error :"must provide email or password"})
    } else {
      await user.comparePassword(password); 
      localStorage.setItem('am', 'yes');
      const token = jwt.sign({userId:user._id},jwtkey);
      res.send({token});

    }
});
module.exports = router