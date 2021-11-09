import './App.css';
import {useState} from 'react';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([]);

  const callAPI = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(response => {
      setPokemon(response.data.results)})
    .catch(err=>console.log(err))
  };

  return (
    <div className="App">
      <input type="submit" value="Fetch Pokemon" onClick={callAPI}/>
      {
        pokemon.length>0 && pokemon.map((poke,key) => {return (<div key={key}>{poke.name}</div>)})
      }
    </div>
  );
}

export default App;
