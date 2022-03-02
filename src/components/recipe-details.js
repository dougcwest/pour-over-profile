/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import renderMap from './google-maps';

const RecipeDetails = (props) => {
  const recipe = useSelector(({ coffee }) =>
    coffee.find((r) => r.id === parseInt(props.match.params.id))
  );

  return (
    <div>
      <Link to="/">Back To Index</Link>
      <h1>{recipe.method} Recipe</h1>
      <hr />
      <table className="table">
        <tbody>
          <tr>
            <th scope="row">Grind</th>
            <td>{recipe.recipe.grind}</td>
          </tr>
          <tr>
            <th scope="row">Grams of Coffee</th>
            <td>{recipe.recipe.grams_coffee}</td>
          </tr>
          <tr>
            <th scope="row">Grams of Water</th>
            <td>{recipe.recipe.grams_water}</td>
          </tr>
          <tr>
            <th scope="row">Water Temp</th>
            <td>{recipe.recipe.temp_water}</td>
          </tr>
          <tr>
            <th scope="row">Bloom Weight</th>
            <td>{recipe.recipe.bloom_weight}</td>
          </tr>
          <tr>
            <th scope="row">Bloom Time</th>
            <td>{recipe.recipe.bloom_time}</td>
          </tr>
          <tr>
            <th scope="row">Total Brew Time</th>
            <td>{recipe.recipe.total_brew_time}</td>
          </tr>
        </tbody>
      </table>
      {renderMap()}
    </div>
  );
};

export default RecipeDetails;
