import React, { useState } from 'react';
import { Route, Switch, useLocation } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Base from './components/Base';
import Toppings from './components/Toppings';
import Order from './components/Order';
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
        <Switch >
          <Route path="/">
            <Home />
          </Route>
          <Route exact path="/createUpdateUser">
            <Toppings />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
          
        </Switch>
      </AnimatePresence>

    </>
  );
}

export default App;