import React from 'react';

const Form = ({user, setUser}) => {

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    let{name, lastname, email} = user

    const handleSubmit = () => {
        var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
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
            .then(res => res.text())
            .then(res => console.log(res))

            //Reiniciando state del Usuario
            setUser({
                name: '',
                lastname: '',
                email: ''
            })
        }
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor='name' className='form-label'>Name</label>
                <input value={name} name='name' onChange={handleChange} type='text' id='name' className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htmlFor='lastname' className='form-label'>LastName</label>
                <input value={lastname} name='lastname' onChange={handleChange} type='text' id='lastname' className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htmlFor='email' className='form-label'>Email</label>
                <input value={email} name='email' onChange={handleChange} type='email' id='email' className='form-control'/>
            </div>
            <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
     );
}
 
export default Form;