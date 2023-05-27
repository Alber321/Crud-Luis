import React from "react";

const UserList = ({ users, setListUpdated, setUser }) => {

  const handleDelete = (id) => {
    const requestInit = {
      method: "DELETE",
    };
    fetch(`http://localhost:3001/api/users/${id}`, requestInit)
      .then((res) => res.text())
      .then((res) => {
        console.log(res)
          setListUpdated(true);
      });
  };

  const handleEdit = (user) => {
    setUser(user);
  };

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
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.lastname}</td>
            <td>{user.email}</td>
            <td>
              <div className="mb-3">
                <button onClick={() => handleDelete(user.id)} className="btn btn-danger">Delete</button>
              </div>
              <div className="mb-3">
              <button onClick={() => handleEdit(user)} className="btn btn-dark">
              Edit
              </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
