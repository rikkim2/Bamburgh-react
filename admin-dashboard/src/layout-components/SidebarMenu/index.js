import React, { useState,useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { Collapse } from '@material-ui/core';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setSidebarToggleMobile } from '../../reducers/ThemeOptions';
import SidebarUserbox from '../SidebarUserbox';
import ChevronRightTwoToneIcon from '@material-ui/icons/ChevronRightTwoTone';
import VerifiedUserTwoToneIcon from '@material-ui/icons/VerifiedUserTwoTone';
import CameraAltTwoToneIcon from '@material-ui/icons/CameraAltTwoTone';
import CollectionsTwoToneIcon from '@material-ui/icons/CollectionsTwoTone';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import BusinessCenterTwoToneIcon from '@material-ui/icons/BusinessCenterTwoTone';
import AssessmentTwoToneIcon from '@material-ui/icons/AssessmentTwoTone';
import BallotTwoToneIcon from '@material-ui/icons/BallotTwoTone';
import SettingsTwoToneIcon from '@material-ui/icons/SettingsTwoTone';
import DepartureBoardTwoToneIcon from '@material-ui/icons/DepartureBoardTwoTone';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import DevicesOtherTwoToneIcon from '@material-ui/icons/DevicesOtherTwoTone';
import LinkTwoToneIcon from '@material-ui/icons/LinkTwoTone';

const SidebarMenu = (props) => {

  const { setSidebarToggleMobile, sidebarUserbox } = props;

  const toggleSidebarMobile = () => setSidebarToggleMobile(false);

  const [dashboardOpen, setDashboardOpen] = useState(false);
  const toggleDashboard = (event) => {
    setDashboardOpen(!dashboardOpen);
    event.preventDefault();
  };

  const [elementsOpen, setElementsOpen] = useState(false);
  const toggleElements = (event) => {
    setElementsOpen(!elementsOpen);
    event.preventDefault();
  };

  const [pagesOpen, setPagesOpen] = useState(false);
  const togglePages = (event) => {
    setPagesOpen(!pagesOpen);
    event.preventDefault();
  };

  const [otherPagesOpen, setOtherPagesOpen] = useState(false);
  const toggleOtherPages = (event) => {
    setOtherPagesOpen(!otherPagesOpen);
    event.preventDefault();
  };

  const [blocksOpen, setBlocksOpen] = useState(false);
  const toggleBlocks = (event) => {
    setBlocksOpen(!blocksOpen);
    event.preventDefault();
  };

  const [widgetsOpen, setWidgetsOpen] = useState(false);
  const toggleWidgets = (event) => {
    setWidgetsOpen(!widgetsOpen);
    event.preventDefault();
  };

  const [chartsOpen, setChartsOpen] = useState(false);
  const toggleCharts = (event) => {
    setChartsOpen(!chartsOpen);
    event.preventDefault();
  };

  const [uiKitComponentsOpen, setUiKitComponents] = useState(false);
  const toggleUiKitComponents = (event) => {
    setUiKitComponents(!uiKitComponentsOpen);
    event.preventDefault();
  };

  const [formsComponentsOpen, setFormsComponents] = useState(false);
  const toggleFormsComponents = (event) => {
    setFormsComponents(!formsComponentsOpen);
    event.preventDefault();
  };

  return (
    <>
      <PerfectScrollbar>
        {sidebarUserbox && <SidebarUserbox />}
        <div className="sidebar-navigation">
          <div className="sidebar-header">
            <span>????????????</span>
          </div>
          <ul>
            <li>
              <NavLink
                activeClassName="active"
                onClick={toggleSidebarMobile}
                className="nav-link-simple"
                to="/Overview">
                <span className="sidebar-icon">
                  <BallotTwoToneIcon />
                </span>
                ????????????
                <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                  <ChevronRightTwoToneIcon />
                </span>
              </NavLink>
            </li>
            <li>
              <a
                href="#/"
                onClick={toggleDashboard}
                className={clsx({ active: dashboardOpen })}>
                <span className="sidebar-icon">
                  <VerifiedUserTwoToneIcon />
                </span>
                <span className="sidebar-item-label">???????????? ????????????</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span>
              </a>
            </li>
          </ul>
          <div className="sidebar-header">
            <span>???????????????</span>
          </div>
          <ul>
            <li>
              <a
                href="#/"
                onClick={toggleElements}
                className={clsx({ active: elementsOpen })}>
                <span className="sidebar-icon">
                  <CameraAltTwoToneIcon />
                </span>
                <span className="sidebar-item-label">????????????</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span>
              </a>
            </li>
            <li>
              <a
                href="#/"
                onClick={toggleBlocks}
                className={clsx({ active: blocksOpen })}>
                <span className="sidebar-icon">
                  <CollectionsTwoToneIcon />
                </span>
                <span className="sidebar-item-label">????????????(3.3%)??????</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span>
              </a>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                onClick={toggleSidebarMobile}
                className="nav-link-simple"
                to="/PayrollSingoseu">
                <span className="sidebar-icon">
                  <SettingsTwoToneIcon />
                </span>
                ?????????????????????????????????

              </NavLink>              
            </li>
          </ul>
          <div className="sidebar-header">
            <span>??????????????????</span>
          </div>
          <ul>
            <li>
              <a
                href="#/"
                onClick={toggleWidgets}
                className={clsx({ active: widgetsOpen })}>
                <span className="sidebar-icon">
                  <BusinessCenterTwoToneIcon />
                </span>
                <span className="sidebar-item-label">???????????????</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span>
              </a>
            </li>
            <li>
              <a
                href="#/"
                onClick={toggleCharts}
                className={clsx({ active: chartsOpen })}>
                <span className="sidebar-icon">
                  <AssessmentTwoToneIcon />
                </span>
                <span className="sidebar-item-label">?????????</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span>
              </a>
            </li>
          </ul>
          <div className="sidebar-menu-box">
            <div className="sidebar-header">
              <span>????????????</span>
            </div>
            <ul>
              <li>
                <NavLink
                  activeClassName="active"
                  onClick={toggleSidebarMobile}
                  className="nav-link-simple"
                  to="/StatementBS">
                  <span className="sidebar-icon">
                    <LinkTwoToneIcon />
                  </span>
                  ???????????????
                  {/* <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                    <ChevronRightTwoToneIcon />
                  </span> */}
                </NavLink>
              </li>                          
              <li>
                <NavLink
                  activeClassName="active"
                  onClick={toggleSidebarMobile}
                  className="nav-link-simple"
                  to="/StatementIS">
                  <span className="sidebar-icon">
                    <LinkTwoToneIcon />
                  </span>
                  ???????????????
                </NavLink>
              </li>     
              <li>
                <NavLink
                  activeClassName="active"
                  onClick={toggleSidebarMobile}
                  className="nav-link-simple"
                  to="/StatementMC">
                  <span className="sidebar-icon">
                    <LinkTwoToneIcon />
                  </span>
                  ?????????????????????
                </NavLink>
              </li>              
            </ul>
          </div>          
          <div className="sidebar-header">
            <span>???????????? ????????????</span>
          </div>
          <ul>
            <li>
              <NavLink
                activeClassName="active"
                onClick={toggleSidebarMobile}
                className="nav-link-simple"
                to="/KejungWonjang">
                <span className="sidebar-icon">
                  <BallotTwoToneIcon />
                </span>
                ???????????????
                <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                  <ChevronRightTwoToneIcon />
                </span>
              </NavLink>
            </li>            
            <li>
              <a
                href="#/"
                onClick={togglePages}
                className={clsx({ active: pagesOpen })}>
                <span className="sidebar-icon">
                  <AccountCircleTwoToneIcon />
                </span>
                <span className="sidebar-item-label">???????????????</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span>
              </a>
              <Collapse in={pagesOpen}>
                <ul>
                  <li>
                    <NavLink onClick={toggleSidebarMobile} to="/PageInvoice">
                      ???????????????
                    </NavLink>                         
                  </li>
                  <li>
                    <NavLink onClick={toggleSidebarMobile} to="/PageInvoice">
                      ???????????? ????????????
                    </NavLink>                    
                  </li>
                  <li>
                    <NavLink onClick={toggleSidebarMobile} to="/PageInvoice">
                      ????????? ???????????????
                    </NavLink>                    
                    </li>                    
                </ul>
              </Collapse>
            </li>
            <li>
              <a
                href="#/"
                onClick={toggleOtherPages}
                className={clsx({ active: otherPagesOpen })}>
                <span className="sidebar-icon">
                  <DevicesOtherTwoToneIcon />
                </span>
                <span className="sidebar-item-label">?????????</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span>
              </a>
              <Collapse in={otherPagesOpen}>
                <ul className="pb-0">
                  <li>
                    <NavLink onClick={toggleSidebarMobile} to="/PageProfile">
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={toggleSidebarMobile} to="/PageInvoice">
                      Invoice
                    </NavLink>
                  </li>
                </ul>
              </Collapse>
            </li>
          </ul>
          <div className="sidebar-header">
            <span>??????</span>
          </div>
          <ul>
            <li>
              <NavLink
                activeClassName="active"
                onClick={toggleSidebarMobile}
                className="nav-link-simple"
                to="/FormsControls">
                <span className="sidebar-icon">
                  <SettingsTwoToneIcon />
                </span>
                ?????????
                <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                  <ChevronRightTwoToneIcon />
                </span>
              </NavLink>
            </li>
            <li>
              <a
                href="#/"
                onClick={toggleFormsComponents}
                className={clsx({ active: formsComponentsOpen })}>
                <span className="sidebar-icon">
                  <DepartureBoardTwoToneIcon />
                </span>
                <span className="sidebar-item-label">???????????? ??????</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span>
              </a>
              <Collapse in={formsComponentsOpen}>
                <ul>
                  <li>
                    <NavLink
                      onClick={toggleSidebarMobile}
                      to="/FormsWysiwygEditor">
                      WYSIWYG Editors
                    </NavLink>
                  </li>
                </ul>
              </Collapse>
            </li>
          </ul>          
        </div>
      </PerfectScrollbar>
    </>
  );
};

const mapStateToProps = (state) => ({
  sidebarUserbox: state.ThemeOptions.sidebarUserbox,

  sidebarToggleMobile: state.ThemeOptions.sidebarToggleMobile
});

const mapDispatchToProps = (dispatch) => ({
  setSidebarToggleMobile: (enable) => dispatch(setSidebarToggleMobile(enable))
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarMenu);
