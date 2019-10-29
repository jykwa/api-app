import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload test test.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Example/>
    </div>
  );
}

// function Example() {
//   return (
//     <div>
//       Example text
//     </div>
//   )
// }

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [data, setData] = useState("dummy text");


  const text = axios.get('https://api.pushshift.io/reddit/search/comment/?q=science')
    .then(function (response) {
      // handle success
      console.log(response);
      setData(JSON.stringify(response));
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });;

  console.log(text);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p>{data}</p>
      <p>data should be above here</p>
    </div>
  );
}

export default App;
