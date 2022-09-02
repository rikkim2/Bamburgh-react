import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  Container,Table,Card,Button } from '@material-ui/core';
import PerfectScrollbar from 'react-perfect-scrollbar';
import KejungListDetail from './KejungListDetail';

const KejungBody = (props)=>{
    
    var totSum = 0;
    function transum(acnt_cd,a,b)  {
      if(acnt_cd<251)
        totSum = totSum +  a - b;
      else if(acnt_cd<431)
        totSum = totSum -  a + b;
      else if(acnt_cd<901)
        totSum = totSum + a - b;      
      else if(acnt_cd<951)
        totSum = totSum -  a + b;      
      else
        totSum = totSum + a - b;          
      return totSum;
    };
    const [kejungDetail,setKejungDetail] = useState([]);  

    useEffect(() => {

        axios.post('/KejungDetail_List',null,{
            params:{
                'User_ID':sessionStorage.getItem("User_ID"),
                'work_yy':'2021',
                'acnt_cd':props.selectedAcntcd
            }
        })
        .then((res)=>{
            setKejungDetail(res.data);
            //console.log(res.data)
        })
        .catch(err=>console.log(err));      
    },
    [props.selectedAcntcd])  


    return(    
        <div className="app-inner-content-layout--main order-3 order-lg-2 card-box bg-secondary">
          <PerfectScrollbar>
            <div className="card-header rounded-0 bg-white px-5 py-4 border-bottom">
              <Container className="d-block text-center py-3 text-sm-left d-sm-flex align-items-center justify-content-between">
                <div className="font-weight-bold font-size-xxl mb-3 mb-sm-0">
                  <div>{props.selectedAcntnm}</div>
                  <p className="text-black-50 font-weight-normal font-size-lg mb-0">
                    외상매출금은 매출세금계산서 발행시 발생된 매출채권을 관리하는 자산계정입니다.<br/>
                    차변은 세금계산서 발행시 발생되며 대변은 채권 회수시 발생됩니다. 
                  </p>
                </div>
                <div>
                  <Button
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    size="small"
                    className="btn-primary">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fas', 'file-excel']} />
                    </span>
                    <span className="btn-wrapper--label">다운로드</span>
                  </Button>
                </div>
              </Container>
            </div>
            <div className="p-2">
             <Card className="p-4 shadow-xxl mb-spacing-6-x2">
                <div className="table-responsive-md">
                  <Table className="table table-alternate-spaced">
                    <thead>
                      <tr>
                        <th scope="col" className="text-center">
                          월-일
                        </th>
                        <th style={{ width: '350px' }} scope="col" className="text-center">
                          적요(품목 등)
                        </th>
                        
                        <th scope="col" className="text-center">차변</th>
                        <th scope="col" className="text-center">대변</th>
                        <th scope="col" className="text-center">잔액</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {kejungDetail.map(d=>{  
                        return <KejungListDetail 
                                key={d.rownum} 
                                Tran_Dt={d.Tran_Dt} 
                                Remk={d.Remk} 
                                Trader_Name={d.Trader_Name}
                                TranAmt_Cr={d.TranAmt_Cr.toLocaleString()}
                                TranAmt_Dr={d.TranAmt_Dr.toLocaleString()}
                                TranSum = {transum(d.Acnt_cd,d.TranAmt_Cr,d.TranAmt_Dr).toLocaleString()}
                                />
                      })    }   
                    </tbody>
                    {/* <KejungListDetail /> */}
                  </Table>
                </div>
              </Card>              
            </div>

          </PerfectScrollbar>
        </div>
        
    )
}
export default KejungBody;