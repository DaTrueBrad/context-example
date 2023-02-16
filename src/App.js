import './App.css';
import { useContext, useRef } from 'react';
import DataContext from './state/DataContext';

function App() {
  const {state, dispatch} = useContext(DataContext)
  const inputRef = useRef()

  const changeName = () => dispatch({type: "CHANGENAME", payload: inputRef.current.value})

  return (
    <div className="App">
      <h1>Current Name: {state.name}</h1>
      <input type="text" ref={inputRef}/>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

export default App;
