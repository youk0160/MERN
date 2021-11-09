import logo from './logo.svg';
import './App.css';
import Person from './components/Person'

function App() {
  return (
    <div className="App">
      <Person name={"Doe, Jane"} age={45} hairColor={"Black"}></Person>
      <Person name={"Smith, Jane"} age={88} hairColor={"Brown"}></Person>
    </div>
  );
}

export default App;
