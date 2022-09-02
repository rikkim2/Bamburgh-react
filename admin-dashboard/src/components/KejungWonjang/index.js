import React, { useEffect, useState } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  Button,List } from '@material-ui/core';
import PerfectScrollbar from 'react-perfect-scrollbar';
import KejungList from './KejungList';
import KejungBody from './KejungBody';

export default function LivePreviewExample() {

  const [isSidebarMenuOpen, setIsSidebarMenuOpen] = useState(false);
  const toggleSidebarMenu = () => setIsSidebarMenuOpen(!isSidebarMenuOpen);

  
  const [kejungs,setKejungs] = useState([]);
  useEffect(() => {
    axios.post('/Kejung_List',null,{
      params:{
        'User_ID':sessionStorage.getItem("User_ID"),
        'work_yy':'2021'
      }
    })
    .then((res)=>{
      setKejungs(res.data);      
      setSelectedAcntcd(res.data[0].acnt_cd)
      setSelectedAcntnm(res.data[0].acnt_nm)
    })
    .catch(err=>console.log(err));    
  },
  [])  

  const [selectedAcntcd,setSelectedAcntcd] = useState('');
  const [selectedAcntnm,setSelectedAcntnm] = useState('');  

  const handleListItemClick = (acnt_cd,acnt_nm)=>{
    
    setSelectedAcntcd(acnt_cd);
    setSelectedAcntnm(acnt_nm);
    
  }
  
  return (
    <>
      <div className="app-inner-content-layout app-inner-content-layout-fixed">
        <div className="btn-md-pane d-lg-none px-4 order-0">
          <Button
            onClick={toggleSidebarMenu}
            size="small"
            className="btn-primary p-0 btn-icon d-40">
            <FontAwesomeIcon icon={['fas', 'ellipsis-v']} />
          </Button>
        </div>
        <div
          className={clsx(
            'app-inner-content-layout--sidebar bg-white app-inner-content-layout--sidebar__lg order-1',
            { 'layout-sidebar-open': isSidebarMenuOpen }
          )}>
          <PerfectScrollbar>
            <div className="text-center pt-4 pb-3">
                
              <div className="font-weight-bold font-size-xxl mb-3 mb-sm-0">
                <div>계정별원장</div>
              </div>
              <p className="font-size-lg text-dark px-3 my-4">
                거래에 사용된 모든 계정과목을 날짜별로 적요와 함께 제공합니다.
              </p>
              <div className="w-100 p-3 d-flex align-items-center">
                <div className="d-flex flex-column flex-grow-1 justify-content-center w-100">
                  <div className="card-header-alt d-flex justify-content-between align-items-center">
                    <h6 className="font-weight-bold font-size-lg mb-0 text-black">
                      작업연도
                    </h6>
                    <div className="text-success font-weight-bold">2021 년</div>
                  </div>
                  <div className="divider" />
                </div>
              </div>              
              <List
                component="div"
                className="nav-pills nav-neutral-first nav-lg nav-alt flex-column pr-3">
                {kejungs.map(c=>{
                  return <KejungList 
                      key={c.acnt_cd} 
                      acnt_cd={c.acnt_cd} 
                      acnt_nm={c.acnt_nm} 
                      selectedAcntcd={selectedAcntcd}                      
                      selectedAcntnm={selectedAcntnm}
                      handleListItemClick = {(e)=>handleListItemClick(c.acnt_cd,c.acnt_nm)}
                      />
                })    }                
              </List>

            </div>
            <div className="divider mb-3" />
          
            <div className="w-100 p-2 d-flex align-items-center">
              <div className="d-flex flex-column flex-grow-1 justify-content-center w-100">
                  <div className="text-success d-flex align-items-center">
                    <div className="d-30 rounded-sm btn-icon bg-neutral-success mr-2">
                      <FontAwesomeIcon icon={['fas', 'angle-up']} />
                    </div>
                    <span className="pt-1 font-weight-bold font-size-sm">
                      100%
                    </span>
                  </div>
                  <div className="text-black-50 pt-3">
                    현재 2021년 12월까지 기장되었습니다. 
                  </div>
              </div>
            </div>
          </PerfectScrollbar>
        </div>
        <KejungBody selectedAcntcd={selectedAcntcd}  selectedAcntnm={selectedAcntnm}/>

        <div
          onClick={toggleSidebarMenu}
          className={clsx('sidebar-inner-layout-overlay', {
            active: isSidebarMenuOpen
          })}
        />
      </div>
    </>
  );
}

