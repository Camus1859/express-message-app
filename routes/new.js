const express = require('express');
const router = express.Router();
const messages = require('../messages')

router.post('/new', (req, res) => {
  console.log(req.body)
  const newMessage = {
    text: req.body.text,
    user: req.body.name,
    added: new Date(),
  };
  messages.push(newMessage)
  res.redirect('/')
});

module.exports = router;
