import React from "react";

const UserRow = ({ id, name, phone, email }) => {
  console.log(phone);
  return (
    <tr>
      <td className="px-6">{id}</td>
      <td className="px-6">{name}</td>
      <td className="px-6">{phone}</td>
      <td className=" flex justify-between ">
        <p className="">{email}</p>
        <span className="">
          <button>view</button>
          <button>edit</button>
          <button>delete</button>
        </span>
      </td>
    </tr>
  );
};

export default UserRow;
