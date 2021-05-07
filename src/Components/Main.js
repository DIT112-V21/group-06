import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LogIn from './LogIn'
import SignUp from './SignUp'
import CarControl from './CarControl'
import OrderInterface from './OrderInterface'

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={LogIn}></Route>
      <Route exact path='/carControl' component={CarControl}></Route>
      <Route exact path='/signUp' component={SignUp}></Route>
      <Route exact path='/logIn' component={LogIn}></Route>
      <Route exact path='/OrderInterface' component={OrderInterface}></Route>
    </Switch>

  );
}

export default Main;