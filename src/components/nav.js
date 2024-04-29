import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('./signup')
    }
    return (
        <div>
            <img src="https://th.bing.com/th/id/OIP.etLNvoG4GWw2P1fw7Fu0pQHaHa?rs=1&pid=ImgDetMaing" alt="logo" className="logo" />
           
            {
                auth ?

                    <ul className="nav-ul">
                        <li><Link to='/events'>Events</Link></li>
                        <li><Link to='/add'>Add Events</Link></li>
                        <li><Link to='/update'>Update Events</Link></li>
                        <li><Link to='/profile'>Profile</Link></li>
                        <li><Link onClick={logout} to='/signup'>Logout ({JSON.parse(auth).name})</Link></li>
                    </ul>
                    :
                    
                    <ul className="nav-ul nav-right">
                       <li className="sp"><Link to='/'>Home</Link></li>
                        <li className="sp"><Link to='/signup'>Sign Up</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                    </ul>
            }

        </div>
    )
}

export default Nav;