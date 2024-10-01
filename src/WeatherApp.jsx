import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function() {

    const [weatherInfo, setWeatherInfo] = useState({
        city: "-No City-",
        feelsLike: 0.0,
        temp: 0.0,
        tempMin: 0.0,
        tempMax: 0.0,
        humidity: 0.0,
        weather: "-No Data"
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