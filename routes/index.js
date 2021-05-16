const express= require('express')
const router= express.Router()

router.get('/',(req, res, next)=>{
  res.render('index',{ title: 'Mini-Message-App'})
})

module.exports = router