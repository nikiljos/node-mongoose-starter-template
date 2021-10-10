const router = require('express').Router();
const controllers=require('./controllers.js')

router.get('/',controllers.handler)


module.exports=router