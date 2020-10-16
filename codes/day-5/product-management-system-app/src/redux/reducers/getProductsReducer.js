import * as ActionTypes from '../actiontypes/getProductsActionTypes'
const productState = {
    loading: true,
    errorMessage: '',
    products: []
}

export const getProductsReducer = (state = productState, action) => {
    var newState = null;
    switch (action.type) {
        case ActionTypes.GET_PRODUCTS_INITIATE:
            newState = {
                ...state,
                loading: true,
                errorMessage: '',
                products: []
            }
            break;

        case ActionTypes.GET_PRODUCTS_SUCCESS:
            newState = {
                ...state,
                loading: false,
                errorMessage: '',
                products: action.payload
            }
            break;

        case ActionTypes.GET_PRODUCTS_FAILURE:
            newState = {
                ...state,
                loading: false,
                errorMessage: action.payload,
                products: []
            }
            break;

        default:
            newState = { ...state }
            break;
    }
    return newState;
}