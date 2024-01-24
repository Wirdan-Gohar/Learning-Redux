const initialState = {
    // name: '',
    counter: 0
};
// jab tak action dispatch nai hga tab tak action me payload nai aye ga 
export function valueReducers(state = initialState, action) {
    switch (action.type) {
        case 'increment':
            return { ...state, counter: state.counter + action.payload }
        case 'decrement':
            return { ...state, counter: state.counter - action.payload }
        // case 'name':
        //     return { ...state, name: action.payload }
        case 'reset':
            return initialState
        default:
            return state;
    }
};
const initialStateName = {
    name: '',
};
export function nameReducers(state = initialStateName, action) {
    switch (action.type) {
        case 'name':
            return { ...state, name: action.payload }
        default:
            return state;
    }
};

