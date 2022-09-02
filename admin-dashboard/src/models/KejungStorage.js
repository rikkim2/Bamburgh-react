const {sql,config} = require("../config/database")

class KejungStorage {
  
    static async getKejungList(id,work_yy){
        return new Promise((resolve,reject)=>{
            sql.connect(config, (err)=>{
                if(err) {
                    console.log("MSSQL 접속에러발생:",err);
                    return;
                }

                const conn = new sql.Request()
                const strsql = "select A.acnt_cd acnt_cd, max(A.acnt_nm) acnt_nm from DS_slipledgr2 A "
                         +" where A.seq_no=(select seq_no from mem_user where user_id=@A) "
                         +"  and A.work_yy=@B"
                         +"  and A.acnt_cd in("
                         +"               select acnt_cd from Ds_slipledgr2  "
                         +"               where seq_no=A.seq_no "
                         +"                 and work_yy=@B      "                         
                         +"              Group by acnt_cd  "                         
                         +"              Having sum(tranamt_cr) <> sum(tranamt_dr) )  "
                         +"  group by A.acnt_cd  order by A.acnt_cd ";    
                conn.input('A',sql.VarChar,id)
                conn.input('B',sql.VarChar,work_yy)
                conn.query(strsql,(err,data)=>{
                        if (err) reject(`${err}`);
                        //console.log("KejungStorage.js User_ID:"+id)
                        //console.log("KejungStorage.js work_yy:"+work_yy)
                        //console.log("계정별원장 data.recordset:"+data.recordset)
                        resolve(data.recordset);
                    });
            });
        })
    }

    static async getKejungDetailList(id,work_yy,acnt_cd){
        return new Promise((resolve,reject)=>{
            sql.connect(config, (err)=>{
                if(err) {
                    console.log("MSSQL 접속에러발생:",err);
                    return;
                }

                const conn = new sql.Request()
                const strsql = "select row_number() over(order by acnt_cd) as rownum ,  * from DS_slipledgr2  with(index(IDX1_ds_slipledgr2), nolock)  "
                         +" where seq_no=(select seq_no from mem_user where user_id=@A) "
                         +"  and work_yy=@B"
                         +"  and acnt_cd=@C"
                         +"  order by tran_dt";    
                conn.input('A',sql.VarChar,id)
                conn.input('B',sql.VarChar,work_yy)
                conn.input('C',sql.VarChar,acnt_cd)                
                conn.query(strsql,(err,data)=>{
                        if (err) reject(`${err}`);
                        //console.log("KejungStorage.js User_ID:"+id)
                        //console.log("KejungStorage.js work_yy:"+work_yy)
                        //console.log("계정별원장 data.recordset:"+data.recordset)
                        resolve(data.recordset);
                    });
            });
        })
    }

    static async getStatement(seq_no,work_yy,flag){
        var strStg ="";
        if(flag==="BS") {
            strStg = "up_Act_BSInquiry"
        }else if(flag==="IS") {
            strStg = "up_Act_PLInquiry"
        }else if(flag==="MC") {
            strStg = "up_Act_MCInquiry"
        }      

        return new Promise((resolve,reject)=>{
            sql.connect(config, (err)=>{
                if(err) {
                    console.log("MSSQL 접속에러발생:",err);
                    return;
                }

                const conn = new sql.Request()
                const strsql = "exec "+ strStg + " @A,@B";
                                
                conn.input('A',sql.VarChar,work_yy)
                conn.input('B',sql.VarChar,seq_no)
                conn.query(strsql,(err,data)=>{
                        if (err) reject(`${err}`);
                        //console.log("원장 data.recordset:"+data.recordset.length)
                        resolve(data.recordset);
                    });
            });
        })        
    }

}
module.exports = KejungStorage;
