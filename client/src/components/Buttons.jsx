import React from 'react';
import { Link } from 'react-router-dom';

export default function Buttons({ props }) {
    const { page, setPage, compList, scopeState } = props;

    return (
        <div className='button-area'>
            {
                page > 0 &&
                <button style={{ width: "25%" }} className='btn' onClick={() => setPage(page - 1)}>Atras</button>
            }
            {
                page < compList.length - 1 &&
                <button style={{ width: "25%" }} className='btn' onClick={() => setPage(page + 1)}>Siguiente</button>
            }
            {
                page === compList.length - 1 &&
                <div style={{ width: "25%" }} className='btn'>
                    <Link to="/results" state={{ scopeState }} style={{ textDecoration: "none", color: "white" }}>
                        Calcular Huella
                    </Link>
                </div>
            }
        </div>
    )
}
