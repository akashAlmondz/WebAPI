const express=require('express');
const router=express.Router();

const controller=require('../controllers/form.controller');


router.route('/data').get(controller.getData).post(controller.postData);


module.exports=router;