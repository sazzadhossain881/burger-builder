import React from 'react';
import breadBottom from '../../images/burgerbottom.png';
import breadTop from '../../images/burgertop.png';
import breadSalad from '../../images/burgersalad.png';
import breadMeat from '../../images/burgermeat.png';
import './Ingredients.css';

const Ingredients = (props) => {
    let ingredient = null;
    switch (props.type) {
        case 'bread-top':
            ingredient = <div><img src={breadTop} alt="Bread Top" /></div>;
            break;
        case 'bread-bottom':
            ingredient = <div><img style={{ marginTop: "-15px" }} src={breadBottom} alt="Bread Bottom" /></div>;
            break;
        case 'meat':
            ingredient = <div><img style={{ marginTop: "-10px" }} src={breadMeat} alt="Bread Meat" /></div>;
            break;
        case 'salad':
            ingredient = <div><img style={{ marginTop: "-15px" }} src={breadSalad} alt="Bread Salad" /></div>;
            break;
        default:
            ingredient = null;
    }
    return (
        <div className="ingredient">
            {ingredient}
        </div>
    );
};

export default Ingredients;