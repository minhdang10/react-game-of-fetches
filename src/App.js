import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Question1 from "./components/q1";
import Question2 from "./components/q2";
import Question3 from "./components/q3";
import Question4 from "./components/q4";
import Question5 from "./components/q5";
import Question6 from "./components/q6";
import Question7 from "./components/q7";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {  
  render() {
    return (
    <div className = "fetching">
      <h1>Game of Fetching the Thrones</h1>
      <p>
        <Question1/>
        <Question2/>
        <Question3/>
        <Question4/>
        <Question5/>
        <Question6/>
        <Question7/>
      </p>
    </div>
    )
  }
}
export default App;