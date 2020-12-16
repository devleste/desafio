import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ContactsPage from '../pages/Contacts';
import Statistics from '../pages/Statistics';


const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={ContactsPage} />
      <Route path="/statistics" exact component={Statistics} />
    </Switch>
  );
}

export default Routes;