import React from 'react';
import './itemDetail.css'
import { useParams } from 'react-router-dom';
import ItemsCard from '../itemsCard/itemsCard';
import database from '../../../public/database';
function itemDetail(props) {

    const { id } = useParams()
    const product = database.find(product => product.id == id)

    return (
            <div className='id-component'>
                <p>Para la entrega final prometo armar un estilo personalizado para la muestra del detalle del producto</p>
                <ItemsCard key={product.id} id={product.id} name={product.name} muscle={typeof product.muscle == 'object' ? product.muscle.join(', ') : product.muscle} price={product.price} image={product.image} />
            </div>
    );
}

export default itemDetail;