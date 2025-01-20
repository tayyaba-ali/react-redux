import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { decrement, increment } from "./actions/index";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counterReducer.count);

  // const [finalCounter] = useState(counter)
  const dispatch = useDispatch();

  return (
    <div className="d-flex gap-3 align-items-center">
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        -
      </button>
      {console.log(counter)}
      <p className="text-white">{counter}</p>
      <button onClick={() => dispatch(decrement())}>+</button>
    </div>
  );
}

export default App;
