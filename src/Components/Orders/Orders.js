import React, { Component } from 'react';
import { connect } from 'react-redux';
import Order from '../Order/Order';
import { fetchOrders } from '../redux/actionCreator';
import Spinner from '../Spinner/Spinner';

const mapStateToProps = state => {
    return {
        orders: state.orders,
        orderLoading: state.orderLoading,
        orderError: state.orderError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchOrders: () => dispatch(fetchOrders()),
    }
}
class Orders extends Component {
    componentDidMount() {
        this.props.fetchOrders();
    }
    componentDidUpdate() {
        console.log(this.props);
    }
    render() {
        let orders = null;
        if (this.props.orderError) {
            orders = <p style={{ border: "1px solid gray", boxShadow: "1px 1px #888888", borderRadius: "5px", padding: "20px", marginBottom: "10px" }}>Sorry Failed To Load Order!</p>
        }
        else {
            if (this.props.orders.length === 0) {
                orders = <p style={{ border: "1px solid gray", boxShadow: "1px 1px #888888", borderRadius: "5px", padding: "20px", marginBottom: "10px" }}>You have no !Order</p>
            }
            else {
                orders = this.props.orders.map(order => {
                    return <Order order={order} key={order.id}></Order>
                }
                )
            }

        }

        return (
            <div>
                {this.props.orderLoading ? <Spinner></Spinner> : orders}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);