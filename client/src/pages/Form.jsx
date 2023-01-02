import React, { useState, useEffect } from 'react';
import ScopeOne from '../components/ScopeOne';
import ScopeTwo from '../components/ScopeTwo';
import ScopeThree from '../components/ScopeThree';
import Buttons from '../components/Buttons';
import { scopeData } from '../data';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Spinner } from '../components/Spinner';

export const Form = () => {
    const [page, setPage] = useState(0);
    const [scopeState, setScopeState] = useState(scopeData);

    const navigate = useNavigate();

    const { user, isLoading } = useSelector((state) => state.auth);

    useEffect(() => {

        if (!user) {
            navigate('/login')
        }

    }, [user, navigate])

    if (isLoading) {
        return <Spinner />
    }

    const compList = [
        <ScopeOne scopeState={scopeState} setScopeState={setScopeState} />,
        <ScopeTwo scopeState={scopeState} setScopeState={setScopeState} />,
        <ScopeThree scopeState={scopeState} setScopeState={setScopeState} />
    ];

    return (
        <div className='App'>
            <div className='formContainer'>
                {<div>{compList[page]}</div>}

                <Buttons props={{ page, setPage, compList, scopeState }} />
            </div>
        </div>
    )
}
