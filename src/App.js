import React from "react";
import { useState } from 'react';
import Axios from "axios";
import "./App.css";
// import FoodRecipe from './food_recipe'; // Capitalize the component name
import Foodrecipe from './Foodrecipe';

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const YOUR_APP_ID = "2cb94ad6";
  const YOUR_APP_KEY = " c04cdfc28995763bd70c11622146bef1";
  let url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=10&&health=alcohol-free`;

  async function getRecipes() {
    try {
      let result = await Axios.get(url);
      if (Array.isArray(result.data.hits)) {
        // setRecipes(result.data.hits);
        setRecipes(result.data.hits.map(hit => hit.recipe));
        console.log(result.data.hits);
      } else {
        setRecipes([]);
        console.log("Invalid or empty response");
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setRecipes([]);
    }
  }
  

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (
    <div className="app">
      <h1 onClick={getRecipes}>Dish Discovery</h1>
      <form className="app_search" onSubmit={onSubmit}>
        <input
          type="text"
          className="food_input"
          placeholder="Unleash Your Inner Chef!"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input className="food_submit" type="submit" value="Search" />
      </form>
      <div className="food_grid">
      {recipes.map((recipe, index) => ( 
          <Foodrecipe key={index} recipe={recipe} /> 
        ))}

      </div>
    </div>
  );
}

export default App;
