import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      name: "New York",
    },
    {
      id: 2,
      name: "Toronto",
    },
    {
      id: 3,
      name: "Paris",
    },
    {
      id: 4,
      name: "London",
    },
  ];
  return (
    <div className="flex ithems-center justify-around my-5 ">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-md font-medium "
          onClick={() => setQuery({ q: city.name })}
        >
          {city.name}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
