import { scopeData } from './data';

// Factores de emision
export const dataConst = [
    [scopeData[0].co2, scopeData[0].ch4, scopeData[0].n2o],
    [scopeData[1].co2, scopeData[1].ch4, scopeData[1].n2o],
    [scopeData[2].co2, scopeData[2].ch4, scopeData[2].n2o],
    [scopeData[3].co2, scopeData[3].ch4, scopeData[3].n2o],
    [scopeData[4].co2, scopeData[4].ch4, scopeData[4].n2o],
    [scopeData[5].co2, scopeData[5].ch4, scopeData[5].n2o],
    [scopeData[6].co2, scopeData[6].ch4, scopeData[6].n2o],
    [scopeData[7].co2, scopeData[7].ch4, scopeData[7].n2o],
    [scopeData[8].co2, scopeData[8].ch4, scopeData[8].n2o],
    [scopeData[9].co2, scopeData[9].ch4, scopeData[9].n2o],
    [scopeData[10].co2, scopeData[10].ch4, scopeData[10].n2o],
    [scopeData[11].co2, scopeData[11].ch4, scopeData[11].n2o],
    [scopeData[12].co2, scopeData[12].ch4, scopeData[12].n2o],
    [scopeData[13].co2, scopeData[13].ch4, scopeData[13].n2o],
    [scopeData[14].co2, scopeData[14].ch4, scopeData[14].n2o],
    [scopeData[15].co2, scopeData[15].ch4, scopeData[15].n2o],
    [scopeData[16].co2, scopeData[16].ch4, scopeData[16].n2o],
    [scopeData[17].co2, scopeData[17].ch4, scopeData[17].n2o],
    [scopeData[18].co2, scopeData[18].ch4, scopeData[18].n2o],
    [scopeData[19].co2, scopeData[19].ch4, scopeData[19].n2o],
    [scopeData[20].co2, scopeData[20].ch4, scopeData[20].n2o],
    [scopeData[21].co2, scopeData[21].ch4, scopeData[21].n2o],
    [scopeData[22].co2, scopeData[22].ch4, scopeData[22].n2o],
];

// Funcion agregar resultados a un array
export const getResults = (constArray, resultsArray, states, index) => {
    constArray.map((j) => {
        return resultsArray[Object.keys(resultsArray)[index]].push(Math.round((j * states[index]) * 100) / 100)
    })
};

// Funcion para sumar los contenidos de cada array de resultados
export const totalResult = (index, resultsArray,) => (
    resultsArray[Object.keys(resultsArray)[index]].reduce((acc, val) => { return Math.round((acc + val) * 100) / 100 }, 0)
);




