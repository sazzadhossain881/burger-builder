import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Modal, ModalBody } from 'reactstrap';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';
import { resetIngredients } from '../redux/actionCreator';

const mapSateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice,
        purchaseable: state.purchaseable
    }
}

const mapDispatchToProps = dispatch => {
    return {
        resetIngredients: () => dispatch(resetIngredients())

    }
}

class Checkout extends Component {
    state = {
        values: {
            deliveryAddress: "",
            phone: "",
            paymentType: "Cash On Delivery"
        },
        isLoading: false,
        isModalOpen: false,
        modalMsg: ""
    }
    goBack = () => {
        this.props.history.push("/");
    }
    handleInPutChange = (event) => {
        this.setState({
            values: {
                ...this.state.values,
                [event.target.name]: event.target.value
            }
        })
    }
    handleSubmit = () => {
        this.setState({ isLoading: true });
        const order = {
            ingredients: this.props.ingredients,
            customer: this.state.values,
            price: this.props.totalPrice,
            orderTime: new Date()
        }
        axios.post("https://burger-builder-6fddd-default-rtdb.firebaseio.com/orders.json", order)
            .then(response => {
                if (response.status === 200) {
                    this.setState({
                        isLoading: false,
                        isModalOpen: true,
                        modalMsg: "Order Placed Successfully!"
                    })
                    this.props.resetIngredients();
                }
                else {
                    this.setState({
                        isLoading: false,
                        isModalOpen: true,
                        modalMsg: "Something went wrong!Order Again!"
                    })
                }
            })
            .catch(error => {
                this.setState({
                    isLoading: false,
                    isModalOpen: true,
                    modalMsg: "Something went wrong.Order Again!"
                })
            })
    }
    render() {
        let from = (<div className="container">
            <h4 style={{ marginTop: "50px", border: "1px solid gray", boxShadow: "1px 1px #888888", borderRadius: "5px", padding: "20px" }}>Payment:${this.props.totalPrice}</h4>
            <form style={{ marginTop: "10px", border: "1px solid gray", boxShadow: "1px 1px #888888", borderRadius: "5px", padding: "20px" }}>
                <textarea name="deliveryAddress" className="form-control" value={this.state.values.deliveryAddress} placeholder="Your Address" onChange={(event) => this.handleInPutChange(event)}></textarea>
                <br />
                <input name="phone" className="form-control" value={this.state.values.phone} placeholder="Your Phone Number" onChange={(event) => this.handleInPutChange(event)} />
                <br />
                <select name="paymentType" id="" className="form-control" value={this.state.values.paymentType} onChange={(event) => this.handleInPutChange(event)}>
                    <option value="Cash On Delivery">Cash On Delivery</option>
                    <option value="Bkash">Bkash</option>
                </select>
                <br />
                <Button style={{ backgroundColor: "#D70F64" }} className="mr-auto" onClick={this.handleSubmit} disabled={!this.props.purchaseable} >Place Order</Button>
                <Button color="secondary" className="ml-1" onClick={this.goBack}>Cancel</Button>
            </form >
        </div>)
        return (
            <div>
                {
                    this.state.isLoading ? <Spinner></Spinner> : from
                }
                <Modal isOpen={this.state.isModalOpen} onClick={this.goBack}>
                    <ModalBody>
                        <p>{this.state.modalMsg}</p>
                    </ModalBody>
                </Modal>
            </div >
        );
    }
}

export default withRouter(connect(mapSateToProps, mapDispatchToProps)(Checkout));