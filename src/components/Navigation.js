import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Navigation = () => {
    const auth = localStorage.getItem("user");
    const navigate = useNavigate(); //it rerender the component when navigate is call.
    const logoutButton = () => {
        localStorage.clear();
        navigate('/signup')
    }
    return (
        <div>
            <img alt='logo' className='logo' src='https://www.960fashion.com/wp-content/uploads/2021/10/grocery-shopping-1536x864.jpg'/>
            {auth ? <ul className='nav-ul'>
                <li><Link to='/'>Products</Link></li>
                <li><Link to='/add'>Add Products</Link></li>
                <li><Link to='/update'>Update Products</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link onClick={logoutButton} to='/signup'>Logout ({JSON.parse(auth).name})</Link></li>

            </ul> : <ul className='nav-ul nav-right'> <li><Link to='/signup'>Sign Up</Link> </li>
                <li><Link to='/login'>Login</Link></li></ul>}
        </div>
    )
}

export default Navigation