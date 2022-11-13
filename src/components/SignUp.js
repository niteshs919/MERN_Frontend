import React, { useEffect, useState } from 'react'
import { json, useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem("user");
        if(auth){
            navigate('/');
        }
    })
    const signUp = async () => {
        if (name != "" && email != '' && password != '') {
            let result = await fetch("http://localhost:8085/register", {
                method: 'post',
                body: JSON.stringify({ name, email, password }),
                headers: { 'Content-Type': 'application/json' }
            })
            result = await result.json();

            if (result._id) {
                localStorage.setItem("user", JSON.stringify(result));
                navigate("/")
                setName('')
                setEmail('')
                setPassword('')

            }
        }
        else {
            alert("Please fill all fields");
        }

    }
    return (
        <div className='register'>
            <h2>Register</h2>
            <input className='inputBox' type="text" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
            <input className='inputBox' type="text" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className='inputBox' type="text" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className='appButton' type='button' onClick={signUp}>Sign Up</button>
        </div>
    )
}

export default SignUp
