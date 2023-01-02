import React, { useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { scopeData } from '../data';
import { dataConst, getResults, totalResult } from '../helpers';
import ChartPie from '../components/ChartPie';
import ChartBar from '../components/ChartBar';
import { useSelector } from 'react-redux';
import { Spinner } from '../components/Spinner';

export const Results = () => {
    const navigate = useNavigate();
    const { user, isLoading } = useSelector((state) => state.auth);

    useEffect(() => {

        if (!user) {
            navigate('/login')
        }

    }, [user, navigate])

    // Con use location y link me traigo el estado
    const location = useLocation();
    const newState = location.state.scopeState;

    // Estados con la data del usuario
    const states = [
        newState.Gas,
        newState.Gasoil,
        newState.Nafta,
        newState.Fueloil,
        newState.Lpg,
        newState.R22,
        newState.R134,
        newState.R407c,
        newState.R410a,
        newState.R141b,
        newState.Electricidad,
        newState.Vapor,
        newState.Home,
        newState.Traslados,
        newState.Publico,
        newState.Cabotaje,
        newState.Internacional,
        newState.Alojamiento,
        newState.Terrestre,
        newState.Maritimo,
        newState.Agua,
        newState.Tratamiento,
        newState.Residuos,
    ];

    // If there is Undefined, change it to 0
    states.forEach((k, index) => {
        states[index] = k === undefined ? 0 : k;
    });

    // Inicializo results
    // Primero creo la array con los resultados y despues lo transformo en objeto
    const resultsArray = [];
    const results = {};

    scopeData.map(x => resultsArray.push((x.name).toString()));

    for (let y = 0; y < resultsArray.length; y++) {
        results[resultsArray[y]] = []
    };

    // Resultado total (inicializar en 0) e indice de iteracion
    const totals = [];
    let scope1 = 0;
    let scope2 = 0;
    let scope3 = 0;
    let index = 0

    // Itero sobre los factores de emision y los multiplico por los estados
    // Luego los agrego a los objetos
    dataConst.forEach((i) => {
        getResults(i, results, states, index)
        totals[index] = totalResult(index, results)
        index++
    });

    // Transformo la array totals en un objeto
    const totalsObj = {};

    for (let z = 0; z < resultsArray.length; z++) {
        totalsObj[resultsArray[z]] = totals[z]
    };

    // Calcular scopes por separado
    for (let i = 0; i < 10; i++) {
        scope1 += totals[i]
    }
    for (let i = 10; i < 12; i++) {
        scope2 += totals[i]
    }
    for (let i = 12; i < totals.length - 1; i++) {
        scope3 += totals[i]
    }

    const scopes = [scope1, scope2, scope3]

    // Ordenar totals de mayor a menor
    // The sort() method casts elements to strings and compares the strings to determine the orders.
    // If compare(a,b) is less than zero, the sort() method sorts a to a lower index than b. In other words, a will come first.
    const sortedTotals = [...totals]
    sortedTotals.sort((a, b) => {
        if (a > b) return -1;
        if (a < b) return 1;
        return 0;
    });

    // En este caso transformo el objeyo en array, hago un sort
    // y luego transformo la array ordenada en un objeto nuevamente
    const sortedObj = Object.entries(totalsObj)
        .sort(([, a], [, b]) => b - a)
        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className='resultContainer' style={{ display: "flex" }}>
            <div className='left'>
                <div className='resultLeftContainer'>
                    <div style={{ padding: "1rem 1rem 1rem 2rem" }}>
                        <h2>Resultados</h2>
                        <p>Su huella de carbono es:</p>
                        <h2 style={{ textAlign: "center", margin: "2rem" }}>
                            {Object.values(totals).reduce(
                                (x, y) => { return Math.round((x + y) * 100) / 100 }, 0)
                            } kg CO<span style={{ fontSize: "1rem" }}>2e</span>
                        </h2>
                        <p>Resultados por alcance:</p>
                        <ul>
                            <li>Alcance 1: &nbsp;
                                {Math.round(scope1 * 100) / 100} kg CO<span style={{ fontSize: "0.6rem" }}>2e</span>
                            </li>
                            <li>Alcance 2: &nbsp;
                                {Math.round(scope2 * 100) / 100} kg CO<span style={{ fontSize: "0.6rem" }}>2e</span>
                            </li>
                            <li>Alcance 3: &nbsp;
                                {Math.round(scope3 * 100) / 100} kg CO<span style={{ fontSize: "0.6rem" }}>2e</span>
                            </li>
                        </ul>
                    </div>
                    <div className='recalcBtn btn'>
                        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                            Calcular Nuevamente
                        </Link>
                    </div>
                </div>
            </div>

            <div className='right'>
                <div className='up' style={{ display: "flex" }}>
                    <ChartPie style={{ flex: 1 }} scopes={scopes} />
                    <ChartBar style={{ flex: 1 }} sortedObj={sortedObj} />
                </div>
                <div className='down'>
                    <div className='chart'>
                        <h3>Emisiones de GEI de sus actividades:</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Componente</th>
                                    <th>Emisiones CO<span style={{ fontSize: "0.75rem" }}>2e</span></th>
                                    <th>Emisiones CO<span style={{ fontSize: "0.75rem" }}>2</span></th>
                                    <th>Emisiones CH<span style={{ fontSize: "0.75rem" }}>4</span></th>
                                    <th>Emisiones N<span style={{ fontSize: "0.75rem" }}>2</span>O</th>
                                </tr>
                                {scopeData.map((a) =>
                                    a.id < 10 &&
                                    <tr key={a.id}>
                                        <td style={{ textAlign: "left" }}>{a.label}</td>
                                        <td style={{ fontWeight: "bold" }}>{Object.values(totals)[a.id - 1]}</td>
                                        <td>{Object.values(results)[a.id - 1][0]}</td>
                                        <td>{Object.values(results)[a.id - 1][1]}</td>
                                        <td>{Object.values(results)[a.id - 1][2]}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
