import React from "react";

const UserRow = ({id, name, phone, email}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{email}</td>
    </tr>
  );
};

export default UserRow;
