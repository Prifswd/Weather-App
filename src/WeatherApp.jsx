import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function() {

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Jalpaiguri",
        feelsLike: 30.25,
        temp: 25.25,
        tempMin: 25.25,
        tempMax: 25.25,
        humidity: 92,
        weather: "light rain"
    })

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo)
    }



    return (
        <div style={{ textAlign: "center"}}>
            <b><h2>Weather App</h2></b>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}