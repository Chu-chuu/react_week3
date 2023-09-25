import logo from './logo.svg';
import './App.css';
import React from "react";
import WelcomeComponent from "./WelcomeComponent";

// function App() {
//   return (
//     <div className="App">
//       <WelcomeComponent detail="Codetrain Ghana"/>
//     </div>
//   );
// }

class App extends React.Component{
    render () {
      return (
      <div className="App">
         <WelcomeComponent detail="Codetrain Ghana"/>
      </div>
    );
  }
}

export default App;
