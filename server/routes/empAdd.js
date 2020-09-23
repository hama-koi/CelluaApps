const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

var User = mongoose.model('user');


router.post('/',(req, res) => {
 console.log('リクエスト情報（追加登録者情報）'+req.body.body.id);
 const userAdd = new User(req.body.body);

 console.log('リクエスト情報（送る前）'+userAdd);
 userAdd.save(err => {
  if (err) console.error(err)
  console.log('saved')
 });
});

module.exports = router;