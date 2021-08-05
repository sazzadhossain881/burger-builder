import React from 'react';
import {
    Card, CardHeader, CardFooter, CardBody, Button
} from 'reactstrap';
import BuildControls from '../BuildControls/BuildControls';

const controls = [
    { label: 'salad', type: 'salad' },
    { label: 'meat', type: 'meat' }
]


const Controls = (props) => {
    return (
        <div className="container ml-md-5" style={{ textAlign: "center" }}>
            <Card style={{ marginTop: "30px", marginBottom: "30px", textAlign: "center" }}>
                <CardHeader style={{ backgroundColor: "#D70F64", color: "white" }}><h4>Add ingredients</h4></CardHeader>
                <CardBody>
                    {controls.map(item => {
                        return <BuildControls label={item.label} type={item.type} key={Math.random()} added={() => props.addIngredients(item.type)} remove={() => props.removeIngredients(item.type)}></BuildControls>
                    })}
                </CardBody>
                <CardFooter><h5>Price:$ <strong>{props.price}</strong> </h5></CardFooter>
                <Button style={{ backgroundColor: "#D70F64" }} disabled={!props.purchaseable} onClick={props.toggleModal}>Order Now</Button>
            </Card>
        </div>
    );
};

export default Controls;