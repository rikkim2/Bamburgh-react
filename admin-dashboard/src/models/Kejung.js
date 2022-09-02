const KejungStorage = require("./KejungStorage")

class Kejung {
    constructor(req,res){
        this.req = req;
        this.res = res;
    }

    async getKejungList(){
        const client = this.req.query;
        const kejungList = await KejungStorage.getKejungList(client.User_ID,client.work_yy)
        //console.log("kejung.js:"+kejungList.length)
        return kejungList;
    }
    async getKejungDetailList(){
        const client = this.req.query;
        const kejungDetailList = await KejungStorage.getKejungDetailList(client.User_ID,client.work_yy,client.acnt_cd)
        //console.log("Sidebar years:"+years.length)
        return kejungDetailList;
    }
    async getStatement(){
        const client = this.req.query;
        console.log("세션:"+this.req.session.Seq_No)
        const stmtList = await KejungStorage.getStatement(3245,client.work_yy,client.flag)
        //const stmtList = await KejungStorage.getStatement(client.User_ID,client.work_yy,client.flag)
        //const stmtList = await KejungStorage.getStatement(this.req.session.Seq_No,client.work_yy,client.flag)
        return stmtList;
    }    
}

module.exports = Kejung;