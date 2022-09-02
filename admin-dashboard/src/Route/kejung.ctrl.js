//const KejungStorage = require("../models/KejungStorage")
const Kejung = require("../models/Kejung")

const process = {
    getKejungList:async(req,res)=>{
        const kejung = new Kejung(req,res)
        const response = await kejung.getKejungList();
        return res.json(response);
    },
    getKejungDetailList:async(req,res)=>{
        const kejung = new Kejung(req,res)
        const response = await kejung.getKejungDetailList();
        return res.json(response);
    },
    getStatement:async(req,res)=>{
        const kejung = new Kejung(req,res)
        const response = await kejung.getStatement();
        return res.json(response);
    },    
}    

module.exports =   { process };