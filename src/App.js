import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementby5 } from "./Redux/Counter/counterAction";
import Showform from "./Showform";
import Form from "./Form"
export default function App() {
const count = useSelector((state)=> state.counter.count)
const count2 = useSelector((state)=>state.counter.count2)
const dispatch = useDispatch()
  return (
    <div>
    <div>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <p>{count}</p>
      <button onClick={()=>dispatch(increment())}>+</button>
      <h1>{count2}</h1>
      <button onClick={()=>dispatch(incrementby5(5))}>incrementby5</button>
    </div>
    <div>
        <Form/>
        <Showform/>
    </div>
    </div>
  );
}
