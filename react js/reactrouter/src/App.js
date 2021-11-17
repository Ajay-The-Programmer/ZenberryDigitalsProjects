import { BrowserRouter, Route } from "react-router-dom";
import { Switch, useHistory } from "react-router";
import Login from "./components/Login";
import Signup from "./components/Signup";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [userStatus, setUserStatus] = useState();
  const history = useHistory();

  const persistedState = localStorage.getItem("reduxState")
    ? JSON.parse(localStorage.getItem("reduxState"))
    : {};

  // window.onload = window.localStorage.clear("reduxState");
  // window.location.reload(history.push("/login"));

  // it will access the value of user is logedin or not from localstorage
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
  // });

  //it is used to change for logout login on nav buttton
  const changeNumber = (no) => {
    setCount(no);
    console.log("changeName");
  };

  return (
    <BrowserRouter>
      <Navbar userStatus={count} changeNumber={changeNumber} />
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
