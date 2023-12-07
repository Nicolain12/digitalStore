import React, {useEffect, useState} from 'react';
import './allProductsList.css'
import ItemListContainer from '../../components/itemsList/itemListContainer/ItemListContainer';
import ByMuscleSearch from '../../components/byMuscleSearch/byMuscleSearch';
import database from '../../../public/database'


function allProductsList({byMuscle}) {
    const [searchVaues, setSearchVaues] = useState([])
    const [filProd, setFilProd] = useState([])
    function filterProductsByMuscles(searchValues, database) {
        if (searchValues.length === 0) {
          return database;
        }
      
        return database.filter(product => {
              return (
            Array.isArray(product.muscle) ?
              product.muscle.some(muscle => searchValues.includes(muscle)) :
              searchValues.includes(product.muscle)
          );
        });
      }
    useEffect(()=>{
        setFilProd(filterProductsByMuscles(searchVaues, database))
    },[searchVaues])
    

    return (
        <div className='apl-component'>
            {byMuscle ? <ByMuscleSearch searchVaues={searchVaues} setSearchVaues={setSearchVaues} /> : null}
            {byMuscle ? <ItemListContainer containerTitle={'All Products'} byMuscle={true} filteredProducts={filProd}  /> : <ItemListContainer containerTitle={'All Products'} allProducts={true} />}

            
        </div>
    );
}

export default allProductsList;