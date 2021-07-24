import React, { useEffect, useState } from "react";
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
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { getAllEmployees } from "./redux/user/user.action";
import { selectEmployeesDetail } from "./redux/user/user.selector";


function App({getAllEmployees, allEmployees}) {
  const location = useLocation();
  const showModal = true;
  const [employees, setEmployees] = useState({})
  useEffect( () => {
    const getDetails = async() =>{
      await getAllEmployees()
      await setEmployees(allEmployees)
    }
    getDetails()
    getDetails()
    getDetails()
    
    
    // return () => {
    //   cleanup
    // }
  }, [getAllEmployees])
  console.log(employees)

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
            <Route path="/edit:id"  name="order">
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

const mapDispatchToProps = (dispatch) => ({
  getAllEmployees: () => dispatch(getAllEmployees()),
});
const mapStateToProps = createStructuredSelector({
  // contacts: selectCurrentUserContacts
  // users: selectCurrentUser
  allEmployees: selectEmployeesDetail
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
