import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

function Inputs({ setQuery }) {
  const [city, setCity] = useState("");
  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({ lat, lon });
      });
    }
  };

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row item-center justify-center space-x-4 w-5/6">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="enter city name"
          autoComplete="off"
          className="text-md font-light w-full shadow-xl capitalize focus:outline-none px-3 placeholder:lowercase rounded-md"
        />
        <UilSearch
          size={40}
          className="text-white transition ease-out hover:scale-125 cursor-pointer 
          "
          onClick={handleSearchClick}
        />
        <UilLocationPoint
          size={40}
          className="text-white transition ease-out hover:scale-125 cursor-pointer "
          onClick={handleLocationClick}
        />
      </div>
    </div>
  );
}

export default Inputs;
