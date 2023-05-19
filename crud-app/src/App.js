import React, {Fragment,useState, useEffect} from 'react';
import Navbar from './Components/Navbar';
import UserList from './Components/UserList';

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers  = () => {
      fetch('http://localhost:3000/api/users')
      .then(res => res.json())
      .then(res => setUsers(res))
    }
    getUsers()
  }, [])
  

  return (
    <Fragment>
      <Navbar brand='CRUD-Luis'/>
      <div className='container'>
        <div className='row'>
          <div className='col-7'>
            <h2 style={{textAlign: 'center'}}>User List</h2>
            <UserList/>
          </div>
          <div className='col-5'>
          <h2 style={{textAlign: 'center'}}>Formulario de Usuario</h2>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
