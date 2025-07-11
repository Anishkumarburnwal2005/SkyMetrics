import SearchBox from "./SearchBox";
import Weather from "./Weather";
import { useState } from "react";

export default function PredictWeather() {

    let [info, setInfo] = useState(
        {
            city: "Delhi",
            temp: 30.49,
            tempMin: 30.49,
            tempMax: 30.49,
            feelsLike: 31.62,
            pressure: 1000,
            humidity: 49,
            weather: "broken clouds"
        }
    )

    function updateInfo(newInfo) {
        setInfo(newInfo);
    }

    return(
        <>
            <SearchBox updateInfo={updateInfo}/>
            <br></br><br></br>
            <Weather infoWeather={info}/>
        </>
    )
}