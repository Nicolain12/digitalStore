import React from 'react';
import './itemListContainer.css'
import ItemsCard from '../../itemsCard/itemsCard';

function itemListContainer(props) {
    return (
        <div>
            <h2>{props.containerTitle}</h2>
        <div className="ilc-card-container-div">
            <ItemsCard/>
            <ItemsCard/>
            <ItemsCard/>
            <ItemsCard/>
            <ItemsCard/>
            <ItemsCard/>
            <ItemsCard/>
            <ItemsCard/>
            <ItemsCard/>
            <ItemsCard/>
            <ItemsCard/>
            <ItemsCard/>
            <ItemsCard/>
            <ItemsCard/>
            <ItemsCard/>
            <ItemsCard/>
            <ItemsCard/>
            <ItemsCard/>
            <ItemsCard/>
            <ItemsCard/>
        </div>
        </div>
    );
}

export default itemListContainer;