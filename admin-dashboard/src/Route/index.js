const express = require('express');
const router = express.Router();
const ctrlAuth = require("./auth.ctrl");
const ctrlSidebar = require("./sidebar.ctrl");
const ctrlKejung = require("./kejung.ctrl");
const path = require('path')

//router.get("/",ctrl.output.home);  

router.post("/",(req,res)=>{
  console.log("여기는 스타트")  
})
//로그인
router.post('/onLogin', ctrlAuth.process.login);
router.post('/Admin_ImgInfo', ctrlAuth.process.admin_ImgInfo);
router.post('/User_Info', ctrlAuth.process.User_Info);
//사이드바
router.post('/Years_SlipLedgr',ctrlSidebar.process.GetYears_Slipledgr);
//계정별원장 + 재무제표
router.post('/Kejung_List', ctrlKejung.process.getKejungList);
router.post('/KejungDetail_List', ctrlKejung.process.getKejungDetailList);
//재무제표
router.post('/Statement_List', ctrlKejung.process.getStatement);
//
const index = path.resolve(__dirname,'../../public/index.html')
router.get('*',(req,res)=>{
    res.sendFile(index)
})

module.exports = router;