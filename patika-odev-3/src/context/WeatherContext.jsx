import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const WeatherContext = createContext()

// WeatherProvider bileşeni oluşturuluyor. Bu bileşen, uygulama içinde WeatherContext'i kullanarak hava durumu verileri sağlar.
export const WeatherProvider = ({children}) => {
    const [city, setCity] = useState("İstanbul") 
    const [weatherInfo, setWeatherInfo] = useState() 
    // city state'inde değişiklik olduğunda, useEffect çalışır ve OpenWeatherMap API'sine istek gönderir
    useEffect(() => {
        const api = "b38d9cfb358e9bfc3e237fb9346d9374"
        const baseURL =`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=en&appid=${api}&cnt=40` 
        if (city) { 
            axios(baseURL)
            .then(res => {
                // 8 saatlik hava durumu verilerini filtreleyerek dailyWeatherData'ya atar
                const dailyWeatherData = res.data.list.filter((data, index) => index % 8 === 0);
                setWeatherInfo(dailyWeatherData); // dailyWeatherData'yı weatherInfo state'ine atar
              })
              .catch((e) => alert("Please Enter valid City Name")) // API'den gelen verilerde hata olursa kullanıcıya hata mesajı verir
        }
    },[city]) 
    
    const values = {
        city,
        setCity,
        weatherInfo,
        setWeatherInfo,
    }

    // WeatherContext.Provider bileşeni ile children'ı saran bir yapı oluşturulur ve bu bileşene values değişkeni props olarak geçilir
    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
}

export const useWeather = () => useContext(WeatherContext);
