import { useEffect, useState } from 'react';
import './App.css'
import { Card } from './components/Card/Card';
import Header from './components/Header/Header';

function App() {

  let [country, setCountry] = useState([]);
  let [countryList,setCountryList] = useState([]);

  useEffect(() => {

    fetch("https://countries-search-data-prod-812920491762.asia-south1.run.app/countries")
    .then(async (data) => {
      let countryData = await data.json();
      setCountry(countryData);
      setCountryList(countryData);
    }).catch((error) => {
      console.error("Error fetching data:", error);
    })
  }, []);

  const countrySearch = (selectedCountry) => {
    let filteredCountry = countryList.filter((country) => country.common.toLowerCase().includes(selectedCountry.toLowerCase()));
    setCountry(filteredCountry);
  }

  return (
    <>
    <Header countrySearch={countrySearch}/>
       <div style={{display:"flex",gap:"10px",flexWrap:"wrap",marginTop:"5%"}}>
        {country.map(({common,png}) => (<Card name={common} key={common} flag={png}/>))}
      </div>
    </>
  )
}

export default App
