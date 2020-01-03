const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const info = require('../models/info')
// スキーマを定義
// var Schema   = mongoose.Schema;
// var UserSchema = new Schema({
//   message: String
// });
// var strage = {
//   message: 'デフォルトメッセージ'
// };
//const strages = [strage];
//mongoose.model('Info', UserSchema);

// MongoDBに接続
// スキーマ定義をモデルで行う為↑のロジック修正
mongoose.connect('mongodb://localhost/test',
function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('connection success!');
  }
}
);
var Info = mongoose.model('info');

router.get('/',(req, res) => {
 
  // MongoDBからデータを取得
  Info.find({}, function(err, result) {
    res.header('Content-Type', 'text/plain;charset=utf-8');
    res.json({
      status: 200,
      response:'お知らせ一覧',
      messages: result
    });

  });
});

module.exports = router;