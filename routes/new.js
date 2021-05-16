const express = require('express');
const router = express.Router();
const messages = '../../messages'

router.post('/new', (req, res) => {
  const newMessage = {
    text: req.body.text,
    user: req.body.name,
    added: new Date(),
  };
  messages.push(newMessage)
});

module.exports = router;
