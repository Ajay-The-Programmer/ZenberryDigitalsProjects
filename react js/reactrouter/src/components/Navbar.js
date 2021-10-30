import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "../css/nav.css";

function Navbar(props) {
  const history = useHistory();
  // const { changeName } = props;

  //Execute Function after LogOUT
  const onHandleSignOut = () => {
    localStorage.clear("reduxState");
    history.push("/");
    props.changeNumber(0);
    // window.history.forward();
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          Blogger's
        </a>

        <ul id="nav-mobile" className="right">
          {props.userStatus ? (
            <li>
              <button
                className="btn red"
                onClick={() => {
                  onHandleSignOut();
                }}
              >
                LogOut
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link to="/">Signup</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
