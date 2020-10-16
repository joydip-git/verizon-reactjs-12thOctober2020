import * as ActionTypes from '../actiontypes/getProductActionTypes'
const productState = {
    loading: true,
    errorMessage: '',
    product: null
}

export const getProductReducer = (state = productState, action) => {
    var newState = null;
    switch (action.type) {
        case ActionTypes.GET_PRODUCT_INITIATE:
            newState = {
                ...state,
                loading: true,
                errorMessage: '',
                product: null
            }
            break;

        case ActionTypes.GET_PRODUCT_SUCCESS:
            newState = {
                ...state,
                loading: false,
                errorMessage: '',
                product: action.payload
            }
            break;

        case ActionTypes.GET_PRODUCT_FAILURE:
            newState = {
                ...state,
                loading: false,
                errorMessage: action.payload,
                product: null
            }
            break;

        default:
            newState = { ...state }
            break;
    }
    return newState;
}