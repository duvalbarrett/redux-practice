import {configureStore} from 'redux'
import {createSlice} from '@reduxjs/toolkit'

const initialState = {counter: 0, showCounter: true}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--
        },
        increase(state, action) {
            state.counter = state.counter + action.payload
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter;
        }

    }

})

// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'increment'){
//         return {
//         counter: state.counter + 1,
//         showCounter: state.showCounter
//     }
// }

// if(action.type === 'increase'){
//     return{
//         counter:state.counter + action.amount,
//         showCounter: state.ShowCounter
//     }
// }

// if (action.type === 'decrement'){
//     return {
//         counter: state.counter - 1,
//         ShowCounter: state.ShowCounter
//     }
// }

// if(action.action.type === 'toggle'){
//     return {
//         showCounter: !state.ShowCounter,
//         counter: state.counter
//     }
// }

// return state;
// };

// counterSlice.actions.toggleCounter


const store = configureStore({
    reducer: counterSlice.reducer
})

export default store