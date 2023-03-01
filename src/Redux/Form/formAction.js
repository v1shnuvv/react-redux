import { formsubmit } from "./formType"


export const submitform = (name, age) =>{
    return{
        type: formsubmit,
        payload: {name,age}
    }
}