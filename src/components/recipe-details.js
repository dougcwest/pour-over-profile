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
      <Link to="/">
        <i className="back fa fa-arrow-left fa-lg" />
      </Link>
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
      <div className="col-12 col-md-4">
        <h1 className="text-dark">Instructions:</h1>
        <h6 className="text-muted">{recipe.instructions.step_1}</h6>
        <img
          className="recipe mx-auto d-block"
          src={recipe.instructions.step_1_img}
          alt="ground-coffee"
        />
        <h6 className="text-muted">{recipe.instructions.step_2}</h6>
        <img
          className="recipe mx-auto d-block"
          src={recipe.instructions.step_2_img}
          alt="ground-coffee"
        />
        <h6 className="text-muted">{recipe.instructions.step_3}</h6>
        <img
          className="recipe mx-auto d-block"
          src={recipe.instructions.step_3_img}
          alt="ground-coffee"
        />
        <h6 className="text-muted">{recipe.instructions.step_4}</h6>
        <img
          className="recipe mx-auto d-block"
          src={recipe.instructions.step_4_img}
          alt="ground-coffee"
        />
        <h6 className="text-muted">{recipe.instructions.step_5}</h6>
        <img
          className="recipe mx-auto d-block"
          src={recipe.instructions.step_5_img}
          alt="ground-coffee"
        />
        <h6 className="text-muted">{recipe.instructions.step_6}</h6>
        <img
          className="recipe mx-auto d-block"
          src={recipe.instructions.step_6_img}
          alt="ground-coffee"
        />
        <h6 className="text-muted">{recipe.instructions.step_7}</h6>
        <h6 className="text-muted">{recipe.instructions.step_8}</h6>
        <img
          className="recipe mx-auto d-block"
          src={recipe.instructions.step_8_img}
          alt="ground-coffee"
        />
        <h6 className="text-muted">{recipe.instructions.step_9}</h6>
        <img
          className="recipe mx-auto d-block"
          src={recipe.instructions.step_9_img}
          alt="ground-coffee"
        />
      </div>
      {renderMap()}
    </div>
  );
};

export default RecipeDetails;
