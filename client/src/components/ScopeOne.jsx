import React, { useState } from 'react';
import { scopeData } from '../data';

const ScopeOne = ({ scopeState, setScopeState }) => {
    const [focus, setFocus] = useState(false);

    const handleFocus = () => {
        setFocus(true)
        console.log(focus);
    };

    const handleChange = (e) => {
        setScopeState({ ...scopeState, [e.target.name]: e.target.value })
    };

    return (
        <div className="card">
            <div className="step-title">Alcance 1</div>
            <div className="cardContainer" style={{ display: "flex" }}>
                <div className="cardLeft" style={{ flex: 2, lineHeight: "1.5rem", margin: "1rem 1.5rem 1rem 0" }}>
                    <b>Emisiones directas de GEI</b>
                    <p>Emisiones provenientes de fuentes que son propiedad o están controladas por la empresa, es decir, dentro de los límites de la organización. Por ejemplo, las emisiones generadas por la quema de combustibles en vehículos propiedad de la organización.</p>
                    <p style={{ margin: 0, alignSelf: "start" }}>Incluye:</p>
                    <ul>
                        <li>Combustibles</li>
                        <li>Refrigerantes</li>
                        <li>Actividades Agrícolas</li>
                    </ul>
                </div>
                <div className="cardCenter">
                    <div className="line" />
                </div>
                <div className="cardRight" style={{ flex: 3 }}>
                    <h3>Combustibles</h3>
                    {scopeData.map((item) => (
                        item.id > 0 && item.id < 6 &&
                        <div className="inputsContainer" key={item.id}>
                            <label>{item.label}</label>
                            <input
                                {...item}
                                type={"number"}
                                placeholder={item.placeholder}
                                value={scopeState[item.name]}
                                onChange={handleChange}
                                pattern={[0 - 9]}
                                onBlur={handleFocus}
                                focus={focus.toString()}
                            />
                            <span className='validate'>{focus ? "Debe contener un valor numérico!" : " "}</span>
                        </div>
                    ))}
                </div>
                <div className="cardCenter">
                    <div className="line" />
                </div>
                <div className="cardRight" style={{ flex: 3 }}>
                    <h3>Refrigerantes</h3>
                    {scopeData.map((item) => (
                        item.id > 5 && item.id < 11 &&
                        <div className="inputsContainer" key={item.id}>
                            <label>{item.label}</label>
                            <input
                                {...item}
                                type={"number"}
                                placeholder={item.placeholder}
                                value={scopeState[item.name]}
                                onChange={handleChange}
                                pattern={[0 - 9]}
                                onBlur={handleFocus}
                                focus={focus.toString()}
                            />
                            <span className='validate'>{focus ? "Debe contener un valor numérico!" : " "}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default ScopeOne;
