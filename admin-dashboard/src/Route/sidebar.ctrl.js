const SidebarStorage = require("../models/SidebarStorage")
const Sidebar = require("../models/Sidebar")

const process = {
    GetYears_Slipledgr:async(req,res)=>{
        const sidebar = new Sidebar(req,res)
        const response = await sidebar.getYears_Slipledgr();
        return res.json(response);
    },
}    

module.exports =   { process };
