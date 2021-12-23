import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EmployeeDetails() {
  const params = useParams();
  const [id, setId] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const number = Number(params.id);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${number}`);
      const result = await response.json();
      setId(result.id);
      setName(result.name);
      setEmail(result.email);
    };
    fetchApi();
  }, []);
  return (
    <div className='container-fluid w-50'>
      <h1 className='center'>Employee Details</h1>
      <table className='table table-success table-striped'>
        <thead>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Name</th>
            <th scope='col'>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>{id}</th>
            <td>{name}</td>
            <td>{email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeDetails;
