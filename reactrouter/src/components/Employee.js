import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/employee.css";

function Employee() {
  return (
    <div className='container-fluid'>
      <h1 className='center'>Employee</h1>
      <ul className='list-group center list'>
        <li className='list-group-item active' aria-current='true'>
          ID
        </li>
        <li className='list-group-item'>
          <Link to={`/employee_details/${1}`}>1</Link>
        </li>
        <li className='list-group-item'>
          <Link to={`/employee_details/${2}`}>2</Link>
        </li>
        <li className='list-group-item'>
          <Link to={`/employee_details/${3}`}>3</Link>
        </li>
      </ul>
    </div>
  );
}
export default Employee;
