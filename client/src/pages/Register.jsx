import React, { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { reset, register } from '../redux/authSlice';
import { toast } from 'react-toastify';
import { Spinner } from '../components/Spinner';

export const Register = () => {
    const [formData, setFormData] = useState({
        userName: "",
        email: "",
        password: "",
        passwordCheck: ""
    });

    const { userName, email, password, passwordCheck } = formData;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user, isError, isSuccess, isLoading, message } = useSelector((state) => state.auth);

    useEffect(() => {
        if (isError) {
            toast.error('Error')
        }

        if (isSuccess || user) {
            navigate('/')
        }

        dispatch(reset())

    }, [isSuccess, isError, user, message, dispatch, navigate])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (password !== passwordCheck) {
            toast.error('Passwords do not match!')
        } else {
            const userData = {
                userName,
                email,
                password
            };

            dispatch(register(userData))
        }
    };

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className='container'>
            <section className='heading'>
                <h1>
                    <FaUser /> Registrar
                </h1>
                <p>Crear una cuenta</p>
            </section>
            <section>
                <form className='form' onSubmit={onSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            id='username'
                            name='userName'
                            placeholder="Ingresá tu nombre"
                            value={userName}
                            className='form-control'
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            id='email'
                            name='email'
                            placeholder="Ingresá tu email"
                            value={email}
                            className='form-control'
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            id='password'
                            name='password'
                            value={password}
                            placeholder="Escribí una contraseña"
                            className='form-control'
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            id='passwordCheck'
                            name='passwordCheck'
                            value={passwordCheck}
                            placeholder="Repetí la contraseña"
                            className='form-control'
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='btn btn-block'>Registrarme</button>
                    </div>
                </form>
            </section>
        </div>
    )
}
