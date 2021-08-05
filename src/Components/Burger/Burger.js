import React from 'react';
import Ingredients from '../Ingredients/Ingredients';

const Burger = (props) => {
    let ingredientsArray = props.ingredients.map(item => {
        let amountArray = [...Array(item.amount).keys()];
        return amountArray.map(_ => {
            return <Ingredients type={item.type} key={Math.random()}></Ingredients>
        })
    })
        .reduce((array, element) => {
            return array.concat(element);
        }, []);

    if (ingredientsArray.length === 0) {
        ingredientsArray = <p style={{ textAlign: "center", fontSize: "15px,", fontWeight: "bolder" }}>Please add some ingredients</p>
    }
    return (
        <div className="container">
            <Ingredients type='bread-top'></Ingredients>
            {ingredientsArray}
            <Ingredients type='bread-bottom'></Ingredients>
        </div>
    );
};

export default Burger;