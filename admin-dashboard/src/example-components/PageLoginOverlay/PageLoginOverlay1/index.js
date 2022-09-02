import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Grid,
  Container,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Card,
  Button,
  List,
  ListItem,
  TextField
} from '@material-ui/core';

//import MailOutlineTwoToneIcon from '@material-ui/icons/MailOutlineTwoTone';
import BusinessIcon from '@material-ui/icons/Business';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';

import hero6 from '../../../assets/images/hero-bg/hero-1.jpg';
import logo from "../../../assets/images/hero-bg/DS_LOGO_full.svg";
export default function LivePreviewExample() {
  const [checked1, setChecked1] = useState(true);

  const handleChange1 = (event) => {
    setChecked1(event.target.checked);
  };

  const [inputId, setInputId] = useState('')
  const [inputPw, setInputPw] = useState('')

  // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
  const handleInputId = (e) => {
      setInputId(e.target.value)
  }

  const handleInputPw = (e) => {
      setInputPw(e.target.value)
  }

  const onClickLogin = () => {
      axios.post('/onLogin',null,{
        params:{
          'User_ID':inputId.trim(),
          'User_PWD':inputPw
        }
      })
       .then((res)=>{
          if(res.data.success){
            sessionStorage.setItem("isLogin","true")
            sessionStorage.setItem("User_ID",inputId)
            document.location.href = "/Overview"

          }else{
              //alert(res.data.msg)
              if(res.data.flag==="PASS") {
                 document.getElementById("User_PWD").focus();
              }else if(res.data.flag==="ID")  {
                document.getElementById("User_ID").focus();
              }else if(res.data.flag==="W_PASS")  {
                alert(res.data.msg)

                document.getElementById("User_PWD").value="";
                document.getElementById("User_PWD").focus();
              }else if(res.data.flag==="W_ID") {
                alert(res.data.msg)
                //handleInputId(this);
                document.getElementById("User_ID").value="";
                document.getElementById("User_ID").focus();
              }
          }
      })
      .catch((err) => {
          console.log(err)
          alert("로그인 중 에러")
      })
  }

  useEffect(() => {
      if(sessionStorage.getItem("isLogin","true")) document.location.href = "/Overview";
  },
  [])  
  
  return (
    <>
      <div className="app-wrapper min-vh-100 bg-white">
        <div className="hero-wrapper w-100 bg-composed-wrapper bg-midnight-bloom min-vh-100">
          <div className="flex-grow-1 w-100 d-flex align-items-center">
            <div
              className="bg-composed-wrapper--image opacity-6"
              style={{ backgroundImage: 'url(' + hero6 + ')' }}
            />
            <div className="bg-composed-wrapper--bg bg-second opacity-7" />
            <div className="bg-composed-wrapper--content p-3 p-md-5">
              <Container>
                <Card className="rounded-sm modal-content p-3 bg-white-10">
                  <Card className="rounded-sm overflow-hidden shadow-xxl font-size-sm p-3 p-sm-0">
                    <Grid container spacing={0}>
                      <Grid
                        item
                        lg={6}
                        className="d-flex align-items-center justify-content-center flex-column">
                        <div className="divider-v divider-v-lg d-none d-lg-block" />
                        <div className="text-center mt-4">
                          <p className="mb-0 text-black-50">
                            성실과 정직으로 최선을 다하겠습니다.
                          </p>
                        </div>
                        <div className="py-4 align-items-center">
                          <div  className="d-flex align-items-center ">
                              <span className="avatar-title rounded-circle bg-light ">
                                <img
                                  src={logo}
                                  alt=""
                                  //className="rounded-circle"
                                  height="25"
                                />
                                
                              </span>
                            {/* <div>
                              <h1 className="font-size-xxl mb-1 font-weight-bold">
                                세무법인 대승
                              </h1>
                            </div> */}
                          </div>
                          <div className="text-center text-black-50 py-2 mb-4">
                            {/* 사업자 정보로 로그인 합니다. */}
                          </div>
                          <div>
                            <div className="mb-4">
                              <TextField
                                fullWidth
                                variant="outlined"
                                id="User_ID"
                                label="아이디"
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <BusinessIcon />
                                    </InputAdornment>
                                  )
                                }}
                                value={inputId}
                                onChange={handleInputId}
                              />
                            </div>
                            <div className="mb-3">
                              <TextField
                                fullWidth
                                variant="outlined"
                                id="User_PWD"
                                label="비밀번호"
                                type="password"
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <LockTwoToneIcon />
                                    </InputAdornment>
                                  )
                                }}
                                value={inputPw}
                                onChange={handleInputPw}
                              />
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={checked1}
                                    onChange={handleChange1}
                                    value="checked1"
                                    color="primary"
                                  />
                                }
                                className="font-size-md"
                                label="저장"
                              />
                              <div>
                                <a
                                  className="text-first"
                                  href="#/"
                                  onClick={(e) => e.preventDefault()}>
                                  비밀번호 찾기
                                </a>
                              </div>
                            </div>
                            <div className="text-center py-4">
                              <Button className="btn-second font-weight-bold w-50 my-2"  onClick={onClickLogin}>
                                로그인
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Grid>
                      <Grid
                        item
                        lg={6}
                        className="d-flex align-items-center justify-content-center flex-column bg-secondary">
                        <div className="p-3">
                          <div className="p-4">
                            <div className="d-block d-xl-flex">
                              <div className="mt-0 mt-xl-1 mb-md-2 mb-lg-0">
                                <FontAwesomeIcon
                                  icon={['far', 'heart']}
                                  className="font-size-xl text-first"
                                />
                              </div>
                              <div className="pl-0 pl-xl-3">
                                <div className="text-black font-weight-bold font-size-lg mb-1">
                                  임직원 인사말
                                </div>
                                <p className="mb-0 text-black-50">
                                  우리는 항상 최선을 다하고 있습니다. 
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="p-4">
                            <div className="d-block d-xl-flex">
                              <div className="mt-0 mt-xl-1 mb-md-2 mb-lg-0">
                                <FontAwesomeIcon
                                  icon={['far', 'lightbulb']}
                                  className="font-size-xl text-first"
                                />
                              </div>
                              <div className="pl-0 pl-xl-3">
                                <div className="text-black font-weight-bold font-size-lg mb-1">
                                  회원 서비스
                                </div>
                                <p className="mb-0 text-black-50">
                                본 사이트는 세무법인대승에 소속된 회원사를 지원하는 회원전용 사이트로서 중도탈퇴하였거나 사업을 영위하지 않는 기업 및 일반인들께서는 이용하실 수 없습니다.{"   "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="p-4">
                            <div className="d-block d-xl-flex">
                              <div className="mt-0 mt-xl-1 mb-md-2 mb-lg-0">
                                <FontAwesomeIcon
                                  icon={['far', 'user']}
                                  className="font-size-xl text-first"
                                />
                              </div>
                              <div className="pl-0 pl-xl-3">
                                <div className="text-black font-weight-bold font-size-lg mb-1">
                                  책임 세무사
                                </div>
                                <p className="mb-0 text-black-50">
                                  세무사 : 김기현
                                </p>
                                <p  className="mb-0 text-black-50">
                                  대표번호 : 02-501-1732
                                </p>
                                <p  className="mb-0 text-black-50">
                                  E-Mail : daeseung19@hanmail.net
                                </p>                                
                              </div>
                            </div>
                          </div>
                        </div>
                      </Grid>
                    </Grid>
                  </Card>
                </Card>
              </Container>
            </div>
          </div>
          <div className="hero-footer w-100 pb-4">
            <Container>
              <div className="py-3 d-block d-lg-flex font-size-xs justify-content-between">
                <div className="text-center d-block mb-3 mb-md-0 text-white">
                  Copyright &copy; 2020 - UiFort.com
                </div>
                <List
                  component="div"
                  className="nav-transparent text-nowrap d-flex justify-content-center">
                  <ListItem
                    button
                    className="text-white-50"
                    href="#/"
                    onClick={(e) => e.preventDefault()}>
                    Privacy Policy
                  </ListItem>
                  <ListItem
                    button
                    className="text-white-50"
                    href="#/"
                    onClick={(e) => e.preventDefault()}>
                    Terms of Service
                  </ListItem>
                </List>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}
