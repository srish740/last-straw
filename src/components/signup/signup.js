import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

const Signup = () => {
    const history= useHistory()
    const handleSubmit=(e)=>{
        e.preventDefault()
        const {name, phno, aadhar ,loc, details ,image,role,password} = e.target
        axios.post("http://localhost:5000/users/create",{
            name: name.value,
            address : loc.value,
            image : image.value,
            addhar : aadhar.value,
            details : details.value,
            phone : phno.value,
            role : role.value,
            password : password.value
        })
        .then(function (response) {
            // handle success
            console.log(response.data.body);
            localStorage.setItem('user', JSON.stringify(response.data.body));
            history.push("/")
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
    }
    return (
        <div>
            <form className='message-form' onSubmit={handleSubmit} >
                        <input name='name' type='text' placeholder='Name' required />
                        <input name='role' type='text' placeholder='Role' required />
                        <input name='password' type="password" placeholder='Password' required />
                        <input name='phno' type='number' placeholder='Phone number' required />
                        <input name='aadhar' type='number' placeholder='Aadhar number' required />
                        <input name='loc' type='text' placeholder='Property location' required />
                        <textarea name='details' rows='5' placeholder='Enter your details here...' required />
                        <input name='image' type='text' placeholder='Put your image link here...' required />
                        <button id='submit-btn' type='submit'>SUBMIT</button>
                    </form>
                    <Link to="/login"> 
                        existing user??
                    </Link>
        </div>
    )
}
export default Signup