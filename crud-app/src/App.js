import React, {Fragment,useState, useEffect} from 'react';
import Navbar from './Components/Navbar';
import UserList from './Components/UserList';
import Form from './Components/Form';

function App() {

  const [user, setUser] = useState({
    name: '',
    lastname: '',
    email: ''
  })

  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers  = () => {
      fetch('http://localhost:3001/api/users')
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
            <UserList users={users}/>
          </div>
          <div className='col-5'>
          <h2 style={{textAlign: 'center'}}>Formulario de Usuario</h2>
          <Form user={user} setUser={setUser} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
