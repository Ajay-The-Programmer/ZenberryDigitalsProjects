import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-router";
import Login from "./components/Login";
import Signup from "./components/Signup";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [userStatus, setUserStatus] = useState();

  const persistedState = localStorage.getItem("reduxState")
    ? JSON.parse(localStorage.getItem("reduxState"))
    : {};

  // window.onload = window.localStorage.clear("reduxState");

  //it will access the value of user is logedin or not from localstorage
  // useEffect(() => {
  //   if (Object.keys(persistedState).length != 0) {
  //     persistedState.authReducer.dList.map((e) => {
  //       setUserStatus(e.isUser);
  //       console.log(e.isUser);
  //     });
  //   } else {
  //     // setUserStatus(0);
  //     console.log("access else");
  //   }
  //   console.log("debugging done");
  // }, [count]);

  //i am taking this for rerender bcz logout button only come when refresh the page but it a not working
  const changeNumber = (no) => {
    setCount(no);
    console.log("changeName");
  };

  return (
    <BrowserRouter>
      <Navbar userStatus={count} />
      <Switch>
        <Route exact path="/">
          <Signup />
        </Route>
        <Route path="/login">
          <Login changeNumber={changeNumber} />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
