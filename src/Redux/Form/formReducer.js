import { formsubmit } from "./formType";

const initialState = {
    name : "initial name",
    age : 25
}


export const formReducer = (state=initialState, {type, payload}) =>{
    switch (type) {
    case formsubmit:
        return{
            ...state,
            name: payload.name,
            age: payload.age
        }
    
        default:
            return state;
            
    }
    
}