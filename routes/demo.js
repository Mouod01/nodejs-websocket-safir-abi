var express = require('express');
var router = express.Router();
const cors = require('cors');
const WebSocket = require("ws");
// const ssendiing = require('../app')
const client = new WebSocket('ws://localhost:8000');
/* GET users listing. */
router.get('/',cors() , function(req, res, next) {
  let p1 = req.query.callerId;
  let p2 = req.query.dialingCallerId;
  res.send(JSON.stringify({callerId: p1, dialingCallerId: p2, isTrue: true})).status(200);
  // ssendiing.module.ssendiing(JSON.stringify({callerId: p1, dialingCallerId: new Date().getSeconds(), isTrue: true}));
  client.send(JSON.stringify({callerId: p1, dialingCallerId: p2, isTrue: true}));
});

module.exports = router;