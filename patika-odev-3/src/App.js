import './App.css';

import { WeatherProvider } from './context/WeatherContext';
import Header from './components/Header';
import Location from './components/Location';
import WeatherCard from './components/WeatherCard';

function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <Header />
        <Location />
        <WeatherCard />
    </WeatherProvider>
    </div>
  );
}

export default App;