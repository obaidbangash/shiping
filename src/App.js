import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import { BrowserRouter as Router, Route, Switch, Link, Redirect, useHistory } from "react-router-dom";
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Container from "./components/Container"
import { getItemFromLocalStorage } from './utils/localStorage';
import Dashboard from './components/dashboard/Dashboard';


// import { useAuth } from "./isAuth";
function App(props) {
  console.log(props)

  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    setIsAuth(getItemFromLocalStorage('isAuth'))
  }, [])
  let Routes;
  if (isAuth) {
    Routes = (
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Redirect from='/' to='/dashboard' />
      </Switch>
    )
  } else {
    Routes = (
      <Switch>
        <Route exact path="/signin" render={(props) => <SignIn {...props} setIsAuth={setIsAuth} />} />
        <Route exact path="/signup" render={(props) => <SignUp {...props} setIsAuth={setIsAuth} />} />
        <Redirect from='/' to='/signin' />
      </Switch>
    )
  }
  return (

    <>
      {/* || <Route exact path="/signin" component={SignIn} /> */}
      <Router>
        <Header setIsAuth={setIsAuth} />
        {/* {
          isAuth && newAuth ?
            <Route exact path="/" component={Dashboard} /> :
            !isAuth && newAuth ?
              <Route exact path="/signup" component={SignUp} /> : !isAuth ? <Route exact path="/signin" component={SignIn} /> : <Redirect to="/signup" />}



        {/* <Route path="/signin" exact render={() => (
          name ? (alert("You can't register if you are logged in!"), (<Redirect to="/" />)) : (<SignIn />)
        )} />
       
        */}
        {Routes}
      </Router>
    </>


  );
}

export default App;
