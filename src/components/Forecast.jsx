import React from "react";
import { iconUrl } from "../services/WeatherService";

function Forecast({ title, items }) {
  // console.log(weather);
  return (
    <div>
      <div className="flex items-center justify-start mt-7">
        <p className=" text-white font-medium uppercase">{title} </p>
      </div>

      <div className="flex flex-row items-center justify-between text-white mt-3">
        {" "}
        {items.map((item, index) => (
          <div
            className="flex flex-col items-center justify-center border-x-2 rounded-md p-3"
            key={index}
          >
            <p className="font-light text-sm ">{item.title}</p>
            <img src={iconUrl(item.icon)} className="w-12 my-1" alt="" />
            <p className="font font-medium">{Math.round(item.temp)}°</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
