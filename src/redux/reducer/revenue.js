import {UPDATEREVENUE} from '../action/type'
const intialState = {
    totalRevenue : 12456,
    totalGrowth : 3456
}


function revenue(state=intialState,actions) {
    const {type,payload} = actions;
    switch(type){

        case UPDATEREVENUE : 
            let newState={...state}
            newState = {
                totalRevenue : payload.totalRevenue,
                totalGrowth:payload.totalGrowth
            }
            return newState;
        default :
         return state;

    }
}

export default revenue;