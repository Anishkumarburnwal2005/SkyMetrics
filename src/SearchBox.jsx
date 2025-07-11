import { useState } from 'react';
import "./Weather.css"


import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';

export default function SearchBox({updateInfo}) {

    let [city, setCity] = useState("");

    function updateCityName(event) {
        setCity(event.target.value);
    }

    let API_KEY = "27dab22409ea0585af94a8774812292f";
    let url = `https://api.openweathermap.org/data/2.5/weather`;

    let getWeatherInfo = async() => {
            
        let response = await fetch(`${url}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonRes = await response.json();
        //console.log(jsonRes);
        let result = {
                city: city,
                temp: jsonRes.main.temp,
                tempMin: jsonRes.main.temp_min,
                tempMax: jsonRes.main.temp_max,
                feelsLike: jsonRes.main.feels_like,
                pressure: jsonRes.main.pressure,
                humidity: jsonRes.main.humidity,
                weather: jsonRes.weather[0].description
        }

        return result;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        //console.log(city);
        setCity("");
        let info = await getWeatherInfo();
        updateInfo(info);
    }

    return(
        <>
            <form>
               
                <TextField id="outlined-basic" label="City Name" variant="outlined"  value={city} onChange={updateCityName} required/>
                <br></br><br></br>

                <Button variant="contained" startIcon={<YoutubeSearchedForIcon />} onClick={handleSubmit} type='submit'>
                    Search
                </Button>
            </form>

        </>
    )
}