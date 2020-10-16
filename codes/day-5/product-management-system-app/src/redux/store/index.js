import { combineReducers } from 'redux'
import { getProductReducer } from '../reducers/getProductReducer'
import { getProductsReducer } from '../reducers/getProductsReducer'

const rootReducer = combineReducers({
    allProducts: getProductsReducer,
    singleProduct: getProductReducer
})

export default rootReducer;
