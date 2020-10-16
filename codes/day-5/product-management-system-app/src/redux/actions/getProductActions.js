import * as ActionTypes from '../actiontypes/getProductActionTypes'
import { getProductById } from '../../service/productService'

export const getProductInitiateAction = () => {
    return {
        type: ActionTypes.GET_PRODUCT_INITIATE
    }
}

export const getProductSuccessAction = (products) => {
    return {
        type: ActionTypes.GET_PRODUCT_SUCCESS,
        payload: products
    }
}

export const getProductFailureAction = (error) => {
    return {
        type: ActionTypes.GET_PRODUCT_FAILURE,
        payload: error
    }
}

export const getProductAsyncAction = (productId) => {
    return (dispatch) => {
        dispatch(getProductInitiateAction())
        getProductById(productId)
            .then(resp => dispatch(getProductSuccessAction(resp.data)))
            .catch(e => dispatch(getProductFailureAction(e.message)))
    }
}