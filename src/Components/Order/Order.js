import React from 'react';

const Order = (props) => {
    let ingredientSummary = props.order.ingredients.map(item => {
        return (
            <span style={{ border: "1px solid gray", borderRadius: "5px", padding: "5px", marginRight: "10px" }} key={item.type}>{item.amount}*<span style={{ textTransform: "capitalize" }}>{item.type}</span></span>
        )
    })
    console.log(props);
    return (
        <div className="container">
            <div style={{ border: "1px solid gray", boxShadow: "1px 1px #888888", borderRadius: "5px", padding: "20px", marginBottom: "10px" }}>
                <p>Order Number:{props.order.id}</p>
                <p>Delivery Address:{props.order.customer.deliveryAddress}</p>
                <hr />
                {ingredientSummary}
                <hr />
                <p>Total:${props.order.price}</p>
            </div>
        </div>
    );
};

export default Order;