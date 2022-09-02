import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Badge, Menu, Button, Tooltip, Divider } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const SidebarUserbox = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const [imgName,setImgName] = useState("사무장")
  const [adminEmail,setEmail] = useState(null)

  useEffect(() => {
    axios.post('/Admin_ImgInfo',null,{
      params:{
        'User_ID':sessionStorage.getItem("User_ID")
      }
    })
    .then((res) => {
      if(res.data.isExist){
        setImgName(res.data.adminName);  
        setEmail(res.data.adminEmail)
      }
    })
    .catch((err)=>console.log("에러:"+err))  
  },
  []) 

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  

  return (
    <>
      <div className="app-sidebar--userbox">
        <Box className="card-tr-actions">
          <Button
            variant="text"
            onClick={handleClick}
            className="ml-2 p-0 d-30 border-0 btn-transition-none text-white-50"
            disableRipple>
            <FontAwesomeIcon
              icon={['fas', 'ellipsis-h']}
              className="font-size-lg"
            />
          </Button>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}
            open={Boolean(anchorEl)}
            classes={{ list: 'p-0' }}
            onClose={handleClose}>
            <div className="dropdown-menu-lg overflow-hidden p-0">
              <div className="align-box-row align-items-center p-3">
                <div className="avatar-icon-wrapper avatar-icon-md">
                  <div className="avatar-icon rounded-circle">
                    <img alt="..." src={require(`../../assets/images/avatars/${imgName}.png`)} />
                    {/* <img alt="..." src={imageName} /> */}
                  </div>
                </div>
                <div className="pl-2">
                  <span className="font-weight-bold d-block">{imgName}</span>
                  <div className="badge badge-success border-0">Active</div>
                </div>
              </div>
              <Divider className="w-100" />
              <div className="d-flex py-3 justify-content-center">
                <div className="d-flex align-items-center">
                  <div>
                    <FontAwesomeIcon
                      icon={['far', 'user']}
                      className="font-size-xxl text-success"
                    />
                  </div>
                  <div className="pl-3 line-height-sm">
                    <b className="font-size-lg">14,596</b>
                    <span className="text-black-50 d-block">reports</span>
                  </div>
                </div>
              </div>
              <Divider className="w-100" />
              <div className="d-block rounded-bottom py-3 text-center">
                <Tooltip arrow title="Facebook">
                  <Button
                    size="large"
                    className="btn-facebook mx-1 p-0 d-40 font-size-lg text-white">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fab', 'facebook']} />
                    </span>
                  </Button>
                </Tooltip>
                <Tooltip arrow title="Twitter">
                  <Button
                    size="large"
                    className="btn-twitter mx-1 p-0 d-40 font-size-lg text-white">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fab', 'twitter']} />
                    </span>
                  </Button>
                </Tooltip>
              </div>
            </div>
          </Menu>
        </Box>
        <div className="avatar-icon-wrapper avatar-icon-md">
          <Badge
            variant="dot"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
            badgeContent=" "
            overlap="circle"
            classes={{ badge: 'bg-success badge-circle' }}>
            <div className="avatar-icon rounded-circle">
              {/* <img alt="..." src={avatar2} /> */}
              <img alt="..." src={require(`../../assets/images/avatars/${imgName}.png`)} />
            </div>
          </Badge>
        </div>
        <div className="my-3 userbox-details">
          <span>{imgName}</span>
          <small className="d-block text-white-50">
            ({adminEmail})
          </small>
        </div>
        <Button
          component={NavLink}
          to="/PageProfile"
          size="small"
          className="btn-userbox">
          담당자 정보
        </Button>
      </div>
    </>
  );
};

export default SidebarUserbox;
