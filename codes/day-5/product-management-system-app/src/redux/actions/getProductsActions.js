import * as ActionTypes from '../actiontypes/getProductsActionTypes'
import { getProducts } from '../../service/productService'

export const getProductsInitiateAction = () => {
    return {
        type: ActionTypes.GET_PRODUCTS_INITIATE
    }
}

export const getProductsSuccessAction = (products) => {
    return {
        type: ActionTypes.GET_PRODUCTS_SUCCESS,
        payload: products
    }
}

export const getProductsFailureAction = (error) => {
    return {
        type: ActionTypes.GET_PRODUCTS_FAILURE,
        payload: error
    }
}

export const getProductsAsyncAction = () => {
    return (dispatch) => {
        dispatch(getProductsInitiateAction())
        getProducts()
            .then(resp => dispatch(getProductsSuccessAction(resp.data)))
            .catch(e => dispatch(getProductsFailureAction(e.message)))
    }
}