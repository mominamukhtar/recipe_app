import React from 'react';
import "./Foodrecipe.css";

export default function Foodrecipe({ recipe }) { 
  return (
    // recipe["image"].match(/\.(jpeg|jpg|gif|png)$/) !== null &&(
    <div className='food_recipe' onClick={()=>{
      window.open(recipe["url"])
    }}>
      <img className='food_image' src={recipe["image"]} alt={recipe.label} />
      <p className='food_name'>{recipe.label}</p> 
    </div>
    
  );
}
