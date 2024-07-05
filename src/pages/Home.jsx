import React, { useState, useEffect } from "react";
import Search from "./../component/Search";
import Restaurants from "./../component/Restaurants";

function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [filterRestaurant, setfilterRestaurant] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/restaurants")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setRestaurants(response);
        setfilterRestaurant(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const addRestaurant = (newRestaurant) => {
    setRestaurants([...restaurants, newRestaurant]);
    setfilterRestaurant([...restaurants, newRestaurant]);
  };

  return (
    <>
      <div className="container flex flex-col items-center mx-auto space-y-4">
        <Search
          restaurants={restaurants}
          setfilterRestaurant={setfilterRestaurant}
        />
        <div className="container flex flex-row flex-wrap items-center justify-center">
          <Restaurants restaurants={filterRestaurant} />
        </div>
      </div>
    </>
  );
}
export default Home;