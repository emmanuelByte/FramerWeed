import React from "react";

const UserRowHome = ({ id, name }) => {
  return (
    <tr>
      <td className="px-6">{id}</td>
      <td className=" flex justify-between ">
        <p className="">{name}</p>
        <span className=" space-x-2 flex">
          <a href="/view" className="border-2 rounded-lg px-1 active:bg-gray-200">view</a>
          <button className="border-2 bg-yellow-200 active:bg-yellow-500  rounded-lg px-1">edit</button>
          <button className="border-2 rounded-lg bg-red-500 active:bg-red-800 px-1">delete</button>
        </span>
      </td>
    </tr>
  );
};

export default UserRowHome;
