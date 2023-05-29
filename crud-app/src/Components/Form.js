import React from 'react';

const Form = ({user, setUser, handleUserUpdate}) => {
    const { name, lastname, email } = user;

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        var validEmail2 =  /^\w+([.\-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (!name || !lastname || !email) {
            alert('Todos los campos son obligatorios');
            return;
        }else if(!(validEmail2.test(email) ) ){
            alert('Ingresa un correo valido.')
            return 
        }else

    if (user.id) {
        //Realizar solicitud de actualización (PUT)
        const requestInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user),
        };
        fetch(`http://localhost:3001/api/users/${user.id}`, requestInit)
        .then((res) => res.text())
        .then((res) => {
            console.log(res);
            handleUserUpdate();
            });
            
    } else {
      
        var validEmail =  /^\w+([.\-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        //Validación de Datos
        if (name === '' || lastname === '' || email === '') {
            alert('Todos los campos son obligatorios')
            return
        }else if(!(validEmail.test(email) ) ){
            alert('Ingresa un correo valido.')
            return 
        } else {
            //Consulta 
            const requestInit = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(user)
            }
            fetch('http://localhost:3001/api/users', requestInit)
            .then((res) => res.text())
            .then((res) => {
                console.log(res);
                handleUserUpdate();
            });
        }}

            //Reiniciando state del Usuario
            setUser({
                name: '',
                lastname: '',
                email: ''
        });
    };

    

    return ( 
        
    <form onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label'> Name </label>
        <input value={user.name} name='name' onChange={handleChange} type='text' id='name' className='form-control' />
      </div>

      <div className='mb-3'>
        <label htmlFor='lastname' className='form-label'> LastName </label>
        <input value={user.lastname} name='lastname' onChange={handleChange} type='text' id='lastname' className='form-control' />
      </div>

      <div className='mb-3'>
        <label htmlFor='email' className='form-label'> Email</label>
        <input value={user.email} name='email' onChange={handleChange} type='email' id='email' className='form-control' />
      </div>

      <div className='d-grid'>
        <button type='submit' className='btn btn-primary'> {user.id ? 'Update' : 'Submit'}</button>
        <br></br>
        {user.id && (
            <button type='button' className='btn btn-secondary ms-2' onClick={() =>
                    setUser({
                        id: null,
                        name: '',
                        lastname: '',
                        email: ''
                    })
                }
            >
                Cancel
            </button>
        )}
      </div>
      </form>
     );
};
 
export default Form;