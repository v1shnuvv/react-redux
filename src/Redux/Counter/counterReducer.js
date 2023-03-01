import { DECREMENT, INCREMENT, INCREMENTBY5 } from "./counterTypes";

const intialState = {
    count: 0,
    count2: 0
}

const counterReducer = (state=intialState, action) =>{
    switch (action.type) {
        case INCREMENT:
            return{
                ...state,
                count : state.count + 1
            }
        case DECREMENT:
            return{
                ...state,
                count : state.count - 1
            }
        case INCREMENTBY5:
            return{
                ...state,
                count2 : state.count2 + action.payload
            }
        default:
            return state
    }
}
export default counterReducer;