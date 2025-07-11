import "./Weather.css"

export default function Weather({infoWeather}) {

    
    let Hot_Img = "https://img.goodfon.com/wallpaper/big/6/74/vremena-goda-dary-prirody-leto-podsolnukh.webp";
    let Rainy_Img = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ=";
    let Cold_Img = "https://plus.unsplash.com/premium_photo-1667752591799-7c4d3ab52b38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sZCUyMHNlYXNvbnxlbnwwfHwwfHx8MA%3D%3D";
    return(
        <div className="weatherInfo">
            <img
            className="weather_img" 
            src= {infoWeather.humidity > 80 ? Rainy_Img : infoWeather.temp > 15 ? Hot_Img : Cold_Img}
            alt="weather_img">
            </img>
            
            <h2><u>{infoWeather.city.toUpperCase()}</u></h2>
            <p className="info"><b>Feels like : </b>{infoWeather.feelsLike}</p>
            <p className="info"><b>Humidity : </b>{infoWeather.humidity}</p>
            <p className="info"><b>Pressure : </b>{infoWeather.pressure}</p>
            <p className="info"><b>Temperature : </b>{infoWeather.temp} &deg;C</p>
            <p className="info"><b>Max_Temperature : </b>{infoWeather.tempMax} &deg;C</p>
            <p className="info"><b>Min_Temperature : </b>{infoWeather.tempMin} &deg;C</p>
            <p className="info"><b>Weather : </b>{infoWeather.weather}</p>
        </div>
    )
}