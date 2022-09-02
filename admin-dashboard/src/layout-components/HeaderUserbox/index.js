import React, { useState,useEffect } from 'react';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Avatar,
  Typography,
  Badge,
  Menu,
  Button,
  List,
  ListItem,
  Tooltip,
  Divider
} from '@material-ui/core';

const HeaderUserbox = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [bizName,setBizName] = useState('');
  const [ceoName,setCeoName] = useState('');
  useEffect(() => {
    axios.post('/User_Info',null,{
      params:{
        'User_ID':sessionStorage.getItem("User_ID")
      }
    })
    .then((res) => {
      setBizName(res.data.Biz_Name);  
      setCeoName(res.data.Ceo_Name)
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
      <Button
        variant="text"
        onClick={handleClick}
        className="ml-2 btn-transition-none text-left ml-2 p-0 bg-transparent d-flex align-items-center"
        disableRipple>
        <div className="d-block p-0 avatar-icon-wrapper">

          <Badge
            overlap="circle"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
            variant="dot">
            <Avatar alt={bizName} src="" />
          </Badge>          
        </div>

        <div className="d-none d-xl-block pl-2">
          <div className="font-weight-bold pt-2 line-height-1">{bizName}</div>
          <span className="text-black-50">{ceoName}</span>
        </div>
        <span className="pl-1 pl-xl-3">
          <FontAwesomeIcon icon={['fas', 'angle-down']} className="opacity-5" />
        </span>
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'top',
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
          <div className="d-flex px-3 pt-3 align-items-center justify-content-between">
            <Typography className="text-capitalize pl-1 font-weight-bold text-primary">
              <span>Profile Options</span>
            </Typography>
            <div className="font-size-xs pr-1">
              <Tooltip title="Change settings" arrow>
                <a href="#/" onClick={(e) => e.preventDefault()}>
                  <FontAwesomeIcon icon={['fas', 'plus-circle']} />
                </a>
              </Tooltip>
            </div>
          </div>
          <List
            component="div"
            className="nav-neutral-primary text-left d-flex align-items-center flex-column px-3 pb-3">
            <ListItem button className="d-block text-left">
              My Account
            </ListItem>
            <ListItem button className="d-block text-left">
              Profile settings
            </ListItem>
            <ListItem button className="d-block text-left">
              Active tasks
            </ListItem>
          </List>
          <Divider className="w-100" />
          <div className="d-flex py-3 justify-content-center">
            <div className="d-flex align-items-center">
              <div>
                <FontAwesomeIcon
                  icon={['far', 'chart-bar']}
                  className="font-size-xxl text-info"
                />
              </div>
              <div className="pl-3 line-height-sm">
                <b className="font-size-lg">$9,693</b>
                <span className="text-black-50 d-block">revenue</span>
              </div>
            </div>
          </div>
          <Divider className="w-100" />
          <div className="d-block rounded-bottom py-3 text-center">
            <Tooltip arrow title="Facebook">
              <Button
                size="large"
                className="btn-facebook p-0 d-40 font-size-lg text-white">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['fab', 'facebook']} />
                </span>
              </Button>
            </Tooltip>
            <Tooltip arrow title="Dribbble">
              <Button
                size="large"
                className="btn-dribbble p-0 d-40 font-size-lg text-white mx-2">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['fab', 'dribbble']} />
                </span>
              </Button>
            </Tooltip>
            <Tooltip arrow title="Twitter">
              <Button
                size="large"
                className="btn-twitter p-0 d-40 font-size-lg text-white">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['fab', 'twitter']} />
                </span>
              </Button>
            </Tooltip>
          </div>
        </div>
      </Menu>
    </>
  );
};

export default HeaderUserbox;
