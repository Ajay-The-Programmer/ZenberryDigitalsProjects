import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='container-fluid nav_bg'>
      <div className='row'>
        <div className='col-10 mx-auto'>
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container-fluid'>
              <Link className='navbar-brand' to='/'>
                Dashbord
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
