const UserStorage = require("./UserStorage")
const fs = require('fs')

class User {
    constructor(req,res){
        this.req = req;
        this.res = res;
    }

    async login(){
        const client = this.req.query;
        try{       
            if(client.User_ID){
                if(!client.User_PWD) return {success:false,flag:"PASS",msg:"비밀번호를 입력해주세요"}
            }else{
                return {success:false,flag:"ID",msg:"아이디를 입력해 주세요"}
            }
            
            const user = await UserStorage.getUserInfo(client.User_ID)
            //console.log(User_ID);
            if(user)    {
                if(user.User_ID===client.User_ID && user.User_Pwd===client.User_PWD){
                    this.req.session.isLogin = true;
                    this.req.session.User_ID = client.User_ID;
                    this.req.session.Seq_No = user.Seq_No;
                    console.log("서버단 Router에 세션 저장: "+this.req.session.Seq_No)
                    this.req.session.save()
                    return {success:true}
                }
                return {success:false,flag:"W_PASS",msg:"비밀번호가 맞지 않습니다."}
            }
            return {success:false,flag:"W_ID",msg:"현재 관리하지 않는 아이디입니다."}
        }catch(err){
            return {success:false,msg:err};
        }
    }
    async existAdminImg(){
        const client = this.req.query;
        const admin = await UserStorage.getAdminInfo(client.User_ID)
        let isExist = fs.existsSync('./admin-dashboard/src/assets/images/avatars/'+admin.Admin_Name+'.PNG')
        return {
            'adminName':admin.Admin_Name,
            'adminEmail':admin.Admin_Email,
            'isExist':isExist
        };
    }
    async User_Info(){
        const client = this.req.query;
        const User = await UserStorage.getUserInfo(client.User_ID)
        return User;
    }
}

module.exports = User;