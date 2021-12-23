import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Employee from "./components/Employee";
import EmployeeDetails from "./components/EmployeeDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Employee />} />
        <Route exact path='/employee_details/:id' element={<EmployeeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
