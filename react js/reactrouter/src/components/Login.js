import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../actions/actionTypes";

function Login({ changeNumber }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userInfo, setUserInfo] = useState("");
  const data = useSelector((state) => state.authReducer.dList);
  const history = useHistory();
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    data.map((element) => {
      if (element.email == email && element.password == password) {
        setUserInfo(element);

        //Set True Value after email and  password  match
        dispatch(login());
        history.push("/home");
      } else {
        window.M.toast({
          html: `Incorect email or password please check`,
          classes: "red",
        });
      }
    });
  }

  return (
    <div
      className="center container"
      style={{
        height: "300px",
        maxWidth: "500px",
      }}
    >
      <h3>Login</h3>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="input-field ">
          <input
            id="email"
            type="email"
            className="validate"
            placeholder="email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <input
            id="password"
            type="password"
            className="validate"
            placeholder="password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn blue" onClick={changeNumber}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
