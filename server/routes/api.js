const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const user = require('../models/api')

// MongoDBに接続
mongoose.connect('mongodb://localhost/test',
function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('connection success!');
  }
}
);
var User = mongoose.model('user');
// router.get('/get', (req, res) => {
//   res.header('Content-Type', 'text/plain;charset=utf-8');
//   // res.json('レスポンス成功');
// //  res.sta
//   });
//});
router.get('/',(req, res) => {
  // MongoDBからデータを取得
  User.find({}, function(err, result) {
    res.header('Content-Type', 'text/plain;charset=utf-8');
    // res.json(result);
    res.json({
      status: 200,
      response:'メッセージリストを返却',
      messages: result
    });

  });
});

module.exports = router;