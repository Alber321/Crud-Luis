import React from "react";

const UserList = ({ user, users, setUser, setListUpdated }) => {
  const handleDelete = (id) => {
    const requestInit = {
      method: "DELETE",
    };
    fetch(`http://localhost:3001/api/users/${id}`, requestInit)
      .then((res) => res.text())
      .then((res) => console.log(res));

    setListUpdated(true);
  };

  let { name, lastname, email } = user;
  const handleUpdate = (id) => {
    var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    //Validación de Datos
    if (name === "" || lastname === "" || email === "") {
      alert("Todos los campos son obligatorios");
      return;
    } else if (!validEmail.test(email)) {
      alert("Ingresa un correo valido.");
      return;
    } else {
      const requestInit = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      };
      fetch(`http://localhost:3001/api/users/${id}`, requestInit)
        .then((res) => res.text())
        .then((res) => console.log(res));
      }
        //Reiniciando state del Usuario
        setUser({
          name: '',
          lastname: '',
          email: ''
      })

      setListUpdated(true);
  }

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
                <button
                  onClick={() => handleDelete(user.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
              <div className="mb-3">
                <button
                  onClick={() => handleUpdate(user.id)}
                  className="btn btn-dark"
                >
                  Update
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
