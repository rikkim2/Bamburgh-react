const SidebarStorage = require("./SidebarStorage")
const fs = require('fs')

class Sidebar {
    constructor(req,res){
        this.req = req;
        this.res = res;
    }

    async getYears_Slipledgr(){
        const client = this.req.query;
        const years = await SidebarStorage.getYears_Slipledgr(client.User_ID)
        //console.log("Sidebar years:"+years.length)
        return years;
    }

}

module.exports = Sidebar;