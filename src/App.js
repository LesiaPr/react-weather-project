import "./App.css";

import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndDetails from "./components/TempAndDetails";
import SunriseAndSunset from "./components/SunriseAndSunset";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/WeatherService";
import { useEffect, useState } from "react";

function App() {
  const [query, setQuery] = useState({ q: "kyiv" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units]);

  const formatBgColor = () => {
    if (!weather) return "from-cyan-600 to-blue-700";
    const theshold = units === "metric" ? 20 : 60;
    if (weather.temp <= theshold) return "from-cyan-600 to-blue-700";
    return "from-yellow-600 to-orange-700";
  };

  return (
    <div>
      <div
        className={`flex justify-center items-center min-h-screen  bg-gradient-to-br from-cyan-700 to-blue-700 ${formatBgColor()}   `}
      >
        <div className=" max-w-md w-full m-2 md:m-4 md:p-3 p-1 border shadow-lg  rounded h-fit    bg-white/10 ">
          <TopButtons setQuery={setQuery} />
          <Inputs setQuery={setQuery} />
          {weather && (
            <div>
              <TimeAndLocation weather={weather} />
              <TempAndDetails
                weather={weather}
                units={units}
                setUnits={setUnits}
              />
              <SunriseAndSunset weather={weather} />
              <Forecast title="daily forecast" items={weather.daily} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
