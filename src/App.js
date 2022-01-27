import React, {useState, useEffect} from 'react';

import './App.css';

import Header from './components/header/header.component'
import Forecast from './components/forecast/forecast.components';

const App = () => {
  
  const API_OPENWEATHER = [
    {
      key: 'd95186430709219ad7f3a1671db2c152'
    }
  ]

  const [coord, setCoord] = useState([]);

  async function getLocation (){
    await navigator.geolocation.getCurrentPosition(position => { setCoord(position.coords)}); 
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
