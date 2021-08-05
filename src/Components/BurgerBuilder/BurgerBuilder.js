import React, { Component } from 'react';
import Burger from '../Burger/Burger';
import Controls from '../Controls/Controls';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Summary from '../Summary/Summary';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addIngredients, removeIngredients, updatePurchaseable } from '../redux/actionCreator';

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice,
        purchaseable: state.purchaseable
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addIngredients: (type) => dispatch(addIngredients(type)),
        removeIngredients: (type) => dispatch(removeIngredients(type)),
        updatePurchaseable: () => dispatch(updatePurchaseable())
    }

}
class BurgerBuilder extends Component {
    state = {

        modalOpen: false,

    }
    handleAddIngredients = type => {

        this.props.addIngredients(type);
        this.props.updatePurchaseable();
    }
    handleRemoveIngredients = type => {
        this.props.removeIngredients(type);
        this.props.updatePurchaseable();
    }
    toggleModal = () => {
        this.setState({ modalOpen: !this.state.modalOpen });
    }
    handleCheckout = () => {
        this.props.history.push('/checkout');
    }
    render() {
        return (
            <div>
                <div className="d-flex flex-md-row flex-column">
                    <Burger ingredients={this.props.ingredients}></Burger>
                    <Controls addIngredients={this.handleAddIngredients} removeIngredients={this.handleRemoveIngredients} price={this.props.totalPrice} toggleModal={this.toggleModal} purchaseable={this.props.purchaseable}></Controls>
                </div>
                <Modal isOpen={this.state.modalOpen}>
                    <ModalHeader>Your Order Summary</ModalHeader>
                    <ModalBody>
                        <h5>Total Price:${this.props.totalPrice.toFixed(0)}</h5>
                        <Summary ingredients={this.props.ingredients}></Summary>
                    </ModalBody>
                    <ModalFooter>
                        <Button style={{ backgroundColor: "#D70F64" }} onClick={this.handleCheckout}>Continue to Checkout</Button>
                        <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder));