const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// スキーマを定義
var Schema   = mongoose.Schema;
var UserSchema = new Schema({
  first_name:String,
  last_name: String
});
var strage = {
  id: 0,
  message: 'デフォルトメッセージ'
};
const strages = [strage];
mongoose.model('User', UserSchema);

// MongoDBに接続
mongoose.connect('mongodb://localhost/testDB',
function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('connection success!');
  }
}
);
var User = mongoose.model('User');
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