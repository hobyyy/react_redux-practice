import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from './component/Box';
function App() {
  // const [count,setCount] = useState(0);
  const count = useSelector(state=>state.count);
  const dec_count = useSelector(state=>state.dec_count);
  const id = useSelector(state=>state.id);
  const pw = useSelector(state=>state.pw);
  const dispatch = useDispatch();
  const increase = () => {
    // setCount(count + 1);
    dispatch({type: "INCREMENT", payload: {num: 5}});
  }
  const login = () => {
    dispatch({type: "LOGIN", payload: {id:"eunseo", pw:"hobyjjang"}})
  }
  const decrease = () => {
    dispatch({type: "DECREMENT", payload: {num : 1}})
  }
  return (
    <div>
      <h1>{id},{pw}</h1>
      <h1>increase num : {count}</h1>
      <h1>decrease num : {dec_count}</h1>
      <button onClick={increase}>증가!!</button>
      <button onClick={login}>Login</button>
      <button onClick={decrease}>감소!!</button>
      <Box/>
    </div>
  );
}

export default App;
