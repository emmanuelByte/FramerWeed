import React from "react";
import { connect } from "react-redux";
import { getAllEmployees } from "../redux/user/user.action";
import { Link } from 'react-router-dom'
import axios from "axios";

const UserRow = ({ id, name, phone, email , refreshEmployees}) => {
  const deleteUser = async () => {
    await axios.delete(`http://localhost:8090/users/${id}`);
    await refreshEmployees()
  }
  return (
    <tr key={id }>
      <td className="px-6 truncate overflow-ellipsis">{id}</td>
      <td className="px-6">{name}</td>
      <td className="px-6">{phone}</td>
      <td className=" flex justify-between ">
        <p className="">{email}</p>
        <span className=" space-x-2 flex">
        <Link to="/view" className="border-2 rounded-lg px-1 active:bg-gray-200">view</Link>
          <Link to={`/edit${id}`}><button className="border-2 bg-yellow-200 active:bg-yellow-500  rounded-lg px-1">edit</button></Link>
          <button onClick={deleteUser} className="border-2 rounded-lg bg-red-500 active:bg-red-800 px-1">delete</button>
        </span>
      </td>
    </tr>
  );
};

const mapDispatchToProps = (dispatch) => ({
  refreshEmployees: () => dispatch(getAllEmployees()),
});

export default connect( null,mapDispatchToProps)(UserRow);
