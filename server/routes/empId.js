const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const user = require('../models/api');
// MongoDBに接続
// mongoose.connect('mongodb://localhost/test',
// function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('connection success!');
//   }
// }
// );
const User = mongoose.model('user');
router.get('/',(req, res) => {
 User.find({})
 .sort({"id" : -1})
 .limit(1)
 .exec(function(err, result){
  res.header('Content-Type', 'text/plain;charset=utf-8');
console.log(result[0].id );
    res.json({
     status: 200,
     response:'メッセージリストを返却',
     messages: result[0].id 
   });
});


});
module.exports = router;
