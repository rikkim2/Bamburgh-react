const { response } = require('express');
const sql = require('mssql')

var config = {  
    server: process.env.DB_HOST, 
    database: process.env.DB_DATABASE ,
    //port:process.env.DB_PORT,
    authentication: {
        type: 'default',
        options: {
            userName: process.env.DB_USER,
            password: process.env.DB_PASSWORD ,
            
        }
    },
    options: {
        encrypt: false,
        useUTC:true,
        stream:true
    }
};  

module.exports={
    sql,config
}

