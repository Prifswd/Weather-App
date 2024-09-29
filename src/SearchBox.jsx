import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';


export default function SearchBox({ updateInfo }) {
    
    const [city, setCity] = useState("")
    const [error, setError] = useState(false)

    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "18cd1be5cf232951049c682b310b81f0"

    let getWeatherInfo = async ()=>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
            let jsonResponse = await response.json()
            console.log(jsonResponse);
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
            };
            console.log(result);
            return result
        }   catch(error){
            throw error
        }
        
    }



    let handleChange = (e)=>{
        setCity(e.target.value)
    }

    let handleSubmit = async (e)=>{
        try{
            e.preventDefault()
            setCity("")
            let newInfo = await getWeatherInfo()
            updateInfo(newInfo)
        } catch(error){
            setError(true)
        }
    }


    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="Enter City Name" variant="outlined" required value={city} onChange={handleChange}/> 
            <br /> <br />
            <Button variant="contained" type="submit">Search</Button>
            {error && <p style={{color: "red", fontWeight: "bold"}}>Sorry... No Such Place Found!</p>}    
            </form>
        </div>
    )
}