import React, { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, reset } from '../redux/authSlice';
import { toast } from 'react-toastify';
import { Spinner } from '../components/Spinner';

export const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const { email, password } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isError, isSuccess, isLoading, message } = useSelector((state) => state.auth);

    useEffect(() => {
        if (isError) {
            toast.error('Error')
        }

        if (isSuccess || user) {
            navigate('/form')
        }

        dispatch(reset())

    }, [isError, isSuccess, user, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const userData = {
            email,
            password
        };

        dispatch(login(userData))
    };

    if (isLoading) {
        return <Spinner />
    };

    return (
        <div className='container'>
            <section className='heading'>
                <h1>
                    <FaSignInAlt /> Login
                </h1>
                <p>Iniciar sesión</p>
            </section>
            <section className='form'>
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <input
                            type="email"
                            className='form-control'
                            id='email'
                            name='email'
                            value={email}
                            placeholder="Escribí tu email"
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type="password"
                            className='form-control'
                            id='password'
                            name='password'
                            value={password}
                            placeholder="Escribí tu contraseña"
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='btn btn-block'>Ingresar</button>
                    </div>
                </form>
            </section>
        </div>
    )
}
