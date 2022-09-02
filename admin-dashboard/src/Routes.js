import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ClimbingBoxLoader } from 'react-spinners';

import { ThemeProvider } from '@material-ui/styles';

import MuiTheme from './theme';

// Layout Blueprints

import {
  LeftSidebar,
  CollapsedSidebar,
  MinimalLayout,
  PresentationLayout
} from './layout-blueprints';

// Example Pages
import PageError404 from './example-pages/PageError404';
import PageError500 from './example-pages/PageError500';
import PageError505 from './example-pages/PageError505';
//import { applyMiddleware } from 'redux';
import StatementBS from './components/Statements/StatementBS'
import StatementIS from './components/Statements/StatementIS';
import StatementMC from './components/Statements/StatementMC';
import StatementRE from './components/Statements/StatementRE';

//const Overview = lazy(() => import('./example-pages/Overview'));
const DashboardMonitoring = lazy(() =>
  import('./example-pages/DashboardMonitoring')
);
const DashboardCommerce = lazy(() =>
  import('./example-pages/DashboardCommerce')
);
const DashboardAnalytics = lazy(() =>
  import('./example-pages/DashboardAnalytics')
);
const DashboardStatistics = lazy(() =>
  import('./example-pages/DashboardStatistics')
);


const PayrollSingoseu = lazy(() => import('./components/PayrollSingoseu'));

const Tables = lazy(() => import('./example-pages/Tables'));
const Maps = lazy(() => import('./example-pages/Maps'));

const KejungWonjang = lazy(() => import('./components/KejungWonjang'));
const PageAuthModals = lazy(() => import('./example-pages/PageAuthModals'));

const PageLoginIllustration = lazy(() =>
  import('./example-pages/PageLoginIllustration')
);
const PageLoginOverlay = lazy(() => import('./example-pages/PageLoginOverlay'));

const PageInvoice = lazy(() => import('./example-pages/PageInvoice'));

const Routes = (req,res) => {
  let isLogin = sessionStorage.getItem("isLogin");
  console.log("Routes 내부: "+isLogin)
  const location = useLocation();
  
  const pageVariants = {
    initial: {
      opacity: 0
    },
    in: {
      opacity: 1
    },
    out: {
      opacity: 0
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'linear',
    duration: 0.3
  };


  const SuspenseLoading = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
      let timeout = setTimeout(() => setShow(true), 300);
      return () => {
        clearTimeout(timeout);
      };
    }, []);

    return (
      <>
        <AnimatePresence>
          {show && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}>
              <div className="d-flex align-items-center flex-column vh-100 justify-content-center text-center py-3">
                <div className="d-flex align-items-center flex-column px-4">
                  <ClimbingBoxLoader color={'#3c44b1'} loading={true} />
                </div>
                <div className="text-muted font-size-xl text-center pt-3">
                  Please wait while we load the live preview examples
                  <span className="font-size-lg d-block text-dark">
                    자료 준비중입니다...
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  };
  
  return (
    <ThemeProvider theme={MuiTheme}>
      <AnimatePresence>
        <Suspense fallback={<SuspenseLoading />}>
          <Switch>
            {!isLogin?
              <Redirect exact from="/" to="/PageLoginOverlay" /> :<Redirect exact from="/" to="/Overview" />
            }

            <Route path={['/PageLoginOverlay']}>
              <PresentationLayout>
                <Switch location={location} key={location.pathname}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                    <Route path="/PageLoginOverlay" component={PageLoginOverlay} />
                  </motion.div>
                </Switch>
              </PresentationLayout>
            </Route>
            <Route
              path={[
                '/Overview',
                '/DashboardMonitoring',
                '/DashboardCommerce',
                '/DashboardAnalytics',
                '/DashboardStatistics',
                '/WidgetsCarousels',
                '/PayrollSingoseu',
                '/Tables',
                '/Maps',
                '/PageAuthModals',
                '/PageInvoice',
                '/StatementBS',
                '/StatementIS',
                '/StatementMC',
                '/StatementRE'
              ]}>
              <LeftSidebar>
                <Switch location={location} key={location.pathname}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                    <Route
                      path="/DashboardMonitoring"
                      component={DashboardMonitoring}
                    />
                    <Route
                      path="/DashboardCommerce"
                      component={DashboardCommerce}
                    />
                    <Route
                      path="/DashboardAnalytics"
                      component={DashboardAnalytics}
                    />
                    <Route
                      path="/DashboardStatistics"
                      component={DashboardStatistics}
                    />
                    
                    <Route
                      path="/PayrollSingoseu"
                      component={PayrollSingoseu}
                    />


                    <Route path="/Tables" component={Tables} />
                    <Route path="/Maps" component={Maps} />
               
                    <Route path="/PageAuthModals" component={PageAuthModals} />
                    <Route path="/PageInvoice" component={PageInvoice} />
                    <Route path="/StatementBS" component={StatementBS} />
                    <Route path="/StatementIS" component={StatementIS} />
                    <Route path="/StatementMC" component={StatementMC} />
                    <Route path="/StatementRE" component={StatementRE} />
                  </motion.div>
                </Switch>
              </LeftSidebar>
            </Route>

            <Route
              path={[
                '/PageProjects',
                '/KejungWonjang',
                '/PageProfile'
              ]}>
              <CollapsedSidebar>
                <Switch location={location} key={location.pathname}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                    <Route path="/KejungWonjang"  component={KejungWonjang}  />
                  </motion.div>
                </Switch>
              </CollapsedSidebar>
            </Route>

            <Route
              path={[
                '/PageLoginIllustration',
                '/PageLoginOverlay',
                '/PageError404',
                '/PageError500',
                '/PageError505'
              ]}>
              <MinimalLayout>
                <Switch location={location} key={location.pathname}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                    <Route
                      path="/PageLoginIllustration"
                      component={PageLoginIllustration}
                    />
                    <Route
                      path="/PageLoginOverlay"
                      component={PageLoginOverlay}
                    />
                    <Route path="/PageError404" component={PageError404} />
                    <Route path="/PageError500" component={PageError500} />
                    <Route path="/PageError505" component={PageError505} />
                  </motion.div>
                </Switch>
              </MinimalLayout>
            </Route>
          </Switch>
        </Suspense>
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default Routes;
