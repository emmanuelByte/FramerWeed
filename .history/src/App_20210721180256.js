import React, { useState } from "react";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import List from "./components/List";
import AddUser from "./components/addUser";
// import Toppings from "./components/Toppings";
import Order from "./components/EditUser";
// import Modal from "./components/Modal";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/footer";

function App() {
  const location = useLocation();
  const showModal = true;

  return (
    <>
      <Header />
      {/* <Modal showModal={showModal} /> */}
      <AnimatePresence exitBeforeEnter>
        <BrowserRouter>
          <Switch>
            <Route exact name="home" path="/">
              <Home />
            </Route>
            {/* <Route exact path="/createUpdateUser">
            <Toppings />
          </Route> */}
            <Route path="/edit" exact name="order">
              <Order />
            </Route>
            <Route path="/view" exact name="view">
              <List />
            </Route>
            <Route path="/adduser" exact name="adduser">
              <AddUser />
            </Route>
          </Switch>
        </BrowserRouter>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
