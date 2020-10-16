import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './index';


const loggerMiddleware = createLogger();
const productStore = createStore(rootReducer, applyMiddleware(loggerMiddleware, thunkMiddleware));
export default productStore;


