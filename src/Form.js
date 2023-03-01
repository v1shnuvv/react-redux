import { useState } from "react"
import { useDispatch } from "react-redux"
import { submitform } from "./Redux/Form/formAction"


export default function Form(){
    const dispatch = useDispatch()
    const [name, setName]=useState("")
    const [age, setAge]=useState()
    console.log(name);
    return(
        <div>
            <input type={"text"} placeholder="Name" onChange={e=>setName(e.target.value)}/>
            <input type={"number"} placeholder="Age" onChange={e=>setAge(e.target.value)}/>
            <button onClick={()=>dispatch(submitform(name, age))}>Submit</button>
        </div>
    )
}