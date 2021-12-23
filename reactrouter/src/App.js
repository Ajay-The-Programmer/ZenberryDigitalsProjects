import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Employee from "./components/Employee";
import EmployeeDetails from "./components/EmployeeDetails";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Employee />}></Route>
        <Route exact path='/employee_details/:id' element={<EmployeeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
