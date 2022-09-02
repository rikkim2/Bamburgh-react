const UserStorage = require("../models/UserStorage")
const User = require("../models/Users")
const output = {
    home :(req,res)=>{
        console.log("auth.ctrl.js 세션Login:"+req.session.isLogin)
        if(req.session.isLogin){
            res.render("AD_Router/PageLoginOverlay")
        }   else{
            res.render("AD_Router/")
        }   
    },

}

const process = {
    login:async(req,res)=>{
        const user = new User(req,res)
        const response = await user.login();
        return res.json(response);
    },
    admin_ImgInfo:async(req,res)=>{
        const user = new User(req,res)
        const response = await user.existAdminImg();
        return res.json(response);
    },
    User_Info:async(req,res)=>{
        const user = new User(req,res)
        const response = await user.User_Info();
        return res.json(response);
    },    
}    

module.exports = {
    output,
    process
}