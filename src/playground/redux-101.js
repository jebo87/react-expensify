import { createStore } from 'redux';

const appState = {
    count: 0
}

//Action generators - function that return action objects

// double destructuring, first we destructure the object taking incrementby {incrementBy}, then
// we assign a default value of 1 {incrementBy=1} and then we assign a default value for the object in case it doesn't exist
// {incrementBy = 1} = {}
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
})

const resetCount = () => ({
    type: 'RESET'
})

const setCount = ({ count }) => ({
    type: 'SET',
    count //same as count: count
})


// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action (no mutations)

const countReducer = (state = appState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: action.incrementBy + state.count
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state; 
    }
}



const store = createStore(countReducer);

const subscription = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));


store.dispatch(incrementCount());

// subscription(); // this is to unsubscribe from the store observable.

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(decrementCount());

store.dispatch(setCount({ count: 101 }))




