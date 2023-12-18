import React, { useEffect, useState } from 'react';
import './allProductsList.css'
import ItemListContainer from '../../components/Items/itemsList/itemListContainer/ItemListContainer';
import ByMuscleSearch from '../../components/byMuscleSearch/byMuscleSearch';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { dataCompile } from '../../modules/mainModules';
import { filterProductsByMuscles } from './allProductsFunctions';


function allProductsList({ byMuscle }) {
  const [searchVaues, setSearchVaues] = useState([])
  const [dbContent, setDbContent] = useState([])
  const [filProd, setFilProd] = useState([])

  // DB conection
  const databaseColection = collection(db, 'products')

  // USE EFFECT
  // DB info
  useEffect(() => {
    dataCompile(getDocs, databaseColection, setDbContent)
  }, [])
  // Filter logic
  useEffect(() => {
      setFilProd(filterProductsByMuscles(searchVaues, dbContent))
  }, [searchVaues, dbContent])

  return (
    <div className='apl-component'>
      {byMuscle ? <ByMuscleSearch searchVaues={searchVaues} setSearchVaues={setSearchVaues} /> : null}
      {byMuscle ? <ItemListContainer containerTitle={'By Muscle'} byMuscle={true} filteredProducts={filProd} /> : <ItemListContainer allProducts={true} />}
    </div>
  );
}

export default allProductsList;