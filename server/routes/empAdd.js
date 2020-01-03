const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const user = require('../models/api')

var User = mongoose.model('user');



router.get('/',(req, res) => {
 console.log('リクエスト情報（追加登録者情報）'+req.body);
 const userAdd = new User({id: req.body});
 userAdd.save(err => {
  if (err) console.error(err)
  console.log('saved')
 });
});

module.exports = router;