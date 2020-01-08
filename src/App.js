import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <Example />
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
  const [data, setData] = useState([]);

  const url = "https://api.pushshift.io/reddit/search/comment/?q=";
  const searchTerm = "vgcs";

  function callAPI() {
    axios
      .get(url + searchTerm)
      .then(function(response) {
        // handle success
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={callAPI}>Call the API</button>
      <div>
        {data.map(({ body, id }, index) => (
          <p key={index}>
            {body} {id}
          </p>
        ))}
      </div>
      <p>data should be above here</p>
    </div>
  );
}

export default App;
