import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

const Login = () => {
    const history= useHistory()
    const handleSubmit=(e)=>{
        e.preventDefault()
        const {phno, password} = e.target
        axios.post("http://localhost:5000/users/login",{
            phone : phno.value,
            password : password.value
        })
        .then(function (response) {
            // handle success
            console.log(response.data.body);
            localStorage.setItem('user', JSON.stringify(response.data.body));
            if(response.data.body)
            {
                history.push("/")
            }
           
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
    }

    return (
        <div>
          <form className='message-form' onSubmit={handleSubmit} >
                        <input name='phno' type='number' placeholder='Phone number' required />
                        <input name='password' type="password" placeholder='Password' required />
                        <button id='submit-btn' type='submit'>LOGIN</button>
                    </form>
                    <Link to="/signup"> 
                        does not ve an acc??
                    </Link>
        </div>
    )
}
export default Login 