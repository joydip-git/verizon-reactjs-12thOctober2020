const { default: Axios } = require('axios')
var { createStore, applyMiddleware } = require('redux')
var { createLogger } = require('redux-logger')
var thunkMiddleware = require('redux-thunk')
//const { getProducts } = require('../service/productService')


//action types
var GET_PRODUCT_INITIATE = 'GET_PRODUCT_INITIATE'
var GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS'
var GET_PRODUCT_FAILURE = 'GET_PRODUCT_FAILURE'

//action creators
var getProductsInitiateAction = () => {
    return {
        type: GET_PRODUCT_INITIATE
    }
}

var getProductsSuccessAction = (products) => {
    return {
        type: GET_PRODUCT_SUCCESS,
        payload: products
    }
}

var getProductsFailureAction = (error) => {
    return {
        type: GET_PRODUCT_SUCCESS,
        payload: error
    }
}

var getProductsAsyncAction = () => {
    return (dispatch) => {
        dispatch(getProductsInitiateAction())
        Axios.get('http://127.0.0.1:8081/productservice')
            .then(resp => dispatch(getProductsSuccessAction(resp.data)))
            .catch(e => dispatch(getProductsFailureAction(e.message)))
    }
}

var productState = {
    loading: true,
    errorMessage: '',
    products: []
}

var getProductsReducer = (state = productState, action) => {
    var newState = null;
    switch (action.type) {
        case GET_PRODUCT_INITIATE:
            newState = {
                ...state,
                loading: true,
                errorMessage: '',
                products: []
            }
            break;

        case GET_PRODUCT_SUCCESS:
            newState = {
                ...state,
                loading: false,
                errorMessage: '',
                products: action.payload
            }
            break;

        case GET_PRODUCT_FAILURE:
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



var logger = createLogger();
var thunk = thunkMiddleware.default;
var store = createStore(getProductsReducer, applyMiddleware(logger, thunk))

store.dispatch(getProductsAsyncAction())
