import { UilTemperature, UilTear, UilWind } from "@iconscout/react-unicons";
import { iconUrl } from "../services/WeatherService";

function TempAndDetails({
  weather: { icon, temp, feels_like, humidity, speed, details },
  units,
  setUnits,
}) {
  const windUnit = units === "metric" ? "km/h" : "m/s";

  const handleUnit = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  return (
    <div className="flex flex-row items-center justify-center md:justify-between text-white py-6">
      <img src={iconUrl(icon)} alt={details} className="w-30 " />
      <div className="flex  ">
        <p className="text-5xl ">{Math.round(temp)}</p>
        <div className="flex px-2  ">
          <button
            name="metric"
            className="text-xl text-white font-light flex transition ease-out hover:scale-100"
            onClick={handleUnit}
          >
            &deg;C
          </button>
          <p className="text-xl text-white mx-1">|</p>
          <button
            name="imperial"
            className="text-xl text-white font-light flex transition ease-out hover:scale-100"
            onClick={handleUnit}
          >
            &deg;F
          </button>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <div className="flex font-light text-sm items-center justify-center md:justify-between md:tracking-wider">
          <UilTemperature size={18} className="mr-1" />
          Feels like:
          <span className="font-medium ml-1">{Math.round(feels_like)}°</span>
        </div>
        <div className="flex font-light text-sm items-center justify-center">
          <UilTear size={18} className="mr-1" />
          Humidity:
          <span className="font-medium ml-1">{humidity}%</span>
        </div>
        <div className="flex font-light text-sm items-center justify-center tracking-wide">
          <UilWind size={18} className="mr-1" />
          Wind:
          <span className="font-medium ml-1">
            {Math.round(speed)} {windUnit}{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TempAndDetails;
