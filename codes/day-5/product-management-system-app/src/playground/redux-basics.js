var { createStore, applyMiddleware } = require('redux')
var { createLogger } = require('redux-logger')

//action types
var INCREASE = 'INCREASE'
var DECREASE = 'DECREASE'

//action creators
var increaseAction = (data) => {
    return {
        type: INCREASE,
        payload: data
    }
}

var decreaseAction = (data) => {
    return {
        type: DECREASE,
        payload: data
    }
}


//state
var counterState = {
    counter: 0
}

//reducer
var counterReducer = function (state = counterState, { type, payload }) {
    var newState = null;
    switch (type) {
        case INCREASE:
            newState = {
                ...state,
                counter: state.counter + payload
            }
            break;

        case DECREASE:
            newState = {
                ...state,
                counter: state.counter - payload
            }
            break;

        default:
            newState = { ...state };
            break;
    }
    return newState;
}

//middleware
var logger = createLogger()
//store
var counterStore = createStore(counterReducer, applyMiddleware(logger));

//console.log(counterStore.getState())
//var increaseByTwo = increaseAction();
counterStore.dispatch(increaseAction(5));
//console.log(counterStore.getState())
counterStore.dispatch(increaseAction(2));
//console.log(counterStore.getState())
counterStore.dispatch(decreaseAction(3));
//console.log(counterStore.getState())
counterStore.dispatch(decreaseAction(5));
//console.log(counterStore.getState())
//counterStore.subscribe().then().catch()

