import React from 'react';
import {
    FaSignInAlt,
    FaSignOutAlt,
    FaUser
} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout, reset } from '../redux/authSlice';


export const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    };

    return (
        <div className='navbar'>
            <div className='logo'>
                <Link to='/'>
                    <img src="http://hub2030.com/wp-content/uploads/2022/09/HUB_Logo_azul.png" alt="logo" />
                </Link>
            </div>
            <h1>Calculadora de Huella de CO<span style={{ fontSize: "1rem" }}>2</span></h1>
            <ul>
                {user ? (
                    <li>
                        <button className='logout' onClick={onLogout}>
                            <FaSignOutAlt /> Logout
                        </button>
                    </li>) : (
                    <>
                        <li>
                            <Link to='./login'>
                                <FaSignInAlt /> Login
                            </Link>
                        </li>
                        <li>
                            <Link to='./register'>
                                <FaUser /> Registro
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </div>
    )
}
