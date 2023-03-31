import { useWeather } from "../context/WeatherContext";

function WeatherCard() {
    // WeatherContext'ten hava durumu verilerini alma
    const { weatherInfo } = useWeather();

    // Tarih seçenekleri
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    return (
        // Hava durumu kartlarını tutacak olan ana bileşen
        <div className="card-container">
            {weatherInfo &&
                // Tüm günlük hava durumu verilerini map() ile döndürme
                weatherInfo.map((day) => (
                    // Her bir gün için bir hava durumu kartı bileşeni oluşturma
                    <div key={day.dt} className={`weather-card ${new Date().getDate() === new Date(day.dt * 1000).getDate() ? "is-today" : ""}`}>

                        <div className='selected-city'> {day.city} </div>

                        <div className="date">{new Date(day.dt * 1000).toLocaleDateString("en-En", options)}</div>

                        <div className="temp">
                            {Math.round(day.main.temp)} <span>°C</span>
                        </div>

                        <div className="description">
                            {day.weather[0].description.toUpperCase()}
                        </div>

                        <div className="image">
                            <img
                                className="icon"
                                src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
                                alt="weather icon"
                            />
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default WeatherCard;
