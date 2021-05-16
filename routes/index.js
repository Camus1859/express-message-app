const express= require('express')
const router= express.Router()
const messages = require(('../messages'))

router.get('/',(req, res, next)=>{
  res.render('index',{ title: 'Mini-Message-App', messages})
})

module.exports = router