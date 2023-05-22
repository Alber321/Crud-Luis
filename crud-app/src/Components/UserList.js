import React from "react";

const UserList = ({users}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>LastName</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) =>(
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.lastname}</td>
            <td>{user.email}</td>
            <td>
              <div className="mb-3">
                <button className="btn btn-danger">Delete</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
