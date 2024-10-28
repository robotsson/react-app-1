import logo from './logo.svg';
import './App.css';

function App() {

  const name = "John";
  let lastname ="Doe";
  const x = true;
  
  return (
    <div className="App">
      <h1>hello there jsx.</h1>
      <h2>Hello {name} {lastname}</h2>
      <h2>{x ? "yes" : "no"}</h2>
    </div>
  );
}

export default App;
