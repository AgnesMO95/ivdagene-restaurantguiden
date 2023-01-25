import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [restaurants, setRestaurants] = useState();
  const fetchRestaurants = () => {
    fetch(
      "https://hotell.difi.no/api/json/mattilsynet/smilefjes/tilsyn?poststed=trondheim"
    )
      .then((response) => response.json())
      .then((result) => setRestaurants(result.entries))
      .then((error) => console.log(error));
  };

  useEffect(() => {
    fetchRestaurants();
    console.log(restaurants);
  }, []);

  return (
    <div className="App">
      <h1>Restauranter i Trondheim</h1>
      <div className="restaurant-wrapper">
        {restaurants &&
          restaurants.map((restaurant, index) => (
            <div key={index} className="restaurant">
              <h3>{restaurant.navn}</h3>
              <p>karakter: {restaurant.total_karakter}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
