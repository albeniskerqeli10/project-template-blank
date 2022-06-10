import logo from './logo.svg';
import './App.css';
import * as React from 'react';
function App() {
    const [count,setCount] = React.useState(0);
  return (
    <div className="App">
   <h1>Counter</h1>
   <h1>{count}</h1>
    </div>
  );
}

export default App;
