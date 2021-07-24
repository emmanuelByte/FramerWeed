import React from "react";

const UserRow = ({id, name, phone, email}) => {
  console.log(phone)
  return (
    <tr>
      <td className="px-6">{id}</td>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{email}</td>
    </tr>
  );
};

export default UserRow;
