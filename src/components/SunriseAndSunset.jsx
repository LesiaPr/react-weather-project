import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime } from "../services/WeatherService";

function SunriseAndSunset({
  weather: { temp_max, temp_min, sunrise, sunset, timezone },
}) {
  return (
    <div className="flex flex-row items-center justify-center text-white text-sm space-x-0.5  md:space-x-4">
      <UilSun />
      <p className="font-light ">
        Sun:
        <span className="font-medium ">
          {formatToLocalTime(sunrise, timezone, "HH:mm ")}
        </span>
      </p>

      <UilSunset />
      <p className="font-light ">
        Set:
        <span className="font-medium ">
          {formatToLocalTime(sunset, timezone, "HH:mm ")}
        </span>
      </p>

      <UilArrowUp />
      <p className="font-light">
        High:
        <span className="font-medium ">{Math.round(temp_max)}°</span>
      </p>

      <UilArrowDown />
      <p className="font-light ">
        Low:
        <span className="font-medium ">{Math.round(temp_min)}°</span>
      </p>
    </div>
  );
}

export default SunriseAndSunset;
