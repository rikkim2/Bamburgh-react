import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Table,  Card, CardContent } from '@material-ui/core';
import StatementDetail from './StatementDetail';

export default function LivePreviewExample(props) {
  const [statementDetail,setStatementDetail] = useState([]);  

  useEffect(() => {
      axios.post('/Statement_List',null,{
          params:{
              'User_ID':sessionStorage.getItem("User_ID"),
              'work_yy':'2021',
              'flag':props.flag
          }
      })
      .then((res)=>{
        setStatementDetail(res.data);
          //console.log(res.data)
      })
      .catch(err=>console.log(err));      
  },
  [props.flag])    
  return (
    <>
      <Card className="card-box">
        <CardContent className="p-3">
          <div className="table-responsive my-3">
            <Table className="table table-striped table-hover text-nowrap font-size-xs">
              <thead>
                <tr>
                  <th className=" text-center" rowSpan='2'>과목</th>
                  <th className=" text-center" colSpan='2'>2021년 (제22기)</th>
                  <th className="text-center" colSpan='2'>2020년 (제21기)</th>
                </tr>
                <tr>
                    <th className="text-center" colSpan='2'>1월 1일 ~ 12월 31일</th>
                    <th className="text-center" colSpan='2'>1월 1일 ~ 12월 31일</th>
                </tr>
              </thead>
              <tbody>
                {statementDetail.filter(d=>(d.당기잔액1 !==0||d.전기잔액1 !==0)).map(d=>{
                    return <StatementDetail    
                        key={d.계정코드}
                        acnt_cd={d.계정코드}
                        acnt_nm={d.계정과목}
                        amt_now={d.당기잔액1}
                        amt_bef={d.전기잔액1}
                    />                    
                    })
                }

                <tr><td colSpan='5' className='line-height:2px'></td></tr>                    
                
              </tbody>
            </Table>
          </div>
    
        </CardContent>
      </Card>
    </>
  );
}
