import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Contact from './pages/contact';
import Home from './pages/home';
import PeoplePage from './pages/people';
import PersonPage from './pages/person';

const App = () => {

  const PageSwitch = () => (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/people' component={PeoplePage} />
      <Route exact path='/people/:personId' component={PersonPage} />
    </Switch>
  )

  return (
    <BrowserRouter>
      <Switch>
        <PageSwitch />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
