import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'

const Investor = () => {
    const history = useHistory()
    const [users,setUsers]=useState([])
    useEffect(()=>{
        const u=JSON.parse(localStorage.getItem("user"))
        console.log(u)
        if(u && u.role=="user")
        {
            history.push("/user")
            return
        }
        else if(u && u.role!="investor")
        {
            history.push("/login")
        }
    },[])
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        const {loc} = e.target
        axios.post("http://localhost:5000/users/getUsers",{
            address : loc.value,
        })
        .then(function (response) {
            // handle success
           // console.log(response.data.body);
            setUsers(response.data.body)
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
    }
    console.log(users);
    return (
        <div>
            <form className='message-form' onSubmit={handleSubmit} >
                        <input name='loc' type='text' placeholder='Property location' required />
                        <button id='submit-btn' type='submit'>SEARCH</button>
            </form>
            <div>
                {
                    users.map(user=>
                        <div key={user._id}>
                            <p>{user.name}</p>
                            <p>{user.details}</p>
                            <img src={user.image} alt="Property Image" />
                            <a href={`tel:${user.phone}`}>Contact </a>
                        </div>)
                    
                }
            </div>
        </div>
    )
}
export default Investor