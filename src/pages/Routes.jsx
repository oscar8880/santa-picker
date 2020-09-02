import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import styles from './Routes.module.scss';
import CreditsPage from './CreditsPage/CreditsPage';

const Routes = () => {
  return (
    <main className={styles.Routes}>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/credits" exact>
          <CreditsPage />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </main>
  );
};

export default Routes;
