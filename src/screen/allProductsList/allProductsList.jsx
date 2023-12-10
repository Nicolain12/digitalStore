import React, { useEffect, useState } from 'react';
import './allProductsList.css'
import ItemListContainer from '../../components/Items/itemsList/itemListContainer/ItemListContainer';
import ByMuscleSearch from '../../components/byMuscleSearch/byMuscleSearch';
import { getDocs, collection } from 'firebase/firestore';
import { fbGetCall } from '../../modules/mainModules';
import { db } from '../../config/firebase';


function allProductsList({ byMuscle }) {
  const [searchVaues, setSearchVaues] = useState([])
  const [dbContent, setDbContent] = useState([])
  const [filProd, setFilProd] = useState([])

  // DB conection
  const databaseColection = collection(db, 'products')

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

  // USE EFFECT
  // DB info
  useEffect(() => {
    const dataCompile = async () => {
      const data = await fbGetCall(getDocs, databaseColection)
      setDbContent(data)
    }
    dataCompile()
  }, [])


  useEffect(() => {
    setFilProd(filterProductsByMuscles(searchVaues, dbContent))
  }, [searchVaues, dbContent])


  return (
    <div className='apl-component'>
      {byMuscle ? <ByMuscleSearch searchVaues={searchVaues} setSearchVaues={setSearchVaues} /> : null}
      {byMuscle ? <ItemListContainer containerTitle={'By Muscle'} byMuscle={true} filteredProducts={filProd} /> : <ItemListContainer containerTitle={'All Products'} allProducts={true} />}


    </div>
  );
}

export default allProductsList;