import * as actionTypes from './actionTypes'

const INGREDIENT_PRICES = {
    meat: 90,
    salad: 20

}

const INITIAL_STATE = {
    ingredients: [
        { type: 'meat', amount: 0 },
        { type: 'salad', amount: 0 }
    ],
    orders: [],
    orderLoading: true,
    orderError: false,
    totalPrice: 80,
    modalOpen: false,
    purchaseable: false
}

export const reducer = (state = INITIAL_STATE, action) => {
    const ingredients = [...state.ingredients];
    switch (action.type) {
        case actionTypes.ADD_INGREDIENTS:
            for (let item of ingredients) {
                if (item.type === action.payload) {
                    item.amount++;
                }
            }
            return {
                ...state,
                ingredients: state.ingredients,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.payload]
            }

        case actionTypes.REMOVE_INGREDIENTS:
            for (let item of ingredients) {
                if (item.type === action.payload) {
                    if (item.amount <= 0) return state;
                    item.amount--;
                }
            }
            return {
                ...state,
                ingredients: ingredients,
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.payload]
            }

        case actionTypes.UPDATE_PURCHASEABLE:
            const sum = state.ingredients.reduce((sum, element) => {
                return sum + element.amount;
            }, 0)

            return {
                ...state,
                purchaseable: sum > 0
            }
        case actionTypes.RESET_INGREDIENTS:
            return {
                ...state,
                ingredients: [
                    { type: 'meat', amount: 0 },
                    { type: 'salad', amount: 0 }
                ],
                totalPrice: 80,
                modalOpen: false,
                purchaseable: false

            }
        case actionTypes.LOAD_ORDERS:
            let orders = [];
            for (let key in action.payload) {
                orders.push(
                    {
                        ...action.payload[key],
                        id: key,
                    }

                )
            }
            console.log(orders);
            return {
                ...state,
                orders: orders,
                orderLoading: false

            }

        case actionTypes.ORDER_LOAD_FAILED:
            return {
                ...state,
                orderError: true,
                orderLoading: false
            }

        default:
            return state;
    }
}
