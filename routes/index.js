const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
  console.log(tweets);
});

router.get('/users/:name', (req, res) => {
  let target = tweetBank.find({'name': req.params.name});
  res.render('index', {tweets: target});

})

// router.get('/users/:name', (req, res) => {
//   let target = tweetBank.find({'name': req.params.name});
//   res.render('index', {tweets: target});
//
// })


module.exports = router;
