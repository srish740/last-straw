import React from 'react'

const User = () => {
    const u=JSON.parse(localStorage.getItem("user"))
    return (
        <div>
            <p>name:{u.name}</p>
            <p>phone:{u.phone}</p>
            <p>aadhar:{u.aadhar}</p>
            <p>loc:{u.loc}</p>
            <p>details:{u.details}</p>
            <img src={u.image} alt="Property Image" />
        </div>
    )
}
export default User