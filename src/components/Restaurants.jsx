import React from "react";
import Box from "./Card";

const Restaurants = ({ restaurants }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {restaurants &&
        restaurants.map((restaurant) => {
          return (
            <Box
              key={restaurant.id}
              title={restaurant.title}
              img={restaurant.img}
              type={restaurant.type}
            />
          );
        })}
    </div>
  );
};

export default Restaurants;
