import React, { useState } from 'react';
import {BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Base from './components/Base';
import Toppings from './components/Toppings';
import Order from './components/EditUser';
import Modal from './components/Modal';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  const showModal = true;

  return (
    <>
      <Header />
      {/* <Modal showModal={showModal} /> */}
      <AnimatePresence exitBeforeEnter>
      <BrowserRouter>
        <Switch >
          <Route 
          exact
          name="home"
          path="/">
            <Home />
          </Route>
          {/* <Route exact path="/createUpdateUser">
            <Toppings />
          </Route> */}
          <Route path="/order"
          exact
          name="order">
            <Order />
          </Route>
          
        </Switch>
        </BrowserRouter>
      </AnimatePresence>

    </>
  );
}

export default App;