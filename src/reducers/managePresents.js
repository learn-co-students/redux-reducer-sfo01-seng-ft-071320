

export function managePresents(state, action){
    switch(action.type){
        case 'INCREASE': 
        return {numberOfPresents: state.numberOfPresents + 1}
        default: 
        return state
    }
}

// If the reducer receives a type set to "INCREASE", return a new state where the value of numberOfPresents is increased by one. Use the tests to guide you as you build out this reducer.

// default: 
// return numberOfPresents: 0



