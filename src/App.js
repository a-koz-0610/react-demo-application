import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Contact from './pages/contact';
import Header from './components/header';
import Home from './pages/home';
import PersonScreen from './pages/person-screen';
import PeopleScreen from './pages/people-screen';

const App = () => {

  const people = [
    {
      name: 'Alan',
      age: 38,
      personId: 0,
      slug: 'alan-k'
    },
    {
      name: 'Joe',
      age: 35,
      personId: 1,
      slug: 'joe-k'
    }

  ]

  const PageSwitch = () => (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/contact' component={Contact} />

      <Route exact path='/people'>
        <PeopleScreen people={people} />
      </Route>

      <Route exact path='/people/:slug'>
        <PersonScreen people={people} />
      </Route>
    </Switch>
  )

  return (
    <div>
      <Header />
      <BrowserRouter>
        <PageSwitch />
      </BrowserRouter>
    </div>
  )
}

export default App;
