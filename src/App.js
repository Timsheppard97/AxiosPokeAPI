import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios';

function App() {

  const [poke, setPoke] = useState([])
  const [showPoke, setShowPoke] = useState(false)

  useEffect(()=> {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=1200")
    .then(res=>{
      setPoke(res.data.results)
      })
    .catch(err=>{console.log(err)})
  },[])

  const display = (e) => {
    e.preventDefault();
    setShowPoke(true)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>PokeAPI</h1>
      </header>
      <button onClick={display}>Show Pokemon</button>
      <ul>
        {showPoke&&poke.map((pokemon)=>{
          return <li>{pokemon.name}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
