import React, { useState } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Menu,
  Button,
  List,
  ListItem,
  Tooltip
} from '@material-ui/core';

import PerfectScrollbar from 'react-perfect-scrollbar';
import { connect } from 'react-redux';

import HomeWorkTwoToneIcon from '@material-ui/icons/HomeWorkTwoTone';

const PageTitle = (props) => {
  const {
    pageTitleStyle,
    pageTitleBackground,
    pageTitleShadow,
    pageTitleIconBox,
    pageTitleDescription,
    titleHeading,
    titleDescription,
    children
  } = props;
  const [modal1, setModal1] = useState(false);
  const toggle1 = () => setModal1(!modal1);
  const [anchorEl, setAnchorEl] = useState(null);

  function openUserMenu(event) {
    setAnchorEl(event.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }
  return (
    <>
      <div
        className={clsx('app-page-title', pageTitleStyle, pageTitleBackground, {
          'app-page-title--shadow': pageTitleShadow
        })}>
        <div>
          <div className="app-page-title--first">
            {pageTitleIconBox && (
              <div className="app-page-title--iconbox d-70">
                <div className="d-70 d-flex align-items-center justify-content-center display-1">
                  <HomeWorkTwoToneIcon className="text-primary" />
                </div>
              </div>
            )}
            <div className="app-page-title--heading">
              <h1>{titleHeading}</h1>
              {pageTitleDescription && (
                <div className="app-page-title--description">
                  {titleDescription}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center">
          {children}
          <Button
            variant="contained"
            onClick={openUserMenu}
            size="small"
            className="btn-primary d-40 py-0 px-4 w-auto mx-0 mr-3 mr-lg-0 mx-lg-3">
            <span className="btn-wrapper--label">2021</span>
            <span className="btn-wrapper--icon">
              <FontAwesomeIcon
                icon={['fas', 'angle-down']}
                className="opacity-5"
              />
            </span>
          </Button>
          <Menu
            id="userMenu"
            component="div"
            anchorEl={anchorEl}
            keepMounted
            getContentAnchorEl={null}
            classes={{ list: 'p-0' }}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}>
            <div className="dropdown-menu-xl outline-none p-0">
              <div className="bg-composed-wrapper bg-vicious-stance mt-0">
                <div className="bg-composed-wrapper--image bg-composed-img-5" />
                <div className="bg-composed-wrapper--content text-white text-center p-4">
                  <h5 className="mb-1">Scrollable</h5>
                  <p className="mb-0 opacity-7">
                    This menu box is scrollable (sm)
                  </p>
                </div>
              </div>
              <div className="scroll-area-sm shadow-overflow">
                <PerfectScrollbar>
                  <List component="div" className="flex-column">
                    <ListItem button className="rounded-0">
                      <div className="nav-link-icon opacity-6">
                        <FontAwesomeIcon icon={['far', 'chart-bar']} />
                      </div>
                      <span>Services</span>
                    </ListItem>
                    <ListItem button className="rounded-0">
                      <div className="nav-link-icon opacity-6">
                        <FontAwesomeIcon icon={['far', 'question-circle']} />
                      </div>
                      <span>Layouts</span>
                      <span className="ml-auto badge badge-warning">512</span>
                    </ListItem>
                    <ListItem button className="rounded-0">
                      <div className="nav-link-icon opacity-6">
                        <FontAwesomeIcon icon={['far', 'user-circle']} />
                      </div>
                      <span>Reports</span>
                    </ListItem>
                    <ListItem className="rounded-0">
                      <span className="font-weight-bold text-uppercase font-size-xs text-dark">
                        Others
                      </span>
                    </ListItem>
                    <ListItem button className="rounded-0">
                      <div className="nav-link-icon opacity-6">
                        <FontAwesomeIcon icon={['far', 'object-group']} />
                      </div>
                      <span>Components</span>
                    </ListItem>
                    <ListItem button className="rounded-0">
                      <div className="nav-link-icon opacity-6">
                        <FontAwesomeIcon icon={['far', 'chart-bar']} />
                      </div>
                      <span>Services</span>
                    </ListItem>
                  </List>
                </PerfectScrollbar>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <Button
                  size="small"
                  className="btn-transparent px-0 btn-link btn-link-primary">
                  <span>View details</span>
                </Button>
                <Button
                  size="small"
                  className="btn-transition-none"
                  variant="contained"
                  color="primary">
                  Save
                </Button>
              </div>
            </div>
          </Menu>

          {/* 오른쪽 버튼 */}
          <Tooltip title="인쇄">
            <Button
              variant="contained"
              size="small"
              className="d-40 btn-success mx-lg-1"
              //className="btn-primary d-40 py-0 px-4 w-auto mx-0 mr-3 mr-lg-0 mx-lg-3"
              onClick={toggle1}>
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon icon={['fas', 'print']} className="opacity-8" />
              </span>
            </Button>
          </Tooltip>


          <Tooltip title="저장">
            <Button
              variant="contained"
              size="small"
              className="d-40 btn-success"
              onClick={toggle1}>
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon icon={['fas', 'file-excel']} className="opacity-8" />
              </span>
            </Button>
          </Tooltip>
        </div>
      </div>

    </>
  );
};

const mapStateToProps = (state) => ({
  pageTitleStyle: state.ThemeOptions.pageTitleStyle,
  pageTitleBackground: state.ThemeOptions.pageTitleBackground,
  pageTitleShadow: state.ThemeOptions.pageTitleShadow,
  pageTitleIconBox: state.ThemeOptions.pageTitleIconBox,
  pageTitleDescription: state.ThemeOptions.pageTitleDescription
});

export default connect(mapStateToProps)(PageTitle);
