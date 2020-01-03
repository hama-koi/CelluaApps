const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const info = require('../models/info')
// スキーマを定義
// var Schema   = mongoose.Schema;
// var UserSchema = new Schema({
//   message: String
// });
//mongoose.model('addInfo', UserSchema);

// MongoDBに接続
mongoose.connect('mongodb://localhost/test', 
function(err,db) {
  if (err) {
    console.log(err);
  } else {
    console.log('connection success!');
  }
}
);
var Info = mongoose.model('info');

router.get('/', (req, res) => {
  console.log('お知らせ情報追加'+req.query.name);
  const infoAdd = new Info({message: req.query.name});
  infoAdd.save(err => {
    if (err) console.error(err)
    console.log('saved')

  // Info.insertMany({message:addMesse}, function(err, result){
  //   res.header('Content-Type', 'text/plain;charset=utf-8');
  //   res.json({
  //     status: 200,
  //     response:'メッセージリストを返却',
  //     messages: result
  //   });
    });
  });

module.exports = router;