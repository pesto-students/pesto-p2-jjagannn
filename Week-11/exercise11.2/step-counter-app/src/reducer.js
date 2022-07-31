let initialState = { counter: 0 };

function stepCountReducer(currentState=initialState, action){

    switch (action.type){
        case "INCREASE_COUNT":{
            return { counter: action.counter + 1 };
        }
        case "DECREASE_COUNT":{
            return { counter: action.counter - 1 };
        }
        default: {
            return currentState;
        }
    }

}

export default stepCountReducer;