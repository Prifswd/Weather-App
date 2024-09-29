import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import './InfoBox.css'


export default function InfoBox({info}) {

    const summer_url = "https://miro.medium.com/v2/resize:fit:1400/0*tjHdsfrW2F-V283v"
    const winter_url = "https://images.unsplash.com/photo-1711183563980-04fd3b4766ef?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fHw%3D"
    const moonson_url = "https://plus.unsplash.com/premium_photo-1670002347718-de1091111728?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFpbnklMjBkYXl8ZW58MHx8MHx8fDA%3D"

    return (
        <div className="InfoBox">
    <div className='carContainer'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 95 ? moonson_url : info.temp > 18 ? summer_url : winter_url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity > 95 ? <ThunderstormIcon/> : info.temp > 18 ? <WbSunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <p>Temparature : {info.temp} &deg;C</p>
         <p>Humidity : {info.humidity}</p>
         <p>Min Temp : {info.tempMin}</p>
         <p>Max Temp : {info.tempMax}</p>
         <p>Weather Type : <b><i>{info.weather}</i></b></p>
         <p>The Weather Feels Like : {info.feelsLike} &deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}