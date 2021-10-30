import React from "react";
import { useState } from "react";
import { sign_up } from "../actions/actionTypes";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("null");
  const [password, setPassword] = useState("null");
  const dispatch = useDispatch();
  const history = useHistory();

  //function will execute after submit registration form
  function handleSubmit(e) {
    e.preventDefault();
    window.M.toast({
      html: `${email} Registration Succesfully`,
      classes: "green",
    });

    //it will push you on login page after registration done
    history.push("/login");
  }
  return (
    <>
      <div className="center container" style={{ maxWidth: "600px" }}>
        <h3>Sign-Up</h3>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="input-field">
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
          <button
            type="submit"
            onClick={() => dispatch(sign_up(email, password))}
            className="btn blue"
          >
            Signup
          </button>
        </form>
      </div>
    </>
  );
}

export default Signup;
