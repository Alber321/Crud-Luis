// import React from "react";

// const UserList = ({ users, setListUpdated, setUser }) => {

//   const handleDelete = (id) => {
//     const requestInit = {
//       method: "DELETE",
//     };
//     fetch(`http://localhost:3001/api/users/${id}`, requestInit)
//       .then((res) => res.text())
//       .then((res) => {
//         console.log(res)
//           setListUpdated(true);
//       });
//   };

//   const handleEdit = (user) => {
//     setUser(user);
//   };

//   return (
//     <table className="table">
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Name</th>
//           <th>LastName</th>
//           <th>Email</th>
//         </tr>
//       </thead>
//       <tbody>
//         {users.map((user) => (
//           <tr key={user.id}>
//             <td>{user.id}</td>
//             <td>{user.name}</td>
//             <td>{user.lastname}</td>
//             <td>{user.email}</td>
//             <td>
//               <div className="mb-3">
//                 <button onClick={() => handleDelete(user.id)} className="btn btn-danger">Delete</button>
//               </div>
//               <div className="mb-3">
//               <button onClick={() => handleEdit(user)} className="btn btn-dark">
//               Edit
//               </button>
//               </div>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default UserList;

import React from "react";
import '../index.css';

const UserList = ({ users, setListUpdated, setUser }) => {
  
  const handleDelete = (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este usuario?")) {
      const requestInit = {
        method: "DELETE",
      };
      fetch(`http://localhost:3001/api/users/${id}`, requestInit)
        .then((res) => res.text())
        .then((res) => {
          console.log(res);
          setListUpdated(true); // Actualiza la lista de usuarios después de eliminar
          setUser({ name: "", lastname: "", email: "" }); // Reinicia el formulario estableciendo valores iniciales en blanco
        })
        .catch((error) => {
          console.error("Error al eliminar el usuario:", error);
        });
    }
  };

  const handleEdit = (user) => {
        setUser(user);
        console.log("Editando usuario:", user);
      };

  return (
    <table className="table">
      <thead>
        <tr>
          {/* <th>ID</th> */}
          <th>Name</th>
          <th>LastName</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            {/* <td>{user.id}</td> */}
            <td>{user.name}</td>
            <td>{user.lastname}</td>
            <td>{user.email}</td>
            <td>
              <div className="mb-3">
                <button onClick={() => handleDelete(user.id)} className="btn btn-danger btn-sm">
                  Delete
                </button>
              </div>
              <div className="mb-3">
              <button onClick={() => handleEdit(user)} className="btn editbtn btn-dark btn-sm" 
              >Edit
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