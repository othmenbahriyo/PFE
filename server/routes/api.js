var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')
var User = require('../models/user');
var lis = require('../models/listRes');
var lisP = require('../models/parking');
var mongoose = require('mongoose');
var db = "mongodb+srv://pfe:pfe@cluster0-5kpoa.mongodb.net/test?retryWrites=true&w=majority";
mongoose.set('useFindAndModify', false);
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
var ObjectId = require('mongoose').Types.ObjectId;
// connection 3al mongoo 
mongoose.connect(db,{useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}, function(err){
    
    if(err){
        console.error('Error! ' + err)
    } else {
      console.log('Connected to mongodb')      
    }
});

/* -------------------------------------------- traja3lik list ta3 reservation ------------------------- */
router.get('/list/res', function(req,res)  {
    lis.find({})
    .exec(function(err, listRes){
      if(err){
        console.log("err");
      } else{
        res.json(listRes);
      }
    });
});

/* ------------------------------------------ traja3lik list ta3 les parking l kol -------------------------*/
router.get('/list/parking', function(req,res)  {
  lisP.find({})
  .exec(function(err, lisP){
    if(err){
      console.log("err");
    } else{
      res.json(lisP);
    }
  });
});

/* -------------------------------------------------bch ta3mil compte --------------------------------------*/ 
router.post('/register', (req, res) => {
    let userData = req.body
    let user = new User(userData)
    user.save((err, registeredUser) => {
      if (err) {
        console.log(err)      
      } else {
        let payload = {subject: registeredUser._id}
      let token = jwt.sign(payload, 'secretKey')
      res.status(200).send({token})
      }
    })
  })
/*-------------------------------------------list ta3 reservation--------------------------------------------*/
  router.post('/saveres', (req, res) => {
   var list = new lis();
   list.name = req.body.name;
   list.matricule = req.body.matricule;
   list.Tpark = req.body.Tpark;
   list.dateE = req.body.dateE;
   list.dateS = req.body.dateS;
   list.timeE = req.body.timeE;
   list.timeS = req.body.timeS;
   
    list.save((err, registeredUser) => {
      if (err) {
        console.log(err)      
      } else {
      res.json(list)
      }
    })
  })

/*----------------------------------------------------------bch tzid parking--------------------------------------*/

router.post('/addParking', (req, res) => {
  var list = new lisP();
  list.name = req.body.name;
  list.longitude = req.body.longitude;
  list.latitude = req.body.latitude;
  
  
   list.save((err, registeredUser) => {
     if (err) {
       console.log(err)      
     } else {
     res.json(list)
     }
   })
 })


/*-----------------------------------------------------ta3 login -------------------------------------------*/
  router.post('/login', (req, res) => {
    let userData = req.body
    User.findOne({email: userData.email}, (err, user) => {
      if (err) {
        console.log(err)    
      } else {
        if (!user) {
          res.status(401).send('Invalid Email')
        } else 
        if ( user.password !== userData.password) {
          res.status(401).send('Invalid Password')
        } else {
          let payload = {subject: user._id}
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token})
        }
      }
    })
  }) 


 /*--------------------------------------------bch tfasa5 7aja mil list ta3 reservation----------------------------*/
 router.delete('/list/d/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
      return res.status(400).send(`No record with given id : ${req.params.id}`);

  lis.findByIdAndRemove(req.params.id, (err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
  });
}); 


  /*-------------------------------------------------bch tfasa5 parking-------------------------------------------*/
   router.delete('/list/p/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
  
    lisP.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
    });
  }); 
  


  /*----------------------------------------------- bch tmodifi w moch kamla----------------------------------------*/
  router.put('/list/:id', (req, res) =>
  lis.findOneAndUpdate({
   _id: req.params.id
   },
   {  name : "hdh" 
  }, {upsert: true}, (err, lis) => {
   if (err) {
    res.send('error updating ');
   } else {
    console.log(lis);
    res.send(lis);
  }
 }));


  
    
module.exports = router ;