import { useSelector } from "react-redux"

export default function Showform(){
    const {name, age} = useSelector((state)=>state.form)
    return(<div>
        Name : {name}
        Age : {age}
    </div>)
}