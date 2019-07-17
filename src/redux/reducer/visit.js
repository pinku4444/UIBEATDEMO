import {UPDATEWEEKLYDATA} from '../action/type'
const intialState = {
    weeklyData : [
        ['week', 'Customer'],
        [1, 100],
        [2, 230],
        [3, 170],
        [4, 450]
      ]
}


function visit(state=intialState,actions) {
    const {type,payload} = actions;
    switch(type){

        case UPDATEWEEKLYDATA : 
            let newState={...state}
            newState.weeklyData =  payload.weeklyData
            
            return newState;
        default :
         return state;

    }
}

export default visit;