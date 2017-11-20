import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Message from './Message';
import Aboutus from './Aboutus';
import Section from './Section';
import Logout from './Logout';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Message} />
      <Route exact path="/aboutus" component={Aboutus} />
      <Route path="/aboutus/:section" component={Section} />
      <Route path="/logout" component={Logout} />
    </Switch>
  );
};
