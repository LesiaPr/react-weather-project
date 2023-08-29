import React from "react";
import { formatToLocalTime } from "../services/WeatherService";

function TimeAndLocation({
  weather: { dt, timezone, name, country, details },
}) {
  return (
    <div>
      <div className=" flex mt-8 ithems-center justify-around md:justify-start ">
        <h1 className="text-white font-bold text-3xl">{`${name},${country}`}</h1>
      </div>
      <div className="flex  my-1  opacity-50 ithems-center justify-around md:justify-start">
        <p className="text-white text-x ">{formatToLocalTime(dt, timezone)}</p>
      </div>
      <div className="flex ithem-center justify-around md:justify-start">
        <h2 className="text-white font-medium text-xl ">{details}</h2>
      </div>
    </div>
  );
}

export default TimeAndLocation;
