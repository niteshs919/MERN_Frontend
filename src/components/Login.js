import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem("user");
        if(auth){
            navigate("/");
        }
    },[]);
    const handleLogin = async () => {
        let result = await fetch("http://localhost:8085/login", {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }
        })
        result = await result.json();
        if (result.name) {
            localStorage.setItem("user", JSON.stringify(result));
            navigate("/");
        }
        else {
            alert("Please fill correct details");
        }
    }
    return (
        <div className='login'>
            <input type="text" className='inputBox' placeholder='enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" className='inputBox' placeholder='enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className='appButton' type='button' onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login
