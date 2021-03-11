import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import ContactScreen from './pages/contact-screen';
import HomeScreen from './pages/home-screen';
import PersonScreen from './pages/person-screen';
import PeopleScreen from './pages/people-screen';
import Header from './components/header';
import Error404 from './pages/error-screen';
import FavoriteMoviesScreen from './pages/favorite-movies-screen';

const App = () => {

  const people = [
    {
      name: 'Alan',
      age: 38,
      personId: 0,
      slug: 'alan-k',
      favoriteMovies: [
        'goonies ', ' fight club'
      ]
    },
    {
      name: 'Joe',
      age: 35,
      personId: 1,
      slug: 'joe-k',
      favoriteMovies: [
        'rambo ', ' catch me if you can'
      ]
    }

  ]

  const PageSwitch = () => (
    <Switch>
      {/* routing for presentational components */}
      <Route exact path='/' component={HomeScreen} />
      <Route exact path='/contact' component={ContactScreen} />

      {/* routing for stateful components */}
      <Route exact path='/people'>
        <PeopleScreen people={people} />
      </Route>

      <Route exact path='/people/:slug'>
        <PersonScreen people={people} />
      </Route>

      <Route exact path='/people/favorite-movies/:slug'>
        <FavoriteMoviesScreen people={people} />
      </Route>


      <Route component={Error404} />

    </Switch>
  )

  return (
    <div>
      <BrowserRouter>
        <Header />
        <PageSwitch />
      </BrowserRouter>
    </div>
  )
}

export default App;
