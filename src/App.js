import React, {useState, useEffect} from 'react';

import './App.css';

import Header from './components/header/header.component'
import Forecast from './components/forecast/forecast.components';

const App = () => {
  
  const API_OPENWEATHER = [
    {
      key: '496c270d4c8090f757a140e1ada58c7e'
    }
  ]

  const [coord, setCoord] = useState([]);

  async function getLocation (){
    await navigator.geolocation.getCurrentPosition((position) => {setCoord(position.coords)}, ()=>{alert(`Please, turn on Google geolocation and reload page!`);})
  }

  useEffect(() => {
    getLocation()
  }, [])



  return (
   <div className='container'>
    <Header/> 
    <Forecast api={API_OPENWEATHER[0].key} location={coord} />
   </div>
  );
}

export default App;
