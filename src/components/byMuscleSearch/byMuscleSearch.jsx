import React, { useState, useEffect } from 'react';
import './byMuscleSearch.css'

function byMuscleSearch({ trigger, searchVaues, setSearchVaues }) {

    const [statusShoulders, setStatusShoulders] = useState(false)
    const [statusChest, setStatusChest] = useState(false)
    const [statusBack, setStatusBack] = useState(false)
    const [statusBiceps, setStatusBiceps] = useState(false)
    const [statusTriceps, setStatusTriceps] = useState(false)
    const [statusAbs, setStatusAbs] = useState(false)
    const [statusGlute, setStatusGlute] = useState(false)
    const [statusCuads, setStatusCuads] = useState(false)
    const [statusHamstring, setStatusHamstring] = useState(false)
    const [statusCalves, setStatusCalves] = useState(false)

    const handleSearchClick = (mus) => {
        if (searchVaues.includes(mus)) {
            setSearchVaues(searchVaues.filter(muscle => muscle !== mus));
        } else {
            setSearchVaues([...searchVaues, mus]);
        }
        if (mus === 'Shoulders') setStatusShoulders(!statusShoulders)
        if (mus === 'Chest') setStatusChest(!statusChest)
        if (mus === 'Back') setStatusBack(!statusBack)
        if (mus === 'Biceps') setStatusBiceps(!statusBiceps)
        if (mus === 'Triceps') setStatusTriceps(!statusTriceps)
        if (mus === 'Abs') setStatusAbs(!statusAbs)
        if (mus === 'Glutes') setStatusGlute(!statusGlute)
        if (mus === 'Cuads') setStatusCuads(!statusCuads)
        if (mus === 'Hamstring') setStatusHamstring(!statusHamstring)
        if (mus === 'Calves') setStatusCalves(!statusCalves)
    }


    // useEffect(() => {
    //     // if (searchVaues.length > 0) location.pathname != '/allProducts' ? window.location.href = '/allProducts' : null
    //     console.log(searchVaues);
    // }, [searchVaues])

    return (
        <div className='bms-component'>
            <div className={statusShoulders ? 'bms-muscle-div-clicked' : 'bms-muscle-div'} onClick={() => { handleSearchClick('Shoulders') }}>Shoulders</div>
            <div className={statusChest ? 'bms-muscle-div-clicked' : 'bms-muscle-div'} onClick={() => { handleSearchClick('Chest') }}>Chest</div>
            <div className={statusBack ? 'bms-muscle-div-clicked' : 'bms-muscle-div'} onClick={() => { handleSearchClick('Back') }}>Back</div>
            <div className={statusBiceps ? 'bms-muscle-div-clicked' : 'bms-muscle-div'} onClick={() => { handleSearchClick('Biceps') }}>Biceps</div>
            <div className={statusTriceps ? 'bms-muscle-div-clicked' : 'bms-muscle-div'} onClick={() => { handleSearchClick('Triceps') }}>Triceps</div>
            <div className={statusAbs ? 'bms-muscle-div-clicked' : 'bms-muscle-div'} onClick={() => { handleSearchClick('Abs') }}>Abs</div>
            <div className={statusGlute ? 'bms-muscle-div-clicked' : 'bms-muscle-div'} onClick={() => { handleSearchClick('Glutes') }}>Glutes</div>
            <div className={statusCuads ? 'bms-muscle-div-clicked' : 'bms-muscle-div'} onClick={() => { handleSearchClick('Cuads') }}>Cuads</div>
            <div className={statusHamstring ? 'bms-muscle-div-clicked' : 'bms-muscle-div'} onClick={() => { handleSearchClick('Hamstrings') }}>Hamstrings</div>
            <div className={statusCalves ? 'bms-muscle-div-clicked calves' : 'bms-muscle-div calves'} onClick={() => { handleSearchClick('Calves') }}>Calves</div>
        </div>
    ) 
}

export default byMuscleSearch;