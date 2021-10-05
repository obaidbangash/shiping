import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import { BrowserRouter as Router, Route, Switch, Link, Redirect, useHistory } from "react-router-dom";
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Container from "./components/Container"
import { getItemFromLocalStorage, setItemToLocalStorage } from './utils/localStorage';
import Dashboard from './components/dashboard/Dashboard';
import { useSelector, useDispatch } from 'react-redux';
// import { useAuth } from "./isAuth";
import { fetchProduct } from './redux/action/ProductAction';
import Products from './components/products/Products';
import Cart from './components/cart/Cart';



function App() {
  // const dispatch = useDispatch();
  // const Product = useSelector(state => state.ProductReducer.product)
  // console.log("products", Product)

  const Auth = getItemFromLocalStorage('isAuth')
  const [isAuth, setIsAuth] = useState(Auth);
  useEffect(() => {
  }, [])

  // useEffect(() => {
  //   dispatch(fetchProduct());
  // }, [])

  let Routes;
  if (isAuth) {
    Routes = (
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/products/:id" component={Products} />
        <Route path="/cart" component={Cart} />


        {/* <Redirect from='/' to='/dashboard' /> */}
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
