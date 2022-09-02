const {sql,config} = require("../config/database")

class UserStorage {
  
    static async getUserInfo(id){
        return new Promise((resolve,reject)=>{
            sql.connect(config, (err)=>{
                if(err) {
                    console.log("MSSQL 접속에러발생:",err);
                    return;
                }

                const conn = new sql.Request()
                const strsql = "SELECT * from mem_user where user_id=@A";
                conn.input('A',sql.VarChar,id)
                conn.query(strsql,(err,data)=>{
                        if (err) reject(`${err}`);
                        //console.log(data)
                        resolve(data.recordset[0]);
                    });
            });
        })
    }
    static async getAdminInfo(id){
        return new Promise((resolve,reject)=>{
            sql.connect(config, (err)=>{
                if(err) {
                    console.log("MSSQL 접속에러발생:",err);
                    return;
                }

                const conn = new sql.Request()
                const strsql = "select a.seq_no as sqno,* from mem_user a, mem_deal b ,mem_admin c "
                     + "where a.seq_no=b.seq_no "
                     + "and b.biz_manager = c.admin_ID "
                     + "and a.user_id=@A";
                conn.input('A',sql.VarChar,id)
                conn.query(strsql,(err,data)=>{
                    if (err) reject(`${err}`);
                    //console.log(data.recordset[0])
                    resolve(data.recordset[0]);
                });
            });
        })
    }

    static async save(userInfo){
        return new Promise((resolve,reject)=>{
            sql.connect(config, (err)=>{
                if(err) console.log("1에러발생:",err);
                console.log("MSSQL 접속완료");
    
                const conn = new sql.Request()
                const strsql = "insert into  mem_user (id,pwd,name) values(@A,@B,@C)";
                conn.input('A',sql.VarChar,userInfo.id);
                conn.input('B',sql.VarChar,userInfo.password);
                conn.input('C',sql.VarChar,userInfo.name);
                conn.query(strsql,(err)=>{
                    if (err) reject(`${err}`);
                    resolve({success:true});
                });
            });
        })
    }
}
module.exports = UserStorage;
