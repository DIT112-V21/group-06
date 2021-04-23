import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CarControl from './CarControl'
import Home from './Home'

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/carcontrol' component={CarControl}></Route>
      <Route exact path='/' component={Home}></Route>
    </Switch>
  );
}

export default Main;