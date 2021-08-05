import axios from 'axios';
import * as actionTypes from './actionTypes';




export const addIngredients = type => {
    return {
        type: actionTypes.ADD_INGREDIENTS,
        payload: type
    }
}

export const removeIngredients = type => {
    return {
        type: actionTypes.REMOVE_INGREDIENTS,
        payload: type
    }
}

export const updatePurchaseable = () => {
    return {
        type: actionTypes.UPDATE_PURCHASEABLE
    }
}
export const resetIngredients = () => {
    return {
        type: actionTypes.RESET_INGREDIENTS

    }
}

export const loadOrders = orders => {
    return {
        type: actionTypes.LOAD_ORDERS,
        payload: orders
    }
}

export const orderLoadFailed = () => {
    return {
        type: actionTypes.ORDER_LOAD_FAILED
    }
}

export const fetchOrders = () => dispatch => {
    axios.get("https://burger-builder-6fddd-default-rtdb.firebaseio.com/orders.json")
        .then(response => {
            dispatch(loadOrders(response.data));
        })
        .catch(error => {
            dispatch(orderLoadFailed());
        })
}